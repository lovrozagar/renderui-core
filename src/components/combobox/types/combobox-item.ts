import { Simplify } from "@/components/_shared/types/simplify";

import { CommandItemProps } from "@/components/command";

type ComboboxItemCommandItemProps = Omit<
  CommandItemProps,
  "value" | "children"
>;

type ComboboxItemCustomProps = {
  value: string | number;
  children: React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
};

type ComboboxItemProps = Simplify<
  ComboboxItemCommandItemProps & ComboboxItemCustomProps
>;

export type { ComboboxItemProps };
