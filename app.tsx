import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/components'
import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center gap-8'>
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
    </div>
  )
}

export { App }
