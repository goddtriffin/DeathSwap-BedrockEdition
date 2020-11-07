/**
 * This 
 */
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
 * This component contains all the blockstates on a block object.
 * Blockstates control all different aspects of blocks from their orientation to the type of wood they are.
 * Blockstates are represented by numbers, bools, or strings.
 * Please see the Blockstates Documentation to see the valid values for each state.
 * This component allows for the getting and setting of these states.
 */
export type ComponentIdentifierBlockstate = "minecraft:blockstate";

/**
 * CLIENT COMPONENTS
 * =================
 * These components only run on the client where the script ran and can only be used from client scripts.
 */

/**
 * The MoLang component gives access to the MoLang variables in an entity.
 * To learn more about MoLang varibles review the add-on documentation.
 * In scripts, you can get and set these varibles that are defined in the entity's JSON files.
 * Because of how the MoLang variables are formatted (variable.isgrazing for example) you must use the [] operator on the object to access the variable.
 * The example below shows how to use the [] operator to access the variable.
 */
export type ComponentIdentifierMolang = "minecraft:molang";

/**
 * LEVEL COMPONENTS
 * ================
 * These are the components that belong to the level. They can only belong on the level object and cannot be removed from it. You can get the components and change their data through the global server object.
 * 
 * `let levelComponent = this.getComponent(server.level, "minecraft:example_level_component");`
 */

/**
 * This component gives access to the static ticking areas in the level.
 * The component contains an array of ticking areas.
 * The ticking areas can be accessed by name or by UUID if they were not given a name.
 */
export type ComponentIdentifierTickingAreas = "minecraft:ticking_areas";

/**
 * The weather component allows users to change the level's weather.
 * Rain and lightning levels can be changed independently and the default weather cycle can be turned off completely.
 */
export type ComponentIdentifierWeather = "minecraft:weather";

/**
 * SERVER COMPONENTS
 * =================
 * These are the components that run on the server and are synced with all the clients (players) in the world.
 * As much as possible, the API of each component matches its JSON counterpart (with some differences noted).
 */

/**
 * This component represents the armor contents of an entity.
 * The component contains an array of ItemStack JS API Objects representing each slot in the armor container.
 * 
 * NOTE: Currently items and containers are read-only.
 * Slots are ordered from head to feet.
 */
export type ComponentIdentifierArmorContainer = "minecraft:armor_container";

/**
 * This component controls the Attack Damage attribute from the entity.
 * It allows you to change the current minimum and maximum values.
 * Once the changes are applied, the current attack of the entity will be reset to the minimum specified.
 * With the minimum and maximum changed to the values specified.
 * Any buffs or debuffs will be left intact.
 */
export type ComponentIdentifierAttack = "minecraft:attack";

/**
 * Controls the collision box of the entity.
 * When changes to the component are applied the entity's collision box is immediately updated to reflect the new dimensions.
 * 
 * WARNING: If the change of the collision box dimensions would cause the entity to be inside a block, the entity might become stuck there and start suffocating.
 */
export type ComponentIdentifierCollisionBox = "minecraft:collision_box";

/**
 * This component represents the container of a block.
 * The component contains an array of ItemStack JS API Objects representing each slot in the container.
 * This specific component is used for blocks.
 * Refer to inventory components for entities.
 * 
 * NOTE: Currently items and containers are read-only.
 * Slots are ordered left to right.
 */
export type ComponentIdentifierContainer = "minecraft:container";

/**
 * Defines what events to call when this entity is damaged by specific entities or items.
 */
export type ComponentIdentifierDamageSensor = "minecraft:damage_sensor";

/**
 * Defines the loot table the entity uses to defines its equipment.
 * Once the changes are applied, the equipment is re-rolled and a new set of equipment is chosen for the entity.
 */
export type ComponentIdentifierEquipment = "minecraft:equipment";

/**
 * Defines an entity's behavior for having items equipped to it.
 */
export type ComponentIdentifierEquippable = "minecraft:equippable";

/**
 * Defines how the entity explodes.
 */
export type ComponentIdentifierExplode = "minecraft:explode";

/**
 * This component represents the contents of an entity's hands.
 * The component contains an array of ItemStack JS API Objects representing each slot in the hand container.
 * 
 * NOTE: Currently items and containers are read-only.
 * Slot 0 is main-hand Slot 1 is off-hand.
 */
export type ComponentIdentifierHandContainer = "minecraft:hand_container";

/**
 * Defines the interactions with this entity for healing it.
 */
export type ComponentIdentifierHealable = "minecraft:healable";

/**
 * Defines the current and maximum possible health of the entity.
 * Upon applying the component back to the entity the health will change.
 * If it reaches 0 or below the entity will die.
 */
export type ComponentIdentifierHealth = "minecraft:health";

/**
 * This component represents the hotbar contents of a player.
 * The component contains an array of ItemStack JS API Objects representing each slot in the hotbar.
 * 
 * NOTE: Currently items and containers are read-only.
 * Slots are ordered left to right.
 */
export type ComponentIdentifierHotbarContainer = "minecraft:hotbar_container";

/**
 * Defines the ways the player can interact with the entity to which this component is applied.
 */
export type ComponentIdentifierInteract = "minecraft:interact";

/**
 * Defines the entity's inventory (size, restrictions, etc.).
 * Currently this does not allow changing the entity's inventory contents.
 */
export type ComponentIdentifierInventory = "minecraft:inventory";

/**
 * This component represents the inventory contents of an entity.
 * The component contains an array of ItemStack JS API Objects representing each slot in the inventory.
 * 
 * NOTE: Currently items and containers are read-only.
 * Slot 0-8 is the hotbar, 9-16 is the top row of the player's inventory, 17-24 is the middle row, 25-32 is the bottom row.
 */
export type ComponentIdentifierInventoryContainer = "minecraft:inventory_container";

/**
 * Defines the behavior when another entity looks at this entity.
 */
export type ComponentIdentifierLookAt = "minecraft:lookat";

/**
 * Nameable component describes an entity's ability to be named using a nametag and whether the name shows up or not once applied.
 * Additionally, scripting allows setting the name of the entity directly with the property 'name'.
 */
export type ComponentIdentifierNameable = "minecraft:nameable";

/**
 * This component allows you to control an entity's current position in the world.
 * Once applied the entity will be teleported to the new position specified.
 */
export type ComponentIdentifierPosition = "minecraft:position";

/**
 * This component allows you to control an entity's current rotation in the world as well as the entity's head rotation.
 * Once applied, the entity will be rotated as specified.
 */
export type ComponentIdentifierRotation = "minecraft:rotation";

/**
 * Defines the entity's ranged attacks.
 * This doesn't allow the entity to use a ranged attack: it only defines what kind of projectile it shoots.
 */
export type ComponentIdentifierShooter = "minecraft:shooter";

/**
 * Adds a timer after which this entity will spawn another entity or item (similar to vanilla's chicken's egg-laying behavior).
 */
export type ComponentIdentifierSpawnEntity = "minecraft:spawn_entity";

/**
 * The tag component gives access to the array of entity tags that an entity may have.
 * With this component you can add and remove any of the entity tags.
 */
export type ComponentIdentifierTag = "minecraft:tag";

/**
 * This controls the entity's ability to teleport itself (similar to the Enderman).
 * If you wish to teleport the entity once use the Position component instead.
 */
export type ComponentIdentifierTeleport = "minecraft:teleport";

/**
 * The tick world component is a read-only component that allows users to access the ticking areas on entities as well as the ticking area's data.
 */
export type ComponentIdentifierTickWorld = "minecraft:tick_world";

/**
 * Describes the ticking area's region.
 */
export type ComponentIdentifierTickingAreaDescription = "minecraft:ticking_area_description";
