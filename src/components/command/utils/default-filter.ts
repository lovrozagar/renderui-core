import { ONE, ZERO } from '@renderui/constants'

function defaultFilter(value: string, search: string) {
  if (value.toLowerCase().startsWith(search.toLowerCase())) return ONE

  return ZERO
}

export { defaultFilter }
