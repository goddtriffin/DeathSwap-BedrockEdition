import { Difficulty } from "../minecraft-bedrock-edition/index";
import { Time } from "../minecraft-bedrock-edition/time";

export class DeathSwapSettings {
  /**
   * `secondsBetweenSwapDefault` defines the number of seconds between swaps.
   */
  secondsBetweenSwap = 300;

  /**
   * `countdownTimeDefault` defines how much time, in seconds, players are alerted to the next swap taking place.
   */
  countdownTime = 10;

  /**
   * `startingTimeOfDay` defines what time of day Death Swap should start in.
   */
  startingTimeOfDay = Time.Noon;

  /**
   * `difficulty` defines what the difficulty of the world.
   */
  difficulty = Difficulty.Easy;

  /**
   * `GameRuleSetting` defines the values for all Bedrock gamerules.
   */
  commandBlocksEnabled = false;
  commandBlockOutput = true;
  doDaylightCycle = true;
  doEntityDrops = true;
  doFireTick = true;
  doInsomnia = false;
  doImmediateRespawn = false;
  doMobLoot = true;
  doMobSpawning = true;
  doTileDrops = true;
  doWeatherCycle = true;
  drowningDamage = true;
  fallDamage = true;
  fireDamage = true;
  keepInventory = false;
  maxCommandChainLength = 65536;
  mobGriefing = true;
  naturalRegeneration = true;
  pvp = false;
  randomTickSpeed = 1;
  sendCommandFeedback = false;
  showCoordinates = false;
  showDeathMessages = true;
  spawnRadius = 5;
  tntExplodes = true;
  showTags = true;
}
