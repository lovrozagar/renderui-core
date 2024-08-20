import { Simplify } from "@/components/_shared/types/simplify";
import { FormEvent } from "react";

import { AsChildProp } from "@/components/_shared/types/as-child";

type FormPrimitiveProps = React.ComponentPropsWithRef<"form">;

type FormRenderUIProps = {
  isDefaultPreventedOnSubmit?: boolean;
  onSubmitWithFields?: (
    formData?: { [k: string]: FormDataEntryValue },
    event?: FormEvent
  ) => void;
};

type FormProps = Simplify<FormPrimitiveProps & FormRenderUIProps & AsChildProp>;

export type { FormProps };
