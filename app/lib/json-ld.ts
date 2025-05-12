import { siteConfig } from '../config/metadata';

export type JsonLdWebsite = {
	'@context': 'https://schema.org';
	'@type': 'WebSite';
	name: string;
	url: string;
	description: string;
};

export type JsonLdOrganization = {
	'@context': 'https://schema.org';
	'@type': 'SportsActivityLocation';
	name: string;
	url: string;
	logo: string;
	description: string;
	address: {
		'@type': 'PostalAddress';
		streetAddress: string;
		postalCode: string;
		addressLocality: string;
		addressCountry: string;
	};
	contactPoint: {
		'@type': 'ContactPoint';
		telephone: string;
		email: string;
		contactType: 'customer service';
	};
	sameAs: string[];
};

export const getWebsiteSchema = (): JsonLdWebsite => ({
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: siteConfig.name,
	url: siteConfig.url,
	description: siteConfig.description,
});

export const getOrganizationSchema = (): JsonLdOrganization => ({
	'@context': 'https://schema.org',
	'@type': 'SportsActivityLocation',
	name: siteConfig.name,
	url: siteConfig.url,
	logo: `${siteConfig.url}/logo.png`,
	description: siteConfig.description,
	address: {
		'@type': 'PostalAddress',
		streetAddress: siteConfig.address.street,
		postalCode: siteConfig.address.postalCode,
		addressLocality: siteConfig.address.city,
		addressCountry: siteConfig.address.country,
	},
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: siteConfig.contact.phone,
		email: siteConfig.contact.email,
		contactType: 'customer service',
	},
	sameAs: [siteConfig.links.facebook, siteConfig.links.instagram],
});
