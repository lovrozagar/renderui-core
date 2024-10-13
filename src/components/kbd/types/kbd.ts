import type { Color } from '@/components/_shared/types/color'
import type { Simplify } from '@/components/_shared/types/simplify'

type KbdHTMLProps = Omit<React.ComponentPropsWithRef<'kbd'>, 'color'>

type KbdCustomProps = {
	asChild?: boolean
	color?: Color
	hasIcon?: boolean
	iconPosition?: 'start' | 'end'
}

type KbdProps = Simplify<KbdHTMLProps & KbdCustomProps>

export type { KbdProps }
