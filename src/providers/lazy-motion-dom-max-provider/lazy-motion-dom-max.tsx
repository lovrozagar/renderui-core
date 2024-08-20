'use client'

import { LazyMotion } from 'framer-motion'
import type React from 'react'

type LazyMotionDomMaxProviderProps = Readonly<{
	children: React.ReactNode
}>

const LazyMotionDomMaxProvider = ({ children }: LazyMotionDomMaxProviderProps) => (
	<LazyMotion
		features={async () => {
			const { domMax } = await import('framer-motion')

			return domMax
		}}
		strict
	>
		{children}
	</LazyMotion>
)

export { LazyMotionDomMaxProvider }
