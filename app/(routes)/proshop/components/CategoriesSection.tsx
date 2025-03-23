'use client';

import { categories } from '../data/categories';

export default function CategoriesSection() {
	return (
		<section className='w-full py-16 bg-background'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-12'>
					Utforsk våre kategorier
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{categories.map((category, index) => (
						<div
							key={index}
							className='bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
						>
							<h3 className='text-xl font-semibold mb-2'>{category.title}</h3>
							<p className='text-muted-foreground'>{category.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
