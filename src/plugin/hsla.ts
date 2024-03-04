import { hsl } from '@/plugin/hsl'

// eslint-disable-next-line max-params
function hsla(
  hueInput: number | string,
  saturationInput: number | string,
  lightnessInput: number | string,
  alphaInput: number | string,
) {
  const alphaNumber = typeof alphaInput === 'string' ? Number.parseFloat(alphaInput) : alphaInput

  if (Number.isNaN(alphaNumber)) {
    throw new TypeError('Invalid input value for hsl alpha value.')
  }

  const rgb = hsl(hueInput, saturationInput, lightnessInput)

  return `${rgb}, ${alphaNumber}`
}

export { hsla }
