import { Button, Dialog, DialogContent, DialogTrigger, Toaster, toastSuccess } from '@/components'
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
      <Toaster />
    </div>
  )
}

export { App }
