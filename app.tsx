import {
  Checkbox,
  Combobox,
  ComboboxContent,
  ComboboxItem,
  ComboboxTrigger,
  RadioGroup,
  RadioGroupItem,
  TextInput,
} from '@/components'
import React, { useState } from 'react'

const App = () => {
  const [checkbox, setCheckbox] = useState(false)
  const [radio, setRadio] = useState(1)

  return (
    <div className='min-h-screen w-full flex items-center justify-center gap-8'>
      <TextInput isInvalid />
      <Combobox isInvalid>
        <ComboboxTrigger>trigger</ComboboxTrigger>
        <ComboboxContent>
          <ComboboxItem value={1}>value</ComboboxItem>
        </ComboboxContent>
      </Combobox>
      <Checkbox
        isInvalid={!checkbox}
        isChecked={checkbox}
        onCheckedChange={(value) => setCheckbox(value)}
      />
      <RadioGroup
        isInvalid={!radio}
        value={radio}
        onValueChange={(value) => setRadio(value as number)}
      >
        <RadioGroupItem value={1} />
        <RadioGroupItem value={2} />
      </RadioGroup>
    </div>
  )
}

export { App }
