'use client';

import {
	Mail,
	Phone,
	MapPin,
	Clock,
	Facebook,
	Instagram,
	Twitter,
} from 'lucide-react';
import { FormEvent } from 'react';

export default function Contact() {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Her ville vi normalt sende dataene til en server
		alert('Takk for din henvendelse! Vi vil kontakte deg så snart som mulig.');
	};

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
			<div className='text-center mb-12'>
				<h1 className='text-4xl font-bold text-gray-900 mb-4'>Kontakt Oss</h1>
				<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
					Har du spørsmål om våre tjenester eller ønsker å booke en bane? Vi er
					her for å hjelpe deg!
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-16'>
				{/* Kontaktinformasjon */}
				<div className='bg-white rounded-lg shadow-md p-8'>
					<h2 className='text-2xl font-semibold mb-6'>Kontaktinformasjon</h2>

					<div className='space-y-6'>
						<div className='flex items-start'>
							<div className='flex-shrink-0'>
								<Phone className='h-6 w-6 text-green-600' />
							</div>
							<div className='ml-4'>
								<h3 className='text-lg font-medium'>Telefon</h3>
								<p className='mt-1'>+47 123 45 678</p>
							</div>
						</div>

						<div className='flex items-start'>
							<div className='flex-shrink-0'>
								<Mail className='h-6 w-6 text-green-600' />
							</div>
							<div className='ml-4'>
								<h3 className='text-lg font-medium'>E-post</h3>
								<p className='mt-1'>kontakt@baerumpadel.no</p>
							</div>
						</div>

						<div className='flex items-start'>
							<div className='flex-shrink-0'>
								<MapPin className='h-6 w-6 text-green-600' />
							</div>
							<div className='ml-4'>
								<h3 className='text-lg font-medium'>Adresse</h3>
								<p className='mt-1'>
									Padelveien 123
									<br />
									1234 Bærum
								</p>
							</div>
						</div>

						<div className='flex items-start'>
							<div className='flex-shrink-0'>
								<Clock className='h-6 w-6 text-green-600' />
							</div>
							<div className='ml-4'>
								<h3 className='text-lg font-medium'>Åpningstider</h3>
								<div className='mt-1 space-y-1'>
									<p>Mandag - Fredag: 08:00 - 22:00</p>
									<p>Lørdag - Søndag: 09:00 - 21:00</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Kontaktskjema */}
				<div className='bg-white rounded-lg shadow-md p-8'>
					<h2 className='text-2xl font-semibold mb-6'>Send oss en melding</h2>

					<form className='space-y-6' onSubmit={handleSubmit}>
						<div>
							<label
								htmlFor='name'
								className='block text-sm font-medium text-gray-700'
							>
								Navn <span className='text-red-500'>*</span>
							</label>
							<input
								type='text'
								id='name'
								required
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500'
							/>
						</div>

						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-700'
							>
								E-post <span className='text-red-500'>*</span>
							</label>
							<input
								type='email'
								id='email'
								required
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500'
							/>
						</div>

						<div>
							<label
								htmlFor='subject'
								className='block text-sm font-medium text-gray-700'
							>
								Emne <span className='text-red-500'>*</span>
							</label>
							<input
								type='text'
								id='subject'
								required
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500'
							/>
						</div>

						<div>
							<label
								htmlFor='message'
								className='block text-sm font-medium text-gray-700'
							>
								Melding <span className='text-red-500'>*</span>
							</label>
							<textarea
								id='message'
								rows={4}
								required
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500'
							></textarea>
						</div>

						<div>
							<button
								type='submit'
								className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
							>
								Send melding
							</button>
						</div>
					</form>
				</div>
			</div>

			{/* Kart */}
			<div className='mb-16'>
				<h2 className='text-2xl font-semibold mb-6 text-center'>Finn oss</h2>
				<div className='h-96 bg-gray-200 rounded-lg overflow-hidden'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.5501076490995!2d10.5149235!3d59.9139519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dd7c3ddba0f%3A0x4e9862e8e2a1c5c5!2sB%C3%A6rum%2C%20Norge!5e0!3m2!1sno!2sno!4v1648123456789!5m2!1sno!2sno'
						width='100%'
						height='100%'
						style={{ border: 0 }}
						allowFullScreen={true}
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						title='Kart til Bærum Padel'
						className='w-full h-full'
					></iframe>
				</div>
			</div>

			{/* FAQ Seksjon */}
			<div className='mb-16'>
				<h2 className='text-2xl font-semibold mb-8 text-center'>
					Ofte stilte spørsmål
				</h2>

				<div className='space-y-6 max-w-4xl mx-auto'>
					<div className='bg-white rounded-lg shadow-md p-6'>
						<h3 className='text-lg font-medium text-gray-900 mb-2'>
							Hvordan bestiller jeg bane?
						</h3>
						<p className='text-gray-600'>
							Du kan bestille bane enkelt via vår nettside eller app. Velg
							ønsket dato og tid, og følg instruksjonene for betaling. Du kan
							også ringe oss direkte på telefonnummeret vårt for å bestille.
						</p>
					</div>

					<div className='bg-white rounded-lg shadow-md p-6'>
						<h3 className='text-lg font-medium text-gray-900 mb-2'>
							Kan jeg leie utstyr?
						</h3>
						<p className='text-gray-600'>
							Ja, vi tilbyr utleie av racketer og baller. Racketer koster 50 kr
							per person, og baller er inkludert i baneleien. Du kan også kjøpe
							utstyr i vår proshop.
						</p>
					</div>

					<div className='bg-white rounded-lg shadow-md p-6'>
						<h3 className='text-lg font-medium text-gray-900 mb-2'>
							Har dere kurs for nybegynnere?
						</h3>
						<p className='text-gray-600'>
							Ja, vi tilbyr kurs for alle nivåer, inkludert nybegynnere. Våre
							erfarne instruktører vil hjelpe deg med å lære grunnleggende
							teknikker og regler. Sjekk vår kurskalender for kommende kurs.
						</p>
					</div>

					<div className='bg-white rounded-lg shadow-md p-6'>
						<h3 className='text-lg font-medium text-gray-900 mb-2'>
							Hva er avbestillingsreglene?
						</h3>
						<p className='text-gray-600'>
							Du kan avbestille din reservasjon opptil 24 timer før spilletid
							for full refusjon. Avbestillinger mindre enn 24 timer før
							spilletid vil bli belastet med 50% av baneleien.
						</p>
					</div>
				</div>
			</div>

			{/* Ekstra informasjon */}
			<div className='bg-green-50 rounded-lg p-8 text-center'>
				<h2 className='text-2xl font-semibold mb-4'>Bli med i fellesskapet</h2>
				<p className='text-lg mb-6'>
					Følg oss på sosiale medier for å holde deg oppdatert på turneringer,
					arrangementer og spesielle tilbud.
				</p>
				<div className='flex justify-center space-x-6'>
					<a
						href='#'
						className='text-green-600 hover:text-green-800 flex items-center'
					>
						<Facebook className='h-6 w-6 mr-2' />
						Facebook
					</a>
					<a
						href='#'
						className='text-green-600 hover:text-green-800 flex items-center'
					>
						<Instagram className='h-6 w-6 mr-2' />
						Instagram
					</a>
					<a
						href='#'
						className='text-green-600 hover:text-green-800 flex items-center'
					>
						<Twitter className='h-6 w-6 mr-2' />
						Twitter
					</a>
				</div>
			</div>
		</div>
	);
}
