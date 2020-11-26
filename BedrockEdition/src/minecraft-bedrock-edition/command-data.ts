import { Integer } from "./utils/index";

/**
 * `List` is the data result from the '/list` command.
 *
 * @type {List}
 * @property {Integer} currentPlayerCount - The current number of players on the server.
 * @property {Integer} maxPlayerCount - The maximum number of players allowed on the server.
 * @property {Integer} players - A list of usernames from everyone on the server.
 * @property {Integer} statusCode - The status code of the command.
 * @property {Integer} statusMessage - A message detailing the results of the command.
 */
export interface List {
  currentPlayerCount: Integer;
  maxPlayerCount: Integer;
  players: Array<string>;
  statusCode: Integer;
  statusMessage: string;
}
