'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
	containerVariants,
	itemVariants,
	defaultViewport,
} from '@/app/lib/animations';
import { Wrench, Users, Activity, Clock, Heart } from 'lucide-react';

const services = [
	{
		title: 'Personlig veiledning',
		description:
			'Er du usikker på hva som passer deg? Vårt team hjelper deg gjerne med tips og veiledning, basert på nivå og spillestil.',
		icon: <Users className='w-8 h-8' />,
		features: ['Gratis konsultasjon', 'Spillestilanalyse', 'Anbefalinger'],
	},
	{
		title: 'Stringing-service',
		description:
			'Profesjonell stringing av din racket med høykvalitets strenger.',
		icon: <Wrench className='w-8 h-8' />,
		features: ['Express service', 'Strengutvalg', 'Spesialbestillinger'],
	},
	{
		title: 'Test av racketer',
		description: 'Prøv før du kjøper - test ulike racketer på våre baner.',
		icon: <Activity className='w-8 h-8' />,
		features: ['Demo-program', 'Banetesting', 'Vurderingsskjema'],
	},
	{
		title: 'Åpningstider',
		description: 'Vi er åpne alle dager, med utvidet åpningstid i helgene.',
		icon: <Clock className='w-8 h-8' />,
		features: ['Mandag-Fredag: 10-20', 'Lørdag: 10-18', 'Søndag: 12-18'],
	},

	{
		title: 'Garanti & Service',
		description: 'Vi står bak alle våre produkter med full garanti og service.',
		icon: <Heart className='w-8 h-8' />,
		features: ['2 års garanti', 'Gratis service', 'Reparasjoner'],
	},
];

export default function ServicesSection() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className='py-16 bg-card/30'>
			<div className='container mx-auto px-4'>
				<div className='max-w-7xl mx-auto'>
					<motion.h2
						variants={itemVariants(shouldReduceMotion)}
						initial='hidden'
						whileInView='visible'
						viewport={defaultViewport}
						className='text-3xl font-semibold mb-4 text-center'
					>
						Våre tjenester
					</motion.h2>
					<motion.p
						variants={itemVariants(shouldReduceMotion)}
						initial='hidden'
						whileInView='visible'
						viewport={defaultViewport}
						className='text-lg text-center mb-12 max-w-3xl mx-auto'
					>
						Vi tilbyr alt du trenger for å spille bedre og med mer komfort. Fra
						personlig veiledning til profesjonell stringing - vi er her for å
						hjelpe deg med å finne det perfekte utstyret.
					</motion.p>
					<motion.div
						className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
						variants={containerVariants(shouldReduceMotion)}
						initial='hidden'
						whileInView='visible'
						viewport={defaultViewport}
					>
						{services.map((service) => (
							<motion.div
								key={service.title}
								variants={itemVariants(shouldReduceMotion)}
								className='bg-card/30 p-8 rounded-2xl border-2 border-foreground/10 
									transform-gpu hover:bg-card/50 transition-all duration-300
									motion-safe:translate-z-0 hover:-translate-y-1'
							>
								<div className='text-primary mb-4'>{service.icon}</div>
								<h3 className='text-2xl font-medium mb-4'>{service.title}</h3>
								<p className='text-lg text-card-foreground/80 mb-6'>
									{service.description}
								</p>
								<ul className='space-y-2'>
									{service.features.map((feature, index) => (
										<li key={index} className='flex items-center text-sm'>
											<svg
												className='w-4 h-4 mr-2'
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
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
