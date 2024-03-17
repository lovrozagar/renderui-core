/* eslint-disable max-lines */
import React, { useState } from 'react'
import { toast } from 'sonner'

import {
  Button,
  Checkbox,
  Combobox,
  ComboboxContent,
  ComboboxItem,
  ComboboxTrigger,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NumberInput,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  Separator,
  Skeleton,
  Switch,
  Tabs,
  TabsContent,
  TabsTrigger,
  TabsTriggerList,
  TextArea,
  TextInput,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
} from '@/components'
import { Field } from '@/components/_shared/components/field/field/field'
import { FieldLabel } from '@/components/_shared/components/field/field-label/field-label'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/accordion'
import { AspectRatio } from '@/components/aspect-ratio'
import { Box } from '@/components/box'
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/collapsible'
import { Container } from '@/components/container'
import { Flex } from '@/components/flex'
import { Form } from '@/components/form'
import { Grid } from '@/components/grid'
import { Heading } from '@/components/heading'
import { Label } from '@/components/label'
import { linkClasses } from '@/components/link'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover'
import { Progress } from '@/components/progress'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/sheet'
import { Slider, SliderThumb } from '@/components/slider'
import { Text } from '@/components/text'
import { Toaster } from '@/components/toast'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip'
import { ModeProvider, setMode, toggleMode } from '@/providers/mode-provider'

const App = () => {
  console.log('App')

  const [state, setState] = useState(false)

  return (
    <div className='bg-mode min-h-full w-full p-5 pb-[1000px] first-line:p-5'>
      <div className='flex flex-col items-start gap-2'>
        <Button variant='plain' color='primary' size='md'>
          Press me
        </Button>
        <Button
          onPress={() => setState(!state)}
          isLoading={state}
          variant='solid'
          color='primary'
          size='md'
          loaderProps={{
            position: 'absolute-center',
          }}
        >
          Press me
        </Button>
        <Button variant='shadow' color='primary' size='md'>
          Press me
        </Button>
        <Button variant='outline' color='primary' size='md'>
          Press me
        </Button>
        <Button variant='reveal' color='primary' size='md'>
          Press me
        </Button>
        <Button variant='ghost' color='primary' size='md'>
          Press me
        </Button>
        <Button variant='text' color='primary' size='md'>
          Press me
        </Button>
        <Button onPress={() => setState(!state)}>set loading</Button>
      </div>
      <Grid className='gap-4'>
        <Accordion type='multiple' className='w-full'>
          <AccordionItem value='val'>
            <AccordionTrigger>Accordion 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value='val2'>
            <AccordionTrigger>Accordion 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value='val3'>
            <AccordionTrigger>Accordion 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>
        <AspectRatio ratio={1} className='max-w-[150px]'>
          <img
            src='https://source.unsplash.com/random'
            alt='random'
            className='size-full object-cover'
          />
        </AspectRatio>
        <Box className='bg-red-800'>Red</Box>
        <Container className='bg-green-500'>Contained</Container>
        <Flex growChildren className='gap-2'>
          <Box className='bg-blue-500'>I am being flexed</Box>
          <Box className='bg-pink-500'>I am being flexed too</Box>
        </Flex>
        <Form onSubmitWithFields={(fields) => console.log(fields)}>
          <Flex>
            <input name='name' className='bg-gray-300' />
            <button type='submit'>Submit</button>
          </Flex>
        </Form>
        <Grid autoFill={300} className='relative'>
          <div className='bg-blue-500'>I am in a grid</div>
          <div className='bg-red-500'>I am in a grid too</div>
          <div className='bg-pink-500'>I am in a grid too too</div>
          <Skeleton type='layer' />
        </Grid>
        <Label className='flex gap-2'>
          Label
          <input name='name' className='bg-gray-300' />
        </Label>
        <Progress value={50} />

        {/* <Loader /> */}
        <Card className=''>
          <CardHeader>
            <CardTitle>I am header of a card</CardTitle>
            <CardDescription>description</CardDescription>
          </CardHeader>
          <CardBody>I am a body of a card</CardBody>
          <CardFooter>
            <Button className='w-fit px-2'>Press me</Button>
            <Button className='w-fit px-2'>Press me</Button>
          </CardFooter>
        </Card>
        <Text>Hi i am a textual text!</Text>
        <Heading as='h1'>Heading 1</Heading>
        <Heading as='h2'>Heading 1</Heading>
        <Heading as='h3'>Heading 1</Heading>
        <Heading as='h4'>Heading 1</Heading>
        <Heading as='h5'>Heading 1</Heading>
        <Heading as='h6'>Heading 1</Heading>
        <Flex className='flex gap-4'>
          <div className=''>
            <Popover>
              <PopoverTrigger>Trigger popover</PopoverTrigger>
              <PopoverContent>
                Content popover Content popoverContent popoverContent popover Content popover
              </PopoverContent>
            </Popover>
            <Tooltip>
              <TooltipTrigger>Trigger tooltip</TooltipTrigger>
              <TooltipContent>This is content</TooltipContent>
            </Tooltip>
          </div>
          <Dialog>
            <DialogTrigger>Sign in</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit title</DialogTitle>
                <DialogDescription>Editing a title has serious...</DialogDescription>
              </DialogHeader>
              <Box>Lovro je najbolji</Box>
              <DialogFooter>
                <DialogClose asChild>
                  <Button color='mode-accent'>Cancel</Button>
                </DialogClose>
                <Button>Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Sheet>
            <SheetTrigger>Sign up</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit title</SheetTitle>
                <SheetDescription>Editing a title has serious...</SheetDescription>
              </SheetHeader>
              <Box>Lovro je najbolji</Box>
              <SheetFooter>
                <Button color='mode-accent'>Cancel</Button>
                <Button color='mode-contrast'>Save</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <Collapsible>
            <CollapsibleTrigger>Collapsible trigger</CollapsibleTrigger>
            <CollapsibleContent>Content</CollapsibleContent>
          </Collapsible>
        </Flex>
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Grid className='grid-cols-[200px_280px] gap-4'>
                <Box className='bg-primary rounded' />
                <Grid className='gap-4'>
                  <NavigationMenuLink variant='ghost' className='justify-start text-start'>
                    <Grid>
                      <Text size='base'>Plisani igracke</Text>
                      <Text size='sm' className='text-muted'>
                        Pronadite najbolje plisane igracke.
                      </Text>
                    </Grid>
                  </NavigationMenuLink>
                  <NavigationMenuLink variant='ghost' className='justify-start text-start'>
                    <Grid>
                      <Text size='base'>Plisani igracke</Text>
                      <Text size='sm' className='text-muted'>
                        Pronadite najbolje plisane igracke.
                      </Text>
                    </Grid>
                  </NavigationMenuLink>
                  <NavigationMenuLink variant='ghost' className='justify-start text-start'>
                    <Grid>
                      <Text size='base'>Plisani igracke</Text>
                      <Text size='sm' className='text-muted'>
                        Pronadite najbolje plisane igracke.
                      </Text>
                    </Grid>
                  </NavigationMenuLink>
                </Grid>
              </Grid>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Business</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Grid className='grid-cols-[220px_300px] gap-4'>
                <Grid className='gap-4'>
                  <NavigationMenuLink variant='ghost' className='justify-start text-start'>
                    <Grid>
                      <Text size='base'>Plisani igracke</Text>
                      <Text size='sm' className='text-muted'>
                        Pronadite najbolje plisane igracke.
                      </Text>
                    </Grid>
                  </NavigationMenuLink>
                  <NavigationMenuLink variant='ghost' className='justify-start text-start'>
                    <Grid>
                      <Text size='base'>Plisani igracke</Text>
                      <Text size='sm' className='text-muted'>
                        Pronadite najbolje plisane igracke.
                      </Text>
                    </Grid>
                  </NavigationMenuLink>
                  <NavigationMenuLink variant='ghost' className='justify-start text-start'>
                    <Grid>
                      <Text size='base'>Plisani igracke</Text>
                      <Text size='sm' className='text-muted'>
                        Pronadite najbolje plisane igracke.
                      </Text>
                    </Grid>
                  </NavigationMenuLink>
                </Grid>
                <Box className='bg-primary rounded' />
              </Grid>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Other</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Grid className='grid-cols-[200px_200px] gap-4'>
                <NavigationMenuLink variant='ghost' className='justify-start text-start'>
                  <Grid>
                    <Text size='base'>Plisani igracke</Text>
                    <Text size='sm' className='text-muted'>
                      Pronadite najbolje plisane igracke.
                    </Text>
                  </Grid>
                </NavigationMenuLink>
                <NavigationMenuLink variant='ghost' className='justify-start text-start'>
                  <Grid>
                    <Text size='base'>Plisani igracke</Text>
                    <Text size='sm' className='text-muted'>
                      Pronadite najbolje plisane igracke.
                    </Text>
                  </Grid>
                </NavigationMenuLink>
                <NavigationMenuLink variant='ghost' className='justify-start text-start'>
                  <Grid>
                    <Text size='base'>Plisani igracke</Text>
                    <Text size='sm' className='text-muted'>
                      Pronadite najbolje plisane igracke.
                    </Text>
                  </Grid>
                </NavigationMenuLink>
                <NavigationMenuLink variant='ghost' className='justify-start text-start'>
                  <Grid>
                    <Text size='base'>Plisani igracke</Text>
                    <Text size='sm' className='text-muted'>
                      Pronadite najbolje plisane igracke.
                    </Text>
                  </Grid>
                </NavigationMenuLink>
                <NavigationMenuLink variant='ghost' className='justify-start text-start'>
                  <Grid>
                    <Text size='base'>Plisani igracke</Text>
                    <Text size='sm' className='text-muted'>
                      Pronadite najbolje plisane igracke.
                    </Text>
                  </Grid>
                </NavigationMenuLink>
                <NavigationMenuLink variant='ghost' className='justify-start text-start'>
                  <Grid>
                    <Text size='base'>Plisani igracke</Text>
                    <Text size='sm' className='text-muted'>
                      Pronadite najbolje plisane igracke.
                    </Text>
                  </Grid>
                </NavigationMenuLink>
              </Grid>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
        <Box>
          <Toggle>Toggle</Toggle>
        </Box>
        <Box>
          <ToggleGroup>
            <label htmlFor='lbl'>Toggle group</label>
            <ToggleGroupItem value='1'>Item 1</ToggleGroupItem>
            <ToggleGroupItem value='2'>Item 2</ToggleGroupItem>
          </ToggleGroup>
        </Box>
        <Box>
          <Tabs type='click' variant='outline' defaultValue='2'>
            <TabsTriggerList className=''>
              <TabsTrigger value='1'>Item 1</TabsTrigger>
              <TabsTrigger value='2'>Item 2</TabsTrigger>
              <TabsTrigger id='lbl' value='3'>
                Item 3
              </TabsTrigger>
            </TabsTriggerList>
            <TabsContent value='1'>Content 1</TabsContent>
            <TabsContent value='2'>Content 2</TabsContent>
            <TabsContent value='3'>Content 3</TabsContent>
          </Tabs>
        </Box>
        <Box className='max-w-[300px]'>
          <Command>
            <CommandInput />
            {/* <CommandEmpty>No results.</CommandEmpty> */}
            <CommandList>
              <CommandGroup>
                <CommandItem value='command1' className='p-0'>
                  <Button
                    variant='plain'
                    hasRipple={false}
                    hasDefaultPressedStyles={false}
                    className='size-full justify-start py-2'
                    preventFocusOnPress
                  >
                    option 1
                  </Button>
                </CommandItem>
                <CommandItem value='command2' className='p-0'>
                  <Button
                    variant='plain'
                    hasRipple={false}
                    hasDefaultPressedStyles={false}
                    className='size-full justify-start py-2'
                    preventFocusOnPress
                  >
                    option 2
                  </Button>
                </CommandItem>
                <CommandItem value='command3' className='p-0'>
                  <Button
                    variant='plain'
                    hasRipple={false}
                    hasDefaultPressedStyles={false}
                    className='size-full justify-start py-2'
                    preventFocusOnPress
                  >
                    option 3
                  </Button>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </Box>
        <Box>
          <Combobox>
            <ComboboxTrigger placeholder='Select an option' className='w-[200px]' />
            <ComboboxContent emptyContent=''>
              <ComboboxItem value='value 1'>Item 1</ComboboxItem>
              <ComboboxItem value='value 2'>Item 2</ComboboxItem>
              <ComboboxItem value='value 3'>Item 3</ComboboxItem>
            </ComboboxContent>
          </Combobox>
        </Box>
        <Box>
          <Label htmlFor='select'>Select</Label>
          <Select>
            <SelectTrigger
              variant='outline'
              id='select'
              placeholder='Select an option'
              className='w-[200px] text-mode-accent-foreground'
            />
            <SelectContent hasScroll>
              <SelectItem value='item 1'>Item 1</SelectItem>
              <SelectItem value='item 2'>item 2</SelectItem>
              <SelectItem value='item 13'>Item 3</SelectItem>
              <SelectItem value='item 4'>Item 4</SelectItem>
              <SelectItem value='item 5'>Item 5</SelectItem>
              <SelectItem value='item 6'>item 6</SelectItem>
              <SelectItem value='item 7'>Item 7</SelectItem>
              <SelectItem value='item 8'>Item 8</SelectItem>
              <SelectItem value='item 9'>Item 9</SelectItem>
              <SelectItem value='item 10'>Item 10</SelectItem>
              <SelectItem value='item 11'>item 11</SelectItem>
              <SelectItem value='item 12'>Item 12</SelectItem>
              <SelectItem value='item 13'>Item 14</SelectItem>
              <SelectItem value='item 14'>Item 15</SelectItem>
              <SelectItem value='item 15'>item 16</SelectItem>
              <SelectItem value='item 16'>Item 17</SelectItem>
            </SelectContent>
          </Select>
        </Box>
        <Box className='w-fit'>
          {/* <Kbd
            onKeyCombinationMatch={() => console.log('afe')}
            keyCombination={['Control', 'k']}
            keyCombinationOptions={{
              preventDefault: true,
            }}
          >
            Shift + 3
          </Kbd> */}
        </Box>
        <Box>
          <Label htmlFor='text'>Text input</Label>
          <TextInput
            id='text'
            placeholder='Input text here...'
            inputContainerProps={{ className: 'max-w-[200px]' }}
          />
        </Box>
        <Box>
          <Label htmlFor='number'>Number input</Label>
          <NumberInput
            variant='outline'
            id='number'
            placeholder='Input number here...'
            inputContainerProps={{ className: 'max-w-[200px]' }}
          />
        </Box>
        <Box>
          <Label htmlFor='number'>Number input</Label>
          <TextArea
            variant='outline'
            id='number'
            placeholder='Input number here...'
            inputContainerProps={{ className: 'max-w-[200px]' }}
          />
        </Box>
        <Box>
          <Flex className='items-center gap-3'>
            <Label htmlFor='checkbox'>Number input</Label>
            <Checkbox id='checkbox' />
          </Flex>
        </Box>
        <Box>
          <Flex className='items-center gap-3'>
            <Label htmlFor='switch'>Number input</Label>
            <Switch id='switch' />
          </Flex>
        </Box>
        <Box>
          <Form onSubmitWithFields={(fields) => console.log(fields)}>
            <Flex className='items-center gap-3'>
              <RadioGroup name='radio'>
                <Flex className='items-center gap-3'>
                  <RadioGroupItem id='check-1' value='1' />
                  <label htmlFor='check-1'>Number input</label>
                </Flex>
                <Flex className='items-center gap-3'>
                  <RadioGroupItem id='check-2' value='2' />
                  <label htmlFor='check-2'>Number input</label>
                </Flex>
                <Flex className='items-center gap-3'>
                  <RadioGroupItem id='check-3' value='3' />
                  <label htmlFor='check-3'>Number input</label>
                </Flex>
              </RadioGroup>
            </Flex>
            <Button
              type='submit'
              className='mt-4'
              onPress={() =>
                toast.success('Promjene su spremljene.', {
                  cancel: {
                    label: 'Confirm',
                    onClick: () => console.log('undo'),
                  },
                  action: {
                    label: 'Undo',
                    onClick: () => console.log('undo'),
                  },
                })
              }
            >
              toast
            </Button>
            <Button type='submit' className='mt-4' onPress={() => toast('Submit', {})}>
              toast
            </Button>
            <Button
              type='submit'
              className='mt-4'
              onPress={() =>
                toast.error('Submit', { description: 'Your form was submitted successfully.' })
              }
            >
              toast
            </Button>
            <Button
              type='submit'
              className='mt-4'
              onPress={() =>
                toast.info('Submit', {
                  description:
                    'Your form was submitted successfully without any client side errors.',
                  action: {
                    label: 'Undo',
                    onClick: () => console.log('undo'),
                  },
                  cancel: {
                    label: 'Confirm',
                    onClick: () => console.log('undo'),
                  },
                })
              }
            >
              toast
            </Button>
            <Button
              type='submit'
              className='mt-4'
              onPress={() =>
                toast.warning('Submit', {
                  description:
                    'Your form was submitted successfully without any client side errors this time today at this very time, yay.',
                  cancel: {
                    label: 'Cancel',
                    onClick: () => console.log('undo'),
                  },
                  action: {
                    label: 'Confirm',
                    onClick: () => console.log('undo'),
                  },
                })
              }
            >
              toast
            </Button>
          </Form>
        </Box>
      </Grid>
      <Separator className='my-2' />
      <a tabIndex={0} className={linkClasses()}>
        Link
      </a>
      <Toaster />
      <Box className='mt-4'>
        <Slider orientation='horizontal' defaultValue={[25, 75]} minStepsBetweenThumbs={5}>
          <SliderThumb />
          <SliderThumb />
        </Slider>
      </Box>
      <Grid cols={3} className='mt-2' />
      <Grid className='my-2' cols={3}>
        <Field
          error='Message afipjeapifj jefpiaj paeijf piaej piefaj aipe jfpieaj piea jip japi aejpi jaeip
          jae pij epia jipae'
        >
          <FieldLabel>Lablel</FieldLabel>
          <TextInput />
        </Field>
      </Grid>
      <Box>Content shift</Box>
      <Collapsible>
        <CollapsibleTrigger>Collapse</CollapsibleTrigger>
        <CollapsibleContent>
          <Box className='pt-1'>Some text about something</Box>
        </CollapsibleContent>
      </Collapsible>
      <ModeProvider defaultMode='system' modeLocalStorageKey='app-mode'>
        <Grid className='bg-mode' onClick={() => toggleMode(true, 'app-mode')}>
          aefaef
        </Grid>
      </ModeProvider>
    </div>
  )
}

export { App }
