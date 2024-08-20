import { CommandGroup as CommandGroupPrimitive } from "cmdk";

type CommandGroupPrimitiveType = typeof CommandGroupPrimitive;

type CommandGroupProps = React.ComponentPropsWithRef<CommandGroupPrimitiveType>;

export type { CommandGroupProps };
