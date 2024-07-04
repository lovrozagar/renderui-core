import { Simplify } from '@/components/_shared/types/simplify'
import { toast } from 'sonner'

type ToastProps = Simplify<
  Parameters<(typeof toast)['custom']>[1] & {
    title?: string
    description?: string
    children?: React.ReactNode | ((t: string | number) => React.ReactNode)
    closeButtonProps?: React.ComponentPropsWithoutRef<'button'>
    actionButtonProps?: Omit<React.ComponentPropsWithoutRef<'button'>, 'onClick'> & {
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
