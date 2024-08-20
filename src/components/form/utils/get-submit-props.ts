import type { FormProps } from '@/components/form/types/form'
import { getFormData } from '@/components/form/utils/get-form-data'

/* we are checking if submit handler is attached, if not return undefined to keep server-component functionality */
const getSubmitProps = (
	isDefaultPreventedOnSubmit: FormProps['isDefaultPreventedOnSubmit'],
	onSubmit: FormProps['onSubmit'],
	onSubmitWithFields: FormProps['onSubmitWithFields'],
) => {
	if (!onSubmit && !onSubmitWithFields) return undefined

	return {
		onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
			if (isDefaultPreventedOnSubmit) event.preventDefault()

			if (onSubmit) onSubmit(event)

			if (onSubmitWithFields) onSubmitWithFields(getFormData(event), event)
		},
	}
}

export { getSubmitProps }
