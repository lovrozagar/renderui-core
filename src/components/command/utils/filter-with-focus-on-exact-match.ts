'use client'

import { ONE, ZERO } from '@renderui/constants'
import React from 'react'

import { defaultFilter } from '@/components/command/utils/default-filter'

type GetFilterWithFocusOnExactMatchArgs = {
  timeoutIdRef: React.MutableRefObject<NodeJS.Timeout | null>
  dataValueMapRef: React.MutableRefObject<Map<string, string>>
  dataValueArrayRef: React.MutableRefObject<string[]>
  onValueChange: ((value: string) => void) | undefined
  filter: ((value: string, search: string) => number) | undefined
}

function getFilterWithFocusOnExactMatch(args: GetFilterWithFocusOnExactMatchArgs) {
  const { timeoutIdRef, dataValueMapRef, dataValueArrayRef, onValueChange, filter } = args

  return (filterValue: string, filterSearch: string) => {
    timeoutIdRef.current = setTimeout(() => {
      if (dataValueMapRef.current.has(filterSearch)) {
        onValueChange?.(filterSearch)
      }
    }, ZERO)

    if (filterSearch !== '') {
      const startingLabelElement = dataValueArrayRef.current.find((value) =>
        value.toLowerCase().startsWith(filterSearch.toLowerCase()),
      )

      if (startingLabelElement) onValueChange?.(startingLabelElement)
    }

    const isMatch =
      filter?.(filterValue, filterSearch) || defaultFilter?.(filterValue, filterSearch)

    if (isMatch) return ONE

    return ZERO
  }
}

export { getFilterWithFocusOnExactMatch }
