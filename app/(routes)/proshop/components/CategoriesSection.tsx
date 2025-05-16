'use client';

import { categories } from '../data/categories';
import { motion, useReducedMotion } from 'framer-motion';
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
					className='max-w-5xl mx-auto'
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
								className='bg-card p-6 rounded-lg shadow-lg transform-gpu motion-safe:translate-z-0 
									hover:shadow-xl transition-colors duration-300'
							>
								<h3 className='text-xl font-semibold mb-2'>{category.title}</h3>
								<p className='text-muted-foreground'>{category.description}</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
