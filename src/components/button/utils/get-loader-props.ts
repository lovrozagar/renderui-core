import { getOptionalObject } from '@renderui/utils'
import React from 'react'

import { LoaderProps } from '@/components/loader'

type GetLoaderPropsArgs = {
  loaderRef: React.Ref<HTMLSpanElement> | undefined
  loaderProps: LoaderProps | undefined
  initialColor: string | undefined
  isLoading: boolean | undefined
}

const getLoaderProps = (args: GetLoaderPropsArgs) => {
  const { loaderRef, loaderProps, initialColor, isLoading } = args

  const {
    style: styleProp,
    position = 'absolute-center',
    ...restLoaderProps
  } = getOptionalObject(loaderProps)

  const style = isLoading
    ? {
        color: initialColor,
        ...styleProp,
      }
    : undefined

  return {
    'ref': loaderRef,
    'data-slot': 'loader',
    style,
    position,
    ...restLoaderProps,
  }
}

export { getLoaderProps }
