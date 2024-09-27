import { ChevronRightIcon } from '@/components/_shared/components/icons/chevron-right-icon'
import { DEFAULT_MENUBAR_SUB_TRIGGER_CLASSNAME } from '@/components/menubar/constants/constants'
import type { MenubarSubTriggerProps } from '@/components/menubar/types/menubar-sub-trigger'
import { MenubarSubTrigger as MenubarSubTriggerPrimitive } from '@radix-ui/react-menubar'
import { cn } from '@renderui/utils'

const MenubarSubTrigger = (props: MenubarSubTriggerProps) => {
	const { inset, className, children, ...restProps } = props

	return (
		<MenubarSubTriggerPrimitive
			slot='sub'
			className={cn(DEFAULT_MENUBAR_SUB_TRIGGER_CLASSNAME, inset && 'pl-8', className)}
			{...restProps}
		>
			{children}
			<ChevronRightIcon className='ml-auto h-4 w-4' />
		</MenubarSubTriggerPrimitive>
	)
}

export { MenubarSubTrigger }
