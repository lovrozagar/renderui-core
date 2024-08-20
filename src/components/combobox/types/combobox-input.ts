import { Simplify } from "@/components/_shared/types/simplify";
import { Primitive as primitive } from "@radix-ui/react-primitive";
import React from "react";

import { MagnifyingGlassIcon } from "@/components/_shared/components/icons/magnifying-glass-icon";
import { CommandInputProps } from "@/components/command";

type ComboboxInputCommandInputProps = CommandInputProps;

type ComboboxInputCustomProps = {
  containerProps?: React.ComponentPropsWithRef<typeof primitive.div>;
  iconProps?: React.ComponentPropsWithRef<typeof MagnifyingGlassIcon>;
};

type ComboboxInputProps = Simplify<
  ComboboxInputCommandInputProps & ComboboxInputCustomProps
>;

export type { ComboboxInputProps };
