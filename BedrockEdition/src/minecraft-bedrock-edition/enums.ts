/**
 * `Difficulty` defines the possible game difficulties.
 */
export enum Difficulty {
  PEACEFUL = "peaceful",
  EASY = "easy",
  NORMAL = "normal",
  HARD = "hard",
}

/**
 * `Gamemode` defines the possible world/player gamemodes.
 */
export enum Gamemode {
  SURVIVAL = "survival",
  CREATIVE = "creative",
  ADVENTURE = "adventure",
}

/**
 * `UseMethod` defines the possible use method.
 */
export enum UseMethod {
  EAT = "eat",
}

/**
 * `GameRule` defines the possible game rules.
 */
export enum GameRule {
  CommandBlocksEnabled = "commandBlocksEnabled",
  CommandBlockOutput = "commandBlockOutput",
  DoDaylightCycle = "doDaylightCycle",
  DoEntityDrops = "doEntityDrops",
  DoFireTick = "doFireTick",
  DoInsomnia = "doInsomnia",
  DoImmediateRespawn = "doImmediateRespawn",
  DoMobLoot = "doMobLoot",
  DoMobSpawning = "doMobSpawning",
  DoTileDrops = "doTileDrops",
  DoWeatherCycle = "doWeatherCycle",
  DrowningDamage = "drowningDamage",
  FallDamage = "fallDamage",
  FireDamage = "fireDamage",
  KeepInventory = "keepInventory",
  MaxCommandChainLength = "maxCommandChainLength",
  MobGriefing = "mobGriefing",
  NaturalRegeneration = "naturalRegeneration",
  Pvp = "pvp",
  RandomTickSpeed = "randomTickSpeed",
  SendCommandFeedback = "sendCommandFeedback",
  ShowCoordinates = "showCoordinates",
  ShowDeathMessages = "showDeathMessages",
  SpawnRadius = "spawnRadius",
  TntExplodes = "tntExplodes",
  ShowTags = "showTags",
}

/**
 * `TargetSelector` defines the possible target selectors.
 */
export enum TargetSelector {
  NearestPlayer = "@p",
  RandomPlayer = "@r",
  EveryPlayer = "@a",
  AllAliveEntities = "@e",
  Self = "@s",
}
