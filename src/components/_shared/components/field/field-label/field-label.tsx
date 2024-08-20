'use client'

import { cx } from 'class-variance-authority'
import React from 'react'

import { useFieldContext } from '@/components/_shared/components/field/field-context/field-context'
import { Label } from '@/components/label'

const FieldLabel = (props) => {
	const { children, info, className, ...restProps } = props

	const { id } = useFieldContext()

	return (
		<Label
			htmlFor={id}
			className={cx('flex items-center justify-between pl-1 text-sm', className)}
			{...restProps}
		>
			{children}
			<span>{info}</span>
		</Label>
	)
}

export { FieldLabel }
