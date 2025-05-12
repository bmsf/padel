'use client';

import { categories } from '../data/categories';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CategoriesSection() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulerer en kort loading tid for å demonstrere skeleton
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<section className='w-full py-16 bg-background'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='max-w-5xl mx-auto'
				>
					<h2 className='text-3xl font-bold text-center mb-12'>
						Utforsk våre kategorier
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{isLoading ? (
							// Skeleton loading state
							<>
								{[...Array(3)].map((_, index) => (
									<div key={index} className='bg-card p-6 rounded-lg shadow-lg'>
										<Skeleton className='h-8 w-3/4 mb-4' />
										<Skeleton className='h-4 w-full' />
										<Skeleton className='h-4 w-5/6 mt-2' />
									</div>
								))}
							</>
						) : (
							// Actual content
							categories.map((category, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className='bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
								>
									<h3 className='text-xl font-semibold mb-2'>
										{category.title}
									</h3>
									<p className='text-muted-foreground'>
										{category.description}
									</p>
								</motion.div>
							))
						)}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
