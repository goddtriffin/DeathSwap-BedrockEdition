import { ComponentIdentifier } from "./component-identifiers";
import {
  Block,
  CommandResult,
  Component,
  Entity,
  EventData,
  Query,
  TickingArea,
  Position,
} from "./objects";

export interface System {
  /**
   * LIFECYCLE BINDINGS
   */

  /**
   * `initialize` is the first method that gets called immediately after the system is registered.
   * It will run as soon as the script loads at world start.
   * You can use this to set up the environment for your script: register custom components and events, sign up event listeners, etc.
   * This will run BEFORE the world is ready and the player has been added to it.
   * This function should be used to initialize variables and setup event listeners.
   * You shouldn't try to spawn or interact with any entities at this point!
   * You should also avoid interaction with UI elements or sending messages to the chat window since this is called before the player is ready.
   */
  initialize(): void;

  /**
   * `update` gets called once every game tick.
   * The server and client tick at 20 times per second.
   * This is a good place to get, check, and react to component changes.
   */
  update(): void;

  /**
   * `shutdown` gets called when the Minecraft Script Engine is shutting down.
   * For the client this is when they leave the world; for the server this is after the last player has exited the world.
   */
  shutdown(): void;

  /**
   * BLOCK BINDINGS
   * ==============
   * These functions define how you interact with blocks.
   */

  /**
   * `getBlock` allows you to get a block from the world when provided a JavaScript object containing a position.
   * The block must be within a ticking area.
   *
   * @param {TickingArea} tickingArea - The ticking area the block is in.
   * @param {Position} position - A Position object with the x, y, and z position of the block you want.
   * @return {Block | null}
   */
  getBlock(tickingArea: TickingArea, position: Position): Block | null;

  /**
   * `getBlock` allows you to get a block from the world when provided an x, y, and z position.
   * The block must be within a ticking area.
   *
   * @param {TickingArea} tickingArea - The ticking area the block is in.
   * @param {number} x - The x position of the block you want. Integer.
   * @param {number} y - The y position of the block you want. Integer.
   * @param {number} z - The z position of the block you want. Integer.
   * @return {Block | null}
   */
  getBlock(
    tickingArea: TickingArea,
    x: number,
    y: number,
    z: number
  ): Block | null;

  /**
   * `getBlocks` allows you to get an array of blocks from the world when provided a minimum and maximum position.
   * The blocks must be within a ticking area.
   * This call can be slow if given a lot of blocks, and should be used infrequently.
   *
   * @param {TickingArea} tickingArea - The ticking area the block is in.
   * @param {Position} minimum - A Position object with the minimum x, y, and z position of the blocks you want.
   * @param {Position} maximum - A Position object with the maximum x, y, and z position of the blocks you want.
   * @return {Array<Array<Array<Block>>> | null}
   */
  getBlocks(
    tickingArea: TickingArea,
    minimum: Position,
    maximum: Position
  ): Array<Array<Array<Block>>> | null;

  /**
   * `getBlocks` allows you to get an array of blocks from the world when provided a minimum and maximum x, y, and z position.
   * The blocks must be within a ticking area.
   * This call can be slow if given a lot of blocks, and should be used infrequently.
   *
   * @param {TickingArea} tickingArea - The ticking area the block is in.
   * @param {number} minX - The minimum x position of the blocks you want.
   * @param {number} minY - The minimum y position of the blocks you want.
   * @param {number} minZ - The minimum z position of the blocks you want.
   * @param {number} maxX - The maximum x position of the blocks you want.
   * @param {number} maxY - The maximum y position of the blocks you want.
   * @param {number} maxZ - The maximum z position of the blocks you want.
   * @return {Array<Array<Array<Block>>> | null}
   */
  getBlocks(
    tickingArea: TickingArea,
    minX: number,
    minY: number,
    minZ: number,
    maxX: number,
    maxY: number,
    maxZ: number
  ): Array<Array<Array<Block>>> | null;

  /**
   * COMPONENT BINDINGS
   * ==================
   */

  /**
   * `applyComponentChanges` applies the component and any changes made to it in script back to the entity.
   * What this means for each component can be slightly different: it makes the component reload on the entity with the new data as if it had just been added to the entity.
   *
   * @param {Entity} entity - The entity object that we are applying the component changes to.
   * @param {Component} component - The component object retrieved from the entity that was returned by either createComponent() or getComponent().
   * @return {boolean} - The component was successfully updated.
   */
  applyComponentChanges(entity: Entity, component: Component): boolean;

  /**
   * `createComponent` creates the specified component and adds it to the entity.
   * This should only be used with custom components which need to be registered first.
   * If the entity already has the component, this will retrieve the component already there instead.
   *
   * @param {Entity} entity - The EntityObject that was retrieved from a call to createEntity() or retrieved from an event.
   * @param {ComponentIdentifier} componentIdentifier - The identifier of the component to add to the entity. This is either the identifier of a built-in component or a custom component created with a call to registerComponent().
   * @return {Component}
   */
  createComponent(
    entity: Entity,
    componentIdentifier: ComponentIdentifier
  ): Component;

  /**
   * `destroyComponent` removes the specified component from the given entity.
   * If the entity has the component, it will be removed.
   * Currently this only works with custom components and can't be used to remove components defined for an entity in JSON.
   *
   * @param {Entity} entity - The EntityObject that was retrieved from a call to createEntity() or retrieved from an event.
   * @param {ComponentIdentifier} componentIdentifier - The identifier of the component to remove from the entity. This is either the identifier of a built-in component (check the Script Components section) or a custom component created with a call to registerComponent().
   * @return {boolean} - The component was successfully removed from the entity.
   */
  destroyComponent(
    entity: Entity,
    componentIdentifier: ComponentIdentifier
  ): boolean;

  /**
   * `getComponent` looks for the specified component in the entity.
   * If it exists, retrieves the data from the component and returns it.
   *
   * @param {Entity} entity - The EntityObject that was retrieved from a call to createEntity() or retrieved from an event.
   * @param {ComponentIdentifier} componentIdentifier - The identifier of the component to retrieve from the entity. This is either the identifier of a built-in component (check the Script Components section) or a custom component created with a call to registerComponent().
   * @return {Component}
   */
  getComponent(
    entity: Entity,
    componentIdentifier: ComponentIdentifier
  ): Component;

  /**
   * `hasComponent` checks if the given entity has the specified component.
   *
   * @param {Entity} entity - The EntityObject that was retrieved from a call to createEntity() or retrieved from an event.
   * @param {ComponentIdentifier} componentIdentifier - The identifier of the component to check on the entity. This is either the identifier of a built-in component (check the Script Components section) or a custom component created with a call to registerComponent().
   * @return {boolean} - The EntityObject has the component.
   */
  hasComponent(
    entity: Entity,
    componentIdentifier: ComponentIdentifier
  ): boolean;

  /**
   * `registerComponent` creates a custom component that only exists in script.
   * It can be then added, removed, and updated from entities.
   * These custom components only exist while the Script Engine is running.
   *
   * @param {ComponentIdentifier} componentIdentifier - The identifier of the custom component. It is required to use a namespace so you can uniquely refer to it later without overlapping a name with a built-in component: for example 'myPack:myCustomComponent'.
   * @param {unknown} componentData - A JavaScript Object that defines the name of the fields and the data each field holds inside the component.
   * @return {boolean} - The component was successfully registered.
   */
  registerComponent(
    componentIdentifier: ComponentIdentifier,
    componentData: unknown
  ): boolean;

  /**
   * ENTITY BINDINGS
   * ===============
   */

  /**
   * `createEntity` creates an empty entity with no components and does not place it in the world.
   * The empty entity will be of type custom and have a blank identifier.
   * This is NOT a valid entity that exists in the world, just an empty one that only scripts know about.
   *
   * NOTE: Entities are created first on the server, with the client notified of new entities afterwards.
   * Be aware that if you send the result object to the client right away, the created entity might not exist on the client yet.
   *
   * @return {Entity} - An Entity object representing the newly created entity.
   */
  createEntity(): Entity;

  /**
   * `createEntity` creates an entity and applies the specified template as defined in JSON.
   * This allows you to quickly create an entity from the applied Behavior Packs as the base for an entity created in scripting.
   * The entity will be spawned into the world with all the components, component groups, and event triggers that are defined in the JSON file of the identifier specified.
   * Only works on scripts registered on the server.
   *
   * NOTE: Entities are created first on the server, with the client notified of new entities afterwards.
   * Be aware that if you send the result object to the client right away, the created entity might not exist on the client yet.
   *
   * @param {string} type - Specifies the type of the entity that is being created by the template. Valid inputs are `entity` and `item_entity`.
   * @param {string} templateIdentifier - This can be any of the entity identifiers from the applied Behavior Packs. For example specifying minecraft:cow here will make the provided entity a cow as defined in JSON.
   * @return {Entity} - An Entity object representing the newly created entity.
   */
  createEntity(type: string, templateIdentifier: string): Entity;

  /**
   * `destroyEntity` destroys an entity identified by the EntityObject.
   * If the entity exists in the world this will remove it from the world and destroy it.
   * This also makes the EntityObject no longer valid - you should only destroy an entity after you are done with it and no longer need to reference it again.
   * This does NOT kill the entity.
   * There won't be an event for its death: it will be removed.
   *
   * @param {Entity} entity - The Entityobject that was retrieved from a call to createEntity() or retrieved from an entity event.
   * @return {boolean} - The entity was successfully destroyed.
   */
  destroyEntity(entity: Entity): boolean;

  /**
   * `isValidEntity` checks if the given EntityObject corresponds to a valid entity.
   *
   * @param {Entity} entity - The Entity object that was retrieved from a call to createEntity() or retrieved from an entity event
   * @return {boolean} - The entity is in the Script Engine's database of entities.
   */
  isValidEntity(entity: Entity): boolean;

  /**
   * ENTITY QUERIES
   * ==============
   * Entity Queries are a way for you to filter for entities based on their components.
   * Once you have registered a query, you can request all the entities that are captured by it.
   * Entity Queries will only ever return entities that are currently active in the level.
   * If your query extends into chunks that are not currently loaded, entities there will not be included in the query.
   */

  /**
   * `addFilterToQuery` allows you to add filters to your query.
   * The query will only contain entities that have all the components specified.
   * By default no filters are added.
   * This will allow queries to capture all entities.
   *
   * @param {Query} query - The Query object containing the ID of the query that you want to apply the filter to.
   * @param {ComponentIdentifier} componentIdentifier - This is the identifier of the component that will be added to the filter list. Only entities that have that component will be listed in the query
   */
  addFilterToQuery(
    query: Query,
    componentIdentifier: ComponentIdentifier
  ): void;

  /**
   * `getEntitiesFromQuery` allows you to fetch the entities captured by a query.
   *
   * @param {Query} query - This is the query you registered earlier using registerQuery().
   * @return {Array<Entity>} - An array of Entitys representing the entities found within the query.
   */
  getEntitiesFromQuery(query: Query): Array<Entity>;

  /**
   * `getEntitiesFromQuery` allows you to fetch the entities captured by a query that was created with a component filter built-in.
   * The only entities that will be returned are those entities that have the component that was defined when the query was registered and that have a value in the three fields on that component that were defined in the query within the values specified in the call to getEntitiesFromQuery.
   *
   * @param {Query} query - This is the query you created earlier using registerQuery(...).
   * @param {number} componentField1Min - The minimum value that the first component field needs to be on an entity for that entity to be included in the query.
   * @param {number} componentField2Min - The minimum value that the second component field needs to be on an entity for that entity to be included in the query.
   * @param {number} componentField3Min - The minimum value that the third component field needs to be on an entity for that entity to be included in the query.
   * @param {number} componentField1Max - The maximum value that the first component field needs to be on an entity for that entity to be included in the query.
   * @param {number} componentField2Max - The maximum value that the second component field needs to be on an entity for that entity to be included in the query.
   * @param {number} componentField3Max - The maximum value that the third component field needs to be on an entity for that entity to be included in the query.
   * @return {Array<Entity>} - An array of Entitys representing the entities found within the query.
   */
  getEntitiesFromQuery(
    query: Query,
    componentField1Min: number,
    componentField2Min: number,
    componentField3Min: number,
    componentField1Max: number,
    componentField2Max: number,
    componentField3Max: number
  ): Array<Entity>;

  /**
   * `registerQuery` allows you to register a query.
   * A query will contain all entities that meet the filter requirement.
   * No filters are added by default when you register a query so it will capture all entities.
   *
   * @return {Query} - An object containing the ID of the query.
   */
  registerQuery(): Query;

  /**
   * `registerQuery` allows you to register a query that will only show entities that have the given component and define which fields of that component will be used as a filter when getting the entities from the query.
   * You can either provide just the component identifier, or the component identifier and the name of 3 properties on that component to be tested (If you do specify property names, you must specify 3).
   *
   * @param {ComponentIdentifier} componentIdentifier - This is the identifier of the component that will be used to filter entities when.
   * @param {string} componentField1 - This is the name of the first field of the component that we want to filter entities by. By default this is set to x.
   * @param {string} componentField2 - This is the name of the second field of the component that we want to filter entities by. By default this is set to y.
   * @param {string} componentField3 - This is the name of the third field of the component that we want to filter entities by. By default this is set to z.
   * @return {Query} - An object containing the ID of the query.
   */
  registerQuery(
    componentIdentifier: ComponentIdentifier,
    componentField1: string,
    componentField2: string,
    componentField3: string
  ): Query;

  /**
   * EVENT BINDINGS
   * ==============
   * These are the bindings used to handle events.
   * For a list of events you can react to or trigger, check the Events section of this document.
   */

  /**
   * `broadcastEvent` allows you to trigger an event with the desired data from script.
   * Anything that signed up to listen for the event will be notified and the given data delivered to them.
   *
   * @param {string} eventIdentifier - This is the identifier of the event we want to react to. Can be the identifier of a built-in event or a custom one from script.
   * @param {unknown} eventData - The data for the event. You can create a new JavaScript Object with the parameters you want to pass in to the listener and the engine will take care of delivering the data to them.
   * @return {boolean} - Successfully broadcasted the event.
   */
  broadcastEvent(eventIdentifier: string, eventData: unknown): boolean;

  /**
   * `createEventData` creates an object with all the required fields and default data for the specified event.
   * If the event is a custom event, it needs to have been previously registered.
   *
   * @param {string} eventIdentifier - This is the identifier of the custom event we are registering. The namespace is required and can't be set to minecraft.
   * @return {unknown} - The object containing the event data.
   */
  createEventData(eventIdentifier: string): unknown;

  /**
   * `listenForEvent` allows you to register a JavaScript object that gets called whenever the specified event is broadcast.
   * The event can either be a built-in event or an event specified in script.
   *
   * @param {string} eventIdentifier - This is the identifier of the event to which we want to react. Can be the identifier of a built-in event or a custom one from script.
   * @param {{(eventData: object): void;}} callback - The JavaScript object that will get called whenever the event is broadcast.
   * @return {boolean} - Successfully registered to listen for the event.
   */
  listenForEvent(
    eventIdentifier: string,
    callback: { (eventData: EventData): void }
  ): boolean;

  /**
   * `registerEventData` registers the Event to the script engine.
   * This allows you to create Event Data by calling createEventData and have it initialized with the correct default data and fields.
   * Only custom events need to be registered.
   *
   * @param {string} eventIdentifier - This is the identifier of the custom event we are registering. The namespace is required and can't be set to minecraft.
   * @param {unknown} eventData - The JavaScript object with the correct fields and default values for the event.
   * @return {boolean} - Successfully registered the event data.
   */
  registerEventData(eventIdentifier: string, eventData: unknown): boolean;

  /**
   * SLASH COMMANDS
   * ==============
   * You can use the traditional Slash Command system from scripts.
   * Currently you can either trigger an event ("minecraft:execute_command") or use the executeCommand binding.
   * Commands in scripts are restricted to server scripts, they can't be run from the client's side at the moment.
   */

  /**
   * `executeCommand` allows you to execute a Slash Command on the server.
   * The command will be queried and executed at the end of the current frame.
   * All data output from the command will be compiled on a JavaScript Object and sent to the Callback object specified in the second parameter.
   *
   * @param {string} command - The slash command to run.
   * @param {{(commandResultData: object): void;}} callback - The JavaScript object that will be called after the command executes.
   */
  executeCommand(
    command: string,
    callback: { (commandResultData: CommandResult): void }
  ): void;
}
