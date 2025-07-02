import { NavConfig } from '@/types/navigation';

export const navigationConfig: NavConfig = {
	links: [
		{ href: '/proshop', label: 'PRO SHOP' },
		{ href: '/om-padel', label: 'OM PADEL' },
		{ href: '/eventpakker', label: 'EVENTPAKKER' },
		{ href: '/samarbeidspartnere', label: 'SAMARBEIDSPARTNERE' },
		{ href: '/om-oss', label: 'OM OSS' },
		{ href: '/kontakt-oss', label: 'KONTAKT OSS' },
	],
	logo: {
		lightSrc: '/Padel_Co_logo_refined_white.png',
		darkSrc: '/Padel_Co_logo_refined_green 14.44.26.png',
		alt: 'Padel Co Logo',
		width: 130,
		height: 5,
	},
};
