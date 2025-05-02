'use client';

import { categories } from '../data/categories';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';

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
							<div
								key={index}
								className='bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
							>
								<h3 className='text-xl font-semibold mb-2'>{category.title}</h3>
								<p className='text-muted-foreground'>{category.description}</p>
							</div>
						))
					)}
				</div>
			</div>
		</section>
	);
}
