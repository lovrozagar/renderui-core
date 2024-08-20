'use client'

import { Provider } from '@radix-ui/react-direction'
import React from 'react'

type DirectionProviderProps = React.ComponentPropsWithRef<typeof Provider>

const DirectionProvider = (props: DirectionProviderProps) => {
	const { children, dir: direction = 'ltr' } = props

	return <Provider dir={direction}>{children}</Provider>
}

export { DirectionProvider }
