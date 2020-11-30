/**
 * `TargetSelector` defines the possible target selectors.
 */
export enum TargetSelector {
  /**
   * `NearestPlayer` targets the nearest player.
   */
  NearestPlayer = "@p",

  /**
   * `RandomPlayer` targets a random player.
   */
  RandomPlayer = "@r",

  /**
   * `EveryPlayer` targets every player (alive or dead).
   */
  EveryPlayer = "@a",

  /**
   * `AllAliveEntities` targets all alive entities in loaded chunks (including players).
   */
  AllAliveEntities = "@e",

  /**
   * `Self` targets the entity (alive or dead) that executed the command. It does not target anything if the command was run by a command block or server console.
   */
  Self = "@s",
}
