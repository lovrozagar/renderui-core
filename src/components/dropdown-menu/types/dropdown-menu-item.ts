import type { Simplify } from '@/components/_shared/types/simplify'
import type { DropdownMenuItem as DropdownMenuItemPrimitive } from '@radix-ui/react-dropdown-menu'

type DropdownMenuItemPrimitiveProps = React.ComponentPropsWithRef<typeof DropdownMenuItemPrimitive>

type DropdownMenuItemCustomProps = {
	inset?: boolean
}

type DropdownMenuItemProps = Simplify<DropdownMenuItemPrimitiveProps & DropdownMenuItemCustomProps>

export type { DropdownMenuItemProps }
