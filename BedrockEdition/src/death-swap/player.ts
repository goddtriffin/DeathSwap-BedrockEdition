import {
  ComponentIdentifier,
  Entity,
  Gamemode,
  Rotation,
  System,
  Nameable,
  Position,
  CommandResult,
} from "../minecraft-bedrock-edition/index";
import { commandCallback, log } from "./utils";
import { DeathSwapItem, PlayerState } from "./enums";

export class Player {
  data: Entity;
  state: PlayerState = PlayerState.LOBBY;

  /**
   * @param {System} system - Minecraft server/client system.
   * @param {Entity} playerData - An object that defines the player.
   */
  constructor(public system: System, playerData: Entity) {
    this.data = playerData;

    // need to set this again so that state is set properly
    this.setState(PlayerState.LOBBY);
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
    this.state = state;

    switch (state) {
      case PlayerState.LOBBY:
        this.setGamemode(Gamemode.ADVENTURE);
        this.resetInventory();
        break;
      case PlayerState.READY:
        log(this.system, `${this.getName()} readied up!`);
        break;
      case PlayerState.DEATHSWAP:
        this.setGamemode(Gamemode.SURVIVAL);
        this.emptyInventory();
        break;
      case PlayerState.SPECTATING:
        this.setGamemode(Gamemode.CREATIVE);
        this.emptyInventory();
        break;
    }
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
}
