import { DEFAULT_MENUBAR_SEPARATOR_CLASSNAME } from '@/components/menubar/constants/constants'
import type { MenubarSeparatorProps } from '@/components/menubar/types/menubar-separator'
import { MenubarSeparator as MenubarSeparatorPrimitive } from '@radix-ui/react-menubar'
import { cn } from '@renderui/utils'

const MenubarSeparator = (props: MenubarSeparatorProps) => {
	const { className, ...restProps } = props

	return (
		<MenubarSeparatorPrimitive
			className={cn(DEFAULT_MENUBAR_SEPARATOR_CLASSNAME, className)}
			{...restProps}
		/>
	)
}

export { MenubarSeparator }
