import { ComponentIdentifier } from "./component-identifiers";
import { Block, Component, Entity, Query, TickingArea } from "./script-api-objects";

export interface System {
    /**
     * LIFECYCLE BINDINGS
     */

    initialize(): void;

    update(): void;

    shutdown(): void;

    /**
     * BLOCK BINDINGS
     */

    /**
     * getBlock allows you to get a block from the world when provided a JavaScript object containing a position. The block must be within a ticking area.
     * @param tickingArea 
     * @param position 
     */
    getBlock(tickingArea: TickingArea, position: Position): Block | null;

    getBlock(tickingArea: TickingArea, x: number, y: number, z: number): Block | null;

    getBlocks(tickingArea: TickingArea, minimum: Position, maximum: Position): Array<Array<Array<Block>>> | null;

    /**
     * COMPONENT BINDINGS
     */

    applyComponentChanges(entity: Entity, component: Component): boolean;

    createComponent(entity: Entity, componentIdentifier: ComponentIdentifier): Component;

    destroyComponent(entity: Entity, componentIdentifier: ComponentIdentifier): boolean;

    getComponent(entity: Entity, componentIdentifier: ComponentIdentifier): Component;

    hasComponent(entity: Entity, componentIdentifier: ComponentIdentifier): boolean;

    registerComponent(componentIdentifier: ComponentIdentifier, componentData: object): boolean;

    /**
     * ENTITY BINDINGS
     */

    createEntity(): Entity

    createEntity(type: string, templateIdentifier: string): Entity;

    destroyEntity(entity: Entity): boolean;

    isValidEntity(entity: Entity): boolean;

    /**
     * ENTITY QUERIES
     */

    addFilterToQuery(query: Query, componentIdentifier: ComponentIdentifier): void;

    getEntitiesFromQuery(query: Query): Array<Entity>;

    getEntitiesFromQuery(query: Query, componentField1Min: number, componentField2Min: number, componentField3Min: number, componentField1Max: number, componentField2Max: number, componentField3Max: number): Array<Entity>;

    registerQuery(): Query;

    registerQuery(componentIdentifier: ComponentIdentifier, componentField1: string, componentField2: string, componentField3: string): Query;

    /**
     * EVENT BINDINGS
     */

    broadcastEvent(eventIdentifier: string, eventData: object): boolean;

    createEventData(eventIdentifier: string): any;

    listenForEvent(eventIdentifier: string, callback: {(eventData: object): void;}): boolean;

    registerEventData(eventIdentifier: string, eventData: object): boolean;

    /**
     * SLASH COMMANDS
     */

    executeCommand(command: string, callback: {(commandResultData: object): void;}): void;
}
