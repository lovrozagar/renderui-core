import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  Toaster,
  toastSuccess,
} from '@/components'
import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center gap-8'>
      <Button
        onClick={() =>
          toastSuccess({
            title: 'Uspjeh',
            description: 'Uspjesna akcija obavljena',
            action: { label: 'afe', onClick: () => {} },
          })
        }
      >
        TSuccess
      </Button>
      <Dialog>
        <DialogTrigger>Trigger</DialogTrigger>
        <DialogContent>Content</DialogContent>
      </Dialog>
      <Select>
        <SelectTrigger
          className='w-[300px]'
          placeholder='Select item...'
          startContent={'start'}
          endContent={'end'}
        />
        <SelectContent>
          <SelectItem value='item-1'>Item 1</SelectItem>
          <SelectItem value='item-2'>Item 2</SelectItem>
          <SelectItem value='item-3'>Item 3</SelectItem>
        </SelectContent>
      </Select>
      <Toaster />
    </div>
  )
}

export { App }
