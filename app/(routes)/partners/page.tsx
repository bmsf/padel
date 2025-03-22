import PartnersAnimation from '@/app/components/ui/PartnersAnimation';

export default function Partners() {
	return (
		<div className='container mx-auto px-4 py-16'>
			<div className='max-w-4xl mx-auto'>
				<h1 className='text-4xl font-bold text-center mb-6'>
					Våre Samarbeidspartnere
				</h1>
				<p className='text-lg text-center text-muted-foreground mb-12'>
					Vi er stolte av å samarbeide med noen av verdens ledende merkevarer
					innen sport og livsstil. Sammen skaper vi bedre opplevelser for våre
					medlemmer.
				</p>
			</div>

			{/* Animert partnerseksjon */}
			<PartnersAnimation />

			{/* Partnerbeskrivelse */}
			<div className='max-w-4xl mx-auto mt-16 grid gap-8'>
				<div className='text-center'>
					<h2 className='text-3xl font-semibold mb-4'>
						Hvorfor Samarbeide med Oss?
					</h2>
					<p className='text-muted-foreground'>
						Som samarbeidspartner får du tilgang til et engasjert fellesskap av
						padelentusiaster. Vi tilbyr skreddersydde løsninger for
						merkevareeksponering og muligheter for å nå ut til en voksende
						målgruppe.
					</p>
				</div>

				<div className='grid md:grid-cols-2 gap-8 mt-8'>
					<div className='p-6 rounded-lg border'>
						<h3 className='text-xl font-semibold mb-3'>
							For Eksisterende Partnere
						</h3>
						<p className='text-muted-foreground'>
							Vi verdsetter våre langsiktige partnerskap og jobber kontinuerlig
							for å skape verdi for alle involverte parter. Sammen utvikler vi
							sporten og skaper gode opplevelser.
						</p>
					</div>

					<div className='p-6 rounded-lg border'>
						<h3 className='text-xl font-semibold mb-3'>Bli Partner</h3>
						<p className='text-muted-foreground'>
							Er du interessert i å bli en av våre samarbeidspartnere? Ta
							kontakt med oss for en uforpliktende samtale om mulighetene for
							partnerskap.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
