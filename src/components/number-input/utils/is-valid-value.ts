import { NUMERIC_REGEX } from '@/components/number-input/constants/constants'
import { NumberInputProps } from '@/components/number-input/types/number-input'

type IsValidValueArgs = {
	value: string | undefined
	min: NumberInputProps['min']
	max: NumberInputProps['max']
	pattern: NumberInputProps['pattern']
}

const isValidValue = (args: IsValidValueArgs) => {
	const { value, min, max, pattern } = args

	if (value === undefined) return false

	if (!NUMERIC_REGEX.test(value)) return false

	// Convert the new value to a number
	const numericValue = Number(value)

	// Convert min and max to numbers for comparison
	const numericMin = min === undefined ? undefined : Number(min)
	const numericMax = max === undefined ? undefined : Number(max)

	// Check if the new value is within the min and max range
	if (
		(numericMin !== undefined && numericValue < numericMin) ||
		(numericMax !== undefined && numericValue > numericMax)
	) {
		return false
	}

	// Check if the new value matches the pattern
	// eslint-disable-next-line security/detect-non-literal-regexp
	return !(pattern !== undefined && !new RegExp(pattern).test(value))
}

export { isValidValue }
