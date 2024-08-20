import { Simplify } from "@/components/_shared/types/simplify";

import { AsChildProp } from "@/components/_shared/types/as-child";

type LabelProps = Simplify<React.ComponentPropsWithRef<"label"> & AsChildProp>;

export type { LabelProps };
