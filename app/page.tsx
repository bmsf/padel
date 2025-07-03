import Hero from './components/layout/Hero';
import FacilitiesSection from './components/layout/FacilitiesSection';
import TreningsromSection from './components/layout/TreningsromSection';
// import NewsBento from './components/layout/NewsBento';
import MapSection from './components/layout/MapSection';
import PartnersAnimation from './components/ui/PartnersAnimation';
import { generateMetadata } from './lib/metadata-utils';
import { siteConfig } from './config/metadata';
import Script from 'next/script';

export const metadata = generateMetadata({
	title: 'Hjem',
	description:
		'Velkommen til Padel Co Grini - det beste padelsenteret i Bærum. Vi tilbyr toppmoderne padelbaner, profesjonell coaching og et engasjerende miljø for alle spillernivåer.',
});

type LocalBusinessSchema = {
	'@context': 'https://schema.org';
	'@type': 'LocalBusiness';
	name: string;
	image: string;
	'@id': string;
	url: string;
	telephone: string;
	address: {
		'@type': 'PostalAddress';
		streetAddress: string;
		addressLocality: string;
		postalCode: string;
		addressCountry: string;
	};
	geo: {
		'@type': 'GeoCoordinates';
		latitude: number;
		longitude: number;
	};
	openingHoursSpecification: {
		'@type': 'OpeningHoursSpecification';
		dayOfWeek: string[];
		opens: string;
		closes: string;
	}[];
};

const localBusinessSchema: LocalBusinessSchema = {
	'@context': 'https://schema.org',
	'@type': 'LocalBusiness',
	name: siteConfig.name,
	image: `${siteConfig.url}/images/facility.jpg`,
	'@id': siteConfig.url,
	url: siteConfig.url,
	telephone: siteConfig.contact.phone,
	address: {
		'@type': 'PostalAddress',
		streetAddress: siteConfig.address.street,
		addressLocality: siteConfig.address.city,
		postalCode: siteConfig.address.postalCode,
		addressCountry: siteConfig.address.country,
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: 59.9139,
		longitude: 10.645,
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: [
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
				'Sunday',
			],
			opens: '06:00',
			closes: '00:00',
		},
	],
};

export default function Home() {
	return (
		<>
			<Script
				id='json-ld-local-business'
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(localBusinessSchema),
				}}
			/>
			<div className='flex flex-col min-h-screen items-center justify-between gap-0 overflow-x-hidden'>
				<main className='flex flex-col gap-0 flex-1 items-center sm:items-start w-full'>
					<Hero />
					<div className='container mx-auto px-4 py-16'>
						<FacilitiesSection />
						<TreningsromSection />
						{/* <NewsBento /> */}
						<PartnersAnimation />
						<MapSection />
					</div>
				</main>
			</div>
		</>
	);
}
