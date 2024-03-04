import { HUNDRED } from '@renderui/constants'

import { NumberInputProps } from '@/components/number-input/types/number-input'
import { isValidValue } from '@/components/number-input/utils/is-valid-value'

type UseOnChangeArgs = Pick<
  NumberInputProps,
  'precision' | 'value' | 'min' | 'max' | 'pattern' | 'onChange'
> & {
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>
}

const getOnChange =
  ({ min, max, pattern, precision, setValue, onChange }: UseOnChangeArgs) =>
  (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue = event.target.value

    if (!isValidValue({ value: eventValue, min, max, pattern })) return

    const fixedValueString =
      !precision || precision === 'smart'
        ? eventValue
        : (Math.round(Number(eventValue) * HUNDRED) / HUNDRED).toFixed(precision)

    setValue(fixedValueString)

    if (onChange) onChange(event)
  }

export { getOnChange }
