import { DEFAULT_MENUBAR_LABEL_CLASSNAME } from '@/components/menubar/constants/constants'
import type { MenubarLabelProps } from '@/components/menubar/types/menubar-label'
import { MenubarLabel as MenubarLabelPrimitive } from '@radix-ui/react-menubar'
import { cn } from '@renderui/utils'

const MenubarLabel = (props: MenubarLabelProps) => {
	const { className, inset, ...restProps } = props

	return (
		<MenubarLabelPrimitive
			slot='label'
			className={cn(DEFAULT_MENUBAR_LABEL_CLASSNAME, className)}
			{...restProps}
		/>
	)
}

export { MenubarLabel }
