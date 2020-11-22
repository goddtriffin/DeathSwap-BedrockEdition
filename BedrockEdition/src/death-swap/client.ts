import { System } from "../minecraft-bedrock-edition/index";
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
    onClientEnteredWorld(eventData: any): void {
        const playerData = this.system.createEventData(DeathSwapEventIdentifier.ClientEnteredWorld);
        playerData.data = eventData.data;
        this.system.broadcastEvent(DeathSwapEventIdentifier.ClientEnteredWorld, playerData);
    };
}
