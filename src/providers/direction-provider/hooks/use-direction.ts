import { useDirection as useRadixDirection } from '@radix-ui/react-direction'
import React from 'react'

const useDirection = (directionProp: string | undefined) => {
	const contextDirection = useRadixDirection()

	return React.useMemo(() => directionProp ?? contextDirection, [directionProp, contextDirection])
}

export { useDirection }
