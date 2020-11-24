// displays debug data
export const debug = false;

// the number of seconds between
export const secondsBetweenSwap = 600;

// how much time, in seconds, players are alerted to the next swap taking place
export const countdownTime = 10;

// game rules
export enum GameRuleSetting {
  commandBlocksEnabled = "false",
  commandBlockOutput = "true",
  doDaylightCycle = "true",
  doEntityDrops = "true",
  doFireTick = "true",
  doInsomnia = "false",
  doImmediateRespawn = "false",
  doMobLoot = "true",
  doMobSpawning = "true",
  doTileDrops = "true",
  doWeatherCycle = "true",
  drowningDamage = "true",
  fallDamage = "true",
  fireDamage = "true",
  keepInventory = "false",
  maxCommandChainLength = "65536",
  mobGriefing = "true",
  naturalRegeneration = "true",
  pvp = "false",
  randomTickSpeed = "1",
  sendCommandFeedback = "false",
  showCoordinates = "false",
  showDeathMessages = "true",
  spawnRadius = "5",
  tntExplodes = "true",
  showTags = "true",
}
