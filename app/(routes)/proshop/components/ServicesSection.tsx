'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
	containerVariants,
	itemVariants,
	defaultViewport,
} from '@/app/lib/animations';

const services = [
	{
		title: 'Personlig veiledning',
		description:
			'Våre eksperter hjelper deg med å finne riktig utstyr basert på ditt nivå og spillestil.',
	},
	{
		title: 'Stringing-service',
		description:
			'Profesjonell stringing av din racket med høykvalitets strenger.',
	},
	{
		title: 'Test av racketer',
		description: 'Prøv før du kjøper - test ulike racketer på våre baner.',
	},
];

export default function ServicesSection() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className='py-12'>
			<div className='container mx-auto px-4'>
				<div className='max-w-4xl mx-auto'>
					<motion.h2
						variants={itemVariants(shouldReduceMotion)}
						initial='hidden'
						whileInView='visible'
						viewport={defaultViewport}
						className='text-3xl font-semibold mb-12 text-center'
					>
						Våre tjenester
					</motion.h2>
					<motion.div
						className='space-y-8'
						variants={containerVariants(shouldReduceMotion)}
						initial='hidden'
						whileInView='visible'
						viewport={defaultViewport}
					>
						{services.map((service) => (
							<motion.div
								key={service.title}
								variants={itemVariants(shouldReduceMotion)}
								className='bg-card/30 p-10 rounded-2xl border-2 border-foreground/10 
									transform-gpu hover:bg-card/50 transition-colors duration-300
									motion-safe:translate-z-0'
							>
								<h3 className='text-2xl font-medium mb-4'>{service.title}</h3>
								<p className='text-lg text-card-foreground/80'>
									{service.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
