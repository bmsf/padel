'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<div className='container mx-auto px-4 py-12 md:py-16'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className='max-w-4xl mx-auto text-center space-y-8'
			>
				<h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
					Pro Shop
				</h1>
				<p className='text-lg md:text-2xl text-muted-foreground leading-relaxed'>
					Klar til kamp – vi har det du trenger.
				</p>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className='text-lg md:text-xl leading-relaxed space-y-4 pt-8'
				>
					<p>
						I vår Pro Shop finner du nøye utvalgt padelutstyr fra HEAD og
						Babolat – to av verdens ledende merker innen padel. Enten du trenger
						en ny racket, grep, baller eller tilbehør, har vi det du trenger for
						å spille bedre og med mer komfort.
					</p>
					<p>
						Er du usikker på hva som passer deg? Vårt team hjelper deg gjerne
						med tips og veiledning, basert på nivå og spillestil.
					</p>
				</motion.div>
			</motion.div>
		</div>
	);
}
