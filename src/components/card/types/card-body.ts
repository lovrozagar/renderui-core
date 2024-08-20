import { Simplify } from "@/components/_shared/types/simplify";
import React from "react";

import { AsChildProp } from "@/components/_shared/types/as-child";

type CardBodyProps = Simplify<React.ComponentPropsWithRef<"div"> & AsChildProp>;

export type { CardBodyProps, CardBodyRef };
