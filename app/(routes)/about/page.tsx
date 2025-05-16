'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
	containerVariants,
	itemVariants,
	fadeInVariants,
	defaultViewport,
} from '@/app/lib/animations';

export default function About() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<div className='min-h-screen bg-background overflow-x-hidden'>
			{/* Hero Section */}
			<div className='container mx-auto px-4 py-12 md:py-16'>
				<motion.div
					variants={fadeInVariants(shouldReduceMotion)}
					initial='hidden'
					animate='visible'
					className='max-w-3xl mx-auto text-center space-y-6'
				>
					<h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
						Om Padel Co
					</h1>
					<p className='text-lg md:text-2xl text-muted-foreground leading-relaxed'>
						En nystartet satsning på en sport i sterk vekst
					</p>
				</motion.div>
			</div>

			{/* Hovedinnhold */}
			<section className='py-12'>
				<div className='container mx-auto px-4'>
					<motion.div
						variants={itemVariants(shouldReduceMotion)}
						initial='hidden'
						whileInView='visible'
						viewport={defaultViewport}
						className='max-w-4xl mx-auto'
					>
						<div className='bg-card/30 p-12 rounded-2xl border-2 border-foreground/10 transform-gpu motion-safe:translate-z-0'>
							<h2 className='text-3xl font-semibold mb-8'>Vår Historie</h2>
							<div className='space-y-4 text-lg text-card-foreground/80'>
								<p>
									Padel Co er en nystartet satsning på en sport som er i sterk
									vekst verden over. Med våre 6 baner på Grini er vi de eneste i
									Oslo området som tilbyr både inne og utebaner.
								</p>
								<p>
									Vår visjon er å skape et levende padelfellesskap hvor spillere
									på alle nivåer kan utvikle seg og dele gleden ved sporten.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Fasiliteter */}
			<section className='py-20 bg-card/30'>
				<div className='container mx-auto px-4'>
					<motion.div
						variants={containerVariants(shouldReduceMotion)}
						initial='hidden'
						whileInView='visible'
						viewport={defaultViewport}
						className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'
					>
						<motion.div
							variants={itemVariants(shouldReduceMotion)}
							className='bg-card/30 p-10 rounded-2xl border-2 border-foreground/10 
								transform-gpu motion-safe:translate-z-0 hover:bg-card/50 
								transition-colors duration-300'
						>
							<h3 className='text-2xl font-medium mb-4'>Våre Fasiliteter</h3>
							<p className='text-lg text-card-foreground/80'>
								Med 6 toppmoderne baner, både inne og ute, tilbyr vi det beste
								innen padelanlegg. Våre fasiliteter inkluderer også garderober,
								pro shop og sosiale områder.
							</p>
						</motion.div>

						<motion.div
							variants={itemVariants(shouldReduceMotion)}
							className='bg-card/30 p-10 rounded-2xl border-2 border-foreground/10 
								transform-gpu motion-safe:translate-z-0 hover:bg-card/50 
								transition-colors duration-300'
						>
							<h3 className='text-2xl font-medium mb-4'>Vår Ekspertise</h3>
							<p className='text-lg text-card-foreground/80'>
								Vårt dedikerte team har lang erfaring innen padel og
								idrettsanlegg. Vi tilbyr profesjonell veiledning, kurs og
								arrangementer for alle nivåer.
							</p>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
