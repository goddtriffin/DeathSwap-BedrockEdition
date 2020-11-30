/**
 * `StatusEffect` defines the possible status effects.
 */
export enum StatusEffect {
  /**
   * `Speed` increases walking speed, higher levels make the player faster.
   */
  Speed = "speed",

  /**
   * `Slowness` decreases walking speed, higher levels make the player slower.
   */
  Slowness = "slowness",

  /**
   * `Haste` increases mining and attack speed, higher levels increase the player's mining and attack speed.
   */
  Haste = "haste",

  /**
   * `MiningFatigue` decreases mining and attack speed, higher levels decrease the player's mining and attack speed.
   */
  MiningFatigue = "mining_fatigue",

  /**
   * `Strength` increases melee damage, higher levels make the player do more melee damage.
   */
  strength = "strength",

  /**
   * `Weakness` decreases melee damage, higher levels decrease more melee damage.
   */
  weakness = "weakness",

  /**
   * `InstantHealth` heals living entities, damages undead, higher levels heal more health (opposite for undead).
   */
  InstantHealth = "instant_health",

  /**
   * `InstantDamage` damages living entities, heals undead, higher levels do more damage (opposite for undead).
   */
  InstantDamage = "instant_damage",

  /**
   * `JumpBoost` increases jump height and reduces fall damage, higher levels make the player jump higher and reduces more fall damage
   */
  JumpBoost = "jump_boost",

  /**
   * `Nausea` wobbles and warps the screen.
   */
  Nausea = "nausea",

  /**
   * `Regeneration` regenerates health over time, higher levels make health regenerate quicker.
   */
  Regeneration = "regeneration",

  /**
   * `Resistance` reduces damage, higher levels reduce more damage.
   */
  Resistance = "resistance",

  /**
   * `FireResistance` gives the immunity to fire and lava.
   */
  FireResistance = "fire_resistance",

  /**
   * `WaterBreathing` prevents drowning and lets the player breathe underwater.
   */
  WaterBreathing = "water_breathing",

  /**
   * `Invisibility` grants invisibility, making the player invisible (but not the item they hold or the armor they wear).
   */
  Invisibility = "invisibility",

  /**
   * `Blindness` impairs vision and disables the ability to sprint and critical hit.
   */
  Blindness = "blindness",

  /**
   * `NightVision` negates darkness.
   */
  NightVision = "night_vision",

  /**
   * `Hunger` increases food exhaustion, higher levels cause the player to starve quicker.
   */
  Hunger = "hunger",

  /**
   * `Poison` inflicts damage over time (but can't kill), higher levels do more damage per second.
   */
  Poison = "poison",

  /**
   * `Wither` inflicts damage over time (can kill), higher levels do more damage per second.
   */
  Wither = "wither",

  /**
   * `HealthBoost` increases maximum health, higher levels give the player more health.
   */
  HealthBoost = "health_boost",

  /**
   * `Absorption` adds damage absorption, higher levels give more absorption.
   */
  Absorption = "absorption",

  /**
   * `Saturation` restores hunger and saturation.
   */
  Saturation = "saturation",

  /**
   * `Glowing` outlines entities (can be seen through blocks).
   */
  Glowing = "glowing",

  /**
   * `Levitation` floats entities upward.
   */
  Levitation = "levitation",

  /**
   * `Luck` can increase chances of high-quality and more loot, higher levels increase the chances of better loot.
   */
  Luck = "luck",

  /**
   * `BadLuck` can reduce chances of high-quality and more loot, higher levels reduce the chance of good loot.
   */
  BadLuck = "unluck",

  /**
   * `FatalPoison` inflicts damage over time and potentially kills.
   */
  FatalPoison = "fatal_poison",

  /**
   * `SlowFalling` decreases falling speed and negates fall damage.
   */
  SlowFalling = "slow_falling",

  /**
   * `ConduitPower` increases underwater visibility and mining speed, prevents drowning.
   */
  ConduitPower = "conduit_power",

  /**
   * `DolphinsGrace` increases swimming speed (only obtainable from dolphins).
   */
  DolphinsGrace = "dolphins_grace",

  /**
   * `BadOmen` causes an illager raid to start upon entering a village (only received from an Illager captain upon its death).
   */
  BadOmen = "bad_omen",

  /**
   * `HeroOfTheVillage` gives discounts on trades with villagers.
   */
  HeroOfTheVillage = "village_hero",
}
