'use client'

import React from 'react'
import { Toaster as ToasterPrimitive } from 'sonner'

import { ToasterProps } from '@/components/toast/types/toaster'

const Toaster = (props: ToasterProps) => {
  const {
    position = 'top-right',
    closeButton = true,
    visibleToasts = 3,
    duration = 5000,
    ...restProps
  } = props

  return (
    <ToasterPrimitive
      position={position}
      duration={duration}
      closeButton={closeButton}
      visibleToasts={visibleToasts}
      toastOptions={{
        classNames: {
          closeButton:
            'toast-close-button toast-dismiss-button [&[data-close-button].toast-close-button]:left-[unset] [&[data-close-button].toast-close-button]:top-[0.6rem] [&[data-close-button].toast-close-button]:right-[-0.25rem] [&[data-close-button].toast-close-button]:bg-mode [&[data-close-button].toast-close-button_>_svg]:text-mode-foreground [&[data-close-button].toast-close-button]:border-none [&[data-close-button].toast-close-button]:bg-transparent [&[data-close-button].toast-close-button.toast-dismiss-button]:hover:bg-mode-contrast/20 [&[data-close-button].toast-close-button]:outline-none [&[data-close-button].toast-close-button]:focus-visible:bg-mode-contrast/20 [&[data-close-button].toast-close-button]:focus-visible:ring-[2px] [&[data-close-button].toast-close-button]:ring-ring-color [&[data-close-button].toast-close-button]:ring-offset-0 [&[data-close-button].toast-close-button]:[transition:all_200ms,opacity_400ms] duration-[200ms]]',
          toast:
            'toast-base [&[data-sonner-toast]_>_[data-content]_>_[data-title]]:font-medium [&[data-sonner-toast].toast-base]:text-mode-contrast [&[data-sonner-toast].toast-base]:bg-mode [&[data-sonner-toast]_>_[data-icon]]:absolute [&[data-sonner-toast].toast-base]:border-mode-contrast/20 [&[data-sonner-toast][data-type].toast-base]:border-mode/40 [&[data-sonner-toast]_>_[data-icon]]:left-3 [&[data-sonner-toast]_>_[data-icon]]:top-4.5 [&[data-sonner-toast].toast-base]:items-center [&[data-sonner-toast]_>_[data-content]]:mr-1 [&[data-sonner-toast]]:flex-wrap [&[data-sonner-toast]]:content-end  [&[data-sonner-toast][data-type]]:pl-8.5',
          success: '[&[data-sonner-toast][data-type].toast-base]:bg-success',
          error: '[&[data-sonner-toast][data-type].toast-base]:bg-destructive',
          warning: '[&[data-sonner-toast][data-type].toast-base]:bg-warning',
          info: '[&[data-sonner-toast][data-type].toast-base]:bg-info',
          cancelButton:
            'peer toast-cancel-button toast-cancel-dismiss-button [&[data-button][data-cancel]]:focus-visible:ring-[2px] [&[data-button][data-cancel]]:ring-ring-color [&[data-button][data-cancel]]:ring-offset-0 [&[data-button][data-cancel]]:m-0 [&[data-button][data-cancel]]:ml-auto [&[data-button][data-cancel]]:self-end [&[data-button][data-cancel]]:text-mode-contrast [&[data-button][data-cancel]]:focus-visible:bg-mode/50 [&[data-button][data-cancel]]:[transition:all_200ms,opacity_400ms]',
          actionButton:
            '[&[data-button]:not([data-cancel])]:focus-visible:ring-[2px] [&[data-button]:not([data-cancel])]:ring-ring-color [&[data-button]:not([data-cancel])]:ring-offset-0 [&[data-button]:not([data-cancel])]:m-0 [&[data-button]:not([data-cancel])]:ml-auto peer-[.toast-cancel-button.toast-cancel-dismiss-button]:ml-0 [&[data-button]:not([data-cancel])]:self-end [&[data-button]:not([data-cancel])]:bg-mode-contrast [&[data-button]:not([data-cancel])]:text-mode-contrast-foreground [&[data-button]:not([data-cancel])]:focus-visible:bg-mode-contrast-accent-high [&[data-button]:not([data-cancel])]:[transition:all_200ms,opacity_400ms]',
        },
      }}
      {...restProps}
    />
  )
}

export { Toaster }
