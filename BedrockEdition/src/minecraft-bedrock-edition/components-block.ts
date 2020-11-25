/**
 * `BlockState` contains all the blockstates on a block object.
 * Blockstates control all different aspects of blocks from their orientation to the type of wood they are.
 * Blockstates are represented by numbers, bools, or strings.
 * Please see the Blockstates Documentation to see the valid values for each state.
 * This component allows for the getting and setting of these states.
 *
 * @type {BlockState}
 * @property {boolean} age_bit - Determines if saplings should grow.
 * @property {Integer} age - Represents the age of the block.
 * @property {string} portal_axis - Determines the orientation of portal blocks.
 */
export interface BlockState {
  age_bit?: boolean;
  age?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 13 | 14 | 14 | 15;
  portal_axis?: "unkown" | "x" | "z";
}
