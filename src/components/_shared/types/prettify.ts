/**
 * Utility type that improves the readability of complex types.
 * It takes a type `T` and produces a new type with the same properties as `T`.
 * Especially useful for types involving intersections.
 *
 * @template T - The original type to be transformed.
 */
type Prettify<T> = {
  [K in keyof T]: T[K]
  // eslint-disable-next-line functional/readonly-type
} & {}

export type { Prettify }
