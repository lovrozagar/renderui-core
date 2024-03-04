/* eslint-disable no-magic-numbers */

function hex(hexInput: number | string): string {
  let hex: string = ''

  if (typeof hexInput === 'number') {
    hex = hexInput.toString(16)
  } else if (typeof hexInput === 'string') {
    hex = hexInput.charAt(0) === '#' ? hexInput.slice(1) : hexInput
  } else {
    throw new TypeError('Invalid input value for hex color.')
  }

  // If the hex code is in the three-character or four-character format, convert it to six or eight characters
  if (hex.length === 3 || hex.length === 4) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('')
  }

  if ((hex.length !== 6 && hex.length !== 8) || !/^([\da-f]{6}|[\da-f]{8})$/i.test(hex)) {
    throw new TypeError('Invalid input value for hex color.')
  }

  const red = Number.parseInt(hex.slice(0, 2), 16)
  const green = Number.parseInt(hex.slice(2, 4), 16)
  const blue = Number.parseInt(hex.slice(4, 6), 16)

  if (hex.length === 8) {
    const alpha = Math.round((Number.parseInt(hex.slice(6, 8), 16) / 255) * 100) / 100

    return `${red}, ${green}, ${blue}, ${alpha}`
  }

  return `${red}, ${green}, ${blue}`
}

export { hex }
