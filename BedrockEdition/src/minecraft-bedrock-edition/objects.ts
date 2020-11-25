import { Position } from "./components-server";
import { EventIdentifiers } from "./event-identifiers";
import { FixedLengthArray } from "./utils/index";

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
 * `LoadUIOptions` can define the following options for the screen by setting their value to true or false.
 *
 * @type {LoadUIOptions}
 * @property {boolean} absorbs_input - If true, input will not be passed down to any other screens underneath.
 * @property {boolean} always_accepts_input - If true, the screen will always accept and process input for as long as it is in the stack, even if other custom UI screens appear on top of it.
 * @property {boolean} force_render_below - If true, this screen will be rendered even if another screen is on top of it and will render over them, including the HUD.
 * @property {boolean} is_showing_menu - If true, the screen will be treated as the pause menu and the pause menu won't be allowed to show on top of this screen.
 * @property {boolean} render_game_behind - If true, the game will continue to be rendered underneath this screen.
 * @property {boolean} render_only_when_topmost - If true, this screen will only be rendered if it is the screen at the top of the stack.
 * @property {boolean} should_steal_mouse - If true, the screen will capture the mouse pointer and limit its movement to the UI screen.
 */
export interface LoadUIOptions {
  absorbs_input: boolean;
  always_accepts_input: boolean;
  force_render_below: boolean;
  is_showing_menu: boolean;
  render_game_behind: boolean;
  render_only_when_topmost: boolean;
  should_steal_mouse: boolean;
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
 * `TickingArea` is a ticking area.
 * There are two types of ticking area objects: Entity and Level.
 * When a function calls for a ticking area it can take either type as an argument.
 */
export type TickingArea = LevelTickingArea | EntityTickingArea;

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
 * `Vector` is a tuple. e.g. [0, 1, 2]
 *
 * @type {Vector}
 */
export type Vector = FixedLengthArray<[number, number, number]>;
