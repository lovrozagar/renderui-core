import { cx } from '@renderui/utils'
import React from 'react'

import { Button } from '@/components/button'
import {
	DEFAULT_NUMBER_SPIN_BUTTON_CLASSNAME,
	DEFAULT_NUMBER_SPIN_BUTTON_ICON_CLASSNAME,
} from '@/components/number-input/constants/constants'
import { NumberSpinButtonProps } from '@/components/number-input/types/number-spin-button'
import { ChevronDownIcon } from '@/components/_shared/components/icons/chevron-down-icon'
import { ChevronUpIcon } from '@/components/_shared/components/icons/chevron-up-icon'

const NumberSpinButton = (props: NumberSpinButtonProps) => {
	const {
		children,
		className,
		variant = 'plain',
		action = 'increment',
		tabIndex = -1,
		longPressTreshold = 100,
		isLongPressDisabled = false,
		preventFocusOnPress = true,
		hasDefaultPressedStyles = false,
		...restProps
	} = props

	const renderChildren = () => {
		if (action === 'increment') {
			return <ChevronUpIcon className={DEFAULT_NUMBER_SPIN_BUTTON_ICON_CLASSNAME} />
		}

		return <ChevronDownIcon className={DEFAULT_NUMBER_SPIN_BUTTON_ICON_CLASSNAME} />
	}

	return (
		<Button
			variant={variant}
			tabIndex={tabIndex}
			className={cx(DEFAULT_NUMBER_SPIN_BUTTON_CLASSNAME, className)}
			hasDefaultPressedStyles={hasDefaultPressedStyles}
			isLongPressDisabled={isLongPressDisabled}
			longPressTreshold={longPressTreshold}
			preventFocusOnPress={preventFocusOnPress}
			{...restProps}
		>
			{children ?? renderChildren()}
		</Button>
	)
}

export { NumberSpinButton }
