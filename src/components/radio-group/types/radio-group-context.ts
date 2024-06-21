import { RadioGroupProps } from '@/components/radio-group/types/radio-group'

type RadioGroupContext = Pick<RadioGroupProps, 'name' | 'value' | 'isInvalid'> & {
  setValue: React.Dispatch<React.SetStateAction<string | number>>
}

export type { RadioGroupContext }
