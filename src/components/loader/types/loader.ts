import type { Simplify } from '@/components/_shared/types/simplify'

import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { NonNullableVariantProps } from '@/components/_shared/types/variants'
import type { loaderClasses } from '@/components/loader/classes/loader-classes'

type LoaderPrimitiveProps = React.ComponentPropsWithRef<'span'>

type LodaerRenderUIProps = NonNullableVariantProps<typeof loaderClasses>

type LoaderProps = Simplify<LoaderPrimitiveProps & LodaerRenderUIProps & AsChildProp>

export type { LoaderProps }
