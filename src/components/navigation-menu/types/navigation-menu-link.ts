import { NavigationMenuLink as NavigationMenuLinkPrimitive } from "@radix-ui/react-navigation-menu";
import { Simplify } from "@/components/_shared/types/simplify";

import { ButtonProps } from "@/components/button";

type NavigationMenuLinkPrimitiveProps = React.ComponentPropsWithRef<
  typeof NavigationMenuLinkPrimitive
>;

type NavigationMenuLinkButtonProps = ButtonProps;

type NavigationMenuLinkLinkProps = Pick<
  NavigationMenuLinkPrimitiveProps,
  "active" | "onSelect"
>;

type NavigationMenuLinkProps = Simplify<
  NavigationMenuLinkButtonProps & NavigationMenuLinkLinkProps
>;

export type { NavigationMenuLinkProps };
