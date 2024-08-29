'use client'

import { CrossSmallIcon } from '@/components/_shared/components/icons/cross-small-icon'
import { Aria } from '@/components/aria/components/aria'
import { Button } from '@/components/button/components/button'
import { PasswordToggle } from '@/components/text-input/components/password-toggle'
import { useTextInput } from '@/components/text-input/hooks/use-text-input'
import type { TextInputProps } from '@/components/text-input/types/text-input'
import { polymorphic } from '@renderui/utils'

const TextInput = (props: TextInputProps) => {
	const {
		inputContainerProps,
		inputProps,
		clearButtonProps,
		clearButtonIconProps,
		passwordToggleProps,
		utilityProps,
	} = useTextInput(props)

	const { children, startContent, endContent, shouldRenderClearButton, hasPasswordToggle } =
		utilityProps

	const { asChild, ...restInputProps } = inputProps

	const InputComponent = polymorphic(asChild, 'input')

	return (
		<Aria {...inputContainerProps}>
			{startContent}
			<InputComponent {...restInputProps} />
			{shouldRenderClearButton ? (
				<Button {...clearButtonProps}>
					<CrossSmallIcon {...clearButtonIconProps} />
				</Button>
			) : null}
			{hasPasswordToggle ? <PasswordToggle {...passwordToggleProps} /> : null}
			{children}
			{endContent}
		</Aria>
	)
}

export { TextInput }
