import { EventIdentifiers } from "./event-identifiers";

/**
 * `ArmorContainer` represents the armor contents of an entity.
 * The component contains an array of ItemStack JS API Objects representing each slot in the armor container.
 *
 * NOTE: Currently items and containers are read-only.
 * Slots are ordered from head to feet.
 *
 * @type {ArmorContainer}
 */
export type ArmorContainer = Array<unknown>;

/**
 * `Attack` controls the Attack Damage attribute from the entity.
 * It allows you to change the current minimum and maximum values.
 * Once the changes are applied, the current attack of the entity will be reset to the minimum specified.
 * With the minimum and maximum changed to the values specified.
 * Any buffs or debuffs will be left intact.
 *
 * @type {Attack}
 * @property {Range} damage - Range of the random amount of damage the melee attack deals. A negative value can heal the entity instead of hurting it
 */
export interface Attack {
  damage: Range;
}

/**
 * `Block` is a block.
 *
 * @type {Block}
 * @property {string} __identifier__ - This is the identifier for the object in the format namespace:name. For example, if the type is block and the object is representing a block of bedrock, the identifier would be minecraft:bedrock.
 * @property {string} __type__ - This defines the type of object. Will be: "block".
 * @property {Position} block_position - This is the position of the block and it functions as part of its unique identifier.
 * @property {TickingArea} ticking_area - This is the ticking area object that was used to get this block.
 */
export interface Block {
  readonly __identifier__: string;
  readonly __type__: "block";
  readonly block_position: Position;
  readonly ticking_area: TickingArea;
}

/**
 * `BlockState` contains all the blockstates on a block object.
 * Blockstates control all different aspects of blocks from their orientation to the type of wood they are.
 * Blockstates are represented by numbers, bools, or strings.
 * Please see the Blockstates Documentation to see the valid values for each state.
 * This component allows for the getting and setting of these states.
 *
 * @type {BlockState}
 * @property {boolean} age_bit - Determines if saplings should grow.
 * @property {number} age - Represents the age of the block.
 * @property {string} portal_axis - Determines the orientation of portal blocks.
 */
export interface BlockState {
  age_bit?: boolean;
  age?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 13 | 14 | 14 | 15;
  portal_axis?: "unkown" | "x" | "z";
}

/**
 * `CollisionBox` controls the collision box of the entity.
 * When changes to the component are applied the entity's collision box is immediately updated to reflect the new dimensions.
 *
 * WARNING: If the change of the collision box dimensions would cause the entity to be inside a block, the entity might become stuck there and start suffocating.
 *
 * @type {CollisionBox}
 * @property {number} height - Height of the collision box in blocks. A negative value will be assumed to be 0. Double. Default is 1.0.
 * @property {number} width - Width and Depth of the collision box in blocks. A negative value will be assumed to be 0. Double. Default is 1.0.
 */
export interface CollisionBox {
  height: number;
  width: number;
}

/**
 * `CommandResult` is the data given to the callback of `system.executeCommand`.
 *
 * @type {CommandResult}
 * @property {string} command - The command that was ran.
 * @property {unknown} data - This is the content of the component.
 */
export interface CommandResult {
  command: string;
  data: unknown;
}

/**
 * `Component` is a scripting component.
 *
 * @type {Component}
 * @property {string} __type__ - This defines the type of object. Will be: "component".
 * @property {unknown} data - This is the content of the component.
 */
export interface Component {
  readonly __type__: "component";
  data: unknown;
}

/**
 * `Container` represents the container of a block.
 * The component contains an array of ItemStack JS API Objects representing each slot in the container.
 * This specific component is used for blocks.
 * Refer to inventory components for entities.
 *
 * NOTE: Currently items and containers are read-only.
 * Slots are ordered left to right.
 *
 * @type {Container}
 */
export type Container = Array<unknown>;

/**
 * `DamageSensor` defines what events to call when this entity is damaged by specific entities or items.
 *
 * @type {DamageSensor}
 * @property {string} cause - Type of damage that triggers the events.
 * @property {number} damage_multiplier - A multiplier that modifies the base damage from the damage cause. If deals_damage is true the multiplier can only reduce the damage the entity will take to a minimum of 1. Double.
 * @property {boolean} deals_damage - If true, the damage dealt to the entity will take away health from it, set to false to make the entity ignore that damage.
 * @property {string} on_damage - Specifies filters for entity definitions and events.
 * @property {string} on_damage_sound_event - Defines what sound to play, if any, when the on_damage filters are met.
 */
export type DamageSensor = Array<{
  cause: string;
  damage_multiplier: number;
  deals_damage: boolean;
  on_damage: string;
  on_damage_sound_event: string;
}>;

/**
 * `Entity` is an entity.
 *
 * @type {Entity}
 * @property {string} __identifier__ - This is the identifier for the object in the format namespace:name. For example, if the type is entity and the object is representing a vanilla cow, the identifier would be minecraft:cow.
 * @property {string} __type__ - This defines the type of object. Can be: "entity" or "item_entity".
 * @property {UniqueID} __unique_id__ - This defines the type of object. Can be: "entity" or "item_entity".
 * @property {number} id - This is the unique identifier of the entity. Positive integer.
 */
export interface Entity {
  readonly __identifier__: string;
  readonly __type__: "entity" | "item_entity";
  readonly __unique_id__: UniqueID;
  readonly id: number;
}

/**
 * `EntityTickingArea` is an entity ticking area.
 *
 * @type {EntityTickingArea}
 * @property {string} __type__ - This defines the type of object. Will be: "entity_ticking_area".
 * @property {number} entity_ticking_area_id - This is the unique identifier of the ticking area. Positive integer.
 */
export interface EntityTickingArea {
  readonly __type__: "entity_ticking_area";
  readonly entity_ticking_area_id: number;
}

/**
 * `Equipment` defines the loot table the entity uses to defines its equipment.
 * Once the changes are applied, the equipment is re-rolled and a new set of equipment is chosen for the entity.
 *
 * @type {Equipment}
 * @property {Array<unknown>} slot_drop_chance - A list of slots with the chance to drop an equipped item from that slot.
 * @property {string} table - The file path to the equipment table, relative to the behavior pack's root.
 */
export interface Equipment {
  slot_drop_chance: Array<unknown>;
  table: string;
}

/**
 * `Equippable` defines an entity's behavior for having items equipped to it.
 *
 * @type {Equippable}
 * @property {Array<Slot>} slots - List of slots and the item that can be equipped.
 */
export interface Equippable {
  slots: Array<Slot>;
}

/**
 * `EventData` is the data directly returned from an event being listened to.
 *
 * @type {EventData}
 * @property {string} __type__ - "event_data"
 * @property {EventIdentifier} __identifier__ - the event identifier
 * @property {unknown} data - the data returned from the event
 */
export interface EventData {
  __type__: "event_data";
  __identifier__: EventIdentifiers;
  data: unknown;
}

/**
 * `Explode` defines how the entity explodes.
 *
 * @type {Explode}
 * @property {boolean} breaks_blocks - If true, the explosion will destroy blocks in the explosion radius.
 * @property {boolean} causes_fire - If true, blocks in the explosion radius will be set on fire.
 * @property {boolean} destroy_affected_by_griefing - If true, whether the explosion breaks blocks is affected by the mob griefing game rule.
 * @property {boolean} fire_affected_by_griefing - If true, whether the explosion causes fire is affected by the mob griefing game rule.
 * @property {Range} fuse_length - The range for the random amount of time the fuse will be lit before exploding, a negative value means the explosion will be immediate.
 * @property {boolean} fuse_lit - If true, the fuse is already lit when this component is added to the entity.
 * @property {number} max_resistance - A blocks explosion resistance will be capped at this value when an explosion occurs. Double.
 * @property {number} power - The radius of the explosion in blocks and the amount of damage the explosion deals. Double.
 */
export interface Explode {
  breaks_blocks: boolean;
  causes_fire: boolean;
  destroy_affected_by_griefing: boolean;
  fire_affected_by_griefing: boolean;
  fuse_length: Range;
  fuse_lit: boolean;
  max_resistance: number;
  power: number;
}

/**
 * `HandContainer` represents the contents of an entity's hands.
 * The component contains an array of ItemStack JS API Objects representing each slot in the hand container.
 *
 * NOTE: Currently items and containers are read-only.
 *
 * @type {HandContainer}
 * @property {Slot} 0 - Slot 0 is main-hand.
 * @property {Slot} 1 - Slot 1 is off-hand.
 */
export interface HandContainer {
  readonly 0: Slot;
  readonly 1: Slot;
}

/**
 * `Healable` defines the interactions with this entity for healing it.
 *
 * @type {Healable}
 * @property {unknown} filters - The filter group that defines the conditions for using this item to heal the entity.
 * @property {boolean} force_use - Determines if item can be used regardless of entity being at full health.
 * @property {Array<Item>} items - The array of items that can be used to heal this entity.
 */
export interface Healable {
  filters: unknown;
  force_use: boolean;
  items: Array<ItemStack>;
}

/**
 * `Health` defines the current and maximum possible health of the entity.
 * Upon applying the component back to the entity the health will change.
 * If it reaches 0 or below the entity will die.
 *
 * @type {Health}
 * @property {number} value - Current health of the entity.
 * @property {number} max - The maximum health the entity can heal.
 */
export interface Health {
  value: number;
  max: number;
}

/**
 * `HotbarContainer` represents the hotbar contents of a player.
 * The component contains an array of ItemStack JS API Objects representing each slot in the hotbar.
 *
 * NOTE: Currently items and containers are read-only.
 * Slots are ordered left to right.
 *
 * @type {HotbarContainer}
 * @property {Slot} 0 - Slot 0.
 * @property {Slot} 1 - Slot 1.
 * @property {Slot} 2 - Slot 2.
 * @property {Slot} 3 - Slot 3.
 * @property {Slot} 4 - Slot 4.
 * @property {Slot} 5 - Slot 5.
 * @property {Slot} 6 - Slot 6.
 * @property {Slot} 7 - Slot 7.
 * @property {Slot} 8 - Slot 8.
 */
export interface HotbarContainer {
  readonly 0: ItemStack;
  readonly 1: ItemStack;
  readonly 2: ItemStack;
  readonly 3: ItemStack;
  readonly 4: ItemStack;
  readonly 5: ItemStack;
  readonly 6: ItemStack;
  readonly 7: ItemStack;
  readonly 8: ItemStack;
}

/**
 * `Interact` defines the ways the player can interact with the entity to which this component is applied.
 *
 * @type {Interact}
 * @property {LootTable} add_items - Loot table with items to add to the player's inventory upon successful interaction.
 * @property {number} cooldown - Time in seconds before this entity can be interacted with again. Double. Default: 0.0.
 * @property {number} hurt_item - The amount of damage the item will take when used to interact with this entity. A value of 0 means the item won't lose durability. Integer. Default: 0.
 * @property {string} interact_text - Text to show when the player is able to interact in this way with this entity when playing with Touch-screen controls.
 * @property {string} on_interact - An event identifier to fire when the interaction occurs.
 * @property {Object} particle_on_start - Particle effect that will be triggered at the start of the interaction.
 * @property {Array<string>} play_sounds - An array of sound identifiers to play when the interaction occurs.
 * @property {Array<string>} spawn_entities - An array of entity identifiers to spawn when the interaction occurs.
 * @property {LootTable} spawn_items - Loot table with items to drop on the ground upon successful interaction.
 * @property {boolean} swing - If true, the player will do the 'swing' animation when interacting with this entity. Default: false.
 * @property {string} transform_to_item - The item used will transform to this item upon successful interaction. Format: itemName:auxValue.
 * @property {boolean} use_item - If true, the interaction will use an item. Default: false.
 */
export interface Interact {
  add_items: LootTable;
  cooldown: number;
  hurt_item: number;
  interact_text: string;
  on_interact: string;
  particle_on_start: {
    /**
     * @property {boolean} particle_offset_towards_interactor - Whether or not the particle will appear closer to who performed the interaction. Default: false.
     * @property {string} particle_type - The type of particle that will be spawned
     * @property {number} particle_y_offset - Will offset the particle this amount in the y direction. Double. Default: 0.0.
     */
    particle_offset_towards_interactor: boolean;
    particle_type: string;
    particle_y_offset: number;
  };
  play_sounds: Array<string>;
  spawn_entities: Array<string>;
  spawn_items: LootTable;
  swing: boolean;
  transform_to_item: string;
  use_item: boolean;
}

/**
 * `Inventory` defines the entity's inventory (size, restrictions, etc.).
 * Currently this does not allow changing the entity's inventory contents.
 *
 * @type {Inventory}
 * @property {number} additional_slots_per_strength - Number of slots that this entity can gain per extra strength. Integer. Default: 0.
 * @property {boolean} can_be_siphoned_from - If true, the contents of this inventory can be removed by a hopper. Default: false.
 * @property {string} container_type - Type of container this entity has.
 * @property {number} inventory_size - Number of slots the container has. Integer. Default: 5.
 * @property {boolean} private - If true, only the entity can access the inventory. Default: false.
 * @property {boolean} restrict_to_owner - If true, the entity's inventory can only be accessed by its owner or itself. Default: false.
 */
export interface Inventory {
  additional_slots_per_strength: number;
  can_be_siphoned_from: boolean;
  container_type:
    | "horse"
    | "minecart_chest"
    | "minecart_hopper"
    | "inventory"
    | "container"
    | "hopper";
  inventory_size: number;
  private: boolean;
  restrict_to_owner: boolean;
}

/**
 * `InventoryContainer` represents the inventory contents of an entity.
 * The component contains an array of ItemStack JS API Objects representing each slot in the inventory.
 *
 * NOTE: Currently items and containers are read-only.
 * Slot 0-8 is the hotbar, 9-16 is the top row of the player's inventory, 17-24 is the middle row, 25-32 is the bottom row.
 *
 * @type {InventoryContainer}
 */
export type InventoryContainer = Array<ItemStack>;

/**
 * `ItemStack` is a stack of items.
 *
 * @type {ItemStack}
 * @property {string} __identifier__ - This is the identifier for the object in the format namespace:name. For example, if the type is entity and the object is representing a vanilla cow, the identifier would be minecraft:cow.
 * @property {string} __type__ - This defines the type of object. Will be: "item_stack".
 * @property {string} count - This is the number of items in the stack.
 * @property {string} item - This is the identifier of the item.
 * @property {number} heal_amount - The amount of health this entity gains when fed this item. Integer.
 */
export interface ItemStack {
  readonly __identifier__: string;
  readonly __type__: "item_stack";
  readonly count: string;
  readonly item: string;
  heal_amount?: number;
}

/**
 * `Level` is a level.
 *
 * @type {Level}
 * @property {string} __type__ - This defines the type of object. Will be: "level".
 * @property {number} level_id - This is the unique identifier of the level. Positive integer.
 */
export interface Level {
  readonly __type__: "level";
  readonly level_id: number;
}

/**
 * `LevelTickingArea` is a level ticking area.
 *
 * @type {LevelTickingArea}
 * @property {string} __type__ - This defines the type of object. Will be: "level_ticking_area".
 * @property {string} level_ticking_area_id - This is the unique identifier of the ticking area.
 */
export interface LevelTickingArea {
  readonly __type__: "level_ticking_area";
  readonly level_ticking_area_id: string;
}

/**
 * `LookAt` defines the behavior when another entity looks at this entity.
 *
 * @type {LookAt}
 * @property {boolean} allow_invulnerable - If true, invulnerable entities (e.g. Players in creative mode) are considered valid targets. Default: false.
 * @property {unknown} filters - Defines the entities that can trigger this component.
 * @property {Range} look_cooldown - The range for the random amount of time during which the entity is 'cooling down' and won't get angered or look for a target. Default: [0, 0].
 * @property {string} look_event - The event identifier to run when the entities specified in filters look at this entity.
 * @property {number} search_radius - Maximum distance this entity will look for another entity looking at it. Double. Default: 10.
 * @property {boolean} set_target - If true, this entity will set the attack target as the entity that looked at it. Default: true.
 */
export interface LookAt {
  allow_invulnerable: boolean;
  filters: unknown;
  look_cooldown: Range;
  look_event: string;
  search_radius: number;
  set_target: boolean;
}

/**
 * `LootTable` contains the filepath to a loot table.
 *
 * @type {LootTable}
 * @property {string} table - File path, relative to the behavior pack's path, to the loot table file.
 */
export interface LootTable {
  table: string;
}

/**
 * `MoLang` component data.
 *
 * @type {MoLang}
 */
export type MoLang = unknown;

/**
 * `Nameable` describes an entity's ability to be named using a nametag and whether the name shows up or not once applied.
 * Additionally, scripting allows setting the name of the entity directly with the property 'name'.
 *
 * @type {Nameable}
 * @property {boolean} allow_name_tag_renaming - If true, this entity can be renamed with name tags.
 * @property {boolean} always_show - If true, the name will always be shown.
 * @property {boolean} default_trigger - Trigger to run when the entity gets named.
 * @property {string} name - The current name of the entity, empty if the entity hasn't been named yet, making this non-empty will apply the name to the entity.
 * @property {boolean} name_actions - Describes the special names for this entity and the events to call when the entity acquires those names.
 */
export interface Nameable {
  allow_name_tag_renaming: boolean;
  always_show: boolean;
  default_trigger: boolean;
  name: string;
  name_actions: {
    name_filter: unknown;
    on_named: string;
  };
}

/**
 * `Position` is a position.
 *
 * @type {Position}
 * @property {number} x - Position along the X-Axis (east-west) of the entity. Decimal.
 * @property {number} y - Position along the Y-Axis (height) of the entity. Decimal.
 * @property {number} z - Position along the Z-Axis (north-south) of the entity. Decimal.
 */
export interface Position {
  x: number;
  y: number;
  z: number;
}

/**
 * `Quary` is a query.
 *
 * @type {Query}
 * @property {string} __type__ - This defines the type of object. Will be: "query".
 * @property {number} query_id - This is the unique identifier of the query. Positive integer.
 */
export interface Query {
  readonly __type__: "query";
  readonly query_id: number;
}

/**
 * `Range` is an array with two indices that define a minimum and a maximum.
 *
 * @type {Range}
 * @property {number} 0 - The minimum. Double.
 * @property {number} 1 - The maximum. Double.
 */
export interface Range {
  0: number;
  1: number;
}

/**
 * `Rotation` allows you to control an entity's current rotation in the world as well as the entity's head rotation.
 * Once applied, the entity will be rotated as specified.
 *
 * @type {Rotation}
 * @property {number} x - Controls the head rotation looking up and down. Decimal.
 * @property {number} y - Controls the body rotation parallel to the floor. Decimal.
 */
export interface Rotation {
  x: number;
  y: number;
}

/**
 * `Shooter` component data.
 *
 * @type {Shooter}
 * @property {number} auxVal - ID of the Potion effect to be applied on hit. Default: -1.
 * @property {string} def - Entity identifier to use as projectile for the ranged attack. The entity must have the projectile component to be able to be shot as a projectile.
 */
export interface Shooter {
  auxVal: number;
  def: string;
}

/**
 * `Slot` is an item slot.
 *
 * @type {Slot}
 * @property {Array<unknown>} accepted_items - The list of items that can go in this slot.
 * @property {string} interact_text - Text to be displayed when the entity can be equipped with this item when playing with Touch-screen controls.
 * @property {string} item - Identifier of the item that can be equipped for this slot.
 * @property {string} on_equip - Event to trigger when this entity is equipped with this item.
 * @property {string} on_unequip - Event to trigger when this item is removed from this entity.
 * @property {number} slot - The slot number of this slot. Integer.
 */
export interface Slot {
  accepted_items: Array<unknown>;
  interact_text: string;
  item: string;
  on_equip: string;
  on_unequip: string;
  slot: number;
}

/**
 * `SpawnEntity` adds a timer after which this entity will spawn another entity or item (similar to vanilla's chicken's egg-laying behavior).
 *
 * @type {SpawnEntity}
 * @property {unknown} filters - If present, the specified entity will only spawn if the filter evaluates to true.
 * @property {number} max_wait_time - Maximum amount of time to randomly wait in seconds before another entity is spawned. Integer. Default: 600.
 * @property {number} min_wait_time - Minimum amount of time to randomly wait in seconds before another entity is spawned. Integer. Default: 300.
 * @property {number} num_to_spawn - The number of entities of this type to spawn each time that this triggers. Integer. Default: 1.
 * @property {boolean} should_leash - If true, this the spawned entity will be leashed to the parent. Default: false.
 * @property {boolean} single_use - If true, this component will only ever spawn the specified entity once. Default: false.
 * @property {string} spawn_entity - Identifier of the entity to spawn, leave empty to spawn the item defined above instead.
 * @property {string} spawn_event - Event to call when the entity is spawned. Default: minecraft:entity_born.
 * @property {string} spawn_item - Item identifier of the item to spawn. Default: egg.
 * @property {string} spawn_method - Method to use to spawn the entity. Default: born.
 * @property {string} spawn_sound - Identifier of the sound effect to play when the entity is spawned. Default: plop.
 */
export interface SpawnEntity {
  filters: unknown;
  max_wait_time: number;
  min_wait_time: number;
  num_to_spawn: number;
  should_leash: boolean;
  single_use: boolean;
  spawn_entity: string;
  spawn_event: string;
  spawn_item: string;
  spawn_method: string;
  spawn_sound: string;
}

/**
 * `Teleport` component data.
 *
 * @type {Teleport}
 * @property {number} dark_teleport_chance - Modifies the chance that the entity will teleport if the entity is in darkness. Decimal. Default: 0.01.
 * @property {number} light_teleport_chance - Modifies the chance that the entity will teleport if the entity is in daylight. Decimal. Default: 0.01.
 * @property {number} max_random_teleport_time - Maximum amount of time in seconds between random teleports. Decimal. Default: 20.
 * @property {number} min_random_teleport_time - Minimum amount of time in seconds between random teleports. Decimal. Default: 0.
 * @property {Vector} random_teleport_cube - Entity will teleport to a random position within the area defined by this cube. Default: [32, 16, 32].
 * @property {boolean} random_teleports - If true, the entity will teleport randomly. Default: true.
 * @property {number} target_distance - Maximum distance the entity will teleport when chasing a target. Decimal. Default: 16.
 * @property {number} target_teleport_chance - The chance that the entity will teleport between 0.0 and 1.0. 1.0 means 100%. Decimal. Default: 1.
 */
export interface Teleport {
  dark_teleport_chance: number;
  light_teleport_chance: number;
  max_random_teleport_time: number;
  min_random_teleport_time: number;
  random_teleport_cube: Vector;
  random_teleports: boolean;
  target_distance: number;
  target_teleport_chance: number;
}

/**
 * `TickingArea` is a ticking area.
 * There are two types of ticking area objects: Entity and Level.
 * When a function calls for a ticking area it can take either type as an argument.
 */
export type TickingArea = LevelTickingArea | EntityTickingArea;

/**
 * TickingAreas
 *
 * @type {TickingAreas}
 */
export type TickingAreas = Array<TickingArea>;

/**
 * `TickingAreaDescription` component data.
 *
 * @type {TickingAreaDescription}
 * @property {boolean} is_circle - Is the area a circle. If false the area is a square.
 * @property {Vector} max - (if area is a square) The edge of the area.
 * @property {name} string - The name of the area.
 * @property {Vector} origin - The origin position of the area.
 * @property {Vector} radius - (if area is a circle) The radius of the area.
 */
export interface TickingAreaDescription {
  is_circle: boolean;
  max: Vector;
  name: string;
  origin: Vector;
  radius: Vector;
}

/**
 * `TickWorld` component data.
 *
 * @type {TickWorld}
 * @property {number} distance_to_players - distance_to_players. Decimal.
 * @property {boolean} never_despawn - Whether or not this ticking area will despawn when a player is out of range.
 * @property {number} radius - The radius in chunks of the ticking area. Integer.
 * @property {TickingArea} ticking_area - The ticking area entity that is attached to this entity.
 */
export interface TickWorld {
  distance_to_players: number;
  never_despawn: boolean;
  radius: number;
  ticking_area: TickingArea;
}

/**
 * `Transformation` component data.
 *
 * @type {Transformation}
 * @property {TransformationComponents} add - List of components to add to the entity after the transformation.
 * @property {string} begin_transform_sound - Sound to play when the transformation starts.
 * @property {TransformationDelay} delay - Defines the properties of the delay for the transformation.
 * @property {boolean} drop_equipment - Cause the entity to drop all equipment upon transformation.
 * @property {string} into - Entity Definition that this entity will transform into.
 * @property {string} transformation_sound - Sound to play when the entity is done transforming.
 */
export interface Transformation {
  add: TransformationComponents;
  begin_transform_sound: string;
  delay: TransformationDelay;
  drop_equipment: boolean;
  into: string;
  transformation_sound: string;
}

/**
 * `TransformationComponents` list of components to add to the entity after the transformation.
 *
 * @type {TransformationComponents}
 * @property {Array<string>} component_groups - Names of component groups to add.
 */
export interface TransformationComponents {
  component_groups: Array<string>;
}

/**
 * `TransformationDelay` defines the properties of the delay for the transformation.
 *
 * @type {TransformationDelay}
 * @property {number} block_assist_chance - Chance that the entity will look for nearby blocks that can speed up the transformation. Value must be between 0.0 and 1.0. Decimal. Default: 0.0.
 * @property {number} block_chance - Chance that, once a block is found, will help speed up the transformation. Decimal. Default: 0.0.
 * @property {number} block_max - Maximum number of blocks the entity will look for to aid in the transformation. If not defined or set to 0, it will be set to the block radius. Integer. Default: 0.
 * @property {number} block_radius - Distance in Blocks that the entity will search for blocks that can help the transformation. Integer. Default: 0.
 * @property {Array<string>} block_types - List of blocks that can help the transformation of this entity.
 * @property {boolean} keep_owner - If this entity is owned by another entity, it should remain owned after transformation.
 * @property {number} value - Time in seconds before the entity transforms. Decimal. Default: 0.0.
 */
export interface TransformationDelay {
  block_assist_chance: number;
  block_chance: number;
  block_max: number;
  block_radius: number;
  block_types: Array<string>;
  keep_owner: boolean;
  value: number;
}

/**
 * `UniqueID` component data.
 *
 * @type {UniqueID}
 * @property {number} 64bit_high
 * @property {number} 64bit_low
 */
export interface UniqueID {
  "64bit_high": number;
  "64bit_low": number;
}

/**
 * `Vector`
 *
 * @type {Vector}
 * @property {number} a
 * @property {number} b
 * @property {number} c
 */
export interface Vector {
  a: number;
  b: number;
  c: number;
}

/**
 * `Weather` allows users to change the level's weather.
 * Rain and lightning levels can be changed independently and the default weather cycle can be turned off completely.
 *
 * @type {Weather}
 * @property {boolean} do_weather_cycle - This is the world option that determines if the vanilla weather cycle will be used.
 * @property {number} lightning_level - A value between 0 and 1 that determines how much lightning and thunder there is.
 * @property {number} lightning_time - How long, in ticks, it will lightning and thunder for.
 * @property {number} rain_level - A value between 0 and 1 that determains how heavy the rainfall is.
 * @property {number} rain_time - How long, in ticks, it will rain for.
 */
export interface Weather {
  do_weather_cycle: boolean;
  lightning_level: number;
  lightning_time: number;
  rain_level: number;
  rain_time: number;
}
