'use client';

import { motion } from 'framer-motion';

interface CategoryProps {
	title: string;
	description: string;
}

interface CategoriesSectionProps {
	categories: CategoryProps[];
}

export default function CategoriesSection({
	categories,
}: CategoriesSectionProps) {
	return (
		<section className='py-20 bg-card/30'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className='text-3xl font-semibold mb-12 text-center'>
						Vårt utvalg
					</h2>
					<div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
						{categories.map((category, index) => (
							<motion.div
								key={category.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className='bg-card/50 backdrop-blur-sm p-10 rounded-2xl border-2 border-foreground/10 group hover:bg-card/70 transition-all duration-500'
							>
								<h3 className='text-2xl font-medium mb-4'>{category.title}</h3>
								<p className='text-lg text-card-foreground/80 group-hover:text-card-foreground'>
									{category.description}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
