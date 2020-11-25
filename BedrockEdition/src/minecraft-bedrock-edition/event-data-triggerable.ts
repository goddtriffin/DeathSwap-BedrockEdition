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
 * `LoadUIOptions` can define the following options for the screen by setting their value to true or false.
 *
 * @type {LoadUIOptions}
 * @property {boolean} absorbs_input - If true, input will not be passed down to any other screens underneath.
 * @property {boolean} always_accepts_input - If true, the screen will always accept and process input for as long as it is in the stack, even if other custom UI screens appear on top of it.
 * @property {boolean} force_render_below - If true, this screen will be rendered even if another screen is on top of it and will render over them, including the HUD.
 * @property {boolean} is_showing_menu - If true, the screen will be treated as the pause menu and the pause menu won't be allowed to show on top of this screen.
 * @property {boolean} render_game_behind - If true, the game will continue to be rendered underneath this screen.
 * @property {boolean} render_only_when_topmost - If true, this screen will only be rendered if it is the screen at the top of the stack.
 * @property {boolean} should_steal_mouse - If true, the screen will capture the mouse pointer and limit its movement to the UI screen.
 */
export interface LoadUIOptions {
  absorbs_input: boolean;
  always_accepts_input: boolean;
  force_render_below: boolean;
  is_showing_menu: boolean;
  render_game_behind: boolean;
  render_only_when_topmost: boolean;
  should_steal_mouse: boolean;
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
