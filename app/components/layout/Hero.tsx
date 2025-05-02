'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
	videoUrl?: string;
}

export default function Hero({ videoUrl = '/videos/video.mp4' }: HeroProps) {
	return (
		<div className='relative w-full overflow-hidden flex flex-col'>
			{/* Hero Section with video background */}
			<div className='relative h-screen w-full'>
				{/* Video Background */}
				<motion.div
					className='absolute inset-0'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.2, ease: 'easeInOut' }}
				>
					<video
						src={videoUrl}
						className='absolute inset-0 object-cover w-full h-full'
						autoPlay
						loop
						muted
						playsInline
					/>
					<div className='absolute inset-0 bg-black bg-opacity-50'></div>
				</motion.div>

				{/* Content */}
				<div className='relative z-10 flex flex-col items-center justify-center h-full px-4 max-w-6xl mx-auto'>
					{/* Main content with fade-in animation */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							duration: 1,
							delay: 1.5,
							ease: [0.22, 1, 0.36, 1],
						}}
						className='flex flex-col items-center'
					>
						<h1 className='text-white text-5xl md:text-7xl mb-6 font-bold tracking-tight text-center leading-tight'>
							Padel Co Grini <br className='hidden sm:block' />
							<span className=''>åpner mai 2025</span>
						</h1>

						<p className='text-white/90 max-w-xl text-lg md:text-xl mb-8 text-center font-light'>
							Norges nyeste padelsenter med 6 moderne baner, profesjonell
							atmosfære og et inkluderende miljø for alle padel-entusiaster.
							Innendørs og utendørs baner.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 items-center'>
							<Button
								className='bg-[#E0E2D3] hover:bg-[#bec0b3] text-black px-8 py-6 text-lg font-medium transition-all hover:scale-105 rounded-full'
								size='lg'
								asChild
							>
								<Link href='/booking'>Book forhåndsregistrering</Link>
							</Button>
							<Button
								variant='outline'
								className='border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-medium transition-all hover:scale-105 rounded-full'
								size='lg'
								asChild
							>
								<Link href='/facilities'>Utforsk våre baner</Link>
							</Button>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
