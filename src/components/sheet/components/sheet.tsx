'use client'

import { Dialog as SheetPrimitive } from '@radix-ui/react-dialog'
import React from 'react'

import { SheetProps } from '@/components/sheet/types/sheet'

const Sheet = (props: SheetProps) => {
	const { isModal, ...restProps } = props

	return <SheetPrimitive modal={isModal} {...restProps} />
}

export { Sheet }
