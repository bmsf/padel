'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Array of actual partners from client with their logos
const partners = [
	{
		id: 1,
		name: 'Stabæk Fotball',
		src: 'https://www.stabak.no/_/image/477e7492-47bd-41ea-a382-e7a2a5199c42:61d5c4da33acfb4855b5f0da3278ba51386829f2/wide-72-72/stb_logo_06_2023.svg',
		width: 320,
		height: 80,
	},
	{
		id: 2,
		name: 'Follestad',
		src: 'https://norwegianoutlet.no/wp-content/uploads/2020/12/Follestad-B-1.png',
		width: 320,
		height: 80,
	},
	{
		id: 3,
		name: 'Jacob Cohen',
		src: 'https://cdn.cookielaw.org/logos/1d4cf8ba-2ced-4022-acfd-9cf3ab53b0cd/0194ad5e-6d08-7c51-9202-f267521d759c/70f84d9d-373e-4bf8-9041-eb7d862bf4ef/LOGO-def_PNG.png',
		width: 320,
		height: 80,
	},
	{
		id: 4,
		name: 'Ambassaden Trening',
		src: 'https://ambassaden-trening.no/wp-content/uploads/2023/10/AT_logo-2-white.png',
		width: 320,
		height: 80,
	},
	{
		id: 5,
		name: 'Baker Hansen',
		src: 'https://cdn-files.eu.placewise.com/f/CLCFPRoKc3RvcmVfbG9nbyIFNDAzMTg4mpTPOccnOHHhYOA1P37ZZJndLRo',
		width: 320,
		height: 80,
	},
	{
		id: 6,
		name: 'Nibbi Clothing',
		src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYv6VY6uH5PCHb_zS-GgZQV8WDMiFKA9ovsA&s',
		width: 320,
		height: 80,
	},
	{
		id: 7,
		name: 'Head',
		src: 'https://cdn.freelogovectors.net/wp-content/uploads/2020/03/head-logo.png',
		width: 320,
		height: 80,
	},
	{
		id: 8,
		name: 'Babolat',
		src: 'https://www.tennis-point.se/on/demandware.static/-/Library-Sites-TennisPoint/default/dw818bdcc0/brands/babolat.png',
		width: 320,
		height: 80,
	},
];

export default function PartnersAnimation() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			className='pb-2'
		>
			<div className='text-sm text-center mb-2 font-light'>
				Våre Samarbeidspartnere
			</div>
			<div
				className='flex relative overflow-hidden 
        before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 
        before:bg-gradient-to-r before:from-background before:to-transparent 
        after:absolute after:right-0 after:top-0 after:h-full after:w-20 
        after:bg-gradient-to-l after:from-background after:to-transparent'
			>
				<motion.div
					transition={{
						duration: 30,
						ease: 'linear',
						repeat: Infinity,
					}}
					initial={{ translateX: '0%' }}
					animate={{ translateX: '-50%' }}
					className='flex items-center gap-16 pr-16'
				>
					{/* Duplicate the partners array to ensure seamless looping */}
					{[...new Array(2)].fill(0).map((_, dupeIndex) => (
						<React.Fragment key={`set-${dupeIndex}`}>
							{partners.map((partner) => (
								<div
									key={`${dupeIndex}-${partner.id}`}
									className='flex items-center justify-center min-w-40 h-20'
								>
									<Image
										src={partner.src}
										alt={partner.name}
										width={partner.width}
										height={partner.height}
										className='object-contain max-h-full'
									/>
								</div>
							))}
						</React.Fragment>
					))}
				</motion.div>
			</div>
		</motion.div>
	);
}
