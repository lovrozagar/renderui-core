import React from 'react'

import { OptionalAriaProps } from '@/components/_shared/types/aria'
import { Simplify } from '@/components/_shared/types/simplify'

type AriaPrimitiveProps = React.ComponentPropsWithRef<'div'>

type AriaRenderUIProps = OptionalAriaProps & {
	asChild?: boolean
	isDisabled?: boolean
	isUsingAriaPressProps?: boolean
}

type AriaProps = Simplify<AriaPrimitiveProps & AriaRenderUIProps>

export type { AriaProps }
