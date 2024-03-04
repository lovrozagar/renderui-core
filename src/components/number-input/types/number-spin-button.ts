import { Simplify } from '@renderui/types'

import { ButtonProps } from '@/components/button'

type NumberSpinButtonProps = Simplify<ButtonProps & { action: 'increment' | 'decrement' }>

export type { NumberSpinButtonProps }
