'use client'

import { AnimatePresence, m } from 'framer-motion'
import React from 'react'

import { useRipple } from '@/components/ripple/hooks/use-ripple'
import { RippleProps, RippleRef } from '@/components/ripple/types/ripple'
import { SubLayer } from '@/components/sub-layer'
import { LazyMotionDomAnimationProvider } from '@/providers'

const Ripple = React.forwardRef<RippleRef, RippleProps>((props, ref) => {
  const { subLayerProps, ...otherProps } = props

  const { ripples, internalSubLayerRef, addRippleOnPress, getRippleRipplesProps } = useRipple(
    otherProps,
    ref,
  )

  return (
    <SubLayer ref={internalSubLayerRef} {...subLayerProps} onClick={addRippleOnPress}>
      {ripples.map((ripple) => (
        <LazyMotionDomAnimationProvider key={ripple.key}>
          <AnimatePresence mode='popLayout'>
            <m.span {...getRippleRipplesProps(ripple)} />
          </AnimatePresence>
        </LazyMotionDomAnimationProvider>
      ))}
    </SubLayer>
  )
})

Ripple.displayName = 'Ripple'

export { Ripple }
