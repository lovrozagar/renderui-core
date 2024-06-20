import { RadioGroupProps } from '@/components/radio-group/types/radio-group'

type RadioGroupContext = Pick<RadioGroupProps, 'name'> & {
  value: string | number
  setValue: React.Dispatch<React.SetStateAction<string | number>>
}

export type { RadioGroupContext }
