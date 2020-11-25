import { TickingArea } from "./objects";

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
