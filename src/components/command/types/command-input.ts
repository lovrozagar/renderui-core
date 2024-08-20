import { Simplify } from "@/components/_shared/types/simplify";
import { CommandInput as CommandInputPrimitive } from "cmdk";

import { MagnifyingGlassIcon } from "@/components/_shared/components/icons/magnifying-glass-icon";
import { AsChildProp } from "@/components/_shared/types/as-child";

type CommandInputPrimitiveType = typeof CommandInputPrimitive;

type CommandInputPrimitiveProps =
  React.ComponentPropsWithRef<CommandInputPrimitiveType>;

type ComboboxInputCustomProps = {
  containerProps?: Simplify<React.ComponentPropsWithRef<"div"> & AsChildProp>;
  iconProps?: React.ComponentPropsWithRef<typeof MagnifyingGlassIcon>;
};

type CommandInputProps = Simplify<
  CommandInputPrimitiveProps & ComboboxInputCustomProps & AsChildProp
>;

export type { CommandInputProps };
