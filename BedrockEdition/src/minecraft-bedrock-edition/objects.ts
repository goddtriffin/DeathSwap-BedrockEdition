/**
 * `ArmorContainer` represents the armor contents of an entity.
 * The component contains an array of ItemStack JS API Objects representing each slot in the armor container.
 * 
 * NOTE: Currently items and containers are read-only.
 * Slots are ordered from head to feet.
 * 
 * @type {ArmorContainer}
 */
export type ArmorContainer = Array<any>;

/**
 * `Attack` controls the Attack Damage attribute from the entity.
 * It allows you to change the current minimum and maximum values.
 * Once the changes are applied, the current attack of the entity will be reset to the minimum specified.
 * With the minimum and maximum changed to the values specified.
 * Any buffs or debuffs will be left intact.
 * 
 * @type {Attack}
 */
export interface Attack {}

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
 * `Component` is a scripting component.
 * 
 * @type {Component}
 * @property {string} __type__ - This defines the type of object. Will be: "component".
 * @property {object} data - This is the content of the component.
 */
export interface Component {
    readonly __type__: "component";
    data: any;
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
export type Container = Array<any>;

/**
 * `Entity` is an entity.
 * 
 * @type {Entity}
 * @property {string} __identifier__ -  This is the identifier for the object in the format namespace:name. For example, if the type is entity and the object is representing a vanilla cow, the identifier would be minecraft:cow.
 * @property {string} __type__ - This defines the type of object. Can be: "entity" or "item_entity".
 * @property {number} id - This is the unique identifier of the entity. Positive integer.
 */
export interface Entity {
    readonly __identifier__: string;
    readonly __type__: "entity" | "item_entity";
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
 * `ItemStack` is a stack of items.
 * 
 * @type {ItemStack}
 * @property {string} __identifier__ - This is the identifier for the object in the format namespace:name. For example, if the type is entity and the object is representing a vanilla cow, the identifier would be minecraft:cow.
 * @property {string} __type__ - This defines the type of object. Will be: "item_stack".
 * @property {string} count - This is the number of items in the stack.
 * @property {string} item - This is the identifier of the item.
 */
export interface ItemStack {
    readonly __identifier__: string;
    readonly __type__: "item_stack";
    readonly count: string;
    readonly item: string;
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
 * `TickingArea` is a ticking area.
 * There are two types of ticking area objects: Entity and Level.
 * When a function calls for a ticking area it can take either type as an argument.
 */
export type TickingArea = 
    | LevelTickingArea
    | EntityTickingArea;

/**
 * TickingAreas
 * 
 * @type {TickingAreas}
 */
export type TickingAreas = Array<TickingArea>;

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
