import { initializeContext } from '@renderui/utils'

type ContentRefContext = {
	contentRef: React.Ref<HTMLDivElement>
}

const [ContentRefProvider, useContentRefContext] = initializeContext<ContentRefContext>({
	errorMessage: 'Components using contentRef context must be wrapped in a <ContentRef />.',
	providerName: 'ContentRefProvider',
	hookName: 'useContentRefContext',
	name: 'ContentRefContext',
})

export { ContentRefProvider, useContentRefContext }
