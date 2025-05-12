import { Metadata } from 'next';
import { siteConfig } from '../config/metadata';

type GenerateMetadataProps = {
	title: string;
	description?: string;
	image?: string;
	noIndex?: boolean;
};

export function generateMetadata({
	title,
	description = siteConfig.description,
	image = siteConfig.ogImage,
	noIndex = false,
}: GenerateMetadataProps): Metadata {
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [image],
		},
		robots: {
			index: !noIndex,
			follow: !noIndex,
			googleBot: {
				index: !noIndex,
				follow: !noIndex,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
	};
}

export function generateCanonicalUrl(path: string): string {
	return `${siteConfig.url}${path}`;
}
