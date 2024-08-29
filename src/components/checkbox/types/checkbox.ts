import type { Simplify } from '@/components/_shared/types/simplify'
import type { Primitive as primitive } from '@radix-ui/react-primitive'
import type React from 'react'

import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { ButtonProps } from '@/components/button/types/button'

type CheckboxButtonProps = Omit<
	ButtonProps,
	'children' | 'disabled' | 'readonly' | 'required' | 'startContent' | 'children' | 'endContent'
>

type CheckboxCustomProps = {
	children?: React.ReactNode | ((checked: boolean) => React.ReactNode)
	startContent?: React.ReactNode | ((checked: boolean) => React.ReactNode)
	endContent?: React.ReactNode | ((checked: boolean) => React.ReactNode)
	inputRef?: React.RefObject<HTMLInputElement>
	inputProps?: Simplify<React.ComponentPropsWithRef<typeof primitive.input> & AsChildProp>
	name?: string
	isChecked?: boolean
	isReadOnly?: boolean
	isInvalid?: boolean
	isRequired?: boolean
	defaultChecked?: boolean
	hasIconContentWhenUnchecked?: boolean
	animationDuration?: number
	onCheckedChange?: (isChecked: boolean) => void
}

type CheckboxProps = Simplify<CheckboxButtonProps & CheckboxCustomProps>

export type { CheckboxProps }
