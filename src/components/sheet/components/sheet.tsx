'use client'

import { Dialog as SheetPrimitive } from '@radix-ui/react-dialog'

import type { SheetProps } from '@/components/sheet/types/sheet'

const Sheet = (props: SheetProps) => {
	return <SheetPrimitive {...props} />
}

export { Sheet }
