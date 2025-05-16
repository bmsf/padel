'use client';

import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface HeroProps {
	videoUrl?: string;
}

export default function Hero({ videoUrl = '/videos/video.mp4' }: HeroProps) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [isVideoLoading, setIsVideoLoading] = useState(true);
	const { scrollY } = useScroll();

	// Parallax effekter
	const titleY = useTransform(scrollY, [0, 500], [0, 150]);
	const videoScale = useTransform(scrollY, [0, 500], [1, 1.1]);
	const opacity = useTransform(scrollY, [0, 300], [1, 0]);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.load();
			videoRef.current.play().catch((error) => {
				console.error('Video avspillingsfeil:', error);
			});
		}
	}, [videoUrl]);

	const handleVideoLoaded = () => {
		setIsVideoLoading(false);
	};

	return (
		<div className='container mx-auto px-4 pt-24 md:pt-32'>
			<div
				className='relative w-full h-[85vh] overflow-hidden rounded-xl'
				ref={containerRef}
			>
				{/* Video Container med Parallax */}
				<motion.div
					className='absolute inset-0 w-full h-full'
					style={{ scale: videoScale }}
				>
					{isVideoLoading && (
						<div className='absolute inset-0 z-10'>
							<Skeleton className='w-full h-full rounded-xl' />
						</div>
					)}
					<video
						ref={videoRef}
						src={videoUrl}
						className='absolute inset-0 object-cover w-full h-full rounded-xl'
						autoPlay
						loop
						muted
						playsInline
						controls={false}
						onLoadedData={handleVideoLoaded}
					/>
					<div className='absolute inset-0 bg-black/40 rounded-xl' />
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
							className='text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							Padel Co Grini
						</motion.h1>

						<motion.p
							className='text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							Et av Norges mest komplette padelanlegg – med seks innendørsbaner,
							tre utendørsbaner, treningsrom, lounge og splitter ny pro shop.
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
								className='px-8 min-w-[200px] h-14 text-lg font-medium text-white border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105'
								asChild
							>
								<Link href='/om-oss'>Les Mer</Link>
							</Button>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
