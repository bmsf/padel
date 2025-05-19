'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import {
	containerVariants,
	itemVariants,
	defaultViewport,
} from '@/app/lib/animations';

interface FeaturedProduct {
	id: number;
	name: string;
	description: string;
	imageUrl: string;
	category: string;
	price: string;
}

const featuredProducts: FeaturedProduct[] = [
	{
		id: 1,
		name: 'Babolat Air Veron',
		description: 'Lett og manøvrerbar racket for kontrollorienterte spillere',
		imageUrl:
			'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
		category: 'Racketer',
		price: '2.499 kr',
	},
	{
		id: 2,
		name: 'Head Delta Motion',
		description: 'Balansert racket med god kraft og kontroll',
		imageUrl:
			'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
		category: 'Racketer',
		price: '2.299 kr',
	},
	{
		id: 3,
		name: 'Wilson Blade Elite',
		description: 'Premium racket for avanserte spillere',
		imageUrl:
			'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
		category: 'Racketer',
		price: '2.799 kr',
	},
];

export default function FeaturedProducts() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className='py-16 bg-background'>
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
						Utvalgte Produkter
					</motion.h2>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{featuredProducts.map((product) => (
							<motion.div
								key={product.id}
								variants={itemVariants(shouldReduceMotion)}
								className='bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
							>
								<div className='relative h-64 w-full'>
									<Image
										src={product.imageUrl}
										alt={product.name}
										fill
										className='object-cover'
									/>
								</div>
								<div className='p-6'>
									<div className='flex justify-between items-start mb-2'>
										<h3 className='text-xl font-semibold'>{product.name}</h3>
										<span className='text-primary font-medium'>
											{product.price}
										</span>
									</div>
									<p className='text-muted-foreground mb-4'>
										{product.description}
									</p>
									<div className='flex justify-between items-center'>
										<span className='text-sm text-muted-foreground'>
											{product.category}
										</span>
										<button className='text-primary hover:text-primary/80 transition-colors'>
											Les mer →
										</button>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
