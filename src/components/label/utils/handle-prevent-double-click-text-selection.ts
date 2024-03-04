import { ONE } from '@renderui/constants'

function handlePreventDoubleClickTextSelection(
  event: React.MouseEvent<HTMLLabelElement, MouseEvent>,
) {
  if (!event.defaultPrevented && event.detail > ONE) event.preventDefault()
}

export { handlePreventDoubleClickTextSelection }
