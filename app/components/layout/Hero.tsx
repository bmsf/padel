'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import BackgroundElements from './BackgroundElements';
import { Skeleton } from '@/components/ui/skeleton';

interface HeroProps {
	videoUrl?: string;
}

export default function Hero({ videoUrl = '/videos/video.mp4' }: HeroProps) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isVideoLoading, setIsVideoLoading] = useState(true);

	useEffect(() => {
		// Sikre at videoen laster og spiller av
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
		<>
			<BackgroundElements />
			{/* Hero Section */}
			<div className='relative w-full pt-32 md:pt-40'>
				<div className='container mx-auto px-6'>
					<motion.div
						className='max-w-3xl'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: 'easeOut' }}
					>
						<h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-8'>
							Padel Co Grini
						</h1>

						<p className='text-foreground/90 text-lg md:text-xl mb-12 font-light'>
							Et av Norges mest komplette padelanlegg – med seks innendørsbaner,
							tre utendørsbaner, treningsrom, lounge og splitter ny pro shop. Vi
							kombinerer kvalitet, stemning og tilgjengelighet i et senter som
							ønsker alle velkommen – uansett nivå.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 mb-12'>
							<Button
								size='lg'
								className='px-8 min-w-[180px] font-bold text-background text-lg'
								asChild
							>
								<Link
									href='https://www.matchi.se/facilities/padelcogrini'
									target='_blank'
								>
									Book Bane
								</Link>
							</Button>
							{/* <div className='max-w-[280px]'>
								<Countdown />
							</div> */}
						</div>
					</motion.div>
				</div>
			</div>

			{/* Video Container */}
			<motion.div
				className='w-full relative'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
			>
				<div className='container mx-auto px-6'>
					<div className='aspect-[16/9] w-full relative rounded-t-3xl overflow-hidden'>
						{isVideoLoading && (
							<div className='absolute inset-0 z-10'>
								<Skeleton className='w-full h-full' />
							</div>
						)}
						<video
							ref={videoRef}
							src={videoUrl}
							className='absolute inset-0 object-cover w-full h-full'
							autoPlay
							loop
							muted
							playsInline
							controls={false}
							onLoadedData={handleVideoLoaded}
						/>
						<div className='absolute inset-0 bg-black bg-opacity-10'></div>
					</div>
				</div>
			</motion.div>
		</>
	);
}
