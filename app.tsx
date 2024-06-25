import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Toaster,
  Toggle,
  toast,
  toastError,
  toastInfo,
  toastSuccess,
  toastWarning,
} from '@/components'
import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center gap-8'>
      <Button
        onClick={() =>
          toast({
            title: 'Uspjeh',
            description: 'Uspjesna akcija obavljena',
            action: { label: 'afe', onClick: () => {} },
          })
        }
      >
        TDefault
      </Button>
      <Button
        onClick={() =>
          toastSuccess({
            title: 'Uspjeh',
            description: 'Uspjesna akcija obavljena',
            action: { label: 'afe', onClick: () => {} },
          })
        }
      >
        Tsuccess
      </Button>
      <Button
        onClick={() => toastError({ title: 'Uspjeh', description: 'Uspjesna akcija obavljena' })}
      >
        Terror
      </Button>
      <Button
        onClick={() => toastWarning({ title: 'Uspjeh', description: 'Uspjesna akcija obavljena' })}
      >
        Twarning
      </Button>
      <Button
        onClick={() => toastInfo({ title: 'Uspjeh', description: 'Uspjesna akcija obavljena' })}
      >
        Tinfo
      </Button>
      <Button color='primary' variant='shadow'>
        Button
      </Button>
      <Toggle color='destructive'>Toggle</Toggle>
      <Dialog>
        <DialogTrigger>Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Sheet>
        <SheetTrigger>Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetClose asChild>
              <Button>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <Toaster />
    </div>
  )
}

export { App }
