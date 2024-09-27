import {
	DEFAULT_TABLE_CLASSNAME,
	DEFAULT_TABLE_CONTAINER_CLASSNAME,
} from '@/components/table/constants/constants'
import type { TableProps } from '@/components/table/types/table'
import { cn, getOptionalObject } from '@renderui/utils'

const Table = (props: TableProps) => {
	const { containerProps, className: tableClassName, ...restTableProps } = props

	const { className: containerClassName, ...restContainerProps } = getOptionalObject(containerProps)

	return (
		<div
			slot='container'
			className={cn(DEFAULT_TABLE_CONTAINER_CLASSNAME, containerClassName)}
			{...restContainerProps}
		>
			<table
				slot='base'
				className={cn(DEFAULT_TABLE_CLASSNAME, tableClassName)}
				{...restTableProps}
			/>
		</div>
	)
}

export { Table }
