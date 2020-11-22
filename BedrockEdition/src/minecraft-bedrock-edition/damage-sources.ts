/**
 * `DamageSources` defines all possible damage sources.
 */
export type DamageSources =
    | DamageSourceAll
    | DamageSourceAnvil
    | DamageSourceBlockExplosion
    | DamageSourceCharging
    | DamageSourceContact
    | DamageSourceDrowning
    | DamageSourceEntityAttack
    | DamageSourceEntityExplosion
    | DamageSourceFall
    | DamageSourceFallingBlock
    | DamageSourceFire
    | DamageSourceFireTick
    | DamageSourceFireworks
    | DamageSourceFlyIntoWall
    | DamageSourceLava
    | DamageSourceLightning
    | DamageSourceMagic
    | DamageSourceMagma
    | DamageSourceNone
    | DamageSourceOverride
    | DamageSourcePiston
    | DamageSourceProjectile
    | DamageSourceStarve
    | DamageSourceSuffocation
    | DamageSourceSuicide
    | DamageSourceTemperature
    | DamageSourceThorns
    | DamageSourceVoid
    | DamageSourceWither;

export type DamageSourceAll = "all";
export type DamageSourceAnvil = "anvil";
export type DamageSourceBlockExplosion = "block_explosion";
export type DamageSourceCharging = "charging";
export type DamageSourceContact = "contact";
export type DamageSourceDrowning = "drowning";
export type DamageSourceEntityAttack = "entity_attack";
export type DamageSourceEntityExplosion = "entity_explosion";
export type DamageSourceFall = "fall";
export type DamageSourceFallingBlock = "falling_block";
export type DamageSourceFire = "fire";
export type DamageSourceFireTick = "fire_tick";
export type DamageSourceFireworks = "fireworks";
export type DamageSourceFlyIntoWall = "fly_into_wall";
export type DamageSourceLava = "lava";
export type DamageSourceLightning = "lightning";
export type DamageSourceMagic = "magic";
export type DamageSourceMagma = "magma";
export type DamageSourceNone = "none";
export type DamageSourceOverride = "override";
export type DamageSourcePiston = "piston";
export type DamageSourceProjectile = "projectile";
export type DamageSourceStarve = "starve";
export type DamageSourceSuffocation = "suffocation";
export type DamageSourceSuicide = "suicide";
export type DamageSourceTemperature = "temperature";
export type DamageSourceThorns = "thorns";
export type DamageSourceVoid = "void";
export type DamageSourceWither = "wither";
