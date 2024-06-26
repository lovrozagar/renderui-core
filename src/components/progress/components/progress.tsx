import { cn, polymorphic } from '@renderui/utils'
import React from 'react'

import { DEFAULT_PROGRESS_CLASSNAME } from '@/components/progress/constants/constants'
import { ProgressProps, ProgressRef } from '@/components/progress/types/progress'
import { getProgressIndicatorClassName } from '@/components/progress/utils/get-progress-indicator-class-name'
import { getTranslateXStyleByValue } from '@/components/progress/utils/get-translate-x-style-by-value'
import { EMPTY_OBJECT } from '@/components/_shared/constants/constants'

const Progress = React.forwardRef<ProgressRef, ProgressProps>((props, ref) => {
  const {
    asChild,
    className,
    value,
    isIndeterminate,
    indicatorRef,
    indicatorProps,
    spotCount,
    orientation = 'horizontal',
    variant = 'path',
    ...restProps
  } = props

  const {
    asChild: indicatorAsChild,
    className: indicatorClassName,
    style: indicatorStyle,
    ...restIndicatorProps
  } = indicatorProps ?? EMPTY_OBJECT

  const definedValue = value || 0

  const ProgressContainerComponent = polymorphic(asChild, 'div')
  const ProgressIndicatorComponent = polymorphic(indicatorAsChild, 'div')

  return (
    <ProgressContainerComponent
      ref={ref}
      data-min={0}
      data-value={value}
      data-max={100}
      data-state='loading'
      data-slot='base'
      className={cn(DEFAULT_PROGRESS_CLASSNAME, className)}
      {...restProps}
    >
      <ProgressIndicatorComponent
        ref={indicatorRef}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-valuetext={isIndeterminate ? 'indeterminate' : `${value ?? 0}%`}
        data-value={value}
        data-min={0}
        data-max={100}
        data-state='loading'
        data-slot='indicator'
        role='progressbar'
        className={cn(getProgressIndicatorClassName(isIndeterminate), indicatorClassName)}
        style={getTranslateXStyleByValue({
          isIndeterminate,
          orientation,
          variant,
          value,
          definedValue,
          spotCount,
          indicatorStyle,
        })}
        {...restIndicatorProps}
      />
    </ProgressContainerComponent>
  )
})

Progress.displayName = 'Progress'

export { Progress }
