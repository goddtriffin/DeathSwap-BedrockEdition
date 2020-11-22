import { System } from "../minecraft-bedrock-edition/index";
import { debug } from "../settings";

/**
 * `log` sends a message to the in-game chat.
 * 
 * @param {System} system - The Minecraft server/client system to send from.
 * @param {Array<any>} items - The items to send as a chat message.
 */
export function log(system: System, ...items: Array<any>): void {
	const toString = (item: any) => {
		switch(Object.prototype.toString.call(item)) {
			case '[object Undefined]':
				return 'undefined';
			case '[object Null]':
				return 'null';
			case '[object String]':
				return `"${item}"`;
			case '[object Array]':
				const array = item.map(toString);
				return `[${array.join(', ')}]`;
			case '[object Object]':
				return JSON.stringify(item, null, "    ");
			case '[object Function]':
				return item.toString();
			default:
				return item;
		}
    }
    
    const chatEvent = system.createEventData("minecraft:display_chat_event");
    chatEvent.data.message = items.map(toString).join(' ');
    system.broadcastEvent("minecraft:display_chat_event", chatEvent);
}

/**
 * `commandCallback` sends a message to the in-game chat detailing the results of a command.
 * 
 * @param {System} system - The Minecraft server/client system to send from.
 * @param {any} ieventDatatems - The results from a command.
 */
export function commandCallback(system: System, eventData: any): void {
	if (debug) {
		log(system, `Callback called! Command: ${eventData.command} Data: ${JSON.stringify(eventData.data, null, "    ")}`);
	}
}
