/**
 * `EventIdentifier` defines all possible event identifiers.
 */
export type EventIdentifiers = keyof typeof EventIdentifier;

export enum EventIdentifier {
    /**
     * SHARED EVENTS
     * =============
     */

    /**
     * Trigger-able Events
     * ================
     * The following Minecraft events can be triggered from scripting and the game will respond, accordingly.
     */

    /**
     * This event is used to display a chat message to the specific player that is running the client script.
     * The event data is the message to be displayed in plain text.
     * Special formatting is supported the same way it would be if a player was sending the message.
     */
    DisplayChatEvent = "minecraft:display_chat_event",

    /**
     * This event is used to turn various levels of logging on and off for client scripts.
     * Note that turning logging on/off is not limited to the script that broadcasted the event.
     * It will affect ALL client scripts including those in other Behavior Packs that are applied to the world.
     * See the Debugging section for more information on logging.
     */
    ScriptLoggerConfig = "minecraft:script_logger_config",

    /**
     * This event is used to create a particle effect that will follow an entity around.
     * This particle effect is only visible to the specific player that is running the client script where you fired the event.
     * Any effect defined in a JSON file (both in your resource pack and in Minecraft) can be used here.
     * MoLang variables defined in the JSON of the effect can then be used to control that effect by changing them in the entity to which it is attached.
     */
    SpawnParticleAttachedEntity = "minecraft:spawn_particle_attached_entity",

    /**
     * This event is used to create a static particle effect in the world.
     * This particle effect is only visible to the specific player that is running the client script where you fired the event.
     * Any effect defined in a JSON file (both in your resource pack and in Minecraft) can be used here.
     * Once the effect is spawned you won't be able to control it further.
     * Unlike the server version of the event, the client version will spawn the particle in the dimension the player is currently in.
     */
    SpawnParticleInWorld = "minecraft:spawn_particle_in_world",

    /**
     * CLIENT EVENTS
     * =============
     */

    /**
     * Listening Events
     * ================
     * The following Minecraft events are events the Script Engine is listening for and to which you can react in scripts.
     */

    /**
     * This event is triggered when a player joins the world.
     */
    ClientEnteredWorld = "minecraft:client_entered_world",

    /**
     * This event is triggered whenever the reticle changes from pointing at a block or air to pointing at an entity and the other way around.
     * Up to 1000 blocks away.
     */
    HitResultChanged = "minecraft:hit_result_changed",

    /**
     * This event is triggered every update and tells you what entity the reticle is pointing to in the world.
     * Up to 1000 blocks away.
     */
    HitResultContinuous = "minecraft:hit_result_continuous",

    /**
     * This event is triggered whenever the mouse pointer changes from pointing at a block or air to pointing at an entity and the other way around.
     * Up to 1000 blocks away.
     */
    PickHitResultChanged = "minecraft:pick_hit_result_changed",

    /**
     * This event is triggered every update and tells you what entity the mouse pointer is pointing to in the world.
     * Up to 1000 blocks away.
     */
    PickHitResultContinuous = "minecraft:pick_hit_result_continuous",

    /**
     * Trigger-able Events
     * ================
     * The following Minecraft Events can be triggered from scripting and cause the game to respond accordingly.
     */

    /**
     * This event is used to show a UI screen to the specific player running the client script.
     * This event will add the UI screen to the top of the UI screen stack.
     * The screen will be shown immediately after the event is triggered.
     * Only screens defined in a HTML file can be shown using this event.
     */
    LoadUI = "minecraft:load_ui",

    /**
     * This event is used to send UI events to the UI Engine for the specific player running the script.
     * After the event is triggered, the UI event will be sent immediately.
     * Custom UI is based on HTML 5.
     * Review the scripting demo for an example of a custom UI file.
     */
    SendUIEvent = "minecraft:send_ui_event",

    /**
     * This event is used to remove a UI screen from the stack of the specific player running the client script.
     * The event data contains the name of the screen to remove as a string.
     * After the event is triggered the screen will be scheduled to be removed from the stack the next time the UI Engine can do so.
     * Only screens defined in a HTML file can be removed using this event.
     */
    UnloadUI = "minecraft:unload_ui",

    /**
     * SERVER EVENTS
     * =============
     */

    /**
     * Listening Events
     * ================
     * The following Minecraft events are events the Script Engine is listening for and to which you can react in scripts.
     */

    /**
     * This event is triggered whenever a player starts to destroy a block.
     */
    BlockDestructionStarted = "minecraft:block_destruction_started",

    /**
     * This event is triggered whenever a player stops destroying a block.
     */
    BlockDestructionStopped = "minecraft:block_destruction_stopped",

    /**
     * This event is triggered whenever a block is destroyed by an explosion.
     */
    BlockExploded = "minecraft:block_exploded",

    /**
     * This event is triggered whenever a player interacts with a block.
     */
    BlockInteractedWith = "minecraft:block_interacted_with",

    /**
     * This event is triggered whenever an entity acquires an item.
     */
    EntityAcquiredItem = "minecraft:entity_acquired_item",

    /**
     * This event is triggered whenever an entity is being attacked by another entity.
     * This does not guarantee the entity was or will be hurt by the attack.
     */
    EntityAttack = "minecraft:entity_attack",

    /**
     * This event is triggered whenever an entity changes the item carried in their hand.
     */
    EntityCarriedItemChanged = "minecraft:entity_carried_item_changed",

    /**
     * This event is triggered whenever an entity is added to the world.
     */
    EntityCreated = "minecraft:entity_created",

    /**
     * This event is triggered whenever an entity dies.
     * This won't be triggered when an entity is removed (such as when using destroyEntity).
     * Not all of these values are present with every entity death.
     */
    EntityDeath = "minecraft:entity_death",

    /**
     * This event is triggered whenever an entity drops an item.
     */
    EntityDroppedItem = "minecraft:entity_dropped_item",

    /**
     * This event is triggered whenever an entity equips an item in their armor slots.
     */
    EntityEquippedArmor = "minecraft:entity_equipped_armor",

    /**
     * This event is triggered whenever an entity is hurt.
     */
    EntityHurt = "minecraft:entity_hurt",

    /**
     * This event is triggered whenever an entity flag's value changes.
     */
    EntitySneak = "minecraft:entity_sneak",

    /**
     * This event is triggered whenever an entity becomes a rider on another entity.
     */
    EntityStartRiding = "minecraft:entity_start_riding",

    /**
     * This event is triggered whenever an entity stops riding another entity.
     */
    EntityStopRiding = "minecraft:entity_stop_riding",

    /**
     * This event is triggered whenever an entity is ticked.
     * This event will not fire when a player is ticked.
     */
    EntityTick = "minecraft:entity_tick",

    /**
     * This event is triggered whenever an entity uses an item.
     */
    EntityUseItem = "minecraft:entity_use_item",

    /**
     * This event is triggered whenever a piston moves a block.
     */
    PistonMovedBlock = "minecraft:piston_moved_block",

    /**
     * This event is triggered whenever a player attacks an entity.
     */
    PlayerAttackedEntity = "minecraft:player_attacked_entity",

    /**
     * This event is triggered whenever a player destroys a block.
     */
    PlayerDestroyedBlock = "minecraft:player_destroyed_block",

    /**
     * This event is triggered whenever a player places a block.
     */
    PlayerPlacedBlock = "minecraft:player_placed_block",

    /**
     * This event is triggered whenever a projectile hits something.
     */
    ProjectileHit = "minecraft:projectile_hit",

    /**
     * This event is triggered whenever the weather changes.
     * It contains information about the weather it is changing to.
     */
    WeatherChanged = "minecraft:weather_changed",

    /**
     * Trigger-able Events
     * ================
     * The following Minecraft events can be triggered from scripting and the game will respond, accordingly.
     */

    /**
     * This event is used to trigger events that Entity Definition JSON files are listening for.
     * For example, you can trigger the minecraft:become_charged event on a creeper to turn it into a charged creeper.
     */
    EntityDefinitionEvent = "minecraft:entity_definition_event",

    /**
     * This event is used to execute a slash command on the server with the World Owner permission level.
     * The event data contains the slash command as a string.
     * The slash command will be processed and will run after the event is sent.
     */
    ExecuteCommand = "minecraft:execute_command",

    /**
     * This event is used to play a sound effect.
     * Currently, sounds can only be played at a fixed position in the world.
     * Global sounds and sounds played by an entity will be supported in a later update.
     */
    PlaySound = "minecraft:play_sound",
}
