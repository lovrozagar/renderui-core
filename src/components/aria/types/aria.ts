import React from 'react'

import { OptionalAriaProps } from '@/components/_shared/types/aria'
import { Simplify } from '@/components/_shared/types/simplify'

type AriaRef = HTMLElement

type AriaPrimitiveProps = React.ComponentPropsWithoutRef<'div'>

type AriaRenderUIProps = OptionalAriaProps & {
  asChild?: boolean
  isDisabled?: boolean
  isUsingAriaPressProps?: boolean
}

type AriaProps = Simplify<AriaPrimitiveProps & AriaRenderUIProps>

export type { AriaProps, AriaRef }
