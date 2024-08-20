import { Simplify } from "@/components/_shared/types/simplify";
import React from "react";

import { AsChildProp } from "@/components/_shared/types/as-child";

type FlexPropsPrimitiveProps = React.ComponentPropsWithRef<"div">;

type FlexboxCustomProps = {
  growChildren?: boolean;
  center?: boolean;
};

type FlexProps = Simplify<
  FlexPropsPrimitiveProps & FlexboxCustomProps & AsChildProp
>;

export type { FlexProps };
