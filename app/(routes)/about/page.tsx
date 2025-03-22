'use client';

import { motion } from 'framer-motion';

export default function About() {
	return (
		<div className='min-h-screen bg-background'>
			{/* Hero Section */}
			<div className='container mx-auto px-4 py-24'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='max-w-3xl mx-auto text-center space-y-6'
				>
					<h1 className='text-6xl font-bold tracking-tight'>Om Padel Co</h1>
					<p className='text-2xl text-muted-foreground leading-relaxed'>
						En nystartet satsning på en sport i sterk vekst
					</p>
				</motion.div>
			</div>

			{/* Hovedinnhold */}
			<section className='py-20'>
				<div className='container mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='max-w-4xl mx-auto'
					>
						<div className='bg-card/50 backdrop-blur-sm p-12 rounded-2xl border-2 border-foreground/10'>
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
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'
					>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className='bg-card/50 backdrop-blur-sm p-10 rounded-2xl border-2 border-foreground/10 group hover:bg-card/70 transition-all duration-500'
						>
							<h3 className='text-2xl font-medium mb-4'>Våre Fasiliteter</h3>
							<p className='text-lg text-card-foreground/80 group-hover:text-card-foreground'>
								Med 6 toppmoderne baner, både inne og ute, tilbyr vi det beste
								innen padelanlegg. Våre fasiliteter inkluderer også garderober,
								pro shop og sosiale områder.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className='bg-card/50 backdrop-blur-sm p-10 rounded-2xl border-2 border-foreground/10 group hover:bg-card/70 transition-all duration-500'
						>
							<h3 className='text-2xl font-medium mb-4'>Vår Ekspertise</h3>
							<p className='text-lg text-card-foreground/80 group-hover:text-card-foreground'>
								Vårt dedikerte team har lang erfaring innen padel og
								idrettsanlegg. Vi tilbyr profesjonell veiledning, kurs og
								arrangementer for alle nivåer.
							</p>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Kontakt */}
			<section className='py-20'>
				<div className='container mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='max-w-3xl mx-auto'
					>
						<div className='bg-card/50 backdrop-blur-sm p-12 rounded-2xl border-2 border-foreground/10'>
							<h3 className='text-2xl font-semibold mb-8'>Kontakt oss</h3>
							<div className='space-y-4 text-lg text-card-foreground/80'>
								<p>
									For mer informasjon om sporten og Padel Co, ta kontakt med:
								</p>
								<div className='mt-4'>
									<p className='font-semibold text-xl mb-2'>
										Kristian Ødegaard
									</p>
									<a
										href='tel:93004226'
										className='text-primary hover:text-primary/80 transition-colors'
									>
										Tlf: 930 04 226
									</a>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
