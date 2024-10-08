import type { useKeyboardHotkey } from '@/components/_shared/hooks/use-keyboard-hotkey'
import type { Simplify } from '@/components/_shared/types/simplify'

type KbdHTMLProps = React.ComponentPropsWithRef<'kbd'>

type KbdCustomProps = {
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

type KbdProps = Simplify<KbdHTMLProps & KbdCustomProps>

export type { KbdProps }
