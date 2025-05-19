'use client';

import { categories } from '../data/categories';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import {
	containerVariants,
	itemVariants,
	defaultViewport,
} from '@/app/lib/animations';

export default function CategoriesSection() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className='w-full py-16 bg-background'>
			<div className='container mx-auto px-4'>
				<motion.div
					variants={containerVariants(shouldReduceMotion)}
					initial='hidden'
					whileInView='visible'
					viewport={defaultViewport}
					className='max-w-7xl mx-auto'
				>
					<motion.h2
						variants={itemVariants(shouldReduceMotion)}
						className='text-3xl font-bold text-center mb-12'
					>
						Utforsk våre kategorier
					</motion.h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{categories.map((category) => (
							<motion.div
								key={category.title}
								variants={itemVariants(shouldReduceMotion)}
								className='bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-1'
							>
								<div className='relative h-48 w-full'>
									<Image
										src={category.imageUrl}
										alt={category.title}
										fill
										className='object-cover'
									/>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-semibold mb-2'>
										{category.title}
									</h3>
									<p className='text-muted-foreground mb-4'>
										{category.description}
									</p>
									<ul className='space-y-2'>
										{category.features.map((feature, index) => (
											<li
												key={index}
												className='flex items-center text-sm text-muted-foreground'
											>
												<svg
													className='w-4 h-4 mr-2 text-primary'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='2'
														d='M5 13l4 4L19 7'
													/>
												</svg>
												{feature}
											</li>
										))}
									</ul>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
