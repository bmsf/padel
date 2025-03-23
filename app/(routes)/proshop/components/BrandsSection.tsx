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
		<section className='py-20 w-full'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='max-w-7xl mx-auto'
				>
					<h2 className='text-3xl font-semibold mb-12 text-center'>
						Våre merker
					</h2>
					<div className='grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12'>
						{brands.map((brand, index) => (
							<motion.div
								key={brand.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className='aspect-[4/3] bg-white/5 rounded-2xl p-6 flex items-center justify-center group transition-all duration-300 ease-out border border-foreground/10 hover:shadow-md hover:border-foreground/20'
							>
								<Image
									src={brand.logo}
									alt={brand.name}
									width={brand.width}
									height={brand.height}
									className='object-contain transition-transform duration-300 group-hover:scale-105'
								/>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
