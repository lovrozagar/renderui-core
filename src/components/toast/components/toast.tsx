'use client'

import { CrossSmallIcon } from '@/components/_shared/components/icons/cross-small-icon'
import { DEFAULT_TOAST_PROPS } from '@/components/toast/constants/constants'
import type { ToastClasses, ToastContentProps, ToastProps } from '@/components/toast/types/toast'
import { chain, cn, getOptionalObject } from '@renderui/utils'
import { toast } from 'sonner'

const ToastContent = (props: ToastContentProps) => {
	const { t, title, description, styles, closeButtonProps, actionButtonProps, children } = props

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
					<p
						className={cn(
							'text-sm m-0 mt-2 leading-[1.2] text-white font-medium',
							descriptionClassname,
						)}
					>
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
			{typeof children === 'function' ? children(t) : children}
			<button
				className={cn(
					'absolute cursor-pointer top-[4px] right-[4px] size-[24px] z-[1] flex items-center justify-center p-0 border-none text-neutral-700 transition-colors duration-fast appearance-none bg-transparent rounded outline-none ring-offset-0 ring-ring-color focus-visible:ring-[2px]',
					buttonClassName,
					closeButtonClassName,
				)}
				onClick={chain(() => toast.dismiss(t), onCloseButtonClick)}
				{...restCloseButtonProps}
			>
				{closeButtonChildren ?? <CrossSmallIcon className='size-3.5' />}
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
	button: 'text-mode-contrast',
})

const toastSuccess = toastFactory({
	container: 'bg-green-200 border-green-500/80',
	title: 'text-green-800',
	description: 'text-green-900',
	button: 'text-green-900 hover:bg-green-400/70',
})

const toastError = toastFactory({
	container: 'bg-red-200 border-red-500/80',
	title: 'text-red-800',
	description: 'text-red-900',
	button: 'text-red-900 hover:bg-red-400/70',
})

const toastInfo = toastFactory({
	container: 'bg-sky-200 border-sky-500/80',
	title: 'text-sky-800',
	description: 'text-sky-900',
	button: 'text-sky-900 hover:bg-sky-400/70',
})

const toastWarning = toastFactory({
	container: 'bg-amber-200 border-amber-500/80',
	title: 'text-amber-800',
	description: 'text-amber-900',
	button: 'text-amber-900 hover:bg-amber-400/70',
})

export { toastDefault as toast, toastError, toastInfo, toastSuccess, toastWarning }

export type { ToastProps }
