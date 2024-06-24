import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components'
import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center gap-8'>
      <Accordion type='multiple'>
        <AccordionItem value='1'>
          <AccordionTrigger>Accordion</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export { App }
