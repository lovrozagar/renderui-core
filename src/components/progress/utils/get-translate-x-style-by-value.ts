import { HUNDRED, ONE, ZERO } from '@renderui/constants'
import { ProgressProps } from '..'

type GetTranslateXStyleByValueProps = Pick<
  ProgressProps,
  'isIndeterminate' | 'orientation' | 'variant' | 'value' | 'spotCount'
> & {
  definedValue: number
  indicatorStyle: Record<string, string>
}

const getTranslateXStyleByValue = (props: GetTranslateXStyleByValueProps) => {
  const {
    isIndeterminate,
    orientation,
    variant,
    definedValue,
    indicatorStyle,
    spotCount = 1,
    value = 0,
  } = props

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
