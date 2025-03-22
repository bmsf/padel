'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

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
				{/* Overlay med gradient for bedre lesbarhet */}
				<div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70'></div>

				{/* Content */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='relative z-10 flex flex-col items-center justify-center h-full px-4 max-w-6xl mx-auto'
				>
					<h1 className='text-white text-5xl md:text-7xl mb-6 font-bold tracking-tight text-center leading-tight'>
						Opplev Padel på <br className='hidden sm:block' />
						<span className='text-[#E0E2D3]'>et nytt nivå</span>
					</h1>
					<p className='text-gray-200 max-w-xl text-lg md:text-xl mb-8 text-center font-light'>
						Moderne fasiliteter, profesjonell atmosfære og et inkluderende miljø
						for alle spillere.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 items-center'>
						<Button
							className='bg-[#E0E2D3] hover:bg-[#bec0b3] text-black px-8 py-6 text-lg font-medium transition-all hover:scale-105 rounded-full'
							size='lg'
						>
							Book bane
						</Button>
						<Button
							variant='outline'
							className='border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-medium transition-all hover:scale-105 rounded-full'
							size='lg'
						>
							Utforsk mer
						</Button>
					</div>
				</motion.div>

				{/* Scroll Indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5, duration: 0.8 }}
					className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
				>
					<div className='flex flex-col items-center gap-2'>
						<span className='text-white text-sm tracking-widest uppercase'>
							Scroll ned
						</span>
						<motion.div
							animate={{ y: [0, 10, 0] }}
							transition={{ repeat: Infinity, duration: 1.5 }}
							className='w-6 h-6 border-2 border-white rounded-full flex items-center justify-center'
						>
							<motion.div className='w-1 h-1 bg-white rounded-full'></motion.div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
