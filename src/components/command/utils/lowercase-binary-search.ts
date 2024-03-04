import { ONE, TWO, ZERO } from '@renderui/constants'

function lowercaseBinarySearch(array: string[], target: string): string | undefined {
  let left = ZERO
  let right = array.length - ONE

  const lowerCaseTarget = target.toLowerCase()

  while (left <= right) {
    const mid = Math.floor((left + right) / TWO)
    const midValue = array[mid].toLowerCase()

    if (midValue.startsWith(lowerCaseTarget)) {
      // If the previous element also starts with the target, continue the search
      if (mid > ZERO && array[mid - ONE].toLowerCase().startsWith(lowerCaseTarget)) {
        right = mid - ONE
      } else {
        return array[mid] // return original value, not lowercased
      }
    } else if (midValue < lowerCaseTarget) {
      left = mid + ONE
    } else {
      right = mid - ONE
    }
  }

  return undefined
}

export { lowercaseBinarySearch }
