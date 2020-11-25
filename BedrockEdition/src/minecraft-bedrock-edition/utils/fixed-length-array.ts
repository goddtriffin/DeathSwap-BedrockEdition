type ArrayLengthMutationKeys =
  | "splice"
  | "push"
  | "pop"
  | "shift"
  | "unshift"
  | number;

type ArrayItems<T extends Array<unknown>> = T extends Array<infer TItems>
  ? TItems
  : never;

export type FixedLengthArray<T extends unknown[]> = Pick<
  T,
  Exclude<keyof T, ArrayLengthMutationKeys>
> & { [Symbol.iterator]: () => IterableIterator<ArrayItems<T>> };
