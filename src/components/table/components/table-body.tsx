import { DEFAULT_TABLE_BODY_CLASSNAME } from '@/components/table/constants/constants'
import type { TableBodyProps } from '@/components/table/types/table-body'
import { cn } from '@renderui/utils'

const TableBody = (props: TableBodyProps) => {
	const { className, ...restProps } = props

	return (
		<tbody slot='body' className={cn(DEFAULT_TABLE_BODY_CLASSNAME, className)} {...restProps} />
	)
}

export { TableBody }
