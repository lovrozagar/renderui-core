'use client'

import { useFreshRef } from '@/components/_shared/hooks/use-fresh-ref'
import React from 'react'
import { HotkeyCallback, useHotkeys } from 'react-hotkeys-hook'
import { HotkeysEvent, OptionsOrDependencyArray } from 'react-hotkeys-hook/dist/types'

const DEFAULT_KEY_COMBINATION_OPTIONS: OptionsOrDependencyArray = {
  preventDefault: true,
}

type UseKeyboardHotkeyArgs = {
  keyCombination?: string | string[]
  keyCombinationOptions?: OptionsOrDependencyArray
  isKeyCombinationCasingIgnored?: boolean
  onKeyCombinationMatch?: HotkeyCallback
}

function useKeyboardHotkey(props: UseKeyboardHotkeyArgs) {
  const {
    onKeyCombinationMatch,
    keyCombination,
    keyCombinationOptions,
    isKeyCombinationCasingIgnored = true,
  } = props

  const freshOnMatch = useFreshRef(onKeyCombinationMatch)

  const freshKeyCombination = useFreshRef(keyCombination)

  const memoizedKeyCombination = React.useMemo(() => {
    return (
      (Array.isArray(freshKeyCombination.current)
        ? freshKeyCombination.current.join('+')
        : freshKeyCombination.current) ?? []
    )
  }, [])

  const freshOptions = useFreshRef(keyCombinationOptions)

  const memoizedOptions = React.useMemo(() => {
    return freshOptions.current
      ? { ...DEFAULT_KEY_COMBINATION_OPTIONS, ...freshOptions.current }
      : DEFAULT_KEY_COMBINATION_OPTIONS
  }, [])

  const hasCasingTestFailed = React.useCallback(
    (eventKey: string, optionKeys: readonly string[] | undefined) => {
      if (isKeyCombinationCasingIgnored) return false

      const passesCasingTest = optionKeys?.includes(eventKey)

      return !passesCasingTest
    },
    [],
  )

  const handleKeyCombinationDown = React.useCallback(
    (event: KeyboardEvent, options: HotkeysEvent) => {
      if (!freshOnMatch.current) return

      if (hasCasingTestFailed(event.key, options?.keys)) return

      freshOnMatch.current(event, options)
    },
    [hasCasingTestFailed],
  )

  useHotkeys(memoizedKeyCombination, handleKeyCombinationDown, memoizedOptions)
}

export { useKeyboardHotkey }
