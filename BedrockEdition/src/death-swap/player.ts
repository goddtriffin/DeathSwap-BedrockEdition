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
  Integer,
} from "../minecraft-bedrock-edition/index";
import { commandCallback, log } from "./utils";
import { DeathSwapItem, PlayerState } from "./enums";
import { debug } from "../settings";

export class Player {
  /**
   * `data` is the raw value returned by Bedrock of a player when they first join the game.
   */
  private data: Entity;

  /**
   * `state` is the player's state.
   */
  private state: PlayerState = PlayerState.Lobby;

  /**
   * `positionCache` is used to store the player's location pre-swap, so that the player that will eventually swap with them will know where to go.
   */
  private positionCache: Position = { x: 0, y: 0, z: 0 };

  /**
   * `rotationCache` is used to store the player's rotation pre-swap, so that the player that will eventually swap with them will know how to rotate.
   */
  private rotationCache: Rotation = { x: 0, y: 0 };

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
   * `getState` returns the state of the player.
   *
   * @return {PlayerState}
   */
  public getState(): PlayerState {
    return this.state;
  }

  /**
   * `getID` returns the ID of the player.
   *
   * @return {Integer}
   */
  public getID(): Integer {
    return this.data.id;
  }

  /**
   * `getName` returns the name of the player.
   *
   * @return {string}
   */
  public getName(): string {
    const nameable: Nameable = this.system.getComponent(
      this.data,
      ComponentIdentifier.Nameable
    ).data as Nameable;
    return nameable.name;
  }

  /**
   * `getPosition` returns the player's position.
   *
   * @return {Position}
   */
  public getPosition(): Position {
    const position: Position = this.system.getComponent(
      this.data,
      ComponentIdentifier.Position
    ).data as Position;
    return position;
  }

  /**
   * `getCachedPosition` returns the player's cached position.
   *
   * @return {Position}
   */
  public getCachedPosition(): Position {
    return this.positionCache;
  }

  /**
   * `savePositionToCache` saves the player's position to cache.
   */
  public savePositionToCache(): void {
    this.positionCache = this.getPosition();
  }

  /**
   * `getRotation` returns the player's rotation.
   *
   * @return {Rotation}
   */
  public getRotation(): Rotation {
    const rotation: Rotation = this.system.getComponent(
      this.data,
      ComponentIdentifier.Rotation
    ).data as Rotation;
    return rotation;
  }

  /**
   * `getCachedRotation` returns the player's cached rotation.
   *
   * @return {Rotation}
   */
  public getCachedRotation(): Rotation {
    return this.rotationCache;
  }

  /**
   * `saveRotationToCache` saves the player's rotation to cache.
   */
  public saveRotationToCache(): void {
    this.rotationCache = this.getRotation();
  }

  /**
   * `setState` sets the state of the player.
   *
   * @param {PlayerState} state - The state you want the player to switch to.
   */
  public setState(state: PlayerState): void {
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
  private setGamemode(gamemode: Gamemode): void {
    this.system.executeCommand(
      `/gamemode ${gamemode} "${this.getName()}"`,
      (commandResult: CommandResult) =>
        commandCallback(this.system, commandResult)
    );
  }

  /**
   * `emptyInventory` clears the player's inventory.
   */
  private emptyInventory(): void {
    this.system.executeCommand(
      `/clear "${this.getName()}"`,
      (commandResult: CommandResult) =>
        commandCallback(this.system, commandResult)
    );
  }

  /**
   * `resetInventory` clears the player's inventory and gives them a single, filled blood chalice.
   */
  private resetInventory(): void {
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
   *
   * @param {PlayerAbility} ability - The ability to toggle.
   * @param {boolean} toggle - Wether to toggle the ability on (true) or off (false).
   */
  private toggleAbility(ability: PlayerAbility, toggle: boolean): void {
    this.system.executeCommand(
      `/ability "${this.getName()}" ${ability} ${toggle.toString()}`,
      (commandResult: CommandResult) =>
        commandCallback(this.system, commandResult)
    );
  }

  /**
   * `teleport` teleports the player to the given position.
   *
   * @param {Position} position - The position to teleport the player to.
   * @param {Rotation} rotation - The rotation to rotate the player to.
   */
  public teleport(position: Position, rotation: Rotation): void {
    /**
     * `checkForBlocks` if set to true, teleports the target(s) only if the target(s) would not collide with a block it cannot be inside (Note: this allows teleporting into flowers as well as midair).
     * If false or not specified, the default behavior applies (do no check; just teleport the target(s)).
     */
    const checkForBlocks = false;

    this.system.executeCommand(
      `/teleport "${this.getName()}" ${position.x} ${position.y} ${
        position.z
      } ${rotation.y} ${rotation.x} ${checkForBlocks.toString()}`,
      (commandResult: CommandResult) =>
        commandCallback(this.system, commandResult)
    );
  }

  /**
   * `toggleLobbyState` handles prepping the player for the Lobby state.
   */
  private toggleLobbyState(): void {
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
  private toggleReadyState(): void {
    // check that we came from the previous state
    if (!this.isState(PlayerState.Lobby)) {
      return;
    }

    log(this.system, `${this.getName()} readied up!`);
  }

  /**
   * `toggleDeathSwapState` handles prepping the player for the Death Swap state.
   */
  private toggleDeathSwapState(): void {
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
  private toggleSpectatorState(): void {
    // check that we came from the previous state
    if (!this.isState(PlayerState.DeathSwap)) {
      return;
    }

    this.setGamemode(Gamemode.Adventure);
    this.emptyInventory();
  }

  /**
   * `isState` returns true if the player's state matches the given state; false otherwise.
   *
   * @param {PlayerState} state - The state that the player should currently be in.
   */
  private isState(state: PlayerState): boolean {
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
