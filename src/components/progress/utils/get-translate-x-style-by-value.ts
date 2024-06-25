import { ProgressProps } from '@/components/progress'

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
    const realValue = definedValue - 1

    return {
      width: `${spotCount ? 100 / spotCount : 100}%`,
      transform: `translate${axis}(${realValue ? realValue * 100 : 0}%)`,
    }
  }

  return { transform: `translate${axis}(-${100 - (value || 0)}%)`, ...indicatorStyle }
}

export { getTranslateXStyleByValue }
