import {
  ComponentIdentifier,
  Entity,
  Gamemode,
  Rotation,
  System,
  Nameable,
  Position,
  CommandResult,
  PlayerAbility,
} from "../minecraft-bedrock-edition/index";
import { commandCallback, log } from "./utils";
import { DeathSwapItem, PlayerState } from "./enums";
import { debug } from "../settings";

export class Player {
  data: Entity;
  state: PlayerState = PlayerState.Lobby;

  /**
   * @param {System} system - Minecraft server/client system.
   * @param {Entity} playerData - An object that defines the player.
   */
  constructor(public system: System, playerData: Entity) {
    this.data = playerData;

    // need to set this again so that state is set properly
    this.setState(PlayerState.Lobby);
  }

  /**
   * `getID` returns the ID of the player.
   *
   * @return {number}
   */
  getID(): number {
    return this.data.id;
  }

  /**
   * `getName` returns the name of the player.
   *
   * @return {string}
   */
  getName(): string {
    const nameable: Nameable = this.system.getComponent(
      this.data,
      ComponentIdentifier.Nameable
    ).data as Nameable;
    return nameable.name;
  }

  /**
   * `getPosition` returns the position of the player.
   *
   * @return {Position}
   */
  getPosition(): Position {
    const position: Position = this.system.getComponent(
      this.data,
      ComponentIdentifier.Position
    ).data as Position;
    return position;
  }

  /**
   * `getRotation` returns the rotation of the player.
   *
   * @return {Rotation}
   */
  getRotation(): Rotation {
    const rotation: Rotation = this.system.getComponent(
      this.data,
      ComponentIdentifier.Rotation
    ).data as Rotation;
    return rotation;
  }

  /**
   * `setState` sets the state of the player.
   *
   * @param {PlayerState} state - The state you want the player to switch to.
   */
  setState(state: PlayerState): void {
    switch (state) {
      case PlayerState.Lobby:
        this.toggleLobbyState();
        break;
      case PlayerState.Ready:
        this.toggleReadyState();
        break;
      case PlayerState.DeathSwap:
        this.toggleDeathSwapState();
        break;
      case PlayerState.Spectating:
        this.toggleSpectatorState();
        break;
    }

    this.state = state;
  }

  /**
   * `setGamemode` sets the gamemode of the player.
   *
   * @param {Gamemode} gamemode - The gamemode you want the player to switch to.
   */
  setGamemode(gamemode: Gamemode): void {
    this.system.executeCommand(
      `/gamemode ${gamemode} "${this.getName()}"`,
      (commandResult: CommandResult) =>
        commandCallback(this.system, commandResult)
    );
  }

  /**
   * `emptyInventory` clears the player's inventory.
   */
  emptyInventory(): void {
    this.system.executeCommand(
      `/clear "${this.getName()}"`,
      (commandResult: CommandResult) =>
        commandCallback(this.system, commandResult)
    );
  }

  /**
   * `resetInventory` clears the player's inventory and gives them a single, filled blood chalice.
   */
  resetInventory(): void {
    this.emptyInventory();

    this.system.executeCommand(
      `/give "${this.getName()}" ${DeathSwapItem.BloodChaliceFull}`,
      (commandResult: CommandResult) =>
        commandCallback(this.system, commandResult)
    );
  }

  /**
   * `toggleAbility` toggles player ability.
   * This is only available if Education Edition is enabled.
   */
  toggleAbility(ability: PlayerAbility, toggle: boolean): void {
    this.system.executeCommand(
      `/ability "${this.getName()}" ${ability} ${toggle.toString()}`,
      (commandResult: CommandResult) =>
        commandCallback(this.system, commandResult)
    );
  }

  /**
   * `toggleLobbyState` handles prepping the player for the Lobby state.
   */
  toggleLobbyState(): void {
    // check that we came from the previous state
    if (
      !this.isState(PlayerState.DeathSwap) &&
      !this.isState(PlayerState.Lobby) // this is needed because the default player state when first spawned is Lobby
    ) {
      return;
    }

    this.setGamemode(Gamemode.Adventure);
    this.resetInventory();
  }

  /**
   * `toggleReadyState` handles prepping the player for the Ready state.
   */
  toggleReadyState(): void {
    // check that we came from the previous state
    if (!this.isState(PlayerState.Lobby)) {
      return;
    }

    log(this.system, `${this.getName()} readied up!`);
  }

  /**
   * `toggleDeathSwapState` handles prepping the player for the Death Swap state.
   */
  toggleDeathSwapState(): void {
    // check that we came from the previous state
    if (!this.isState(PlayerState.Ready)) {
      return;
    }

    this.setGamemode(Gamemode.Survival);
    this.emptyInventory();
  }

  /**
   * `toggleSpectatorState` handles prepping the player for the Spectator state.
   */
  toggleSpectatorState(): void {
    // check that we came from the previous state
    if (!this.isState(PlayerState.DeathSwap)) {
      return;
    }

    this.setGamemode(Gamemode.Adventure);
    this.emptyInventory();
  }

  /**
   * `isState` returns true if the player's state matches the given state; false otherwise.
   */
  isState(state: PlayerState): boolean {
    if (this.state === state) {
      return true;
    }

    if (debug) {
      log(
        this.system,
        `Incorrect Player State (${this.getName()}) - Expected: ${state} - Got: ${
          this.state
        }`
      );
    }
    return false;
  }
}
