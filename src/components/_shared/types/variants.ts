import type { VariantProps } from '@renderui/utils'

/* biome-ignore lint/suspicious/noExplicitAny: allow any as generic */
type NonNullableVariantProps<T extends (...args: any) => any> = {
	[K in keyof VariantProps<T>]: NonNullable<VariantProps<T>[K]>
}

export type { NonNullableVariantProps }
