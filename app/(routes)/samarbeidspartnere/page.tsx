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
					className='max-w-4xl mx-auto text-center space-y-6'
				>
					<h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
						Bli samarbeidspartner?
					</h1>
					<p className='text-lg md:text-xl text-muted-foreground leading-relaxed'>
						Bli med på laget – og bli synlig der energien skjer.
					</p>
				</motion.div>
			</div>

			{/* Hovedinnhold - Hva er Padel Co */}
			<section className='py-16'>
				<div className='container mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className='max-w-4xl mx-auto'
					>
						<div className='p-12 rounded-2xl border-2 border-foreground/10 bg-card/30 transform-gpu motion-safe:translate-z-0'>
							<h2 className='text-3xl font-semibold mb-6'>
								Padel Co er mer enn et Padelsenter
							</h2>
							<div className='space-y-4 text-lg text-card-foreground/80 leading-relaxed'>
								<p>
									Det er et samlingspunkt. Vi skaper bevegelse, tilhørighet og
									entusiasme for padel i et marked i sterk vekst. Som
									samarbeidspartner får din bedrift muligheten til å knytte seg
									til et aktivt og engasjert publikum, samtidig som dere blir en
									del av et levende padelmiljø med høy synlighet og troverdig
									profil.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Hva får dere som partner */}
			<section className='py-16 bg-card/30'>
				<div className='container mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className='max-w-5xl mx-auto'
					>
						<h2 className='text-3xl font-semibold text-center mb-12'>
							Hva får dere som partner hos oss?
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							{[
								'Eksponering på baner, skjermer og i hallen – der folk faktisk oppholder seg',
								'Synlighet i et miljø med høy kjøpekraft og lojal brukerbase',
								'Mulighet for skreddersydde pakker – både digitalt og fysisk',
								'Teambuilding og faste spilletider for ansatte',
								'Mulighet for egne bedriftsarrangementer og turneringer',
								'Del av et kvalitetsdrevet og fremoverlent konsept',
							].map((benefit, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className='bg-card/50 p-6 rounded-xl border border-foreground/10 
										transform-gpu motion-safe:translate-z-0 hover:bg-card/70 
										transition-colors duration-300'
								>
									<div className='flex items-start space-x-3'>
										<div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
										<p className='text-lg text-card-foreground/80'>{benefit}</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Eksisterende partnere */}
			<section className='py-16'>
				<div className='container mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className='max-w-4xl mx-auto text-center'
					>
						<h2 className='text-3xl font-semibold mb-8'>
							Vi samarbeider allerede med sterke merkevarer
						</h2>
						<p className='text-lg text-card-foreground/80 mb-8'>
							Stabæk Fotball, Follestad, Jacob Cohen, HEAD, Babolat og flere –
							og vi utvider kontinuerlig nettverket vårt.
						</p>
					</motion.div>
				</div>
			</section>

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

			{/* Call to action */}
			<section className='py-16'>
				<div className='container mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className='max-w-4xl mx-auto text-center'
					>
						<div className='p-12 rounded-2xl border-2 border-foreground/10 bg-card/30 transform-gpu motion-safe:translate-z-0'>
							<h2 className='text-3xl font-semibold mb-6'>
								Ønsker du å styrke merkevaren din?
							</h2>
							<p className='text-lg text-card-foreground/80 mb-8 leading-relaxed'>
								I et voksende og levende miljø? Ta kontakt med oss i dag – så
								finner vi en løsning som passer dine mål og din synlighet.
							</p>
							<div className='bg-primary/10 p-6 rounded-xl border border-primary/20'>
								<p className='text-lg font-medium mb-2'>Kontakt oss på:</p>
								<a
									href='mailto:post@padelco.no'
									className='text-xl font-semibold hover:underline transition-colors duration-300'
								>
									post@padelco.no
								</a>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
