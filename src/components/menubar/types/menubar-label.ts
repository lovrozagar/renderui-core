import type { Simplify } from '@/components/_shared/types/simplify'
import type { MenubarLabel as MenubarLabelPrimitive } from '@radix-ui/react-menubar'

type MenubarLabelPrimitiveProps = React.ComponentPropsWithRef<typeof MenubarLabelPrimitive>

type MenubarLabelCustomProps = {
	inset?: boolean
}

type MenubarLabelProps = Simplify<MenubarLabelPrimitiveProps & MenubarLabelCustomProps>

export type { MenubarLabelProps }
