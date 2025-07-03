'use client';

import { motion } from 'framer-motion';

export default function Footer() {
	return (
		<footer className='py-12 bg-background/95 text-foreground'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'
				>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<p className='mb-4'>
							Din destinasjon for padelglede og kvalitetstid
						</p>
						<p className='text-sm '>Grini Næringspark 6</p>
						<p className='text-sm'>1361 Østerås</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<h3 className='text-lg font-semibold mb-4'>Åpningstider</h3>
						<p className='text-sm  mb-2'>Alle dager: 06:00 - 00:00</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<h3 className='text-lg font-semibold mb-4'>Kontakt</h3>
						<p className='text-sm  mb-2'>Telefon: +47 48189107</p>
						<p className='text-sm mb-2'>E-post: post@padelco.no</p>
						<div className='flex space-x-4 mt-4'>
							<a
								href='https://www.facebook.com/padelco.no'
								className=' hover:text-foreground transition-colors'
								target='_blank'
								rel='noopener noreferrer'
							>
								Facebook
							</a>
							<a
								href='https://www.instagram.com/padel_co/'
								className=' hover:text-foreground transition-colors'
								target='_blank'
								rel='noopener noreferrer'
							>
								Instagram
							</a>
						</div>
					</motion.div>
				</motion.div>
				<motion.hr
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className='border my-8'
				/>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'
				>
					<p className='text-sm text-muted-foreground'>
						&copy; {new Date().getFullYear()}{' '}
						<a
							href='https://portfolio-bmsf.vercel.app/'
							className='hover:text-foreground transition-colors'
							target='_blank'
							rel='noopener noreferrer'
						>
							BMSF
						</a>
						. All rights reserved.
					</p>
					<div className='flex space-x-6 text-sm'>
						<a
							href='#'
							className='text-muted-foreground hover:text-foreground transition-colors'
						>
							Personvern
						</a>
						<a
							href='#'
							className='text-muted-foreground hover:text-foreground transition-colors'
						>
							Vilkår
						</a>
						<a
							href='#'
							className='text-muted-foreground hover:text-foreground transition-colors'
						>
							Cookies
						</a>
					</div>
				</motion.div>
			</div>
		</footer>
	);
}
