import { Position } from "./components-server";
import { Entity, ItemStack, Vector } from "./objects";

/**
 * `BlockDestructionStarted` is the event data returned by the `minecraft:block_destruction_started` event identifier.
 *
 * @type {BlockDestructionStarted}
 * @property {Position} block_position - The position of the block that is being destroyed.
 * @property {Entity} player - The player that started destoying the block.
 */
export interface BlockDestructionStarted {
  block_position: Position;
  player: Entity;
}

/**
 * `BlockDestructionStopped` is the event data returned by the `minecraft:block_destruction_stopped` event identifier.
 *
 * @type {BlockDestructionStopped}
 * @property {Position} block_position - The position of the block that was being destroyed.
 * @property {number} destruction_progress - How far along the destruction was before it was stopped (0 - 1 range). Double.
 * @property {Entity} player - The player that stopped destoying the block.
 */
export interface BlockDestructionStopped {
  block_position: Position;
  destruction_progress: number;
  player: Entity;
}

/**
 * `BlockExploded` is the event data returned by the `minecraft:block_exploded` event identifier.
 *
 * @type {BlockExploded}
 * @property {string} block_identifier - The identifier of the block that was destroyed.
 * @property {Position} block_position - The position of the block that was destroyed by the explosion.
 * @property {string} cause - The cause of the block's destruction.
 * @property {Entity} entity - The entity that exploded.
 */
export interface BlockExploded {
  block_identifier: string;
  block_position: Position;
  cause: string;
  entity: Entity;
}

/**
 * `BlockInteractedWith` is the event data returned by the `minecraft:block_interacted_with` event identifier.
 *
 * @type {BlockInteractedWith}
 * @property {Position} block_position - The position of the block that is being interacted with.
 * @property {Entity} player - The player that interacted with the block.
 */
export interface BlockInteractedWith {
  block_position: Position;
  player: Entity;
}

/**
 * `EntityAttack` is the event data returned by the `minecraft:entity_attack` event identifier.
 *
 * @type {EntityAttack}
 * @property {Entity} entity - The entity that attacked.
 * @property {Entity} target - The entity that was targeted in the attack.
 */
export interface EntityAttack {
  entity: Entity;
  target: Entity;
}

/**
 * `EntityAcquiredItem` is the event data returned by the `minecraft:entity_acquired_item` event identifier.
 *
 * @type {EntityAcquiredItem}
 * @property {number} acquired_amount - The total number of items acquired by the entity during this event. Integer.
 * @property {string} acquisition_method - The way the entity acquired the item.
 * @property {Entity} entity - The entity who acquired the item.
 * @property {ItemStack} item_stack - The item that was acquired.
 * @property {Entity} secondary_entity - If it exists, the entity that affected the item before it was acquired. Example: A player completes a trade with a villager. The `entity` property would be the player and the `secondary_entity` would be the villager.
 */
export interface EntityAcquiredItem {
  acquired_amount: number;
  acquisition_method: string;
  entity: Entity;
  item_stack: ItemStack;
  secondary_entity: Entity;
}

/**
 * `EntityCarriedItemChanged` is the event data returned by the `minecraft:entity_carried_item_changed` event identifier.
 *
 * @type {EntityCarriedItemChanged}
 * @property {ItemStack} carried_item - The item that is now in the entities hands.
 * @property {Entity} entity - The entity that changed what they were carrying.
 * @property {string} hand - Defines which hand the item was equipped to. Either main or offhand.
 * @property {ItemStack} previous_carried_item - The item that was previously in the entities hands.
 */
export interface EntityCarriedItemChanged {
  carried_item: ItemStack;
  entity: Entity;
  hand: "main" | "offhand";
  previous_carried_item: ItemStack;
}

/**
 * `EntityCreated` is the event data returned by the `minecraft:entity_created` event identifier.
 *
 * @type {EntityCreated}
 * @property {Entity} entity - The entity that was just created.
 */
export interface EntityCreated {
  entity: Entity;
}

/**
 * `EntityDeath` is the event data returned by the `minecraft:entity_death` event identifier.
 *
 * @type {EntityDeath}
 * @property {Position} block_position - The position of the block that killed the entity.
 * @property {string} cause - The cause of the entity's death.
 * @property {Entity} entity - The entity that died.
 * @property {Entity} killer - The entity that killed the entity.
 * @property {string} projectile_type - The type of the projectile that killed the entity.
 */
export interface EntityDeath {
  block_position: Position;
  cause: string;
  entity: Entity;
  killer: Entity;
  projectile_type: string;
}

/**
 * `EntityDroppedItem` is the event data returned by the `minecraft:entity_dropped_item` event identifier.
 *
 * @type {EntityDroppedItem}
 * @property {Entity} entity - The entity who dropped the item.
 * @property {ItemStack} item_stack - The item that was dropped.
 */
export interface EntityDroppedItem {
  entity: Entity;
  item_stack: ItemStack;
}

/**
 * `EntityEquippedArmor` is the event data returned by the `minecraft:entity_equipped_armor` event identifier.
 *
 * @type {EntityEquippedArmor}
 * @property {Entity} entity - The entity who is equipping the armor.
 * @property {ItemStack} item_stack - The armor that is being equipped.
 * @property {string} slot - Defines which slot the item was equipped to.
 */
export interface EntityEquippedArmor {
  entity: Entity;
  item_stack: ItemStack;
  slot: string;
}

/**
 * `EntityHurt` is the event data returned by the `minecraft:entity_hurt` event identifier.
 *
 * @type {EntityHurt}
 * @property {number} absorbed_damage - The amount the damage was reduced by by the entity's absorption effect.
 * @property {Entity} attacker - Present only when damaged by an entity or projectile. The entity that attacked and caused the damage.
 * @property {Vector} block_position - Present only when damaged by a block. This is the position of the block that hit the entity.
 * @property {string} cause - The way the entity took damage. Refer to the Damage Source documentation for a complete list of sources.
 * @property {number} damage - The amount of damage the entity took after immunity and armor are taken into account.
 * @property {Entity} entity - The entity that took damage.
 * @property {string} projectile_type - Present only when damaged by a projectile. This is the identifier of the projectile that hit the entity.
 */
export interface EntityHurt {
  absorbed_damage: number;
  attacker: Entity;
  block_position: Vector;
  cause: string;
  damage: number;
  entity: Entity;
  projectile_type: string;
}

/**
 * `EntityMove` is the event data returned by the `minecraft:entity_move` event identifier.
 *
 * @type {EntityMove}
 * @property {Entity} entity - The entity that moved.
 */
export interface EntityMove {
  entity: Entity;
}

/**
 * `EntitySneak` is the event data returned by the `minecraft:entity_sneak` event identifier.
 *
 * @type {EntitySneak}
 * @property {Entity} entity - The entity that changed their sneaking state.
 * @property {boolean} sneaking - If true, the entity just started sneaking. If false, the entity just stopped sneaking.
 */
export interface EntitySneak {
  entity: Entity;
  sneaking: boolean;
}

/**
 * `EntityStartRiding` is the event data returned by the `minecraft:entity_start_riding` event identifier.
 *
 * @type {EntityStartRiding}
 * @property {Entity} entity - The rider.
 * @property {Entity} ride - The entity being ridden.
 */
export interface EntityStartRiding {
  entity: Entity;
  ride: Entity;
}

/**
 * `EntityStopRiding` is the event data returned by the `minecraft:entity_stop_riding` event identifier.
 *
 * @type {EntityStopRiding}
 * @property {Entity} entity - The entity that was riding another entity.
 * @property {boolean} entity_is_being_destroyed - If true, the rider stopped riding because they are now dead.
 * @property {boolean} exit_from_rider - If true, the rider stopped riding by their own decision.
 * @property {boolean} switching_rides - If true, the rider stopped riding because they are now riding a different entity.
 */
export interface EntityStopRiding {
  entity: Entity;
  entity_is_being_destroyed: boolean;
  exit_from_rider: boolean;
  switching_rides: boolean;
}

/**
 * `EntityTick` is the event data returned by the `minecraft:entity_tick` event identifier.
 *
 * @type {EntityTick}
 * @property {Entity} entity - The entity that was ticked.
 */
export interface EntityTick {
  entity: Entity;
}

/**
 * `EntityUseItem` is the event data returned by the `minecraft:entity_use_item` event identifier.
 *
 * @type {EntityUseItem}
 * @property {Entity} entity - The entity who is using the item.
 * @property {ItemStack} item_stack - The item that is being used.
 * @property {string} use_method - The way the entity used the item.
 */
export interface EntityUseItem {
  entity: Entity;
  item_stack: ItemStack;
  use_method: string;
}

/**
 * `HitResultChanged` is the event data returned by the `minecraft:hit_result_changed` event identifier.
 *
 * @type {HitResultChanged}
 * @property {Entity} entity - The entity that was hit or null if it fired when moving off of an entity.
 * @property {Vector} position - The position of the entity that was hit or null if it fired when moving off an entity.
 */
export interface HitResultChanged {
  entity: Entity;
  position: Vector;
}

/**
 * `HitResultContinuous` is the event data returned by the `minecraft:hit_result_continuous` event identifier.
 *
 * @type {HitResultContinuous}
 * @property {Entity} entity - The entity that was hit or null if it not pointing at an entity.
 * @property {Vector} position - The position of the entity that was hit or block that was hit.
 */
export interface HitResultContinuous {
  entity: Entity;
  position: Vector;
}

/**
 * `PickHitResultChanged` is the event data returned by the `minecraft:pick_hit_result_changed` event identifier.
 *
 * @type {HitResultChanged}
 * @property {Entity} entity - The entity that was hit or null if it fired when moving off of an entity.
 * @property {Vector} position - The position of the entity that was hit or null if it fired when moving off an entity.
 */
export interface HitResultChanged {
  entity: Entity;
  position: Vector;
}

/**
 * `PickHitResultContinuous` is the event data returned by the `minecraft:pick_hit_result_continuous` event identifier.
 *
 * @type {HitResultContinuous}
 * @property {Entity} entity - The entity that was hit or null if it not pointing at an entity.
 * @property {Vector} position - The position of the entity that was hit or block that was hit.
 */
export interface HitResultContinuous {
  entity: Entity;
  position: Vector;
}

/**
 * `PistonMovedBlock` is the event data returned by the `minecraft:piston_moved_block` event identifier.
 *
 * @type {PistonMovedBlock}
 * @property {Position} block_position - The position of the block that was moved.
 * @property {string} piston_action - The action the piston took, "extended" or "retracted".
 * @property {Position} piston_position - The position of the piston that moved the block.
 */
export interface PistonMovedBlock {
  block_position: Position;
  piston_action: "extended" | "retracted";
  piston_position: Position;
}

/**
 * `PlayerAttackedEntity` is the event data returned by the `minecraft:player_attacked_entity` event identifier.
 *
 * @type {PlayerAttackedEntity}
 * @property {Entity} attacked_entity - The entity that was attacked by the player.
 * @property {Entity} player - The player that attacked an entity.
 */
export interface PlayerAttackedEntity {
  attacked_entity: Entity;
  player: Entity;
}

/**
 * `PlayerDestroyedBlock` is the event data returned by the `minecraft:player_destroyed_block` event identifier.
 *
 * @type {PlayerDestroyedBlock}
 * @property {string} block_identifier - The identifier of the block that was destroyed.
 * @property {Position} block_position - The position of the block that was destroyed.
 * @property {Entity} player - The player that destroyed the block.
 */
export interface PlayerDestroyedBlock {
  block_identifier: string;
  block_position: Position;
  player: Entity;
}

/**
 * `PlayerPlacedBlock` is the event data returned by the `minecraft:player_placed_block` event identifier.
 *
 * @type {PlayerPlacedBlock}
 * @property {Position} block_position - The position of the block that was placed.
 * @property {Entity} player - The player that placed the block.
 */
export interface PlayerPlacedBlock {
  block_position: Position;
  player: Entity;
}

/**
 * `ProjectileHit` is the event data returned by the `minecraft:projectile_hit` event identifier.
 *
 * @type {ProjectileHit}
 * @property {Entity} entity - The entity that was hit by the projectile, if any.
 * @property {Entity} owner - The entity that fired the projectile.
 * @property {Vector} position - The position of the collision.
 * @property {Entity} projectile - The projectile in question.
 */
export interface ProjectileHit {
  entity: Entity;
  owner: Entity;
  position: Vector;
  projectile: Entity;
}

/**
 * `WeatherChanged` is the event data returned by the `minecraft:weather_changed` event identifier.
 *
 * @type {WeatherChanged}
 * @property {string} dimension - The name of the dimension where the weather change happened.
 * @property {boolean} lightning - Tells if the new weather has lightning.
 * @property {boolean} raining - Tells if the new weather has rain.
 */
export interface WeatherChanged {
  dimension: string;
  lightning: boolean;
  raining: boolean;
}
