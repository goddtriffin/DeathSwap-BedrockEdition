/**
 * `DamageSources` defines all possible damage sources.
 */
export type DamageSources = keyof typeof DamageSource;

export enum DamageSource {
  All = "all",
  Anvil = "anvil",
  BlockExplosion = "block_explosion",
  Charging = "charging",
  Contact = "contact",
  Drowning = "drowning",
  EntityAttack = "entity_attack",
  EntityExplosion = "entity_explosion",
  Fall = "fall",
  FallingBlock = "falling_block",
  Fire = "fire",
  FireTick = "fire_tick",
  Fireworks = "fireworks",
  FlyIntoWall = "fly_into_wall",
  Lava = "lava",
  Lightning = "lightning",
  Magic = "magic",
  Magma = "magma",
  None = "none",
  Override = "override",
  Piston = "piston",
  Projectile = "projectile",
  Starve = "starve",
  Suffocation = "suffocation",
  Suicide = "suicide",
  Temperature = "temperature",
  Thorns = "thorns",
  Void = "void",
  Wither = "wither",
}
