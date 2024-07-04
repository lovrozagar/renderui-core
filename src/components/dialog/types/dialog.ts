import { Dialog as DialogPrimitive } from '@radix-ui/react-dialog'
import { Simplify } from '@/components/_shared/types/simplify'
import React from 'react'

type DialogPrimitiveProps = Omit<React.ComponentProps<typeof DialogPrimitive>, 'modal'>

type DialogCustomProps = {
  isModal?: boolean
}

type DialogProps = Simplify<DialogPrimitiveProps & DialogCustomProps>

export type { DialogProps }
