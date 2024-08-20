import type { Simplify } from '@/components/_shared/types/simplify'

type LoaderDotPrimitiveProps = React.ComponentPropsWithRef<'span'>

type LoaderDotCustomProps = {
	isPaused: boolean | undefined
	element?: 'start' | 'middle' | 'end'
}

type LoaderDotProps = Simplify<LoaderDotPrimitiveProps & LoaderDotCustomProps>

export type { LoaderDotProps }
