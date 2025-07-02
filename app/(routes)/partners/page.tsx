'use client';

import { motion } from 'framer-motion';
import PartnersAnimation from '@/app/components/ui/PartnersAnimation';

export default function Partners() {
	return (
		<div className='min-h-screen bg-background overflow-x-hidden'>
			{/* Hero Section */}
			<div className='container mx-auto px-4 py-12 md:py-16'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
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
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
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
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
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
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.1 }}
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
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className='bg-card/30 p-10 rounded-2xl border-2 border-foreground/10 
								transform-gpu motion-safe:translate-z-0 hover:bg-card/50 
								transition-colors duration-300'
						>
							<h3 className='text-2xl font-medium mb-4'>Bli Partner</h3>
							<p className='text-lg text-card-foreground/80 mb-4'>
								Er du interessert i å bli en av våre samarbeidspartnere? Ta
								kontakt med oss for en uforpliktende samtale om mulighetene for
								partnerskap.
							</p>
							<p className='text-lg font-medium'>
								Kontakt oss på:{' '}
								<a href='mailto:post@padelco.no' className='hover:underline'>
									post@padelco.no
								</a>
							</p>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
