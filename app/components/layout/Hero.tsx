import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
	return (
		<div className='absolute inset-0 -z-10 h-screen w-full overflow-hidden flex-1'>
			{/* Background Image */}
			{/* <Image
				src='https://premium.vgc.no/ap/images/10ae788e-5705-4df5-893d-7e5bfa89e50e?fit=crop&h=878&q=80&tight=true&w=2048'
				alt='Background image'
				layout='fill'
				objectFit='cover'
				quality={100}
				className='z-[-1]'
			/> */}

			<video
				src='/videos/video.mp4'
				className='absolute inset-0 -z-10 object-cover w-full h-full'
				autoPlay
				loop
				muted
				playsInline
			/>
			<div className='absolute inset-0 bg-black opacity-75 -z-5'></div>

			<div className='relative z-10 flex flex-col items-center justify-center text-center h-full px-4 '>
				{/* Content */}
				<div className='flex flex-col justify-center items-center w-2/3'>
					<h1 className='text-white text-8xl mb-4 uppercase font-bold'>
						Velkommen til Bærum Padel
					</h1>

					{/* <div className='flex items-center mb-4 w-2/3'>
						<hr className='w-1/3 flex-grow border-t border-white mx-2' />
						<span className='text-white w-2/3 text-xl'>Bærum Padel</span>
						<hr className='w-1/3 border-t border-white mx-2' />
					</div> */}

					<p className='text-white max-w-sm'>
						Oppdag gleden med padel – book din bane og bli med i fellesskapet i
						dag!
					</p>
					<Button className='bg-black mt-6' size={'lg'}>
						Book nå
					</Button>
				</div>
			</div>
		</div>
	);
}
