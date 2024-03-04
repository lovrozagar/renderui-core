/* eslint-disable no-magic-numbers */

function hsl(
  hueInput: number | string,
  saturationInput: number | string,
  lightnessInput: number | string,
) {
  const hueNumber =
    typeof hueInput === 'string' ? Number.parseInt(hueInput.replace('°', ''), 10) : hueInput

  const saturationNumber =
    typeof saturationInput === 'string'
      ? Number.parseInt(saturationInput.replace('%', ''), 10)
      : saturationInput

  const lightnessNumber =
    typeof lightnessInput === 'string'
      ? Number.parseInt(lightnessInput.replace('%', ''), 10)
      : lightnessInput

  if (Number.isNaN(hueNumber) || Number.isNaN(saturationNumber) || Number.isNaN(lightnessNumber)) {
    throw new TypeError('Invalid input value for hsl color.')
  }

  const saturationFraction = saturationNumber / 100
  const lightnessFraction = lightnessNumber / 100

  const calculateKValue = (input: number): number => (input + hueNumber / 30) % 12
  const saturationLightnessProduct =
    saturationFraction * Math.min(lightnessFraction, 1 - lightnessFraction)

  const calculateFValue = (input: number): number => {
    const kValue = calculateKValue(input)

    return (
      lightnessFraction -
      saturationLightnessProduct * Math.max(-1, Math.min(kValue - 3, Math.min(9 - kValue, 1)))
    )
  }

  const red = Math.round(255 * calculateFValue(0))
  const green = Math.round(255 * calculateFValue(8))
  const blue = Math.round(255 * calculateFValue(4))

  return `${red}, ${green}, ${blue}`
}

export { hsl }
