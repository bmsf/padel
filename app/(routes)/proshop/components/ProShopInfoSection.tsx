'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { containerVariants, itemVariants } from '@/app/lib/animations';

const proShopInfo = [
	{
		id: 1,
		title: 'Ekspert veiledning',
		description:
			'Vårt team av erfarne padel-eksperter hjelper deg med å finne det perfekte utstyret for ditt spill.',
		imageUrl: '/1U2A8933.jpg',
	},
	{
		id: 2,
		title: 'Premium utstyr',
		description:
			'Vi fører kun kvalitetsprodukter fra ledende merker som Babolat, Head, Wilson og mange flere.',
		imageUrl: '/Proshop.jpg',
	},
	{
		id: 3,
		title: 'Personlig service',
		description:
			'Prøv før du kjøper. Vi tilbyr demo-program så du kan teste utstyret på banen før du bestemmer deg.',
		imageUrl: '/Treningsrom.jpg',
	},
];

export default function ProShopInfoSection() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className='py-16 bg-background'>
			<div className='container mx-auto px-4'>
				<motion.div
					variants={containerVariants(shouldReduceMotion)}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, margin: '-10%' }}
					className='max-w-7xl mx-auto'
				>
					<motion.h2
						variants={itemVariants(shouldReduceMotion)}
						className='text-3xl font-bold text-center mb-4'
					>
						Hva er Padel Co Pro Shop?
					</motion.h2>
					<motion.p
						variants={itemVariants(shouldReduceMotion)}
						className='text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto'
					>
						Vår pro shop er mer enn bare en butikk - det er ditt første stopp
						for alt du trenger for å forbedre padel-spillet ditt.
					</motion.p>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{proShopInfo.map((info, index) => (
							<motion.div
								key={info.id}
								variants={itemVariants(shouldReduceMotion)}
								className='bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 will-change-transform'
							>
								<div className='relative h-64 w-full'>
									<Image
										src={info.imageUrl}
										alt={info.title}
										fill
										className='object-cover'
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										priority={index === 0}
										loading={index === 0 ? 'eager' : 'lazy'}
										quality={85}
									/>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-semibold mb-3'>{info.title}</h3>
									<p className='text-muted-foreground leading-relaxed'>
										{info.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
