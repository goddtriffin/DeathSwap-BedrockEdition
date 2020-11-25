/**
 * `PlayerAbility` defines the possible player abilities.
 */
export enum PlayerAbility {
  /**
   * `WorldBuilder` gives the selector the ability to become a world builder.
   */
  WorldBuilder = "worldbuilder",

  /**
   * `MayFly` lets the selector fly.
   */
  MayFly = "mayfly",

  /**
   * `Mute` mutes the selector. If they chat, no one can hear (or see) them.
   */
  Mute = "mute",
}
