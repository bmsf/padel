'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
	return (
		<section className='py-12 w-full overflow-hidden'>
			<div className='container mx-auto px-4'>
				<div className='mx-auto'>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className='text-3xl font-semibold mb-12 text-center'
					>
						Våre merker
					</motion.h2>
					<div className='grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 md:gap-12'>
						{brands.map((brand, index) => (
							<motion.div
								key={brand.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className='relative aspect-square bg-white/5 rounded-2xl p-4 sm:p-6 flex items-center justify-center group transition-all duration-300 ease-out border border-foreground/10 hover:shadow-md hover:border-foreground/20'
							>
								<div className='relative w-full h-full flex items-center justify-center'>
									<Image
										src={brand.logo}
										alt={brand.name}
										fill
										className='object-contain p-2 transition-transform duration-300 group-hover:scale-105'
										sizes='(max-width: 768px) 40vw, 25vw'
									/>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
