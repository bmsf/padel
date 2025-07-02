import { NavConfig } from '@/types/navigation';

export const navigationConfig: NavConfig = {
	links: [
		{ href: '/proshop', label: 'PRO SHOP' },
		{ href: '/event-packages', label: 'EVENTPAKKER' },
		{ href: '/partners', label: 'SAMARBEIDSPARTNERE' },
		{ href: '/about', label: 'OM OSS' },
		{ href: '/contact', label: 'KONTAKT OSS' },
	],
	logo: {
		lightSrc: '/Padel_Co_logo_refined_white.png',
		darkSrc: '/Padel_Co_logo_refined_green 14.44.26.png',
		alt: 'Padel Co Logo',
		width: 130,
		height: 5,
	},
};
