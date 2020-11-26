import {
  Slot,
  ItemStack,
  LootTable,
  Vector,
  TickingArea,
  TransformationComponents,
  TransformationDelay,
} from "./objects";
import { Double, Integer } from "./utils/index";

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
 * `CollisionBox` controls the collision box of the entity.
 * When changes to the component are applied the entity's collision box is immediately updated to reflect the new dimensions.
 *
 * WARNING: If the change of the collision box dimensions would cause the entity to be inside a block, the entity might become stuck there and start suffocating.
 *
 * @type {CollisionBox}
 * @property {Double} height - Height of the collision box in blocks. A negative value will be assumed to be 0. Default is 1.0.
 * @property {Double} width - Width and Depth of the collision box in blocks. A negative value will be assumed to be 0. Default is 1.0.
 */
export interface CollisionBox {
  height: Double;
  width: Double;
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
 * @property {Double} damage_multiplier - A multiplier that modifies the base damage from the damage cause. If deals_damage is true the multiplier can only reduce the damage the entity will take to a minimum of 1.
 * @property {boolean} deals_damage - If true, the damage dealt to the entity will take away health from it, set to false to make the entity ignore that damage.
 * @property {string} on_damage - Specifies filters for entity definitions and events.
 * @property {string} on_damage_sound_event - Defines what sound to play, if any, when the on_damage filters are met.
 */
export type DamageSensor = Array<{
  cause: string;
  damage_multiplier: Double;
  deals_damage: boolean;
  on_damage: string;
  on_damage_sound_event: string;
}>;

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
 * `Explode` defines how the entity explodes.
 *
 * @type {Explode}
 * @property {boolean} breaks_blocks - If true, the explosion will destroy blocks in the explosion radius.
 * @property {boolean} causes_fire - If true, blocks in the explosion radius will be set on fire.
 * @property {boolean} destroy_affected_by_griefing - If true, whether the explosion breaks blocks is affected by the mob griefing game rule.
 * @property {boolean} fire_affected_by_griefing - If true, whether the explosion causes fire is affected by the mob griefing game rule.
 * @property {Range} fuse_length - The range for the random amount of time the fuse will be lit before exploding, a negative value means the explosion will be immediate.
 * @property {boolean} fuse_lit - If true, the fuse is already lit when this component is added to the entity.
 * @property {number} max_resistance - A blocks explosion resistance will be capped at this value when an explosion occurs.
 * @property {number} power - The radius of the explosion in blocks and the amount of damage the explosion deals.
 */
export interface Explode {
  breaks_blocks: boolean;
  causes_fire: boolean;
  destroy_affected_by_griefing: boolean;
  fire_affected_by_griefing: boolean;
  fuse_length: Range;
  fuse_lit: boolean;
  max_resistance: Double;
  power: Double;
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
 * @property {Integer} value - Current health of the entity.
 * @property {Integer} max - The maximum health the entity can heal.
 */
export interface Health {
  value: Integer;
  max: Integer;
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
 * @property {Double} cooldown - Time in seconds before this entity can be interacted with again. Default: 0.0.
 * @property {Integer} hurt_item - The amount of damage the item will take when used to interact with this entity. A value of 0 means the item won't lose durability. Default: 0.
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
  cooldown: Double;
  hurt_item: Integer;
  interact_text: string;
  on_interact: string;
  particle_on_start: {
    /**
     * @property {boolean} particle_offset_towards_interactor - Whether or not the particle will appear closer to who performed the interaction. Default: false.
     * @property {string} particle_type - The type of particle that will be spawned
     * @property {Double} particle_y_offset - Will offset the particle this amount in the y direction. Default: 0.0.
     */
    particle_offset_towards_interactor: boolean;
    particle_type: string;
    particle_y_offset: Double;
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
 * @property {Integer} additional_slots_per_strength - Number of slots that this entity can gain per extra strength. Default: 0.
 * @property {boolean} can_be_siphoned_from - If true, the contents of this inventory can be removed by a hopper. Default: false.
 * @property {string} container_type - Type of container this entity has.
 * @property {Integer} inventory_size - Number of slots the container has. Default: 5.
 * @property {boolean} private - If true, only the entity can access the inventory. Default: false.
 * @property {boolean} restrict_to_owner - If true, the entity's inventory can only be accessed by its owner or itself. Default: false.
 */
export interface Inventory {
  additional_slots_per_strength: Integer;
  can_be_siphoned_from: boolean;
  container_type:
    | "horse"
    | "minecart_chest"
    | "minecart_hopper"
    | "inventory"
    | "container"
    | "hopper";
  inventory_size: Integer;
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
 * `LookAt` defines the behavior when another entity looks at this entity.
 *
 * @type {LookAt}
 * @property {boolean} allow_invulnerable - If true, invulnerable entities (e.g. Players in creative mode) are considered valid targets. Default: false.
 * @property {unknown} filters - Defines the entities that can trigger this component.
 * @property {Range} look_cooldown - The range for the random amount of time during which the entity is 'cooling down' and won't get angered or look for a target. Default: [0, 0].
 * @property {string} look_event - The event identifier to run when the entities specified in filters look at this entity.
 * @property {Double} search_radius - Maximum distance this entity will look for another entity looking at it. Default: 10.
 * @property {boolean} set_target - If true, this entity will set the attack target as the entity that looked at it. Default: true.
 */
export interface LookAt {
  allow_invulnerable: boolean;
  filters: unknown;
  look_cooldown: Range;
  look_event: string;
  search_radius: Double;
  set_target: boolean;
}

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
 * @property {Double} x - Position along the X-Axis (east-west) of the entity.
 * @property {Double} y - Position along the Y-Axis (height) of the entity.
 * @property {Double} z - Position along the Z-Axis (north-south) of the entity.
 */
export interface Position {
  x: Double;
  y: Double;
  z: Double;
}

/**
 * `Rotation` allows you to control an entity's current rotation in the world as well as the entity's head rotation.
 * Once applied, the entity will be rotated as specified.
 *
 * @type {Rotation}
 * @property {Double} x - Controls the head rotation looking up and down.
 * @property {Double} y - Controls the body rotation parallel to the floor.
 */
export interface Rotation {
  x: Double;
  y: Double;
}

/**
 * `Shooter` component data.
 *
 * @type {Shooter}
 * @property {Integer} auxVal - ID of the Potion effect to be applied on hit. Default: -1.
 * @property {string} def - Entity identifier to use as projectile for the ranged attack. The entity must have the projectile component to be able to be shot as a projectile.
 */
export interface Shooter {
  auxVal: Integer;
  def: string;
}

/**
 * `SpawnEntity` adds a timer after which this entity will spawn another entity or item (similar to vanilla's chicken's egg-laying behavior).
 *
 * @type {SpawnEntity}
 * @property {unknown} filters - If present, the specified entity will only spawn if the filter evaluates to true.
 * @property {Integer} max_wait_time - Maximum amount of time to randomly wait in seconds before another entity is spawned. Default: 600.
 * @property {Integer} min_wait_time - Minimum amount of time to randomly wait in seconds before another entity is spawned. Default: 300.
 * @property {Integer} num_to_spawn - The number of entities of this type to spawn each time that this triggers. Default: 1.
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
  max_wait_time: Integer;
  min_wait_time: Integer;
  num_to_spawn: Integer;
  should_leash: boolean;
  single_use: boolean;
  spawn_entity: string;
  spawn_event: string;
  spawn_item: string;
  spawn_method: string;
  spawn_sound: string;
}

/**
 * `Tag`
 *
 * @type {Tag}
 */
export type Tag = unknown;

/**
 * `Teleport` component data.
 *
 * @type {Teleport}
 * @property {Double} dark_teleport_chance - Modifies the chance that the entity will teleport if the entity is in darkness. Default: 0.01.
 * @property {Double} light_teleport_chance - Modifies the chance that the entity will teleport if the entity is in daylight. Default: 0.01.
 * @property {Double} max_random_teleport_time - Maximum amount of time in seconds between random teleports. Default: 20.
 * @property {Double} min_random_teleport_time - Minimum amount of time in seconds between random teleports. Default: 0.
 * @property {Vector} random_teleport_cube - Entity will teleport to a random position within the area defined by this cube. Default: [32, 16, 32].
 * @property {boolean} random_teleports - If true, the entity will teleport randomly. Default: true.
 * @property {Double} target_distance - Maximum distance the entity will teleport when chasing a target. Default: 16.
 * @property {Double} target_teleport_chance - The chance that the entity will teleport between 0.0 and 1.0. 1.0 means 100%. Default: 1.
 */
export interface Teleport {
  dark_teleport_chance: Double;
  light_teleport_chance: Double;
  max_random_teleport_time: Double;
  min_random_teleport_time: Double;
  random_teleport_cube: Vector;
  random_teleports: boolean;
  target_distance: Double;
  target_teleport_chance: Double;
}

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
 * @property {Double} distance_to_players - distance_to_players.
 * @property {boolean} never_despawn - Whether or not this ticking area will despawn when a player is out of range.
 * @property {Integer} radius - The radius in chunks of the ticking area.
 * @property {TickingArea} ticking_area - The ticking area entity that is attached to this entity.
 */
export interface TickWorld {
  distance_to_players: Double;
  never_despawn: boolean;
  radius: Integer;
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
