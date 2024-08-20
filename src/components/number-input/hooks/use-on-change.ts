import { NumberInputProps } from '@/components/number-input/types/number-input'
import { isValidValue } from '@/components/number-input/utils/is-valid-value'

type UseOnChangeArgs = Pick<NumberInputProps, 'value' | 'min' | 'max' | 'pattern' | 'onChange'> & {
	setValue: React.Dispatch<React.SetStateAction<string | undefined>>
}

const getOnChange =
	({ min, max, pattern, setValue, onChange }: UseOnChangeArgs) =>
	(event: React.ChangeEvent<HTMLInputElement>) => {
		const eventValue = event.target.value

		if (!isValidValue({ value: eventValue, min, max, pattern })) return

		setValue(eventValue)

		if (onChange) onChange(event)
	}

export { getOnChange }
