'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { History, Globe, TrendingUp } from 'lucide-react';
import {
	containerVariants,
	itemVariants,
	defaultViewport,
} from '@/app/lib/animations';

const PadelHistorySection: React.FC = () => {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className='py-16 bg-card/30'>
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
							<History className='w-12 h-12' />
						</div>
						<h2 className='text-4xl font-bold mb-4'>Historien om Padel</h2>
						<p className='text-xl'>Fra Mexico til hele verden</p>
					</motion.div>

					<motion.div
						variants={itemVariants(shouldReduceMotion)}
						className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'
					>
						<div className='bg-card p-6 rounded-xl border border-foreground/10 text-center'>
							<div className='flex justify-center mb-4'>
								<History className='w-8 h-8' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>1960-tallet</h3>
							<p>Padel ble oppfunnet i Mexico av Enrique Corcuera</p>
						</div>

						<div className='bg-card p-6 rounded-xl border border-foreground/10 text-center'>
							<div className='flex justify-center mb-4'>
								<Globe className='w-8 h-8' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>Global Spredning</h3>
							<p>Sporten spredte seg til Spania og resten av Europa</p>
						</div>

						<div className='bg-card p-6 rounded-xl border border-foreground/10 text-center'>
							<div className='flex justify-center mb-4'>
								<TrendingUp className='w-8 h-8' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>Rask Vekst</h3>
							<p>I dag er padel den raskest voksende sporten i verden</p>
						</div>
					</motion.div>

					<motion.div
						variants={itemVariants(shouldReduceMotion)}
						className='bg-card p-8 rounded-2xl border border-foreground/10 shadow-lg'
					>
						<h3 className='text-2xl font-bold mb-6'>
							Opprinnelse og Utvikling
						</h3>
						<div className='space-y-4 text-lg text-card-foreground/80 leading-relaxed'>
							<p>
								Padel eller padeltennis har sin opprinnelse fra Mexico sent på
								1960-tallet og er trolig den raskest voksende sporten i verden.
								Sporten ble oppfunnet av Enrique Corcuera som ønsket å lage en
								versjon av tennis som kunne spilles på en mindre bane.
							</p>
							<p>
								Padel er en kombinasjon av tennis og squash som kan spilles både
								inne og ute. Sporten kombinerer de beste elementene fra begge
								sporter - taktisk spill fra tennis og dynamisk ballveksling fra
								squash.
							</p>
							<p>
								I dag spilles padel i over 90 land verden over, med spesielt
								sterk tilstedeværelse i Spania, Argentina, Mexico og andre
								spansktalende land. Sporten har også fått sterk fotfeste i Norge
								de siste årene.
							</p>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default PadelHistorySection;
