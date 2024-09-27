import type { Simplify } from '@/components/_shared/types/simplify'
import type { DropdownMenuLabel as DropdownMenuLabelPrimitive } from '@radix-ui/react-dropdown-menu'

type DropdownMenuLabelPrimitiveProps = React.ComponentPropsWithRef<
	typeof DropdownMenuLabelPrimitive
>

type DropdownMenuLabelCustomProps = {
	inset?: boolean
}

type DropdownMenuLabelProps = Simplify<
	DropdownMenuLabelPrimitiveProps & DropdownMenuLabelCustomProps
>

export type { DropdownMenuLabelProps }
