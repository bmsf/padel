'use client';

import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import Image from 'next/image';

interface HeroProps {
	imageUrl?: string;
}

export default function Hero({ imageUrl = '/hero.jpg' }: HeroProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollY } = useScroll();

	// Parallax effekter
	const titleY = useTransform(scrollY, [0, 500], [0, 150]);
	const imageScale = useTransform(scrollY, [0, 500], [1, 1.1]);
	const opacity = useTransform(scrollY, [0, 300], [1, 0]);

	return (
		<div className='container mx-auto px-4 pt-24 md:pt-32'>
			<div
				className='relative w-full h-[85vh] overflow-hidden rounded-xl'
				ref={containerRef}
			>
				{/* Bilde Container med Parallax */}
				<motion.div
					className='absolute inset-0 w-full h-full'
					style={{ scale: imageScale }}
				>
					<Image
						src={imageUrl}
						alt='Padel Co Grini - Hero bilde'
						fill
						className='object-cover rounded-xl'
						priority
						quality={90}
					/>
					<div className='absolute inset-0 bg-black/60 rounded-xl' />
				</motion.div>

				{/* Innhold */}
				<motion.div
					className='relative h-full flex flex-col items-center justify-center text-center px-4'
					style={{ y: titleY, opacity }}
				>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='max-w-4xl mx-auto'
					>
						<motion.h1
							className='text-5xl md:text-7xl lg:text-8xl  text-white mb-6'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							Padel Co Grini
						</motion.h1>

						<motion.p
							className='text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							Et av Norges mest komplette padelanlegg – med seks innendørsbaner,
							tre utendørsbaner, treningsrom, lounge og splitter ny pro shop
						</motion.p>

						<motion.div
							className='flex flex-col sm:flex-row gap-6 justify-center items-center'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							<Button
								size='lg'
								className='px-8 min-w-[200px] h-14 text-lg font-medium bg-white text-black hover:bg-white/90 transition-all duration-300 transform hover:scale-105'
								asChild
							>
								<Link
									href='https://www.matchi.se/facilities/padelcogrini'
									target='_blank'
								>
									Book Bane
								</Link>
							</Button>
							<Button
								size='lg'
								variant='outline'
								className='px-8 min-w-[200px] h-14 text-lg font-medium text-white hover:text-white border-white hover:bg-transparent hover:border-white/90 transition-all duration-300 transform hover:scale-105 bg-transparent'
								asChild
							>
								<Link href='/about'>Om Oss</Link>
							</Button>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
