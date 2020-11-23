/**
 * `ComponentIdentifiers` defines all possible component identifiers.
 */
export type ComponentIdentifiers = keyof typeof ComponentIdentifier;

export enum ComponentIdentifier {
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
  Blockstate = "minecraft:blockstate",

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
  Molang = "minecraft:molang",

  /**
   * LEVEL COMPONENTS
   * ================
   * These are the components that belong to the level. They can only belong on the level object and cannot be removed from it. You can get the components and change their data through the global server object.
   *
   * `let levelComponent = this.getComponent(server.level, "minecraft:example_level_component"),`
   */

  /**
   * This component gives access to the static ticking areas in the level.
   * The component contains an array of ticking areas.
   * The ticking areas can be accessed by name or by UUID if they were not given a name.
   */
  TickingAreas = "minecraft:ticking_areas",

  /**
   * The weather component allows users to change the level's weather.
   * Rain and lightning levels can be changed independently and the default weather cycle can be turned off completely.
   */
  Weather = "minecraft:weather",

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
  ArmorContainer = "minecraft:armor_container",

  /**
   * This component controls the Attack Damage attribute from the entity.
   * It allows you to change the current minimum and maximum values.
   * Once the changes are applied, the current attack of the entity will be reset to the minimum specified.
   * With the minimum and maximum changed to the values specified.
   * Any buffs or debuffs will be left intact.
   */
  Attack = "minecraft:attack",

  /**
   * Controls the collision box of the entity.
   * When changes to the component are applied the entity's collision box is immediately updated to reflect the new dimensions.
   *
   * WARNING: If the change of the collision box dimensions would cause the entity to be inside a block, the entity might become stuck there and start suffocating.
   */
  CollisionBox = "minecraft:collision_box",

  /**
   * This component represents the container of a block.
   * The component contains an array of ItemStack JS API Objects representing each slot in the container.
   * This specific component is used for blocks.
   * Refer to inventory components for entities.
   *
   * NOTE: Currently items and containers are read-only.
   * Slots are ordered left to right.
   */
  Container = "minecraft:container",

  /**
   * Defines what events to call when this entity is damaged by specific entities or items.
   */
  DamageSensor = "minecraft:damage_sensor",

  /**
   * Defines the loot table the entity uses to defines its equipment.
   * Once the changes are applied, the equipment is re-rolled and a new set of equipment is chosen for the entity.
   */
  Equipment = "minecraft:equipment",

  /**
   * Defines an entity's behavior for having items equipped to it.
   */
  Equippable = "minecraft:equippable",

  /**
   * Defines how the entity explodes.
   */
  Explode = "minecraft:explode",

  /**
   * This component represents the contents of an entity's hands.
   * The component contains an array of ItemStack JS API Objects representing each slot in the hand container.
   *
   * NOTE: Currently items and containers are read-only.
   * Slot 0 is main-hand Slot 1 is off-hand.
   */
  HandContainer = "minecraft:hand_container",

  /**
   * Defines the interactions with this entity for healing it.
   */
  Healable = "minecraft:healable",

  /**
   * Defines the current and maximum possible health of the entity.
   * Upon applying the component back to the entity the health will change.
   * If it reaches 0 or below the entity will die.
   */
  Health = "minecraft:health",

  /**
   * This component represents the hotbar contents of a player.
   * The component contains an array of ItemStack JS API Objects representing each slot in the hotbar.
   *
   * NOTE: Currently items and containers are read-only.
   * Slots are ordered left to right.
   */
  HotbarContainer = "minecraft:hotbar_container",

  /**
   * Defines the ways the player can interact with the entity to which this component is applied.
   */
  Interact = "minecraft:interact",

  /**
   * Defines the entity's inventory (size, restrictions, etc.).
   * Currently this does not allow changing the entity's inventory contents.
   */
  Inventory = "minecraft:inventory",

  /**
   * This component represents the inventory contents of an entity.
   * The component contains an array of ItemStack JS API Objects representing each slot in the inventory.
   *
   * NOTE: Currently items and containers are read-only.
   * Slot 0-8 is the hotbar, 9-16 is the top row of the player's inventory, 17-24 is the middle row, 25-32 is the bottom row.
   */
  InventoryContainer = "minecraft:inventory_container",

  /**
   * Defines the behavior when another entity looks at this entity.
   */
  LookAt = "minecraft:lookat",

  /**
   * Nameable component describes an entity's ability to be named using a nametag and whether the name shows up or not once applied.
   * Additionally, scripting allows setting the name of the entity directly with the property 'name'.
   */
  Nameable = "minecraft:nameable",

  /**
   * This component allows you to control an entity's current position in the world.
   * Once applied the entity will be teleported to the new position specified.
   */
  Position = "minecraft:position",

  /**
   * This component allows you to control an entity's current rotation in the world as well as the entity's head rotation.
   * Once applied, the entity will be rotated as specified.
   */
  Rotation = "minecraft:rotation",

  /**
   * Defines the entity's ranged attacks.
   * This doesn't allow the entity to use a ranged attack: it only defines what kind of projectile it shoots.
   */
  Shooter = "minecraft:shooter",

  /**
   * Adds a timer after which this entity will spawn another entity or item (similar to vanilla's chicken's egg-laying behavior).
   */
  SpawnEntity = "minecraft:spawn_entity",

  /**
   * The tag component gives access to the array of entity tags that an entity may have.
   * With this component you can add and remove any of the entity tags.
   */
  Tag = "minecraft:tag",

  /**
   * This controls the entity's ability to teleport itself (similar to the Enderman).
   * If you wish to teleport the entity once use the Position component instead.
   */
  Teleport = "minecraft:teleport",

  /**
   * The tick world component is a read-only component that allows users to access the ticking areas on entities as well as the ticking area's data.
   */
  TickWorld = "minecraft:tick_world",

  /**
   * Describes the ticking area's region.
   */
  TickingAreaDescription = "minecraft:ticking_area_description",
}
