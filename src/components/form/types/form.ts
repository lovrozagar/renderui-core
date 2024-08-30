import type { Simplify } from '@/components/_shared/types/simplify'
import type { FormEvent } from 'react'

import type { AsChildProp } from '@/components/_shared/types/as-child'

type FormPrimitiveProps = React.ComponentPropsWithRef<'form'>

type FormCustomProps = {
	isDefaultPreventedOnSubmit?: boolean
	onSubmitWithFields?: (formData?: { [k: string]: FormDataEntryValue }, event?: FormEvent) => void
}

type FormProps = Simplify<FormPrimitiveProps & FormCustomProps & AsChildProp>

export type { FormProps }
