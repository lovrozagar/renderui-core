import { Dialog as DialogPrimitive } from '@radix-ui/react-dialog'
import React from 'react'

import { DialogProps } from '@/components/dialog/types/dialog'

const Dialog = (props: DialogProps) => {
  const { isModal, ...restProps } = props

  return <DialogPrimitive modal={isModal} {...restProps} />
}

Dialog.displayName = 'Dialog'

export { Dialog }
