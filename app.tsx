import { Tabs, TabsTrigger, TabsTriggerList } from '@/components'
import React, { useState } from 'react'

const App = () => {
  const [state, setValue] = useState('')

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center gap-8'>
      <Tabs value={state} onValueChange={setValue}>
        <TabsTriggerList>
          <TabsTrigger asChild value={1}>
            <a>Trigger 1</a>
          </TabsTrigger>
          <TabsTrigger value={2}>Trigger 2</TabsTrigger>
        </TabsTriggerList>
      </Tabs>
    </div>
  )
}

export { App }
