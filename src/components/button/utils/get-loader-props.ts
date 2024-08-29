import type { LoaderProps } from '@/components/loader/types/loader'
import { cx, getOptionalObject } from '@renderui/utils'

type GetLoaderPropsArgs = {
	loaderProps: LoaderProps | undefined
	isLoading: boolean | undefined
}

const getLoaderProps = (args: GetLoaderPropsArgs) => {
	const { loaderProps, isLoading } = args

	const {
		ref,
		className,
		position = 'absolute-center',
		...restLoaderProps
	} = getOptionalObject(loaderProps)

	return {
		'ref': ref,
		'data-slot': 'loader',
		position,
		'className': cx(isLoading ? 'text-[rgba(var(--button-color))]' : undefined, className),
		...restLoaderProps,
	}
}

export { getLoaderProps }
