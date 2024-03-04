import { useKeyboardHotkey } from '@renderui/hooks'
import { Simplify } from '@renderui/types'

type KbdRef = HTMLElement

type KbdHTMLProps = React.ComponentPropsWithoutRef<'kbd'>

type KbdRenderUIProps = {
  asChild?: boolean
  hasIcon?: boolean
  iconPosition?: 'start' | 'end'
  keyCombination?: Parameters<typeof useKeyboardHotkey>[0]['keyCombination']
  keyCombinationOptions?: Parameters<typeof useKeyboardHotkey>[0]['keyCombinationOptions']
  isKeyCombinationCasingIgnored?: Parameters<
    typeof useKeyboardHotkey
  >[0]['isKeyCombinationCasingIgnored']
  onKeyCombinationMatch?: Parameters<typeof useKeyboardHotkey>[0]['onKeyCombinationMatch']
}

type KbdProps = Simplify<KbdHTMLProps & KbdRenderUIProps>

export type { KbdProps, KbdRef }
