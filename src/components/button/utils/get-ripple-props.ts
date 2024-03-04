import { getOptionalObject } from '@renderui/utils'

import { RippleProps, RippleRef } from '@/components/ripple'

// @TODO understand type problem and fix it, remove any's
type GetRipplePropsArgs = {
  rippleRef: React.Ref<RippleRef> | undefined
  rippleProps: RippleProps | undefined
  initialColor: string | undefined
  isLoading: boolean | undefined
}

const getRippleProps = (args: any): any => {
  const { rippleRef, rippleProps, initialColor, isLoading } = args

  const {
    color: colorProp,
    style: styleProp,
    isDisabled: isDisabledProp,
    ...restRippleProps
  } = getOptionalObject(rippleProps)

  const isDisabled = isLoading ?? isDisabledProp

  const rippleColor = colorProp ? undefined : initialColor

  const style = isLoading
    ? {
        backgroundColor: rippleColor,
        ...styleProp,
      }
    : undefined

  return {
    'ref': rippleRef,
    'data-slot': 'ripple',
    style,
    isDisabled,
    ...restRippleProps,
  }
}

export { getRippleProps }
