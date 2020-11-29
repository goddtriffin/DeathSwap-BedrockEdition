import { EventIdentifiers } from "./event-identifiers";
import { Entity, Vector } from "./objects";
import { Double } from "./utils/index";

/**
 * `DisplayChatEvent` is the event data associated with the `minecraft:display_chat_event` event identifier.
 *
 * @type {DisplayChatEvent}
 * @property {string} message - The chat message that will be displayed.
 */
export interface DisplayChatEvent {
  message: string;
}

/**
 * `EntityDefinitionEvent` is the event data associated with the `minecraft:entity_definition_event` event identifier.
 *
 * @type {EntityDefinitionEvent}
 * @property {Entity} entity - If listening data, The entity that was affected. If trigger data, the entity object you want to attach the effect to.
 * @property {EventIdentifiers} event - If listening data, the event that was triggered. If trigger data, the identifier of the event to trigger on that entity. Both built-in (minecraft:) and custom events are supported.
 */
export interface EntityDefinitionEvent {
  entity: Entity;
  event: EventIdentifiers;
}

/**
 * `PlaySound` is the event data associated with the `minecraft:play_sound` event identifier.
 *
 * @type {PlaySound}
 * @property {Double} pitch - The pitch of the sound effect. A value of 1.0 will play the sound effect with regular pitch. Default: 1.0.
 * @property {Vector} position - The position in the world we want to play the sound at. Default: [0, 0, 0].
 * @property {string} sound - The identifier of the sound you want to play. Only sounds defined in the applied resource packs can be played.
 * @property {Double} volume - The volume of the sound effect. A value of 1.0 will play the sound effect at the volume it was recorded at. Default: 1.0.
 */
export interface PlaySound {
  pitch: Double;
  position: Vector;
  sound: string;
  volume: Double;
}

/**
 * `SpawnParticleAttachedEntity` is the event data returned by the `minecraft:spawn_particle_attached_entity` event identifier.
 *
 * @type {SpawnParticleAttachedEntity}
 * @property {string} effect - The identifier of the particle effect you want to attach to the entity. This is the same name you gave the effect in its JSON file.
 * @property {Entity} entity - The entity object you want to attach the effect to.
 * @property {Vector} offset - The offset from the entity's "center" where you want to spawn the effect. Default: [0, 0, 0].
 */
export interface SpawnParticleAttachedEntity {
  effect: string;
  entity: Entity;
  offset: Vector;
}

/**
 * `SpawnParticleInWorld` is the event data returned by the `minecraft:spawn_particle_in_world` event identifier.
 *
 * @type {SpawnParticleInWorld}
 * @property {string} dimension - The dimension in which you want to spawn the effect. Can be "overworld", "nether", or "the end". Only available in the context of an event trigger.
 * @property {string} effect - The identifier of the particle effect you want to attach to spawn. This is the same name you gave the effect in its JSON file.
 * @property {Vector} position - The position in the world where you want to spawn the effect. Default: [0, 0, 0].
 */
export interface SpawnParticleInWorld {
  dimension?: "overworld" | "nether" | "the end";
  effect: string;
  position: Vector;
}
