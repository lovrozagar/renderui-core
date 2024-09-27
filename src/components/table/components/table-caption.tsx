import { DEFAULT_TABLE_CAPTION_CLASSNAME } from '@/components/table/constants/constants'
import type { TableCaptionProps } from '@/components/table/types/table-caption'
import { cn } from '@renderui/utils'

const TableCaption = (props: TableCaptionProps) => {
	const { className, ...restProps } = props

	return (
		<caption
			slot='caption'
			className={cn(DEFAULT_TABLE_CAPTION_CLASSNAME, className)}
			{...restProps}
		/>
	)
}

export { TableCaption }
