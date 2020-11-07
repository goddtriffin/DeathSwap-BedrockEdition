import { System } from "../minecraft-bedrock-edition/index";

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
        const playerData = this.system.createEventData("DeathSwap:client_entered_world");
        playerData.data = eventData.data;
        this.system.broadcastEvent("DeathSwap:client_entered_world", playerData);
    };
}
