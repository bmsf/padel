'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Countdown from '@/app/components/ui/Countdown';
import { useEffect, useRef } from 'react';

interface HeroProps {
	videoUrl?: string;
}

export default function Hero({ videoUrl = '/videos/video.mp4' }: HeroProps) {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		// Sikre at videoen laster og spiller av
		if (videoRef.current) {
			videoRef.current.load();
			videoRef.current.play().catch((error) => {
				console.error('Video avspillingsfeil:', error);
			});
		}
	}, [videoUrl]);

	return (
		<div className='relative w-full overflow-hidden py-8 md:py-12 mt-16 md:mt-20'>
			{/* Hero Section med responsiv layout */}
			<div className='w-full px-6 container mx-auto'>
				<div className='flex flex-col md:flex-row h-auto md:h-[400px] lg:h-[450px]'>
					{/* Video (øverst på mobil, høyre side på desktop) */}
					<motion.div
						className='w-full md:w-1/2 relative h-[250px] md:h-full flex justify-center md:justify-end order-first md:order-last'
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
					>
						<div className='w-full md:w-[85%] h-full relative rounded-lg overflow-hidden'>
							<video
								ref={videoRef}
								src={videoUrl}
								className='absolute inset-0 object-cover w-full h-full'
								autoPlay
								loop
								muted
								playsInline
								controls={false}
							/>
							<div className='absolute inset-0 bg-black bg-opacity-10'></div>
						</div>
					</motion.div>

					{/* Innhold (nederst på mobil, venstre side på desktop) */}
					<motion.div
						className='w-full md:w-1/2 z-10 flex flex-col justify-between md:pr-8 lg:pr-16 py-6 mt-6 md:mt-0'
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, ease: 'easeOut' }}
					>
						<div className='space-y-4 md:space-y-6 pt-0 md:pt-8'>
							<h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight'>
								Padel Co Grini <br />
								<span className=''></span>
							</h1>

							<p className='text-foreground/90 max-w-xl text-base md:text-lg mb-4 md:mb-8 font-light'>
								Et av Norges mest komplette padelanlegg – med seks
								innendørsbaner, tre utendørsbaner, treningsrom, lounge og
								splitter ny pro shop. Vi kombinerer kvalitet, stemning og
								tilgjengelighet i et senter som ønsker alle velkommen – uansett
								nivå.
							</p>

							<div>
								<Button
									size='lg'
									className='px-8 min-w-[180px] font-bold bg-foreground text-background hover:bg-foreground/90'
									asChild
								>
									<Link
										href='https://www.matchi.se/facilities/padelcogrini'
										target='_blank'
									>
										Booking
									</Link>
								</Button>
							</div>
						</div>

						<div className='pb-4 max-w-sm mt-8 md:mt-0'>
							<Countdown />
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
