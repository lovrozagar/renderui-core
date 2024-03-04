'use client'

import { SliderThumb as SliderThumbPrimitive } from '@radix-ui/react-slider'
import { cn } from '@renderui/utils'
import React from 'react'

import { DEFAULT_SLIDER_THUMB_CLASSNAME } from '@/components/slider/constants/constants'
import { SliderThumbProps, SliderThumbRef } from '@/components/slider/types/slider-thumb'

const SliderThumb = React.forwardRef<SliderThumbRef, SliderThumbProps>((props, ref) => {
  const { className, ...restProps } = props

  return (
    <SliderThumbPrimitive
      ref={ref}
      data-slot='thumb'
      className={cn(DEFAULT_SLIDER_THUMB_CLASSNAME, className)}
      {...restProps}
    />
  )
})

SliderThumb.displayName = 'SliderThumb'

export { SliderThumb }
