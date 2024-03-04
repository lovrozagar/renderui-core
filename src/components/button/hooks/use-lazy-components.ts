/* eslint-disable react/hook-use-state */
import React from 'react'

import { ButtonProps } from '@/components/button/types/button'

type UseLazyComponentsProps = Pick<
  ButtonProps,
  'isLoading' | 'hasLoaderOnLoading' | 'loader' | 'hasRipple'
>

function useLazyComponents(props: UseLazyComponentsProps) {
  const { hasLoaderOnLoading, loader, hasRipple } = props

  const [LoaderComponent, setLoaderComponent] = React.useState(null)
  const [RippleComponent, setRippleComponent] = React.useState(null)

  React.useEffect(() => {
    const loadComponents = async () => {
      if (hasLoaderOnLoading) {
        if (loader) {
          setLoaderComponent(loader)
        } else {
          const { Loader } = await import('@/components/loader')

          setLoaderComponent(Loader)
        }
      }

      if (hasRipple) {
        const { Ripple } = await import('@/components/ripple')

        setRippleComponent(Ripple)
      }
    }

    loadComponents()
  }, [loader, hasLoaderOnLoading, hasRipple])

  return { LoaderComponent, RippleComponent }
}

export { useLazyComponents }
