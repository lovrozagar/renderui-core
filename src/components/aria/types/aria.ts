import { Simplify } from '@renderui/types'
import React from 'react'

import { OptionalAriaProps } from '@/components/_shared/types/aria'

type AriaRef = HTMLElement

type AriaPrimitiveProps = React.ComponentPropsWithoutRef<'div'>

type AriaRenderUIProps = OptionalAriaProps & {
  asChild?: boolean
  isDisabled?: boolean
  isUsingAriaPressProps?: boolean
}

type AriaProps = Simplify<AriaPrimitiveProps & AriaRenderUIProps>

export type { AriaProps, AriaRef }
