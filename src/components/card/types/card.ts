import { Simplify } from "@/components/_shared/types/simplify";
import React from "react";

import { AsChildProp } from "@/components/_shared/types/as-child";
import { NonNullableVariantProps } from "@/components/_shared/types/variants";
import { cardClasses } from "@/components/card/classes/card-classes";

type CardPrimitiveProps = React.ComponentPropsWithRef<"div">;

type CardVariantProps = NonNullableVariantProps<typeof cardClasses>;

type CardProps = Simplify<CardPrimitiveProps & CardVariantProps & AsChildProp>;

export type { CardProps };
