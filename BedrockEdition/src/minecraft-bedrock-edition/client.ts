import { System } from "system";

export interface Client {
  /**
   * `registerSystem` signs up our script to be set-up on the client threads of the game.
   *
   * @param {number} majorVersion - This is the major version of the Minecraft Script Engine your script was designed to work with. Integer.
   * @param {number} minorVersion - This is the revision of the Minecraft Script Engine your script was designed to work with. Integer.
   * @return {System}
   */
  registerSystem(majorVersion: number, minorVersion: number): System;

  /**
   * `log` allows for logging a message to the ContentLog file.
   * On Windows 10 devices it is located at ' %APPDATA%\..\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\logs '.
   *
   * @param {string} message - The message that you want to send to the log file.
   */
  log(message: string): void;
}
