import {
  Combobox,
  ComboboxContent,
  ComboboxTrigger,
  Select,
  SelectContent,
  SelectTrigger,
  Toaster
} from '@/components'
import React, { useState } from 'react'

const App = () => {
  const [state, setValue] = useState(false)

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center gap-8'>

      <Combobox>
        <ComboboxTrigger>combo</ComboboxTrigger>
        <ComboboxContent />
      </Combobox>
      <Select>
        <SelectTrigger>select</SelectTrigger>
        <SelectContent emptyContent='No data' />
      </Select>
      <Toaster />
    </div>
  )
}

export { App }
