import { Simplify } from "@/components/_shared/types/simplify";

import { EyeOpenIcon } from "@/components/_shared/components/icons/eye-open-icon";
import { ButtonProps } from "@/components/button";

type PasswordToggleCustomProps = {
  type: React.ComponentPropsWithRef<"input">["type"];
  passwordToggleIconProps?: React.ComponentPropsWithRef<typeof EyeOpenIcon>;
};

type PasswordToggleProps = Simplify<
  Omit<ButtonProps, "type"> & PasswordToggleCustomProps
>;

export type { PasswordToggleProps };
