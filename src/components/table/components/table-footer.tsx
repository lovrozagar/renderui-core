import { DEFAULT_TABLE_FOOTER_CLASSNAME } from '@/components/table/constants/constants'
import type { TableFooterProps } from '@/components/table/types/table-footer'
import { cn } from '@renderui/utils'

const TableFooter = (props: TableFooterProps) => {
	const { className, ...restProps } = props

	return (
		<tfoot slot='footer' className={cn(DEFAULT_TABLE_FOOTER_CLASSNAME, className)} {...restProps} />
	)
}

export { TableFooter }
