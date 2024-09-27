import type { Simplify } from '@/components/_shared/types/simplify'
import type { MenubarContent as MenubarContentPrimitive } from '@radix-ui/react-menubar'
import type { AnimationStyleVariables } from '@renderui/utils'

type MenubarContentPrimitiveProps = React.ComponentPropsWithRef<typeof MenubarContentPrimitive>

type MenubarContentCustomProps = AnimationStyleVariables

type MenubarContentProps = Simplify<MenubarContentPrimitiveProps & MenubarContentCustomProps>

export type { MenubarContentProps }
