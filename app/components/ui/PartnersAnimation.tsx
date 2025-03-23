'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Array of company logo objects
const companyLogos = [
	{
		id: 1,
		src: 'https://www.tennis-point.se/on/demandware.static/-/Library-Sites-TennisPoint/default/dw818bdcc0/brands/babolat.png',
		alt: 'Babolat',
		width: 200,
		height: 50,
	},
	{
		id: 2,
		src: 'https://cdn.freebiesupply.com/logos/large/2x/adidas-logo.png',
		alt: 'Adidas',
		width: 200,
		height: 50,
	},
	{
		id: 3,
		src: 'https://brandslogos.com/wp-content/uploads/images/large/wilson-logo-black-and-white.png',
		alt: 'Wilson',
		width: 200,
		height: 50,
	},
	{
		id: 4,
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png',
		alt: 'Nike',
		width: 200,
		height: 50,
	},
	{
		id: 5,
		src: 'https://cdn.freebiesupply.com/logos/large/2x/rolex-logo-black-and-white.png',
		alt: 'Rolex',
		width: 200,
		height: 50,
	},
	{
		id: 6,
		src: 'https://www.carlogos.org/car-logos/audi-logo-2016-download.png',
		alt: 'Audi',
		width: 200,
		height: 50,
	},
	// Add more company logos as needed
];

export default function PartnersAnimation() {
	return (
		<div className='py-12'>
			<h2 className='text-3xl font-bold text-center mb-10'>Våre Partnere</h2>
			<div
				className='flex relative overflow-hidden 
        before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 
        before:bg-gradient-to-r before:from-background before:to-transparent 
        after:absolute after:right-0 after:top-0 after:h-full after:w-20 
        after:bg-gradient-to-l after:from-background after:to-transparent'
			>
				<motion.div
					transition={{
						duration: 15, // Reduced from 30 to 15 for faster animation
						ease: 'linear',
						repeat: Infinity,
					}}
					initial={{ translateX: '0%' }}
					animate={{ translateX: '-50%' }}
					className='flex items-center gap-16 pr-16'
				>
					{/* Duplicate the logos array to ensure seamless looping */}
					{[...new Array(2)].fill(0).map((_, dupeIndex) => (
						<React.Fragment key={`set-${dupeIndex}`}>
							{companyLogos.map((logo) => (
								<div
									key={`${dupeIndex}-${logo.id}`}
									className='flex items-center justify-center min-w-40 h-20'
								>
									<Image
										src={logo.src}
										alt={logo.alt}
										width={logo.width}
										height={logo.height}
										className='object-contain max-h-full grayscale hover:grayscale-0 transition-all duration-300'
									/>
								</div>
							))}
						</React.Fragment>
					))}
				</motion.div>
			</div>
		</div>
	);
}
