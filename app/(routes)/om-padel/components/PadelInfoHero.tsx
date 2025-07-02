'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';
import {
	containerVariants,
	itemVariants,
	defaultViewport,
} from '@/app/lib/animations';

const PadelInfoHero: React.FC = () => {
	const shouldReduceMotion = useReducedMotion();
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);

	return (
		<section className='relative w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-primary/5'>
			<div className='container mx-auto px-4 py-16'>
				<motion.div
					variants={containerVariants(shouldReduceMotion)}
					initial='hidden'
					whileInView='visible'
					viewport={defaultViewport}
					className='max-w-6xl mx-auto'
				>
					<motion.div
						variants={itemVariants(shouldReduceMotion)}
						className='text-center mb-12'
					>
						<h1 className='text-5xl md:text-6xl font-bold mb-6'>
							Slik Spilles Padel
						</h1>
						<p className='text-xl md:text-2xl max-w-3xl mx-auto'>
							Se videoen nedenfor eller sjekk ut de vanlige spørsmålene om
							sporten.
						</p>
					</motion.div>

					<motion.div
						variants={itemVariants(shouldReduceMotion)}
						className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'
					>
						{/* Video Section */}
						<div className='relative'>
							<div className='bg-card rounded-2xl overflow-hidden shadow-2xl border border-foreground/10'>
								{!isVideoPlaying ? (
									<div className='relative aspect-video bg-black/20 flex items-center justify-center cursor-pointer group'>
										<div
											onClick={() => setIsVideoPlaying(true)}
											className='absolute inset-0 flex items-center justify-center'
										>
											<div className='bg-primary/90 hover:bg-primary transition-colors duration-300 rounded-full p-6 group-hover:scale-110 transform'>
												<Play className='w-12 h-12 text-white fill-white ml-1' />
											</div>
										</div>
										<div className='absolute bottom-4 left-4 text-white text-sm'>
											Klikk for å spille video
										</div>
									</div>
								) : (
									<video
										className='w-full aspect-video'
										controls
										autoPlay
										onEnded={() => setIsVideoPlaying(false)}
									>
										<source src='/videos/video.mp4' type='video/mp4' />
										Your browser does not support the video tag.
									</video>
								)}
							</div>
						</div>

						{/* Introduction Text */}
						<div className='space-y-6'>
							<div className='bg-card p-8 rounded-2xl border border-foreground/10 shadow-lg'>
								<h2 className='text-3xl font-bold mb-4'>
									Den Raskest Voksende Sporten
								</h2>
								<p className='text-lg text-card-foreground/80 leading-relaxed mb-4'>
									Padel eller padeltennis har sin opprinnelse fra Mexico sent på
									1960-tallet og er trolig den raskest voksende sporten i
									verden. Padel er en kombinasjon av tennis og squash som kan
									spilles både inne og ute.
								</p>
								<p className='text-lg text-card-foreground/80 leading-relaxed'>
									Sporten er perfekt for alle aldre og ferdighetsnivåer, og gir
									en unik kombinasjon av sosialt samvær og fysisk aktivitet.
								</p>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default PadelInfoHero;
