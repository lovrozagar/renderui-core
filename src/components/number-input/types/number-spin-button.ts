import type { Simplify } from '@/components/_shared/types/simplify'

import type { ButtonProps } from '@/components/button'

type NumberSpinButtonProps = Simplify<ButtonProps & { action: 'increment' | 'decrement' }>

export type { NumberSpinButtonProps }
