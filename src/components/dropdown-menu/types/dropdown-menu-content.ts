import type { Simplify } from '@/components/_shared/types/simplify'
import type { DropdownMenuContent as DropdownMenuContentPrimitive } from '@radix-ui/react-dropdown-menu'
import type { AnimationStyleVariables } from '@renderui/utils'

type DropdownMenuContentPrimitiveProps = React.ComponentPropsWithRef<
	typeof DropdownMenuContentPrimitive
>

type DropdownMenuContentCustomProps = AnimationStyleVariables

type DropdownMenuContentProps = Simplify<
	DropdownMenuContentPrimitiveProps & DropdownMenuContentCustomProps
>

export type { DropdownMenuContentProps }
