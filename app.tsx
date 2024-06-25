import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  Toaster,
  toastError,
} from '@/components'
import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center gap-8'>
      <Button
        onClick={() =>
          toastError({
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
        <SelectTrigger className='w-[200px]' placeholder='Select item...' endContent={'end'} />
        <SelectContent>
          <SelectItem value='item-1'>Item 1</SelectItem>
          <SelectItem value='item-2'>Item 2</SelectItem>
          <SelectItem value='item-3'>Item 3</SelectItem>
        </SelectContent>
      </Select>
      <NavigationMenu>
        <NavigationMenuItem value='AEF'>
          <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className='min-w-[200px]'>Content je najbolji jel tak</div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
      <Toaster />
    </div>
  )
}

export { App }
