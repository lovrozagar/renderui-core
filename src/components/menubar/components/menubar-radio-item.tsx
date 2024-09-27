import { CircleIcon } from '@/components/_shared/components/icons/circle-icon'
import { DEFAULT_MENUBAR_RADIO_ITEM_CLASSNAME } from '@/components/menubar/constants/constants'
import type { MenubarRadioItemProps } from '@/components/menubar/types/menubar-radio-item'
import {
	MenubarItemIndicator as MenubarItemIndicatorPrimitive,
	MenubarRadioItem as MenubarRadioItemPrimitive,
} from '@radix-ui/react-menubar'
import { cn } from '@renderui/utils'

const MenubarRadioItem = (props: MenubarRadioItemProps) => {
	const { className, children, ...restProps } = props

	return (
		<MenubarRadioItemPrimitive
			slot='radio-item'
			className={cn(DEFAULT_MENUBAR_RADIO_ITEM_CLASSNAME, className)}
			{...restProps}
		>
			<span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
				<MenubarItemIndicatorPrimitive>
					<CircleIcon className='h-2 w-2 fill-current' />
				</MenubarItemIndicatorPrimitive>
			</span>
			{children}
		</MenubarRadioItemPrimitive>
	)
}

export { MenubarRadioItem }
