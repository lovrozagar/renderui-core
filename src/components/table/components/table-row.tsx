import { DEFAULT_TABLE_ROW_CLASSNAME } from '@/components/table/constants/constants'
import type { TableRowProps } from '@/components/table/types/table-row'
import { cn } from '@renderui/utils'

const TableRow = (props: TableRowProps) => {
	const { className, ...restProps } = props

	return <tr slot='row' className={cn(DEFAULT_TABLE_ROW_CLASSNAME, className)} {...restProps} />
}

export { TableRow }
