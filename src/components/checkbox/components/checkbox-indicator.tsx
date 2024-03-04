import { cn, getOptionalObject } from '@renderui/utils'
import { m } from 'framer-motion'
import React from 'react'

import {
  DEFAULT_CHECKBOX_INDICATOR_CLASSNAME,
  DEFEAULT_MOTION_PROPS,
} from '@/components/checkbox/constants/constants'
import {
  CheckboxIndicatorProps,
  CheckboxIndicatorRef,
} from '@/components/checkbox/types/checkbox-indicator'
import { LazyMotionDomAnimationProvider } from '@/providers'

const CheckboxIndicator = React.forwardRef<CheckboxIndicatorRef, CheckboxIndicatorProps>(
  (props, ref) => {
    const {
      isChecked,
      hasIconContentWhenUnchecked,
      className,
      pathProps,
      animate,
      initial = false,
      fill = 'none',
      viewBox = '0 0 24 24',
      ...restProps
    } = props

    const {
      strokeLinecap = 'round',
      strokeLinejoin = 'round',
      d: dProp = 'M4.5 12.75l6 6 9-13.5',
      variants,
      ...restPathprops
    } = getOptionalObject(pathProps)

    return (
      <LazyMotionDomAnimationProvider>
        <m.svg
          ref={ref}
          fill={fill}
          viewBox={viewBox}
          initial={initial}
          animate={animate ?? isChecked ? 'checked' : 'unchecked'}
          className={cn(
            DEFAULT_CHECKBOX_INDICATOR_CLASSNAME,
            hasIconContentWhenUnchecked || isChecked ? '' : 'hidden',
            className,
          )}
          {...restProps}
        >
          <m.path
            strokeLinecap={strokeLinecap}
            strokeLinejoin={strokeLinejoin}
            d={dProp}
            variants={{ ...DEFEAULT_MOTION_PROPS, ...variants }}
            {...restPathprops}
          />
        </m.svg>
      </LazyMotionDomAnimationProvider>
    )
  },
)

CheckboxIndicator.displayName = 'CheckboxIndicator'

export { CheckboxIndicator }
