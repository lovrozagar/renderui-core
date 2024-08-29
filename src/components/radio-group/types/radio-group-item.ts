import type { Simplify } from '@/components/_shared/types/simplify'

import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { ToggleGroupItem } from '@/components/toggle-group/components/toggle-group-item'

type RadioGroupItemPrimitive = typeof ToggleGroupItem

type RadioGroupItemPrimitiveProps = Omit<
	React.ComponentProps<RadioGroupItemPrimitive>,
	'value' | 'children'
>

type RadioGroupItemCustomProps = {
	value: string | number
	children?: React.ReactNode | ((isChecked: boolean) => React.ReactNode)
	indicatorProps?: Simplify<React.ComponentPropsWithRef<'span'> & AsChildProp>
}

type RadioGroupItemProps = Simplify<RadioGroupItemPrimitiveProps & RadioGroupItemCustomProps>

export type { RadioGroupItemProps }
