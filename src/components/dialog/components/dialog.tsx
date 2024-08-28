'use client'

import { Dialog as DialogPrimitive } from '@radix-ui/react-dialog'

import type { DialogProps } from '@/components/dialog/types/dialog'

const Dialog = (props: DialogProps) => {
	return <DialogPrimitive {...props} />
}

export { Dialog }
