import { Metadata } from 'next';

export const siteConfig = {
	name: 'Padel Co Grini',
	description:
		'Velkommen til Padel Co Grini - det beste padelsenteret i Bærum. Vi tilbyr toppmoderne padelbaner, profesjonell coaching og et engasjerende miljø for alle spillernivåer.',
	url: 'https://padel-ruddy-pi.vercel.app',
	ogImage: 'https://padel-ruddy-pi.vercel.app/og-image.jpg',
	links: {
		instagram: 'https://instagram.com/padelco',
		facebook: 'https://facebook.com/padelco',
	},
	address: {
		street: 'Griniveien 9',
		postalCode: '1340',
		city: 'Bekkestua',
		country: 'Norge',
	},
	contact: {
		phone: '+47 XXX XX XXX',
		email: 'kontakt@padelco.no',
	},
};

export const defaultMetadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	openGraph: {
		type: 'website',
		locale: 'nb_NO',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: siteConfig.name,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.name,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		icon: '/favicon-padelco.png',
		shortcut: '/favicon-padelco.png',
		apple: '/apple-touch-icon.png',
	},
	manifest: '/site.webmanifest',
	alternates: {
		canonical: siteConfig.url,
	},
};
