'use client';

import { motion } from 'framer-motion';

export default function MapSection() {
	return (
		<section className='py-20 bg-card/30'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='max-w-7xl mx-auto'
				>
					<h2 className='text-3xl font-semibold mb-8 text-center'>Finn oss</h2>
					<div className='flex flex-col items-center justify-center mb-8'>
						<p className='text-xl font-medium text-center'>
							Grini Næringspark 6
						</p>
						<p className='text-lg text-muted-foreground text-center'>
							1361 Østerås
						</p>
					</div>
					<div className='bg-card/50 backdrop-blur-sm p-2 rounded-2xl overflow-hidden'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.9614935869436!2d10.572959077268582!3d59.925275070562086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dd7b0b9a88d%3A0x7d1e72db6e8d832b!2sGrini%20N%C3%A6ringspark%206%2C%201361%20%C3%98ster%C3%A5s!5e0!3m2!1sno!2sno!4v1710876847542!5m2!1sno!2sno'
							width='100%'
							height='500'
							style={{ border: 0 }}
							allowFullScreen={true}
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
							title='Kart til Padel Co Grini'
							className='rounded-xl'
						></iframe>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
