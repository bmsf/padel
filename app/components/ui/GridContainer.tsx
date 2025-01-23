import Image from 'next/image';

export default function GridContainer() {
	return (
		<div className='grid grid-cols-1 gap-4 p-3 md:grid-cols-10 md:grid-rows-3 w-full h-screen'>
			<div className='relative col-span-1 md:col-span-4 md:row-span-1 bg-foreground text-background h-48 md:h-auto'>
				<p className='text-4xl uppercase p-6'>
					Din suksess starter <br /> på
				</p>
				{/* Center "banen" with padding */}
				<p className='absolute inset-0 flex items-center justify-center text-4xl uppercase p-6'>
					banen
				</p>

				<p className='text-1xl uppercase p-10'>baerumpadel.no</p>
			</div>
			<div className='col-span-1 md:col-span-3 md:row-span-2 relative h-48 md:h-auto'>
				<Image
					src='https://images.unsplash.com/photo-1673253408728-134f84f9279c?q=80&w=2618&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='Background Image'
					layout='fill'
					objectFit='cover'
					className='z-0'
				/>
			</div>
			<div className='bg-green-300 col-span-1 md:col-span-3 md:row-span-1 relative h-48 md:h-auto'>
				<Image
					src='https://images.unsplash.com/photo-1666114060991-c1a4b1b6fb5b?q=80&w=2876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='Background Image'
					layout='fill'
					objectFit='cover'
					className='z-0'
				/>
			</div>
			<div className='bg-purple-300 col-span-1 md:col-span-2 md:row-span-2 relative h-48 md:h-auto'>
				<Image
					src='https://images.pexels.com/photos/1103829/pexels-photo-1103829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
					alt='Background Image'
					layout='fill'
					objectFit='cover'
					className='z-0'
				/>
			</div>
			<div className='col-span-1 md:col-span-2 md:row-span-2 relative h-48 md:h-auto'>
				<Image
					src='https://images.pexels.com/photos/4536850/pexels-photo-4536850.jpeg?auto=compress&cs=tinysrgb&w=800'
					alt='Background Image'
					layout='fill'
					objectFit='cover'
					className='z-0'
				/>
			</div>
			<div className='col-span-1 md:col-span-3 md:row-span-1 bg-pink-300 relative h-48 md:h-auto'>
				<Image
					src='https://images.unsplash.com/photo-1657704227277-04e8accd079e?q=80&w=2335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='Background Image'
					layout='fill'
					objectFit='cover'
					className='z-0'
				/>
			</div>
			<div className='col-span-1 md:col-span-6 md:row-span-1 relative h-48 md:h-auto'>
				<Image
					src='https://images.pexels.com/photos/1103833/pexels-photo-1103833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
					alt='Background Image'
					layout='fill'
					objectFit='cover'
					className='z-0'
				/>
			</div>
		</div>
	);
}
