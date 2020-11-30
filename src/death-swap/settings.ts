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
   * `GameRuleSetting` defines the values for all Bedrock gamerules.
   */
  CommandBlocksEnabled = false;
  CommandBlockOutput = true;
  DoDaylightCycle = true;
  DoEntityDrops = true;
  DoFireTick = true;
  DoInsomnia = false;
  DoImmediateRespawn = false;
  DoMobLoot = true;
  DoMobSpawning = true;
  DoTileDrops = true;
  DoWeatherCycle = true;
  DrowningDamage = true;
  FallDamage = true;
  FireDamage = true;
  KeepInventory = false;
  MaxCommandChainLength = 65536;
  MobGriefing = true;
  NaturalRegeneration = true;
  Pvp = false;
  RandomTickSpeed = 1;
  SendCommandFeedback = false;
  ShowCoordinates = false;
  ShowDeathMessages = true;
  SpawnRadius = 5;
  TntExplodes = true;
  ShowTags = true;
}
