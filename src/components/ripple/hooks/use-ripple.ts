'use client'

import { cn } from '@renderui/utils'
import { AnimationDefinition } from 'framer-motion'
import React from 'react'

import {
  RIPPLE_ANIMATION_END_DEFAULT_SCALE,
  RIPPLE_ANIMATION_END_OPACITY,
  RIPPLE_ANIMATION_START_SCALE,
  RIPPLE_DEFAULT_OPACITY,
  RIPPLE_RIPPLE_BASE_STYLE,
} from '@/components/ripple/constants/constants'
import { useKeyboardRipple } from '@/components/ripple/hooks/use-keyboard-ripple'
import { usePressRipple } from '@/components/ripple/hooks/use-press-ripple'
import { RippleProps, RippleRef } from '@/components/ripple/types/ripple'
import { RippleRipple } from '@/components/ripple/types/ripple-ripple'
import { getRippleDuration } from '@/components/ripple/utils/utils'

type UseRippleReturnType = {
  ripples: RippleRipple[]
  internalSubLayerRef: React.RefObject<HTMLSpanElement>
  addRippleOnPress: ReturnType<typeof usePressRipple>
  getRippleRipplesProps: (ripple: RippleRipple) => any
}

function useRipple(
  props: Omit<RippleProps, 'subLayerProps'>,
  ref: React.ForwardedRef<RippleRef>,
): UseRippleReturnType {
  const {
    opacity: opacityProp,
    duration: durationProp,
    scale: scaleProp,
    transition: transitionProp,
    initial: initialProp,
    animate: animateProp,
    exit: exitProp,
    style: styleProp,
    className,
    isDisabled,
    onAnimationComplete: onAnimationCompleteProp,
    ...restProps
  } = props

  const internalSubLayerRef = React.useRef<HTMLSpanElement | null>(null)
  const [ripples, setRipples] = React.useState<RippleRipple[]>([])

  const addRippleOnPress = usePressRipple(setRipples, isDisabled)

  useKeyboardRipple(internalSubLayerRef, setRipples)

  const clearRipple = (key: React.Key) => {
    setRipples((previousState) => previousState.filter((ripple) => ripple.key !== key))
  }

  const onAnimationComplete = (ripple: RippleRipple, definition: AnimationDefinition) => {
    clearRipple(ripple.key)

    if (onAnimationCompleteProp) {
      onAnimationCompleteProp(definition)
    }
  }

  const getRippleRipplesProps = (ripple: RippleRipple) => {
    const duration = durationProp ?? getRippleDuration(ripple.size)

    const scale = scaleProp ?? RIPPLE_ANIMATION_END_DEFAULT_SCALE

    const initial = initialProp ?? {
      transform: `scale(${RIPPLE_ANIMATION_START_SCALE})`,
      opacity: opacityProp ?? RIPPLE_DEFAULT_OPACITY,
    }

    const animate = animateProp ?? {
      transform: `scale(${scale})`,
      opacity: RIPPLE_ANIMATION_END_OPACITY,
    }

    const exit = exitProp ?? { opacity: RIPPLE_ANIMATION_END_OPACITY }

    const transition = { duration, ...transitionProp }

    const style = {
      ...RIPPLE_RIPPLE_BASE_STYLE,
      top: ripple.y,
      left: ripple.x,
      width: `${ripple.size}px`,
      height: `${ripple.size}px`,
      ...styleProp,
    }

    return {
      ref,
      initial,
      animate,
      exit,
      transition,
      style,
      'data-slot': 'ripple',
      'className': cn('render-ui-ripple bg-current', className),
      'onAnimationComplete': (definition: AnimationDefinition) =>
        onAnimationComplete(ripple, definition),
      ...restProps,
    }
  }

  return {
    ripples,
    internalSubLayerRef,
    addRippleOnPress,
    getRippleRipplesProps,
  }
}

export { useRipple }
