import { Simplify } from '@renderui/types'
import { FormEvent } from 'react'

import { AsChildProp } from '@/components/_shared/types/as-child'

type FormRef = React.ElementRef<'form'>

type FormPrimitiveProps = React.ComponentPropsWithoutRef<'form'>

type FormRenderUIProps = {
  isDefaultPreventedOnSubmit?: boolean
  onSubmitWithFields?: (formData?: { [k: string]: FormDataEntryValue }, event?: FormEvent) => void
}

type FormProps = Simplify<FormPrimitiveProps & FormRenderUIProps & AsChildProp>

export type { FormProps, FormRef }
