'use client';

import { motion, useReducedMotion } from 'framer-motion';
import PartnersAnimation from '@/app/components/ui/PartnersAnimation';
import {
	containerVariants,
	itemVariants,
	fadeInVariants,
	defaultViewport,
} from '@/app/lib/animations';

export default function Partners() {
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
						Våre Samarbeidspartnere
					</h1>
					<p className='text-lg md:text-2xl text-muted-foreground leading-relaxed'>
						Vi er stolte av å samarbeide med noen av verdens ledende merkevarer
						innen sport og livsstil. Sammen skaper vi bedre opplevelser for våre
						medlemmer.
					</p>
				</motion.div>
			</div>

			{/* Animert partnerseksjon */}
			<section className='py-12 bg-card/30'>
				<div className='container mx-auto px-4'>
					<motion.div
						variants={fadeInVariants(shouldReduceMotion)}
						initial='hidden'
						whileInView='visible'
						viewport={defaultViewport}
						className='max-w-7xl mx-auto'
					>
						<PartnersAnimation />
					</motion.div>
				</div>
			</section>

			{/* Partnerbeskrivelse */}
			<section className='py-20'>
				<div className='container mx-auto px-4'>
					<motion.div
						variants={itemVariants(shouldReduceMotion)}
						initial='hidden'
						whileInView='visible'
						viewport={defaultViewport}
						className='max-w-4xl mx-auto'
					>
						<div className='p-12 rounded-2xl border-2 border-foreground/10 bg-card/30 transform-gpu motion-safe:translate-z-0'>
							<h2 className='text-3xl font-semibold mb-8'>
								Hvorfor Samarbeide med Oss?
							</h2>
							<div className='space-y-4 text-lg text-card-foreground/80'>
								<p>
									Som samarbeidspartner får du tilgang til et engasjert
									fellesskap av padelentusiaster. Vi tilbyr skreddersydde
									løsninger for merkevareeksponering og muligheter for å nå ut
									til en voksende målgruppe.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Partner kategorier */}
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
							<h3 className='text-2xl font-medium mb-4'>
								For Eksisterende Partnere
							</h3>
							<p className='text-lg text-card-foreground/80'>
								Vi verdsetter våre langsiktige partnerskap og jobber
								kontinuerlig for å skape verdi for alle involverte parter.
								Sammen utvikler vi sporten og skaper gode opplevelser.
							</p>
						</motion.div>

						<motion.div
							variants={itemVariants(shouldReduceMotion)}
							className='bg-card/30 p-10 rounded-2xl border-2 border-foreground/10 
								transform-gpu motion-safe:translate-z-0 hover:bg-card/50 
								transition-colors duration-300'
						>
							<h3 className='text-2xl font-medium mb-4'>Bli Partner</h3>
							<p className='text-lg text-card-foreground/80'>
								Er du interessert i å bli en av våre samarbeidspartnere? Ta
								kontakt med oss for en uforpliktende samtale om mulighetene for
								partnerskap.
							</p>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
