'use client'

import { DEFAULT_TOAST_PROPS } from '@/components/toast/constants/constants'
import { ToastClasses, ToastContentProps, ToastProps } from '@/components/toast/types/toast'
import { Cross2Icon } from '@radix-ui/react-icons'
import { chain, cn, getOptionalObject } from '@renderui/utils'
import React from 'react'
import { toast } from 'sonner'

const ToastContent = (props: ToastContentProps) => {
  const { t, title, description, styles, closeButtonProps, actionButtonProps } = props

  const {
    className: closeButtonClassName,
    children: closeButtonChildren,
    onClick: onCloseButtonClick,
    ...restCloseButtonProps
  } = getOptionalObject(closeButtonProps)

  const {
    className: actionButtonClassName,
    children: actionButtonChildren,
    onClick: onActionButtonClick,
    ...restActionButtonProps
  } = getOptionalObject(actionButtonProps)

  const {
    title: titleClassName,
    container: containerClassName,
    button: buttonClassName,
    description: descriptionClassname,
  } = styles

  return (
    <div
      className={cn(
        'select-none p-4 w-auto sm:w-[356px] min-w-[356px] box-border rounded-[8px] border-[1px] items-center justify-center relative gap-3 max-h-[300px] overflow-auto',
        containerClassName,
      )}
    >
      <div>
        {title ? (
          <p className={cn('text-sm font-bold text-white', titleClassName)}>{title}</p>
        ) : null}
        {description ? (
          <p className={cn('text-sm m-0 mt-2 leading-[1.2] text-white', descriptionClassname)}>
            {description}
          </p>
        ) : null}
      </div>
      {actionButtonProps ? (
        <button
          className={cn(
            'relative box-border flex min-w-[100px] mt-1 ml-auto shrink-0 cursor-pointer text-end items-center justify-center rounded border-none bg-brand-blue-accent px-2 py-1 text-white transition-colors duration-fast',
            actionButtonClassName,
          )}
          onClick={() => onActionButtonClick(t)}
          {...restActionButtonProps}
        >
          {actionButtonChildren}
        </button>
      ) : null}
      <button
        className={cn(
          'absolute cursor-pointer top-[4px] right-[4px] size-[24px] [&_>_svg]:size-[10px] z-[1] flex items-center justify-center p-0 border-none text-neutral-700 transition-colors duration-fast appearance-none bg-transparent rounded',
          buttonClassName,
          closeButtonClassName,
        )}
        onClick={chain(() => toast.dismiss(t), onCloseButtonClick)}
        {...restCloseButtonProps}
      >
        {closeButtonChildren ?? <Cross2Icon />}
      </button>
    </div>
  )
}

const toastFactory = (styles: ToastClasses) => {
  return (props: ToastProps = {}) => {
    const { title, description, children, closeButtonProps, actionButtonProps, ...restProps } =
      props

    toast.custom(
      (t) => (
        <ToastContent
          t={t}
          title={title}
          description={description}
          styles={styles}
          closeButtonProps={closeButtonProps}
          actionButtonProps={actionButtonProps}
        />
      ),
      { ...DEFAULT_TOAST_PROPS, ...restProps },
    )
  }
}

const toastDefault = toastFactory({
  container: 'bg-mode border-neutral',
  title: 'text-mode-contrast',
  description: 'text-mode-contrast-accent',
  button: '',
})

const toastSuccess = toastFactory({
  title: 'text-green-800',
  container: 'bg-green-200 border-green-500/80',
  button: 'hover:bg-green-400/70',
  description: 'text-green-950',
})

const toastError = toastFactory({
  title: 'text-red-800',
  container: 'bg-red-200 border-red-500/80',
  button: 'hover:bg-red-400/70',
  description: 'text-red-950',
})

const toastInfo = toastFactory({
  title: 'text-sky-800',
  container: 'bg-sky-200 border-sky-500/80',
  button: 'hover:bg-sky-400/70',
  description: 'text-sky-950',
})

const toastWarning = toastFactory({
  title: 'text-amber-800',
  container: 'bg-amber-200 border-amber-500/80',
  button: 'hover:bg-amber-400/70',
  description: 'text-amber-950',
})

export { toastDefault as toast, toastError, toastInfo, toastSuccess, toastWarning }

export type { ToastProps }
