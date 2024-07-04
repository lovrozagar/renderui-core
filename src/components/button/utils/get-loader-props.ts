import { cx, getOptionalObject } from '@renderui/utils'
import React from 'react'

import { LoaderProps } from '@/components/loader'

type GetLoaderPropsArgs = {
  loaderRef: React.Ref<HTMLSpanElement> | undefined
  loaderProps: LoaderProps | undefined
  isLoading: boolean | undefined
}

const getLoaderProps = (args: GetLoaderPropsArgs) => {
  const { loaderRef, loaderProps, isLoading } = args

  const {
    className,
    position = 'absolute-center',
    ...restLoaderProps
  } = getOptionalObject(loaderProps)

  return {
    'ref': loaderRef,
    'data-slot': 'loader',
    position,
    'className': cx(isLoading ? 'text-[rgba(var(--button-color))]' : undefined, className),
    ...restLoaderProps,
  }
}

export { getLoaderProps }
