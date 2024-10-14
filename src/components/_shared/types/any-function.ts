/* biome-ignore lint/suspicious/noExplicitAny: allow any to support generic any function */
type AnyFunction = (...args: any[]) => any

export type { AnyFunction }
