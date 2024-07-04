import { Simplify } from '@/components/_shared/types/simplify'
import { m } from 'framer-motion'
import React from 'react'

import { SubLayerProps } from '@/components/sub-layer'

type RippleRef = React.ElementRef<typeof m.span>

type RipplePrimitiveProps = React.ComponentPropsWithRef<typeof m.span>

type RippleCustomProps = {
  isDisabled?: boolean
  opacity?: number
  duration?: number
  scale?: number
  subLayerProps?: SubLayerProps
}

type RippleProps = Simplify<RipplePrimitiveProps & RippleCustomProps>

export type { RippleProps, RippleRef }
