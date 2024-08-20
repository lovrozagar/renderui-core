import type { Simplify } from '@/components/_shared/types/simplify'
import type { m } from 'framer-motion'
import type React from 'react'

import type { SubLayerProps } from '@/components/sub-layer'

type RipplePrimitiveProps = React.ComponentPropsWithRef<typeof m.span>

type RippleCustomProps = {
	isDisabled?: boolean
	opacity?: number
	duration?: number
	scale?: number
	subLayerProps?: SubLayerProps
}

type RippleProps = Simplify<RipplePrimitiveProps & RippleCustomProps>

export type { RippleProps }
