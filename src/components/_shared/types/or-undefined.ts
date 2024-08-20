/**
 * Type utility that takes a type `T` and produces a new type
 * where each property is made optional with `undefined`.
 *
 * @template T - The original type to be transformed.
 */
type OrUndefined<T> = {
	[K in keyof T]: T[K] | undefined
}

export type { OrUndefined }
