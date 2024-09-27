import type { Simplify } from '@/components/_shared/types/simplify'
import type { DropdownMenuSubContent as DropdownMenuSubContentPrimitive } from '@radix-ui/react-dropdown-menu'
import type { AnimationStyleVariables } from '@renderui/utils'

type DropdownMenuSubContentPrimitiveProps = React.ComponentPropsWithRef<
	typeof DropdownMenuSubContentPrimitive
>

type DropdownMenuSubContentCustomProps = AnimationStyleVariables

type DropdownMenuSubContentProps = Simplify<
	DropdownMenuSubContentPrimitiveProps & DropdownMenuSubContentCustomProps
>

export type { DropdownMenuSubContentProps }
