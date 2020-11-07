import { System } from 'system';

export interface Server {
    registerSystem(majorVersion: number, minorVersion: number): System;

    /**
     * LOGGING BINDINGS
     * ================
     */

     /**
     * log allows for logging a message to the ContentLog file.
     * On Windows 10 devices it is located at ' %APPDATA%\..\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\logs '.
     * 
     * @param {string} message - The message that you want to send to the log file.
     */
    log(message: string): void;
}
