/**
 * Block is a block.
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
 * Component is a scripting component.
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
 * Entity is an entity.
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
 * EntityTickingArea is an entity ticking area.
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
 * ItemStack is a stack of items.
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
 * Level is a level.
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
 * LevelTickingArea is a level ticking area.
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
 * Position is a position.
 * 
 * @type {Position}
 * @property {number} x - The x position.
 * @property {number} y - The y position.
 * @property {number} z - The z position.
 */
export interface Position {
    x: number;
    y: number;
    z: number;
}

/**
 * Quary is a query.
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
 * TickingArea is a ticking area. There are two types of ticking area objects. Entity and Level. When a function calls for a ticking area it can take either type as an argument.
 */
export type TickingArea = 
    | LevelTickingArea
    | EntityTickingArea;
