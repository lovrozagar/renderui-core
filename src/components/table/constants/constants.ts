const DEFAULT_TABLE_CONTAINER_CLASSNAME = '_table-container relative w-full overflow-auto'

const DEFAULT_TABLE_CLASSNAME = '_table w-full caption-bottom text-sm'

const DEFAULT_TABLE_HEADER_CLASSNAME = '_table-header [&_tr]:border-b [&_tr]:border-mode-accent'

const DEFAULT_TABLE_BODY_CLASSNAME = '_table-body [&_tr:last-child]:border-0'

const DEFAULT_TABLE_ROW_CLASSNAME =
	'_table-row border-b border-mode-accent transition-colors hover:bg-mode-accent data-[state=selected]:bg-mode-accent'

const DEFAULT_TABLE_HEAD_CLASSNAME =
	'_table-head h-12 px-4 text-left align-middle font-medium text-mode-300 [&:has([role=checkbox])]:pr-0'

const DEFAULT_TABLE_CELL_CLASSNAME = '_table-cell p-4 align-middle [&:has([role=checkbox])]:pr-0'

const DEFAULT_TABLE_FOOTER_CLASSNAME =
	'_table-footer border-t border-mode-accent bg-mode-900 font-medium [&>tr]:last:border-b-0'

const DEFAULT_TABLE_CAPTION_CLASSNAME = '_table-caption mt-4 text-sm text-mode-300'

export {
	DEFAULT_TABLE_CONTAINER_CLASSNAME,
	DEFAULT_TABLE_CLASSNAME,
	DEFAULT_TABLE_HEADER_CLASSNAME,
	DEFAULT_TABLE_BODY_CLASSNAME,
	DEFAULT_TABLE_ROW_CLASSNAME,
	DEFAULT_TABLE_HEAD_CLASSNAME,
	DEFAULT_TABLE_CELL_CLASSNAME,
	DEFAULT_TABLE_FOOTER_CLASSNAME,
	DEFAULT_TABLE_CAPTION_CLASSNAME,
}
