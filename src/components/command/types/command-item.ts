import { CommandItem as CommandItemPrimitive } from "cmdk";

type CommandItemPrimitiveType = typeof CommandItemPrimitive;

type CommandItemProps = React.ComponentPropsWithRef<CommandItemPrimitiveType>;

export type { CommandItemProps };
