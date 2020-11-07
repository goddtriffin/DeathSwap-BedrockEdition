export type ComponentIdentifier =
    | ComponentIdentifierBlockstate
    | ComponentIdentifierMolang
    | ComponentIdentifierTickingAreas
    | ComponentIdentifierWeather
    | ComponentIdentifierArmorContainer
    | ComponentIdentifierAttack
    | ComponentIdentifierCollisionBox
    | ComponentIdentifierContainer
    | ComponentIdentifierDamageSensor
    | ComponentIdentifierEquipment
    | ComponentIdentifierEquippable
    | ComponentIdentifierExplode
    | ComponentIdentifierHandContainer
    | ComponentIdentifierHealable
    | ComponentIdentifierHealth
    | ComponentIdentifierHotbarContainer
    | ComponentIdentifierInteract
    | ComponentIdentifierInventory
    | ComponentIdentifierInventoryContainer
    | ComponentIdentifierLookAt
    | ComponentIdentifierNameable
    | ComponentIdentifierPosition
    | ComponentIdentifierRotation
    | ComponentIdentifierShooter
    | ComponentIdentifierSpawnEntity
    | ComponentIdentifierTag
    | ComponentIdentifierTeleport
    | ComponentIdentifierTickWorld
    | ComponentIdentifierTickingAreaDescription;

/**
 * BLOCK COMPONENTS
 * ================
 * These components are only found on block objects and can only be on block objects.
 */

/**
 * 
 */
export type ComponentIdentifierBlockstate = "minecraft:blockstate";

/**
 * CLIENT COMPONENTS
 * =================
 * These components only run on the client where the script ran and can only be used from client scripts.
 */

export type ComponentIdentifierMolang = "minecraft:molang";

/**
 * LEVEL COMPONENTS
 * ================
 * These are the components that belong to the level. They can only belong on the level object and cannot be removed from it. You can get the components and change their data through the global server object.
 * 
 * `let levelComponent = this.getComponent(server.level, "minecraft:example_level_component");`
 */

export type ComponentIdentifierTickingAreas = "minecraft:ticking_areas";
export type ComponentIdentifierWeather = "minecraft:weather";

/**
 * SERVER COMPONENTS
 * =================
 * These are the components that run on the server and are synced with all the clients (players) in the world.
 * As much as possible, the API of each component matches its JSON counterpart (with some differences noted).
 */

export type ComponentIdentifierArmorContainer = "minecraft:armor_container";
export type ComponentIdentifierAttack = "minecraft:attack";
export type ComponentIdentifierCollisionBox = "minecraft:collision_box";
export type ComponentIdentifierContainer = "minecraft:container";
export type ComponentIdentifierDamageSensor = "minecraft:damage_sensor";
export type ComponentIdentifierEquipment = "minecraft:equipment";
export type ComponentIdentifierEquippable = "minecraft:equippable";
export type ComponentIdentifierExplode = "minecraft:explode";
export type ComponentIdentifierHandContainer = "minecraft:hand_container";
export type ComponentIdentifierHealable = "minecraft:healable";
export type ComponentIdentifierHealth = "minecraft:health";
export type ComponentIdentifierHotbarContainer = "minecraft:hotbar_container";
export type ComponentIdentifierInteract = "minecraft:interact";
export type ComponentIdentifierInventory = "minecraft:inventory";
export type ComponentIdentifierInventoryContainer = "minecraft:inventory_container";
export type ComponentIdentifierLookAt = "minecraft:lookat";
export type ComponentIdentifierNameable = "minecraft:nameable";
export type ComponentIdentifierPosition = "minecraft:position";
export type ComponentIdentifierRotation = "minecraft:rotation";
export type ComponentIdentifierShooter = "minecraft:shooter";
export type ComponentIdentifierSpawnEntity = "minecraft:spawn_entity";
export type ComponentIdentifierTag = "minecraft:tag";
export type ComponentIdentifierTeleport = "minecraft:teleport";
export type ComponentIdentifierTickWorld = "minecraft:tick_world";
export type ComponentIdentifierTickingAreaDescription = "minecraft:ticking_area_description";
