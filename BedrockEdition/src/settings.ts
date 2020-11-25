/**
 * `debug` toggles the the logging of debug data.
 */
export const debug = false;

/**
 * `secondsBetweenSwap` defines the number of seconds between swaps.
 */
export const secondsBetweenSwap = 60;

/**
 * `countdownTime` defines how much time, in seconds, players are alerted to the next swap taking place.
 */
export const countdownTime = 10;

/**
 * `GameRuleSetting` defines the default values for all Bedrock gamerules.
 */
export enum GameRuleSetting {
  CommandBlocksEnabled = "false",
  CommandBlockOutput = "true",
  DoDaylightCycle = "true",
  DoEntityDrops = "true",
  DoFireTick = "true",
  DoInsomnia = "false",
  DoImmediateRespawn = "false",
  DoMobLoot = "true",
  DoMobSpawning = "true",
  DoTileDrops = "true",
  DoWeatherCycle = "true",
  DrowningDamage = "true",
  FallDamage = "true",
  FireDamage = "true",
  KeepInventory = "false",
  MaxCommandChainLength = "65536",
  MobGriefing = "true",
  NaturalRegeneration = "true",
  Pvp = "false",
  RandomTickSpeed = "1",
  SendCommandFeedback = "false",
  ShowCoordinates = "false",
  ShowDeathMessages = "true",
  SpawnRadius = "5",
  TntExplodes = "true",
  ShowTags = "true",
}
