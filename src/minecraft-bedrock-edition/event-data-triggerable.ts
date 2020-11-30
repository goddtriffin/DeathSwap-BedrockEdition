import { LoadUIOptions } from "./objects";

/**
 * `ExecuteCommand` is the event data returned by the `minecraft:execute_command` event identifier.
 *
 * @type {ExecuteCommand}
 * @property {string} command - The command that will be run.
 */
export interface ExecuteCommand {
  command: string;
}

/**
 * `LoadUI` is the event data returned by the `minecraft:load_ui` event identifier.
 *
 * @type {LoadUI}
 * @property {LoadUIOptions} options - You can define the following options for the screen by setting their value to true or false.
 * @property {string} path - The file path to the screen's HTML file.
 */
export interface LoadUI {
  options: LoadUIOptions;
  path: string;
}

/**
 * `ScriptLoggerConfig` is the event data returned by the `minecraft:script_logger_config` event identifier.
 *
 * @type {ScriptLoggerConfig}
 * @property {boolean} log_errors - Set to true to log any scripting errors that occur on the client. Default: false.
 * @property {boolean} log_information - Set to true to log any general scripting information that occurs on the client. This includes any logging done with client.log(). Default: false.
 * @property {boolean} log_warnings - Set to true to log any scripting warnings that occur on the client. Default: false.
 */
export interface ScriptLoggerConfig {
  log_errors: boolean;
  log_information: boolean;
  log_warnings: boolean;
}

/**
 * `SendUIEvent` is the event data returned by the `minecraft:send_ui_event` event identifier.
 *
 * @type {SendUIEvent}
 * @property {string} data - The data for the UI event being triggered.
 * @property {string} eventIdentifier - The identifier of the UI event.
 */
export interface SendUIEvent {
  data: string;
  eventIdentifier: string;
}

/**
 * `UnloadUI` is the event data returned by the `minecraft:unload_ui` event identifier.
 *
 * @type {UnloadUI}
 */
export type UnloadUI = unknown;
