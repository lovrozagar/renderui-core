import type { RadioGroupProps } from '@/components/radio-group/types/radio-group'

type RadioGroupContext = Pick<RadioGroupProps, 'name' | 'color' | 'value' | 'isInvalid'> & {
	setValue: React.Dispatch<React.SetStateAction<string | number>>
}

export type { RadioGroupContext }
