import type { Simplify } from '@/components/_shared/types/simplify'
import type { MenubarSubContent as MenubarSubContentPrimitive } from '@radix-ui/react-menubar'
import type { AnimationStyleVariables } from '@renderui/utils'

type MenubarSubContentPrimitiveProps = React.ComponentPropsWithRef<
	typeof MenubarSubContentPrimitive
>

type MenubarSubContentCustomProps = AnimationStyleVariables

type MenubarSubContentProps = Simplify<
	MenubarSubContentPrimitiveProps & MenubarSubContentCustomProps
>

export type { MenubarSubContentProps }
