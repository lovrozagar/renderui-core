import React from 'react'

type AnimationStyleVariaiables = {
  animationDuration?: number | undefined
  animationInDuration?: number | undefined
  animationOutDuration?: number | undefined
  animationTimingFunction?: string | undefined
  animationInTimingFunction?: React.CSSProperties['animationTimingFunction']
  animationOutTimingFunction?: React.CSSProperties['animationTimingFunction']
}

type AnimationStyleDefaultDuration = {
  defaultAnimationDuration: number | undefined
}

type AnimationStyleDefaultDurations = {
  defaultAnimationInDuration: number | undefined
  defaultAnimationOutDuration: number | undefined
}

type AnimationStyleDefaultTimingFunction = {
  defaultAnimationTimingFunction: React.CSSProperties['animationTimingFunction']
}

type AnimationStyleDefaultTimingFunctions = {
  defaultAnimationInTimingFunction: React.CSSProperties['animationTimingFunction']
  defaultAnimationOutTimingFunction: React.CSSProperties['animationTimingFunction']
}

type GetAnimationStyleVariablesProps = AnimationStyleVariaiables &
  (AnimationStyleDefaultDuration | AnimationStyleDefaultDurations) &
  (AnimationStyleDefaultTimingFunction | AnimationStyleDefaultTimingFunctions) &
  Record<string, unknown>

function getAnimationStyleVariables(props: GetAnimationStyleVariablesProps) {
  const {
    animationDuration,
    animationInDuration,
    animationOutDuration,
    animationTimingFunction,
    animationInTimingFunction,
    animationOutTimingFunction,
    defaultAnimationDuration,
    defaultAnimationInDuration,
    defaultAnimationOutDuration,
    defaultAnimationTimingFunction,
    defaultAnimationInTimingFunction,
    defaultAnimationOutTimingFunction,
  } = props

  return {
    '--animation-in-duration': `${
      animationInDuration ??
      animationDuration ??
      defaultAnimationInDuration ??
      defaultAnimationDuration
    }ms`,
    '--animation-out-duration': `${
      animationOutDuration ??
      animationDuration ??
      defaultAnimationOutDuration ??
      defaultAnimationDuration
    }ms`,
    '--animation-in-timing-function':
      animationInTimingFunction ??
      animationTimingFunction ??
      defaultAnimationInTimingFunction ??
      defaultAnimationTimingFunction,
    '--animation-out-timing-function':
      animationOutTimingFunction ??
      animationTimingFunction ??
      defaultAnimationOutTimingFunction ??
      defaultAnimationTimingFunction,
  } as React.CSSProperties
}

export { getAnimationStyleVariables }

export type { AnimationStyleVariaiables }
