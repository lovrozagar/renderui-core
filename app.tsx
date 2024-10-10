import { Badge } from '@/components/badge/components/badge'
import {
	Aria,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Combobox,
	ComboboxContent,
	ComboboxItem,
	ComboboxTrigger,
	Command,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	Link,
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
	NumberInput,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Progress,
	RadioGroup,
	RadioGroupItem,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	Separator,
	Skeleton,
	Switch,
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
	Tabs,
	TabsTrigger,
	TabsTriggerList,
	TextArea,
	TextInput,
	Toggle,
	ToggleGroup,
	ToggleGroupItem,
	cn,
	linkClasses,
} from '@/index'

const App = () => {
	return (
		<div className='h-screen w-full  justify-center items-center gap-8'>
			<Table className='my-10 max-w-[800px] mx-auto'>
				<TableHeader>
					<TableRow>
						<TableHead className='w-[100px]'>Invoice</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Method</TableHead>
						<TableHead className='text-right'>Amount</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className='font-medium'>INV001</TableCell>
						<TableCell>Paid</TableCell>
						<TableCell>Credit Card</TableCell>
						<TableCell className='text-right'>$250.00</TableCell>
					</TableRow>
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>Total</TableCell>
						<TableCell className='text-right'>$2,500.00</TableCell>
					</TableRow>
				</TableFooter>
				<TableCaption>A list of your recent invoices.</TableCaption>
			</Table>
			<Menubar>
				<MenubarMenu>
					<MenubarTrigger>File</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>New Tab</MenubarItem>
						<MenubarItem>New Window</MenubarItem>
						<MenubarItem disabled>New Incognito Window</MenubarItem>
						<MenubarSeparator />
						<MenubarSub>
							<MenubarSubTrigger>Share</MenubarSubTrigger>
							<MenubarSubContent>
								<MenubarItem>Email link</MenubarItem>
								<MenubarItem>Messages</MenubarItem>
								<MenubarItem>Notes</MenubarItem>
							</MenubarSubContent>
						</MenubarSub>
						<MenubarSeparator />
						<MenubarItem>Print...</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>Edit</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>Undo</MenubarItem>
						<MenubarItem>Redo</MenubarItem>
						<MenubarSeparator />
						<MenubarSub>
							<MenubarSubTrigger>Find</MenubarSubTrigger>
							<MenubarSubContent>
								<MenubarItem>Search the web</MenubarItem>
								<MenubarSeparator />
								<MenubarItem>Find...</MenubarItem>
								<MenubarItem>Find Next</MenubarItem>
								<MenubarItem>Find Previous</MenubarItem>
							</MenubarSubContent>
						</MenubarSub>
						<MenubarSeparator />
						<MenubarItem>Cut</MenubarItem>
						<MenubarItem>Copy</MenubarItem>
						<MenubarItem>Paste</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>View</MenubarTrigger>
					<MenubarContent>
						<MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
						<MenubarCheckboxItem checked>Always Show Full URLs</MenubarCheckboxItem>
						<MenubarSeparator />
						<MenubarItem inset>Reload</MenubarItem>
						<MenubarItem disabled inset>
							Force Reload
						</MenubarItem>
						<MenubarSeparator />
						<MenubarItem inset>Toggle Fullscreen</MenubarItem>
						<MenubarSeparator />
						<MenubarItem inset>Hide Sidebar</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>Profiles</MenubarTrigger>
					<MenubarContent>
						<MenubarRadioGroup value='benoit'>
							<MenubarRadioItem value='andy'>Andy</MenubarRadioItem>
							<MenubarRadioItem value='benoit'>Benoit</MenubarRadioItem>
							<MenubarRadioItem value='Luis'>Luis</MenubarRadioItem>
						</MenubarRadioGroup>
						<MenubarSeparator />
						<MenubarItem inset>Edit...</MenubarItem>
						<MenubarSeparator />
						<MenubarItem inset>Add Profile...</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
			<div className='pt-2'>
				<Separator className='w-full bg-red-500' />
			</div>
			<Skeleton className='h-[60px]' />
			<Card>
				<CardHeader>Header</CardHeader>
				<CardBody>Body</CardBody>
				<CardFooter>Footer</CardFooter>
			</Card>
			<div className='pt-4'>
				<Badge color='primary' tabIndex={0}>
					Badge
				</Badge>
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger>Open</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Profile</DropdownMenuItem>
					<DropdownMenuItem>Billing</DropdownMenuItem>
					<DropdownMenuItem>Team</DropdownMenuItem>
					<DropdownMenuItem>Subscription</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<Card>
				<CardBody>aefeaea</CardBody>
			</Card>
			<div className='max-w-[300px] grid gap-4 justify-items-start p-8'>
				<Tabs color='destructive' defaultValue={1} animationDuration={300}>
					<TabsTriggerList>
						<TabsTrigger value={1}>Trigger</TabsTrigger>
						<TabsTrigger value={2}>Trigger</TabsTrigger>
					</TabsTriggerList>
				</Tabs>
				<Button color='destructive'>Button</Button>
				<Switch color='destructive' />
				<Badge>Badge</Badge>
				<div>
					<Popover>
						<PopoverTrigger>Trigger</PopoverTrigger>
						<PopoverContent>Content</PopoverContent>
					</Popover>
				</div>
				<Select color='destructive'>
					<SelectTrigger>Triger</SelectTrigger>
					<SelectContent>
						<SelectItem value={'item 1'}>Item 1</SelectItem>
						<SelectItem value={'item 2'}>Item 2</SelectItem>
					</SelectContent>
				</Select>
				<Combobox color='destructive'>
					<ComboboxTrigger>Triger</ComboboxTrigger>
					<ComboboxContent>
						<ComboboxItem value={'item 1'}>Item 1</ComboboxItem>
						<ComboboxItem value={'item 2'}>Item 2</ComboboxItem>
					</ComboboxContent>
				</Combobox>
				<Command color='destructive'>
					<CommandInput />
					<CommandList>
						<CommandGroup>
							<CommandItem value='2' color='info'>
								Item
							</CommandItem>
							<CommandItem value='3'>Item</CommandItem>
							<CommandItem value='4'>Item3</CommandItem>
						</CommandGroup>
					</CommandList>
				</Command>
				<TextInput color='destructive' placeholder='Enter text here' />
				<TextInput color='destructive' variant='outline' placeholder='Enter text here' />
				<NumberInput color='destructive' placeholder='Enter number here' />
				<Aria>afe</Aria>
				<a href='/' className={cn(linkClasses())}>
					Link
				</a>
				<Link color='destructive' href='/'>
					Link
				</Link>
				<Progress color='success' value={50} />
				<RadioGroup color='destructive'>
					<RadioGroupItem value={1} color='success' />
					<RadioGroupItem value={2} />
				</RadioGroup>
				<TextArea color='success' />
				<Toggle color='destructive' className='rounded-full' hasRipple>
					Toggle
				</Toggle>
				<ToggleGroup type='multiple' color='success'>
					<ToggleGroupItem value={1}>Item 1</ToggleGroupItem>
					<ToggleGroupItem value={2}>Item 2</ToggleGroupItem>
				</ToggleGroup>
			</div>
		</div>
	)
}

export { App }
