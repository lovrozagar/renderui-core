function rgb(red: number | string, green: number | string, blue: number | string) {
  const redNumber = typeof red === 'string' ? Number.parseInt(red, 10) : red
  const greenNumber = typeof green === 'string' ? Number.parseInt(green, 10) : green
  const blueNumber = typeof blue === 'string' ? Number.parseInt(blue, 10) : blue

  if (Number.isNaN(redNumber) || Number.isNaN(greenNumber) || Number.isNaN(blueNumber)) {
    throw new TypeError('Invalid input value for rgb color.')
  }

  return `${redNumber}, ${greenNumber}, ${blueNumber}`
}

export { rgb }
