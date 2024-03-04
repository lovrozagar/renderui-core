import { HUNDRED, ONE, ZERO } from '@renderui/constants'

type GetTranslateXStyleByValueProps = {
  isIndeterminate: boolean
  orientation: string
  variant: string
  value: number
  definedValue: number
  spotCount: number
  indicatorStyle: Record<string, string>
}

const getTranslateXStyleByValue = (props: GetTranslateXStyleByValueProps) => {
  const { isIndeterminate, orientation, variant, value, definedValue, spotCount, indicatorStyle } =
    props

  if (isIndeterminate) return indicatorStyle

  const axis = orientation === 'horizontal' ? 'X' : 'Y'

  if (variant === 'spot') {
    const realValue = definedValue - ONE

    return {
      width: `${spotCount ? HUNDRED / spotCount : HUNDRED}%`,
      transform: `translate${axis}(${realValue ? realValue * HUNDRED : ZERO}%)`,
    }
  }

  return { transform: `translate${axis}(-${HUNDRED - (value || ZERO)}%)`, ...indicatorStyle }
}

export { getTranslateXStyleByValue }
