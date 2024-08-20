import { VariantProps } from '@renderui/utils'

type NonNullableVariantProps<T extends (...args: any) => any> = {
	[K in keyof VariantProps<T>]: NonNullable<VariantProps<T>[K]>
}

export type { NonNullableVariantProps }
