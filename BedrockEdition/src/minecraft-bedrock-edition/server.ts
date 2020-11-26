import { System } from "system";
import { Integer } from "./utils/index";

export interface Server {
  /**
   * `registerSystem` signs up our script to be set-up on the server threads of the game.
   *
   * @param {Integer} majorVersion - This is the major version of the Minecraft Script Engine your script was designed to work with.
   * @param {Integer} minorVersion - This is the revision of the Minecraft Script Engine your script was designed to work with.
   * @return {System}
   */
  registerSystem(majorVersion: Integer, minorVersion: Integer): System;

  /**
   * `log` allows for logging a message to the ContentLog file.
   * On Windows 10 devices it is located at ' %APPDATA%\..\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\logs '.
   *
   * @param {string} message - The message that you want to send to the log file.
   */
  log(message: string): void;
}
