import type { Simplify } from '@/components/_shared/types/simplify'
import type { DropdownMenuSubTrigger as DropdownMenuSubTriggerPrimitive } from '@radix-ui/react-dropdown-menu'

type DropdownMenuSubTriggerPrimitiveProps = React.ComponentPropsWithRef<
	typeof DropdownMenuSubTriggerPrimitive
>

type DropdownMenuSubTriggerCustomProps = {
	inset?: boolean
}

type DropdownMenuSubTriggerProps = Simplify<
	DropdownMenuSubTriggerPrimitiveProps & DropdownMenuSubTriggerCustomProps
>

export type { DropdownMenuSubTriggerProps }
