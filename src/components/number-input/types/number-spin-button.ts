import { Simplify } from '@/components/_shared/types/simplify'

import { ButtonProps } from '@/components/button'

type NumberSpinButtonProps = Simplify<ButtonProps & { action: 'increment' | 'decrement' }>

export type { NumberSpinButtonProps }
