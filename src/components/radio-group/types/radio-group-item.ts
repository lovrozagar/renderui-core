import { Simplify } from '@renderui/types'

import { AsChildProp } from '@/components/_shared/types/as-child'
import { ToggleGroupItem } from '@/components/toggle-group'

type RadioGroupItemPrimitive = typeof ToggleGroupItem

type RadioGroupItemRef = React.ElementRef<RadioGroupItemPrimitive>

type RadioGroupItemPrimitiveProps = Omit<React.ComponentProps<RadioGroupItemPrimitive>, 'children'>

type RadioGroupItemCustomProps = {
  children?: React.ReactNode | ((isChecked: boolean) => React.ReactNode)
  indicatorProps?: Simplify<React.ComponentPropsWithoutRef<'span'> & AsChildProp>
}

type RadioGroupItemProps = Simplify<RadioGroupItemPrimitiveProps & RadioGroupItemCustomProps>

export type { RadioGroupItemProps, RadioGroupItemRef }
