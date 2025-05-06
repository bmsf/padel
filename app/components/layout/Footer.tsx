'use client';

import { useTheme } from 'next-themes';

export default function Footer() {
	return (
		<footer className='py-12 bg-background/95 text-foreground'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
					<div>
						<p className='mb-4'>
							Din destinasjon for padelglede og kvalitetstid
						</p>
						<p className='text-sm text-muted-foreground'>Grini Næringspark 6</p>
						<p className='text-sm text-muted-foreground'>1361 Østerås</p>
					</div>
					<div>
						<h3 className='text-lg font-semibold mb-4'>Åpningstider</h3>
						<p className='text-sm text-muted-foreground mb-2'>
							Alle dager: 00:00 - 24:00
						</p>
					</div>
					<div>
						<h3 className='text-lg font-semibold mb-4'>Kontakt</h3>
						<p className='text-sm text-muted-foreground mb-2'>
							Telefon: +47 48189107
						</p>
						<p className='text-sm text-muted-foreground mb-2'>
							E-post: post@padelco.no
						</p>
						<div className='flex space-x-4 mt-4'>
							<a
								href='https://www.facebook.com/padelco.no'
								className='text-muted-foreground hover:text-foreground transition-colors'
								target='_blank'
								rel='noopener noreferrer'
							>
								Facebook
							</a>
							<a
								href='https://www.instagram.com/padel_co/'
								className='text-muted-foreground hover:text-foreground transition-colors'
								target='_blank'
								rel='noopener noreferrer'
							>
								Instagram
							</a>
						</div>
					</div>
				</div>
				<hr className='border-border my-8' />
				<div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
					<p className='text-sm text-muted-foreground'>
						&copy; {new Date().getFullYear()} BMSF. All rights reserved.
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
				</div>
			</div>
		</footer>
	);
}
