import { Button } from '@/components/ui/button';
import PartnersAnimation from '@/app/components/ui/PartnersAnimation';

export default function Hero() {
	return (
		<div className='relative w-full overflow-hidden flex flex-col'>
			{/* Video Section */}
			<div className='relative h-screen w-full'>
				{/* Background Video */}
				<video
					src='/videos/video.mp4'
					className='absolute inset-0 object-cover w-full h-full'
					autoPlay
					loop
					muted
					playsInline
				/>
				{/* Overlay - reduced opacity for better contrast */}
				<div className='absolute inset-0 bg-black opacity-60'></div>

				{/* Content */}
				<div className='relative z-10 flex flex-col items-center justify-center text-center h-full px-4'>
					<h1 className='text-white text-7xl mb-4 uppercase font-bold tracking-wide text-shadow-lg'>
						Velkommen til Padel Co Grini
					</h1>
					<p className='text-white max-w-md text-lg mb-8 text-shadow'>
						Oppdag gleden med padel – book din bane og bli med i fellesskapet i
						dag!
					</p>
					<Button
						className='bg-[#E0E2D3] hover:bg-[#bec0b3] text-black mt-6 px-8 py-6 text-lg font-medium shadow-lg transition-all hover:scale-105'
						size='lg'
					>
						Book nå
					</Button>
				</div>
			</div>

			{/* <PartnersAnimation /> */}
		</div>
	);
}
