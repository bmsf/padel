'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// interface FacilityCard {
// 	title: string;
// 	description: string;
// 	icon: string;
// }

interface FacilitiesSectionProps {
	imageUrl?: string;
}

const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({
	imageUrl = 'https://images.unsplash.com/photo-1658491830143-72808ca237e3?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}) => {
	return (
		<section className='w-full relative'>
			{/* Background image using Next.js Image */}
			<div className='absolute inset-0'>
				<Image
					src={imageUrl}
					alt='Padel facilities'
					fill
					sizes='100vw'
					priority
					className='object-cover'
				/>
				<div className='absolute inset-0 bg-black bg-opacity-50'></div>
			</div>

			{/* Content container */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className='relative py-32 px-4 max-w-7xl mx-auto'
			>
				<div className='flex flex-col items-center justify-center text-center'>
					<h2 className='text-4xl font-bold text-white mb-6'>
						Våre fasiliteter
					</h2>
					<p className='text-white text-xl max-w-2xl mb-10'>
						Opplev våre moderne padelbaner og førsteklasses fasiliteter designet
						for både nybegynnere og profesjonelle spillere.
					</p>

					{/* CTA Button */}
					<Link
						href='/facilities'
						className='inline-block border-2 border-white text-white font-medium text-lg py-3 px-8 rounded-md hover:bg-white hover:text-blue-700 transition-all duration-300'
					>
						Utforsk våre fasiliteter
					</Link>
				</div>
			</motion.div>
		</section>
	);
};

export default FacilitiesSection;
