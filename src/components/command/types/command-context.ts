import { CommandProps } from "@/components/command/types/command";

type CommandContext = {
  type: CommandProps["type"];
  setValue: React.Dispatch<
    React.SetStateAction<string | (readonly string[] & string)>
  >;
};

export type { CommandContext };
