import {
  System,
  EventData,
  EventIdentifier,
  DisplayChatEvent,
  CommandResult,
} from "../minecraft-bedrock-edition/index";
import { debug } from "../settings";

/**
 * `log` sends a message to the in-game chat.
 *
 * @param {System} system - The Minecraft server/client system to send from.
 * @param {Array<any>} items - The items to send as a chat message.
 */
export function log(system: System, ...items: Array<any>): void {
  const toString = (item: any): string => {
    switch (Object.prototype.toString.call(item)) {
      case "[object Undefined]": {
        return "undefined";
      }

      case "[object Null]": {
        return "null";
      }

      case "[object String]": {
        return `"${item as string}"`;
      }

      case "[object Array]": {
        const array = (item as Array<unknown>).map(toString);
        return `[${array.join(", ")}]`;
      }

      case "[object Object]": {
        return JSON.stringify(item, null, "    ");
      }

      case "[object Function]": {
        return (item as { toString(): string }).toString();
      }

      default: {
        return item as string;
      }
    }
  };

  const chatEvent = system.createEventData(
    EventIdentifier.DisplayChatEvent
  ) as EventData;
  (chatEvent.data as DisplayChatEvent).message = items.map(toString).join(" ");
  system.broadcastEvent(EventIdentifier.DisplayChatEvent, chatEvent);
}

/**
 * `commandCallback` sends a message to the in-game chat detailing the results of a command.
 *
 * @param {System} system - The Minecraft server/client system to send from.
 * @param {CommandResult} commandResult - The results from a command.
 */
export function commandCallback(
  system: System,
  commandResult: CommandResult
): void {
  if (debug) {
    log(
      system,
      `Callback called! Command: ${
        commandResult.command
      } Data: ${JSON.stringify(commandResult.data, null, "    ")}`
    );
  }
}
