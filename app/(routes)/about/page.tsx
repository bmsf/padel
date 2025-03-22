export default function About() {
	return (
		<div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
			<div className='bg-white rounded-lg shadow-lg p-8'>
				<h1 className='text-3xl font-bold text-gray-900 mb-6'>Om Padel Co</h1>

				<div className='prose prose-lg text-gray-600'>
					<p className='mb-4'>
						Padel Co er en nystartet satsning på en sport som er i sterk vekst
						verden over. Med sine 6 baner på Grini er vi de eneste i Oslo
						området som tilbyr både inne og utebaner.
					</p>

					<div className='mt-8 p-6 bg-gray-50 rounded-lg'>
						<h2 className='text-xl font-semibold text-gray-800 mb-4'>
							Kontakt oss
						</h2>
						<p>For mer informasjon om sporten og Padel Co, ta kontakt med:</p>
						<div className='mt-2'>
							<strong>Kristian Ødegaard</strong>
							<br />
							<a
								href='tel:93004226'
								className='text-blue-600 hover:text-blue-800'
							>
								Tlf: 930 04 226
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
