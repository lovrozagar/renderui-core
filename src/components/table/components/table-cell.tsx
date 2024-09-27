import { DEFAULT_TABLE_CELL_CLASSNAME } from '@/components/table/constants/constants'
import type { TableCellProps } from '@/components/table/types/table-cell'
import { cn } from '@renderui/utils'

const TableCell = (props: TableCellProps) => {
	const { className, ...restProps } = props

	return <td slot='cell' className={cn(DEFAULT_TABLE_CELL_CLASSNAME, className)} {...restProps} />
}

export { TableCell }
