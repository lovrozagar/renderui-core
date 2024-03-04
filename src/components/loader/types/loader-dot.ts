import { Simplify } from '@renderui/types'

type LoaderDotPrimitiveProps = React.ComponentPropsWithoutRef<'span'>

type LoaderDotCustomProps = {
  isPaused: boolean | undefined
  element?: 'start' | 'middle' | 'end'
}

type LoaderDotProps = Simplify<LoaderDotPrimitiveProps & LoaderDotCustomProps>

export type { LoaderDotProps }
