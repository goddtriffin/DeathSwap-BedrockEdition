import { Integer } from "./utils/index";

/**
 * `GameRuleValue` is the type of the value accepted by gamerules.
 */
export type GameRuleValue = boolean | Integer;

/**
 * `GameRule` defines the possible game rules.
 */
export enum GameRule {
  /**
   * `CommandBlocksEnabled` defines whether command blocks should be enabled in-game.
   */
  CommandBlocksEnabled = "commandBlocksEnabled",

  /**
   * `CommandBlockOutput` defines whether command blocks should notify admins when they perform commands.
   */
  CommandBlockOutput = "commandBlockOutput",

  /**
   * `DoDaylightCycle` defines whether the daylight cycle and moon phases progress.
   */
  DoDaylightCycle = "doDaylightCycle",

  /**
   * `DoEntityDrops` defines whether entities that are not mobs should have drops.
   */
  DoEntityDrops = "doEntityDrops",

  /**
   * `DoFireTick` defines whether fire should spread and naturally extinguish.
   */
  DoFireTick = "doFireTick",

  /**
   * `DoInsomnia` defines whether phantoms can spawn in the nighttime.
   */
  DoInsomnia = "doInsomnia",

  /**
   * `DoImmediateRespawn` defines whether players respawn immediately without showing the death screen.
   */
  DoImmediateRespawn = "doImmediateRespawn",

  /**
   * `DoMobLoot` defines hether wmobs should drop items.
   */
  DoMobLoot = "doMobLoot",

  /**
   * `DoMobSpawning` defines whether mobs should naturally spawn. Does not affect monster spawners.
   */
  DoMobSpawning = "doMobSpawning",

  /**
   * `DoTileDrops` defines whether blocks should have drops.
   */
  DoTileDrops = "doTileDrops",

  /**
   * `DoWeatherCycle` defines whether the weather can change naturally.
   * The /weather command can still change weather.
   */
  DoWeatherCycle = "doWeatherCycle",

  /**
   * `DrowningDamage` defines whether the player should take damage when drowning.
   */
  DrowningDamage = "drowningDamage",

  /**
   * `FallDamage` defines whether the player should take fall damage.
   */
  FallDamage = "fallDamage",

  /**
   * `FireDamage` defines whether the player should take fire damage.
   */
  FireDamage = "fireDamage",

  /**
   * `KeepInventory` defines whether the player should keep items and experience in their inventory after death.
   */
  KeepInventory = "keepInventory",

  /**
   * `MaxCommandChainLength` determines the number at which the chain command block acts as a "chain".
   */
  MaxCommandChainLength = "maxCommandChainLength",

  /**
   * `MobGriefing` defines whether creepers, zombies, endermen, ghasts, withers, ender dragons, rabbits, sheep, villagers, silverfish, snow golems, and end crystals should be able to change blocks and whether mobs can pick up items, which also disables bartering.
   * This also affects the capability of zombie-like creatures like zombie pigmen and drowned to pathfind to turtle eggs.
   */
  MobGriefing = "mobGriefing",

  /**
   * `NaturalRegeneration` defines whether the player can regenerate health naturally if their hunger is full enough (doesn't affect external healing, such as golden apples, the Regeneration effect, etc).
   */
  NaturalRegeneration = "naturalRegeneration",

  /**
   * `Pvp` defines whether the player can fight with other players.
   */
  Pvp = "pvp",

  /**
   * `RandomTickSpeed` defines how often a random block tick occurs (such as plant growth, leaf decay, etc.) per chunk section per game tick.
   * 0 disables random ticks [needs testing], higher numbers increase random ticks.
   * Setting to a high integer results in high speeds of decay and growth.
   */
  RandomTickSpeed = "randomTickSpeed",

  /**
   * `SendCommandFeedback` defines whether the feedback from commands executed by a player should show up in chat.
   * Also affects the default behavior of whether command blocks store their output text.
   */
  SendCommandFeedback = "sendCommandFeedback",

  /**
   * `ShowCoordinates` defines whether the player's coordinates are displayed.
   */
  ShowCoordinates = "showCoordinates",

  /**
   * `ShowDeathMessages` defines whether death messages are put into chat when a player dies.
   * Also affects whether a message is sent to the pet's owner when the pet dies.
   */
  ShowDeathMessages = "showDeathMessages",

  /**
   * `SpawnRadius` defines the number of blocks outward from the world spawn coordinates that a player spawns in when first joining a server or when dying without a personal spawnpoint.
   */
  SpawnRadius = "spawnRadius",

  /**
   * `TntExplodes` defines whether TNT explodes after activation.
   */
  TntExplodes = "tntExplodes",

  /**
   * `ShowTags` hides the "Can place on" and "Can destroy" block lists from item lore.
   */
  ShowTags = "showTags",
}
