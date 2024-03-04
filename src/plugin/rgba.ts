// eslint-disable-next-line max-params
function rgba(
  red: number | string,
  green: number | string,
  blue: number | string,
  alpha: number | string,
) {
  const redNumber = typeof red === 'string' ? Number.parseFloat(red) : red
  const greenNumber = typeof green === 'string' ? Number.parseFloat(green) : green
  const blueNumber = typeof blue === 'string' ? Number.parseFloat(blue) : blue
  const alphaNumber = typeof alpha === 'string' ? Number.parseFloat(alpha) : alpha

  if (
    Number.isNaN(redNumber) ||
    Number.isNaN(greenNumber) ||
    Number.isNaN(blueNumber) ||
    Number.isNaN(alphaNumber)
  ) {
    throw new TypeError('Invalid input value for rgba color.')
  }

  return `${redNumber}, ${greenNumber}, ${blueNumber}, ${alphaNumber}`
}

export { rgba }
