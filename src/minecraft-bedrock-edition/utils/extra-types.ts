/**
 * `ArrayLengthMutationKeys` is needed for `FixedLengthArray`.
 */
type ArrayLengthMutationKeys =
  | "splice"
  | "push"
  | "pop"
  | "shift"
  | "unshift"
  | number;

/**
 * `ArrayItems` is needed for `FixedLengthArray`.
 */
type ArrayItems<T extends Array<unknown>> = T extends Array<infer TItems>
  ? TItems
  : never;

/**
 * `FixedLengthArray` is an array of a predetermined maximum size.
 */
export type FixedLengthArray<T extends unknown[]> = Pick<
  T,
  Exclude<keyof T, ArrayLengthMutationKeys>
> & { [Symbol.iterator]: () => IterableIterator<ArrayItems<T>> };

/**
 * `Double` is a non-whole number, it contains a decimal.
 */
export type Double = number;

/**
 * `Integer` is a whole number.
 */
export type Integer = number;
