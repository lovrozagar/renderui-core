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
  Skeleton,
  Toaster,
  toastError,
} from '@/components'
import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center gap-8'>
      {/* <Button
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
      </Select> */}
      <NavigationMenu className='z-30' viewportProps={{ className: 'bg-mode-accent' }}>
        <NavigationMenuItem value='AEF'>
          <NavigationMenuTrigger>Trigger 1</NavigationMenuTrigger>
          <NavigationMenuContent className='bg-mode-accent'>
            <div className='w-[300px]'>
              Content that is displayed Some othe content that is displayed eaf ae faef eaaef aefk
              peaf piajef pieaj pifjpiaejf pieaj piaej paei jpaeijeaip jeapij p Some othe content
              that is displayed eaf ae faef eaaef aefk peaf piajef pieaj pifjpiaejf pieaj piaej paei
              jpaeijeaip jeapij p Some othe content that is displayed eaf ae faef eaaef aefk peaf
              piajef pieaj pifjpiaejf pieaj piaej paei jpaeijeaip jeapij p
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value='aef'>
          <NavigationMenuTrigger>Trigger 2</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className='min-w-[400px]'>
              Some othe content that is displayed eaf ae faef eaaef aefk peaf piajef pieaj
              pifjpiaejf pieaj piaej paei jpaeijeaip jeapij p displayed eaf ae faef eaaef aefk peaf
              piajef pieaj pifjpiaejf pieaj piaej paei jpaeijeaip jeapij p Some othe content that is
              displayed
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
      <div className='relative z-20'>Text bellow popover</div>
      <Select>
        <SelectTrigger className='w-[200px]'>Select</SelectTrigger>
        <SelectContent hasScroll>
          {Array.from({ length: 20 }).map((_, index) => (
            <SelectItem value={index}>{index}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className='grid gap-4'>
        <Skeleton className='h-[40px] w-[200px]' />
      </div>
      <Toaster />
    </div>
  )
}

export { App }
