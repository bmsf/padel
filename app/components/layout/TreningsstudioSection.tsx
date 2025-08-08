'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Dumbbell, Mail } from 'lucide-react';
import {
	containerVariants,
	itemVariants,
	defaultViewport,
} from '@/app/lib/animations';

const TreningsstudioSection: React.FC = () => {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className='py-16 bg-card/30'>
			<div className='container mx-auto px-4'>
				<motion.div
					variants={containerVariants(shouldReduceMotion)}
					initial='hidden'
					whileInView='visible'
					viewport={defaultViewport}
					className='max-w-4xl mx-auto'
				>
					<motion.div
						variants={itemVariants(shouldReduceMotion)}
						className='text-center mb-12'
					>
						<div className='flex justify-center mb-4'>
							<Dumbbell className='w-12 h-12' />
						</div>
						<h2 className='text-4xl font-bold mb-4'>
							Treningsstudio i 3. etasje
						</h2>
						<p className='text-xl'>Rolig atmosfære. Alt du trenger.</p>
					</motion.div>

					<motion.div
						variants={itemVariants(shouldReduceMotion)}
						className='bg-card p-8 rounded-2xl border-2 border-foreground/10 mb-8'
					>
						<p className='text-lg text-card-foreground/80 leading-relaxed mb-6'>
							I tredje etasje hos Padel Co finner du vårt moderne treningsstudio
							– perfekt for deg som ønsker å trene i rolige omgivelser med full
							tilgang til funksjonelt og variert utstyr. Her kan du kombinere
							padel med effektiv styrke- eller kondisjonstrening, eller bruke
							rommet som din faste treningsbase.
						</p>
						<p className='text-lg text-card-foreground/80 leading-relaxed mb-6'>
							Enten du foretrekker frivekter, kondisjonsapparater,
							mobilitetstrening eller en økt på yogamatten – du finner det du
							trenger her. Treningsstudioet gir deg en mer privat og behagelig
							opplevelse, uten kø eller støy.
						</p>
					</motion.div>

					<motion.div
						variants={itemVariants(shouldReduceMotion)}
						className='grid grid-cols-1 md:grid-cols-2 gap-8'
					>
						<div className='bg-primary/10 p-6 rounded-xl border border-primary/20'>
							<h3 className='text-2xl font-semibold mb-2'>Pris</h3>
							<p className='text-3xl font-bold'>349 kr/måned</p>
						</div>

						<div className='bg-card p-6 rounded-xl border border-foreground/10'>
							<h3 className='text-2xl font-semibold mb-4'>Bli medlem</h3>
							<p className='text-lg text-card-foreground/80 mb-4'>
								Ønsker du medlemskap? Send oss en e-post, så får du tilgang og
								informasjon.
							</p>
							<p className='text-sm mb-4'>
								Vi har begrenset antall medlemsplasser – så her er det
								førstemann til mølla.
							</p>
							<a
								href='mailto:post@padelco.no'
								className='inline-flex items-center gap-2 hover:underline font-medium'
							>
								<Mail className='w-4 h-4' />
								post@padelco.no
							</a>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default TreningsstudioSection;
