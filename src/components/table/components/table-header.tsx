import { DEFAULT_TABLE_HEADER_CLASSNAME } from '@/components/table/constants/constants'
import type { TableHeaderProps } from '@/components/table/types/table-header'
import { cn } from '@renderui/utils'

const TableHeader = (props: TableHeaderProps) => {
	const { className, ...restProps } = props

	return (
		<thead slot='header' className={cn(DEFAULT_TABLE_HEADER_CLASSNAME, className)} {...restProps} />
	)
}

export { TableHeader }
