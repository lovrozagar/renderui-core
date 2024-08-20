import type React from 'react'

import type { OptionalAriaProps } from '@/components/_shared/types/aria'
import type { Simplify } from '@/components/_shared/types/simplify'

type AriaPrimitiveProps = React.ComponentPropsWithRef<'div'>

type AriaRenderUIProps = OptionalAriaProps & {
	asChild?: boolean
	isDisabled?: boolean
	isUsingAriaPressProps?: boolean
}

type AriaProps = Simplify<AriaPrimitiveProps & AriaRenderUIProps>

export type { AriaProps }
