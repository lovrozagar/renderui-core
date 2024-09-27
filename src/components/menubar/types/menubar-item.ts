import type { Simplify } from '@/components/_shared/types/simplify'
import type { MenubarItem as MenubarItemPrimitive } from '@radix-ui/react-menubar'

type MenubarItemPrimitiveProps = React.ComponentPropsWithRef<typeof MenubarItemPrimitive>

type MenubarItemCustomProps = {
	inset?: boolean
}

type MenubarItemProps = Simplify<MenubarItemPrimitiveProps & MenubarItemCustomProps>

export type { MenubarItemProps }
