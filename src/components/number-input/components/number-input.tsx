'use client'

import { polymorphic } from '@renderui/utils'

import { Aria } from '@/components/aria'
import { NumberSpinButton } from '@/components/number-input/components/number-spin-button'
import { useNumberInput } from '@/components/number-input/hooks/use-number-input'
import type { NumberInputProps } from '@/components/number-input/types/number-input'
import { Separator } from '@/components/separator'

const NumberInput = (props: NumberInputProps) => {
	const {
		inputContainerProps,
		inputProps,
		spinButtonContainerProps,
		incrementButtonProps,
		decrementButtonProps,
		separatorProps,
		utilityProps,
	} = useNumberInput(props)

	const { hasSpinButtons, startContent, children, endContent } = utilityProps

	const { asChild: inputAsChild, ...restInputProps } = inputProps

	const { asChild: spinButtonContainerAsChild, ...restSpinButtonContainerProps } =
		spinButtonContainerProps

	const InputComponent = polymorphic(inputAsChild, 'input')
	const SpinButtonContainerComponent = polymorphic(spinButtonContainerAsChild, 'div')

	return (
		<Aria {...inputContainerProps}>
			{startContent}
			<InputComponent {...restInputProps} />
			{hasSpinButtons ? (
				<SpinButtonContainerComponent {...restSpinButtonContainerProps}>
					<NumberSpinButton {...incrementButtonProps} />
					<Separator {...separatorProps} />
					<NumberSpinButton {...decrementButtonProps} />
				</SpinButtonContainerComponent>
			) : null}
			{children}
			{endContent}
		</Aria>
	)
}

export { NumberInput }
