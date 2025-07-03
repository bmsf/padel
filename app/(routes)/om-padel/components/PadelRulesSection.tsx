'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Users, Ruler, Target, Gamepad2 } from 'lucide-react';
import {
	containerVariants,
	itemVariants,
	defaultViewport,
} from '@/app/lib/animations';

const PadelRulesSection: React.FC = () => {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className='py-16'>
			<div className='container mx-auto px-4'>
				<motion.div
					variants={containerVariants(shouldReduceMotion)}
					initial='hidden'
					whileInView='visible'
					viewport={defaultViewport}
					className='max-w-6xl mx-auto'
				>
					<motion.div
						variants={itemVariants(shouldReduceMotion)}
						className='text-center mb-12'
					>
						<div className='flex justify-center mb-6'>
							<Gamepad2 className='w-12 h-12' />
						</div>
						<h2 className='text-4xl font-bold mb-4'>Hvordan Spilles Padel</h2>
						<p className='text-xl'>Regler, format og banestørrelse</p>
					</motion.div>

					<motion.div
						variants={itemVariants(shouldReduceMotion)}
						className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12'
					>
						{/* Game Format */}
						<div className='bg-card p-8 rounded-2xl border border-foreground/10 shadow-lg'>
							<div className='flex items-center mb-6'>
								<Users className='w-8 h-8 mr-3' />
								<h3 className='text-2xl font-bold'>Spillformat</h3>
							</div>
							<div className='space-y-4 text-lg text-card-foreground/80 leading-relaxed'>
								<p>
									Padel spilles som regel i double format. I dette tilfellet vil
									det si fire personer på en lukket bane i kombinasjon av glass
									og stålgitter.
								</p>
								<p>
									Inngang/utgang til banene er ved nettstolpene. Her kan alle
									fire spillerne entre banen samtidig.
								</p>
								<p>
									Banen tilsvarer ca. en tredjedel av størrelsen av en
									tradisjonell tennisbane,
									<strong> 10×20 meter</strong>.
								</p>
							</div>
						</div>

						{/* Scoring and Equipment */}
						<div className='bg-card p-8 rounded-2xl border border-foreground/10 shadow-lg'>
							<div className='flex items-center mb-6'>
								<Target className='w-8 h-8 mr-3' />
								<h3 className='text-2xl font-bold'>Poeng og Utstyr</h3>
							</div>
							<div className='space-y-4 text-lg text-card-foreground/80 leading-relaxed'>
								<p>
									Poengene telles på samme måte som i tennis og ballene som
									benyttes tilsvarer tennisballer.
								</p>
								<p>
									Veggene rundt Padel banen benyttes i ballvekslingene og drar
									noe kjennskap til Squash.
								</p>
								<p>
									Racketer er mindre enn i tennis og uten strenger. De er laget
									av komposittmaterialer og har små hull i overflaten.
								</p>
							</div>
						</div>
					</motion.div>

					<motion.div
						variants={itemVariants(shouldReduceMotion)}
						className='grid grid-cols-1 md:grid-cols-3 gap-8'
					>
						<div className='bg-primary/10 p-6 rounded-xl border border-primary/20 text-center'>
							<div className='flex justify-center mb-4'>
								<Ruler className='w-8 h-8' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>Banestørrelse</h3>
							<p className='text-3xl font-bold mb-2'>10×20m</p>
							<p className='text-sm'>En tredjedel av en tennisbane</p>
						</div>

						<div className='bg-card p-6 rounded-xl border border-foreground/10 text-center'>
							<div className='flex justify-center mb-4'>
								<Users className='w-8 h-8' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>Spillere</h3>
							<p className='text-3xl font-bold mb-2'>4</p>
							<p className='text-sm'>Double format (2 mot 2)</p>
						</div>

						<div className='bg-card p-6 rounded-xl border border-foreground/10 text-center'>
							<div className='flex justify-center mb-4'>
								<Gamepad2 className='w-8 h-8' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>Poengsystem</h3>
							<p className='text-lg font-bold mb-2'>Tennis</p>
							<p className='text-sm'>Samme som tennis</p>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default PadelRulesSection;
