import { ChevronDownIcon } from '@/components/_shared/components/icons/chevron-down-icon'
import { DEFAULT_NAVIGATION_MENU_TRIGGER_INDICATOR_CLASSNAME } from '@/components/navigation-menu/constants/constants'
import { cn } from '@renderui/utils'
import React from 'react'

const NavigationMenuTriggerIndicator = (props: React.ComponentProps<typeof ChevronDownIcon>) => {
	const { className, ...restProps } = props

	return (
		<ChevronDownIcon
			className={cn(DEFAULT_NAVIGATION_MENU_TRIGGER_INDICATOR_CLASSNAME, className)}
			aria-hidden='true'
			{...restProps}
		/>
	)
}

export { NavigationMenuTriggerIndicator }
