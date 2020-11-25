import { TickingArea } from "./objects";
import { Double, Integer } from "./utils/index";

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
 * @property {Double} lightning_level - A value between 0 and 1 that determines how much lightning and thunder there is.
 * @property {Integer} lightning_time - How long, in ticks, it will lightning and thunder for.
 * @property {Double} rain_level - A value between 0 and 1 that determains how heavy the rainfall is.
 * @property {Integer} rain_time - How long, in ticks, it will rain for.
 */
export interface Weather {
  do_weather_cycle: boolean;
  lightning_level: Double;
  lightning_time: Integer;
  rain_level: Double;
  rain_time: Integer;
}
