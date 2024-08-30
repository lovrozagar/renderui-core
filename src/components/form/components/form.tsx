'use client'

import { cn, polymorphic } from '@renderui/utils'

import type { FormProps } from '@/components/form/types/form'
import { getSubmitProps } from '@/components/form/utils/get-submit-props'

const Form = (props: FormProps) => {
	const {
		asChild,
		className,
		onSubmit,
		onSubmitWithFields,
		isDefaultPreventedOnSubmit = true,
		...restProps
	} = props

	const Component = polymorphic(asChild, 'form')

	return (
		<Component
			className={cn('_form', className)}
			{...getSubmitProps(isDefaultPreventedOnSubmit, onSubmit, onSubmitWithFields)}
			{...restProps}
		/>
	)
}

export { Form }
