import { DEFAULT_MENUBAR_TRIGGER_CLASSNAME } from '@/components/menubar/constants/constants'
import type { MenubarTriggerProps } from '@/components/menubar/types/menubar-trigger'
import { MenubarTrigger as MenubarTriggerPrimitive } from '@radix-ui/react-menubar'
import { cn } from '@renderui/utils'

const MenubarTrigger = (props: MenubarTriggerProps) => {
	const { className, ...restProps } = props

	return (
		<MenubarTriggerPrimitive
			slot='trigger'
			className={cn(DEFAULT_MENUBAR_TRIGGER_CLASSNAME, className)}
			{...restProps}
		/>
	)
}

export { MenubarTrigger }
