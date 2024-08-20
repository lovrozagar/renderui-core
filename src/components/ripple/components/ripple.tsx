'use client'

import { AnimatePresence, m } from 'framer-motion'
import React from 'react'

import { useRipple } from '@/components/ripple/hooks/use-ripple'
import type { RippleProps } from '@/components/ripple/types/ripple'
import { SubLayer } from '@/components/sub-layer'
import { LazyMotionDomAnimationProvider } from '@/providers'

const Ripple = (props: RippleProps) => {
	// @TODO FIX
	const { subLayerProps, ...otherProps } = props ?? {}

	const { ripples, internalSubLayerRef, addRippleOnPress, getRippleRipplesProps } =
		useRipple(otherProps)

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
}

export { Ripple }
