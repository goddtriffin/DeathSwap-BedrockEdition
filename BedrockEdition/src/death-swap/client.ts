import { EventData, System, Entity } from "../minecraft-bedrock-edition/index";
import { DeathSwapEventIdentifier } from "./enums";

export class DeathSwapClient {
  /**
   * @param {System} system - Minecraft server/client system.
   */
  constructor(public system: System) {}

  /**
   * `onClientEnteredWorld` handles the 'minecraft:client_entered_world' event.
   * Forwards the event data to the server.
   *
   * @param {any} eventData - The event data.
   */
  onClientEnteredWorld(eventData: EventData): void {
    const playerData: EventData = this.system.createEventData(
      DeathSwapEventIdentifier.ClientEnteredWorld
    ) as EventData;
    playerData.data = eventData.data as Entity;
    this.system.broadcastEvent(
      DeathSwapEventIdentifier.ClientEnteredWorld,
      playerData
    );
  }
}
