import { DEFAULT_TABLE_HEAD_CLASSNAME } from '@/components/table/constants/constants'
import type { TableHeadProps } from '@/components/table/types/table-head'
import { cn } from '@renderui/utils'

const TableHead = (props: TableHeadProps) => {
	const { className, ...restProps } = props

	return <th slot='head' className={cn(DEFAULT_TABLE_HEAD_CLASSNAME, className)} {...restProps} />
}

export { TableHead }
