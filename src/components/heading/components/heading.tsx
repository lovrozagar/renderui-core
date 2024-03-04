import { cn, polymorphic } from '@renderui/utils'
import React from 'react'

import { headingClasses } from '@/components/heading/classes/heading-classes'
import { HeadingProps, HeadingRef } from '@/components/heading/types/heading'

const Heading = React.forwardRef<HeadingRef, HeadingProps>((props, ref) => {
  const {
    asChild,
    children,
    className,
    size,
    overflow,
    shadow,
    letterSpacing,
    textBreak,
    as = 'h3',
    ...restProps
  } = props

  const Component = polymorphic(asChild, as)

  return (
    <Component
      ref={ref}
      className={cn(
        headingClasses({
          as,
          size,
          shadow,
          overflow,
          letterSpacing,
          textBreak,
        }),
        className,
      )}
      {...restProps}
    >
      {children}
    </Component>
  )
})

Heading.displayName = 'Heading'

export { Heading }
