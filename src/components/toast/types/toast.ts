import type { Simplify } from '@/components/_shared/types/simplify'
import type { toast } from 'sonner'

type ToastProps = Simplify<
	Parameters<(typeof toast)['custom']>[1] & {
		title?: string
		description?: string
		children?: React.ReactNode | ((t: string | number) => React.ReactNode)
		closeButtonProps?: React.ComponentPropsWithRef<'button'>
		actionButtonProps?: Omit<React.ComponentPropsWithRef<'button'>, 'onClick'> & {
			onClick: (t: string | number) => void
		}
	}
>

type ToastClasses = {
	title: string
	description: string
	container: string
	button: string
}

type ToastContentProps = {
	t: string | number
} & Pick<
	ToastProps,
	'title' | 'description' | 'children' | 'closeButtonProps' | 'actionButtonProps'
> & {
		styles: ToastClasses
	}

export type { ToastProps, ToastClasses, ToastContentProps }
