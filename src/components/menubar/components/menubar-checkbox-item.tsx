import { CheckIcon } from '@/components/_shared/components/icons/check-icon'
import { DEFAULT_MENUBAR_CHECKBOX_ITEM_CLASSNAME } from '@/components/menubar/constants/constants'
import type { MenubarCheckboxItemProps } from '@/components/menubar/types/menubar-checkbox-item'
import {
	MenubarCheckboxItem as MenubarCheckboxItemPrimitive,
	MenubarItemIndicator as MenubarItemIndicatorPrimitive,
} from '@radix-ui/react-menubar'
import { cn } from '@renderui/utils'

const MenubarCheckboxItem = (props: MenubarCheckboxItemProps) => {
	const { className, children, checked, ...restProps } = props

	return (
		<MenubarCheckboxItemPrimitive
			slot='checkbox-item'
			className={cn(DEFAULT_MENUBAR_CHECKBOX_ITEM_CLASSNAME, className)}
			checked={checked}
			{...restProps}
		>
			<span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
				<MenubarItemIndicatorPrimitive>
					<CheckIcon className='h-4 w-4' />
				</MenubarItemIndicatorPrimitive>
			</span>
			{children}
		</MenubarCheckboxItemPrimitive>
	)
}

export { MenubarCheckboxItem }
