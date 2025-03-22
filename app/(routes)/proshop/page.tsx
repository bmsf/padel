import Image from 'next/image';

export default function Proshop() {
	return (
		<div className='flex flex-col min-h-screen items-center justify-between'>
			<main className='flex flex-col gap-8 flex-1 w-full'>
				{/* Header section - different from hero */}
				<div className='w-full bg-gradient-to-r from-blue-900 to-blue-700 py-16'>
					<div className='container mx-auto px-4'>
						<div className='flex flex-col md:flex-row items-center justify-between gap-8'>
							<div className='md:w-1/2'>
								<h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
									ProShop
								</h1>
								<p className='text-xl text-white/90 mb-6'>
									Alt du trenger for å spille padel - rett ved banene
								</p>
								<div className='bg-white text-blue-900 py-2 px-4 rounded-md inline-block font-medium'>
									Åpner i mai 2024
								</div>
							</div>
							<div className='md:w-1/2 flex justify-center'>
								<div className='w-64 h-64 bg-white/10 rounded-full flex items-center justify-center'>
									<span className='text-9xl'>🏓</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Main content */}
				<div className='container mx-auto px-4 py-12'>
					{/* Introduction */}
					<div className='max-w-3xl mx-auto mb-16'>
						<h2 className='text-3xl font-semibold mb-6 text-center'>
							Velkommen til vår ProShop
						</h2>
						<p className='text-lg text-gray-700 mb-8'>
							I vår ProShop finner du et bredt utvalg av padelutstyr fra ledende
							merker. Vårt erfarne personale hjelper deg med å finne riktig
							utstyr tilpasset ditt nivå og spillestil. Vi har fokus på kvalitet
							og funksjonalitet, og tilbyr produkter for både nybegynnere og
							erfarne spillere.
						</p>
						<div className='bg-gray-100 p-6 rounded-lg'>
							<h3 className='text-xl font-medium mb-3'>Besøk oss</h3>
							<p className='mb-2'>
								<strong>Plassering:</strong> Ved inngangen til padelsenteret
							</p>
							<p className='mb-2'>
								<strong>Åpningstider:</strong> Samme som senteret
							</p>
							<p>
								<strong>Kontakt:</strong> proshop@padelcenter.no
							</p>
						</div>
					</div>

					{/* Product categories */}
					<div className='mb-20'>
						<h2 className='text-2xl font-semibold mb-10 text-center'>
							Vårt utvalg
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
							<ProductCard
								title='Padelracketer'
								description='Vi fører et bredt utvalg av racketer for alle nivåer, fra nybegynner til profesjonell.'
								icon='🎾'
							/>
							<ProductCard
								title='Baller og tilbehør'
								description='Kvalitetsballer, grips, beskyttere og annet nødvendig tilbehør for din padel-opplevelse.'
								icon='🏓'
							/>
							<ProductCard
								title='Klær og sko'
								description='Komfortable og funksjonelle klær og sko spesielt designet for padelspillere.'
								icon='👟'
							/>
						</div>
					</div>

					{/* Services section with alternating layout */}
					<div className='mb-20'>
						<h2 className='text-2xl font-semibold mb-10 text-center'>
							Tjenester i vår ProShop
						</h2>

						<div className='space-y-12'>
							<ServiceRow
								title='Personlig racketvalg'
								description='Våre eksperter hjelper deg med å finne den perfekte racketen basert på din spillestil og nivå. Vi tar hensyn til din erfaring, spillestil og preferanser for å finne den racketen som passer best for deg.'
								icon='👤'
								imagePosition='right'
							/>

							<ServiceRow
								title='Stringing-service'
								description='Vi tilbyr profesjonell stringing av din racket med høykvalitets strenger. Riktig stringing er avgjørende for racketens ytelse og holdbarhet. Våre teknikere sørger for at din racket får optimal spenning og kvalitet.'
								icon='🔧'
								imagePosition='left'
							/>

							<ServiceRow
								title='Test av racketer'
								description='Prøv før du kjøper! Vi lar deg teste ulike racketer på våre baner. Dette gir deg muligheten til å kjenne hvordan racketen fungerer i spill før du bestemmer deg for hvilken modell som passer best for deg.'
								icon='✅'
								imagePosition='right'
							/>

							<ServiceRow
								title='Racket-reparasjon'
								description='Har du en skadet racket? Vi kan hjelpe deg med reparasjoner og vedlikehold. Vår service inkluderer bytte av grepstape, reparasjon av ramme og andre vedlikeholdstjenester for å forlenge levetiden på utstyret ditt.'
								icon='🛠️'
								imagePosition='left'
							/>
						</div>
					</div>

					{/* Featured brands */}
					<div className='mb-20'>
						<h2 className='text-2xl font-semibold mb-8 text-center'>
							Populære merker i vår ProShop
						</h2>
						<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
							{['Babolat', 'Head', 'Wilson', 'Adidas', 'Bullpadel', 'NOX'].map(
								(brand) => (
									<div
										key={brand}
										className='bg-gray-100 p-6 rounded-lg flex items-center justify-center h-24'
									>
										<p className='text-lg font-medium'>{brand}</p>
									</div>
								)
							)}
						</div>
					</div>

					{/* CTA section */}
					<div className='bg-blue-50 p-8 rounded-lg text-center'>
						<h2 className='text-2xl font-semibold mb-4'>Besøk vår ProShop</h2>
						<p className='text-lg mb-6 max-w-2xl mx-auto'>
							Kom innom for å se vårt utvalg av kvalitetsprodukter for padel.
							Vårt kyndige personale står klare til å hjelpe deg med å finne
							riktig utstyr for ditt nivå og spillestil.
						</p>
						<div className='bg-blue-600 text-white py-3 px-6 rounded-lg inline-block font-medium'>
							Åpner i mai 2024
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

// Component for product cards
interface ProductCardProps {
	title: string;
	description: string;
	icon: string;
}

function ProductCard({ title, description, icon }: ProductCardProps) {
	return (
		<div className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full'>
			<div className='h-48 w-full bg-blue-100 flex items-center justify-center'>
				<span className='text-6xl'>{icon}</span>
			</div>
			<div className='p-6'>
				<h3 className='text-xl font-semibold mb-3'>{title}</h3>
				<p className='text-gray-700'>{description}</p>
			</div>
		</div>
	);
}

// Component for service rows with alternating layout
interface ServiceRowProps {
	title: string;
	description: string;
	icon: string;
	imagePosition: 'left' | 'right';
}

function ServiceRow({
	title,
	description,
	icon,
	imagePosition,
}: ServiceRowProps) {
	return (
		<div
			className={`flex flex-col ${
				imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
			} gap-8 items-center`}
		>
			<div className='md:w-1/3 w-full'>
				<div className='bg-blue-100 rounded-lg h-64 w-full flex items-center justify-center'>
					<span className='text-8xl'>{icon}</span>
				</div>
			</div>
			<div className='md:w-2/3 w-full'>
				<h3 className='text-xl font-semibold mb-3'>{title}</h3>
				<p className='text-gray-700'>{description}</p>
			</div>
		</div>
	);
}
