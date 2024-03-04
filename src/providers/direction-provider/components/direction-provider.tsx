'use client'

import {
  DirectionProvider as Provider,
  DirectionProviderProps as ProviderProps,
} from '@radix-ui/react-direction'
import React from 'react'

type DirectionProviderProps = ProviderProps

const DirectionProvider = (props: DirectionProviderProps) => {
  const { children, dir: direction = 'ltr' } = props

  return <Provider dir={direction}>{children}</Provider>
}

export { DirectionProvider }
