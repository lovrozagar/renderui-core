import React from 'react'

type AnimationStyleVariaiables = {
  animationDuration?: number | undefined
  animationInDuration?: number | undefined
  animationOutDuration?: number | undefined
  defaultAnimationInDuration?: number | undefined
  defaultAnimationOutDuration?: number | undefined
}

function getAnimationStyleVariables(props: AnimationStyleVariaiables) {
  const {
    animationDuration,
    animationInDuration,
    animationOutDuration,
    defaultAnimationInDuration,
    defaultAnimationOutDuration,
  } = props

  const hasAnimationInDuration =
    animationInDuration !== undefined ||
    animationDuration !== undefined ||
    defaultAnimationInDuration !== undefined

  const hasAnimationOutDuration =
    animationOutDuration !== undefined ||
    animationDuration !== undefined ||
    defaultAnimationOutDuration !== undefined

  return {
    '--animation-in-duration': hasAnimationInDuration
      ? `${animationInDuration ?? animationDuration ?? defaultAnimationInDuration}ms`
      : undefined,
    '--animation-out-duration': hasAnimationOutDuration
      ? `${animationOutDuration ?? animationDuration ?? defaultAnimationOutDuration}ms`
      : undefined,
  } as React.CSSProperties
}

export { getAnimationStyleVariables }

export type { AnimationStyleVariaiables }
