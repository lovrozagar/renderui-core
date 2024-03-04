import { Simplify } from '@renderui/types'

import { AsChildProp } from '@/components/_shared/types/as-child'
import { NonNullableVariantProps } from '@/components/_shared/types/variants'
import { loaderClasses } from '@/components/loader/classes/loader-classes'

type LoaderRef = React.ElementRef<'span'>

type LoaderPrimitiveProps = React.ComponentPropsWithoutRef<'span'>

type LodaerRenderUIProps = NonNullableVariantProps<typeof loaderClasses>

type LoaderProps = Simplify<LoaderPrimitiveProps & LodaerRenderUIProps & AsChildProp>

export type { LoaderProps, LoaderRef }
