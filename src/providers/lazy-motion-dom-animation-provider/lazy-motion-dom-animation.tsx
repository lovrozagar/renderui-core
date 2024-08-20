'use client'

import { LazyMotion } from 'framer-motion'
import React from 'react'

type LazyMotionDomAnimationProviderProps = Readonly<{
	children: React.ReactNode
}>

const LazyMotionDomAnimationProvider = ({ children }: LazyMotionDomAnimationProviderProps) => (
	<LazyMotion
		features={async () => {
			const { domAnimation } = await import('framer-motion')

			return domAnimation
		}}
		strict
	>
		{children}
	</LazyMotion>
)

export { LazyMotionDomAnimationProvider }
