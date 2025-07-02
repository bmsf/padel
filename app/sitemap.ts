import { MetadataRoute } from 'next';
import { siteConfig } from './config/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
	const routes = [
		'',
		'/proshop',
		'/om-padel',
		'/eventpakker',
		'/samarbeidspartnere',
		'/om-oss',
		'/kontakt-oss',
	].map((route) => ({
		url: `${siteConfig.url}${route}`,
		lastModified: new Date().toISOString().split('T')[0],
		changeFrequency: 'daily' as const,
		priority: route === '' ? 1 : 0.8,
	}));

	return routes;
}
