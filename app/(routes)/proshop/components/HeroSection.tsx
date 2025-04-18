'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<div className='container mx-auto px-4 py-16 md:py-24'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className='max-w-3xl mx-auto text-center space-y-6'
			>
				<h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
					ProShop
				</h1>
				<p className='text-lg md:text-2xl text-muted-foreground leading-relaxed'>
					Alt du trenger for å spille padel - rett ved banene
				</p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.8 }}
					className='inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm text-card-foreground py-3 px-6 rounded-full border-2 border-foreground/10 mt-8'
				>
					<span className='text-lg'>Åpner i mai 2025</span>
				</motion.div>
			</motion.div>
		</div>
	);
}
