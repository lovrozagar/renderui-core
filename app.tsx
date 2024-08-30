import {
	Button,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Sheet,
	SheetContent,
	SheetTrigger,
} from '@/index'

const App = () => {
	return (
		<div className='h-screen w-full flex justify-center items-center gap-8'>
			{/* <div className='w-[300px]'>
				<Carousel>
					{({ scrollTo }) => (
						<div>
							<CarouselViewport>
								<CarouselSlider>
									{[1, 2, 3].map((_, index) => (
										<CarouselItem key={index}>
											<img
												src='https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
												alt=''
												className='w-[300px]'
											/>
										</CarouselItem>
									))}
								</CarouselSlider>

								<CarouselPrevious>
									<ChevronLeftIcon />
								</CarouselPrevious>

								<CarouselNext>
									<ChevronRightIcon />
								</CarouselNext>

								<CarouselIndicators />
								<CarouselProgress />
							</CarouselViewport>
							<div onClick={() => scrollTo(0)}>1</div>
							<div onClick={() => scrollTo(1)}>2</div>
							<div onClick={() => scrollTo(2)}>3</div>
						</div>
					)}
				</Carousel>
			</div> */}
			<Popover>
				<PopoverTrigger>Trigger 1</PopoverTrigger>
				<PopoverContent>Content 1</PopoverContent>
			</Popover>
			<Popover>
				<PopoverTrigger>Trigger 2</PopoverTrigger>
				<PopoverContent>Content 2</PopoverContent>
			</Popover>
			<Sheet>
				<SheetTrigger>eafa</SheetTrigger>
				<SheetContent>
					<Button>bUTTON</Button>
				</SheetContent>
			</Sheet>
		</div>
	)
}

export { App }
