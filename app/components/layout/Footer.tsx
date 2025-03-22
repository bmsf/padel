export default function Footer() {
	return (
		<footer className='py-12 bg-background/95 text-foreground'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
					<div>
						<h2 className='text-2xl font-bold mb-4'>Padel Co Grini</h2>
						<p className='mb-4'>
							Din destinasjon for padelglede og kvalitetstid
						</p>
						<p className='text-sm text-muted-foreground'>Grini Næringspark 1</p>
						<p className='text-sm text-muted-foreground'>1361 Østerås</p>
					</div>
					<div>
						<h3 className='text-lg font-semibold mb-4'>Åpningstider</h3>
						<p className='text-sm text-muted-foreground mb-2'>
							Mandag - Fredag: 07:00 - 23:00
						</p>
						<p className='text-sm text-muted-foreground mb-2'>
							Lørdag - Søndag: 08:00 - 22:00
						</p>
					</div>
					<div>
						<h3 className='text-lg font-semibold mb-4'>Kontakt</h3>
						<p className='text-sm text-muted-foreground mb-2'>
							Telefon: +47 123 45 678
						</p>
						<p className='text-sm text-muted-foreground mb-2'>
							E-post: kontakt@padelcogrini.no
						</p>
						<div className='flex space-x-4 mt-4'>
							<a
								href='#'
								className='text-muted-foreground hover:text-foreground transition-colors'
							>
								Facebook
							</a>
							<a
								href='#'
								className='text-muted-foreground hover:text-foreground transition-colors'
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
