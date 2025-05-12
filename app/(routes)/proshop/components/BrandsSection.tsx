'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';

interface BrandProps {
	name: string;
	logo: string;
	width: number;
	height: number;
}

interface BrandsSectionProps {
	brands: BrandProps[];
}

export default function BrandsSection({ brands }: BrandsSectionProps) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulerer en kort loading tid for å demonstrere skeleton
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<section className='py-12 w-full overflow-hidden'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='mx-auto'
				>
					<h2 className='text-3xl font-semibold mb-12 text-center'>
						Våre merker
					</h2>
					<div className='grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 md:gap-12'>
						{isLoading ? (
							// Skeleton loading state
							<>
								{[...Array(6)].map((_, index) => (
									<div
										key={index}
										className='aspect-[4/3] bg-white/5 rounded-2xl p-4 sm:p-6 flex items-center justify-center'
									>
										<Skeleton className='w-3/4 h-3/4' />
									</div>
								))}
							</>
						) : (
							// Actual content
							brands.map((brand) => (
								<motion.div
									key={brand.name}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.8 }}
									className='aspect-[4/3] bg-white/5 rounded-2xl p-4 sm:p-6 flex items-center justify-center group transition-all duration-300 ease-out border border-foreground/10 hover:shadow-md hover:border-foreground/20'
								>
									<Image
										src={brand.logo}
										alt={brand.name}
										width={brand.width}
										height={brand.height}
										className='object-contain transition-transform duration-300 group-hover:scale-105 max-w-full'
									/>
								</motion.div>
							))
						)}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
