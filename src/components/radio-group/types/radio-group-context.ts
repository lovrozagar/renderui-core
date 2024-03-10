import { RadioGroupProps } from '@/components/radio-group/types/radio-group'

type RadioGroupContext = Pick<RadioGroupProps, 'name'> & {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export type { RadioGroupContext }
