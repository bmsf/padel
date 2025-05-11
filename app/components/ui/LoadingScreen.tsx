'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
	onLoadingComplete?: () => void;
}

export default function LoadingScreen({
	onLoadingComplete,
}: LoadingScreenProps) {
	const [isVisible, setIsVisible] = useState(true);

	const text = 'PADEL CO GRINI';
	const animationDuration = 2.5; // Total animation duration in seconds

	const textVariants = {
		initial: {
			opacity: 0,
			y: 20,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1],
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
			onLoadingComplete?.();
		}, animationDuration * 1000);

		return () => clearTimeout(timer);
	}, [onLoadingComplete]);

	// Lager separate bokstaver med individuelle animasjoner
	const letters = text.split('').map((char, index) => ({
		char,
		delay: index * 0.1, // Forsinkelse for hver bokstav
	}));

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className='fixed inset-0 z-50 flex items-center justify-center bg-background'
				>
					<motion.div
						variants={textVariants}
						initial='initial'
						animate='animate'
						exit='exit'
						className='relative'
					>
						<div className='flex items-center justify-center'>
							{letters.map((letter, index) => (
								<div key={index} className='relative inline-block'>
									<svg
										className='w-[40px] h-[80px]'
										viewBox='0 0 40 80'
										preserveAspectRatio='xMidYMid meet'
									>
										{/* Definerer gradient for hver bokstav */}
										<defs>
											<linearGradient
												id={`fillGradient-${index}`}
												x1='0'
												x2='0'
												y1='1'
												y2='0'
											>
												<stop offset='0%' stopColor='currentColor'>
													<animate
														attributeName='offset'
														values='0;1'
														dur='1s'
														begin={`${0.8 + letter.delay}s`}
														fill='freeze'
														calcMode='spline'
														keySplines='0.22 1 0.36 1'
													/>
												</stop>
												<stop offset='0%' stopColor='transparent'>
													<animate
														attributeName='offset'
														values='0;1'
														dur='1s'
														begin={`${0.8 + letter.delay}s`}
														fill='freeze'
														calcMode='spline'
														keySplines='0.22 1 0.36 1'
													/>
												</stop>
											</linearGradient>
										</defs>

										{/* Outline bokstav */}
										<text
											x='50%'
											y='50%'
											textAnchor='middle'
											dominantBaseline='middle'
											className='text-5xl font-bold tracking-tighter fill-none stroke-foreground/20'
											strokeWidth='1'
											style={{
												fontFamily: 'var(--font-IBM)',
											}}
										>
											{letter.char === ' ' ? '\u00A0' : letter.char}
										</text>

										{/* Fylt bokstav med gradient */}
										<text
											x='50%'
											y='50%'
											textAnchor='middle'
											dominantBaseline='middle'
											className='text-5xl font-bold tracking-tighter'
											style={{
												fontFamily: 'var(--font-IBM)',
												fill: `url(#fillGradient-${index})`,
											}}
										>
											{letter.char === ' ' ? '\u00A0' : letter.char}
										</text>
									</svg>
								</div>
							))}
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
