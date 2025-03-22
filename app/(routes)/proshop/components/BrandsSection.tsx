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
		<section className='py-20 bg-card/30'>
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
								className='aspect-[4/3] bg-card hover:bg-card/90 rounded-2xl p-8 flex items-center justify-center group transition-all duration-500 ease-out border-2 border-foreground/10'
							>
								<Image
									src={brand.logo}
									alt={brand.name}
									width={200}
									height={50}
									className='object-contain transition-all duration-500 filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100'
								/>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
