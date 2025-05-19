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
					<div className='bg-card/50 backdrop-blur-sm p-2 rounded-2xl overflow-hidden'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.5501076490995!2d10.5149235!3d59.9139519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dd7c3ddba0f%3A0x4e9862e8e2a1c5c5!2sB%C3%A6rum%2C%20Norge!5e0!3m2!1sno!2sno!4v1648123456789!5m2!1sno!2sno'
							width='100%'
							height='500'
							style={{ border: 0 }}
							allowFullScreen={true}
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
							title='Kart til Bærum Padel'
							className='rounded-xl'
						></iframe>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
