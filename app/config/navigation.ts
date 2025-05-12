import { NavConfig } from '@/types/navigation';

export const navigationConfig: NavConfig = {
	links: [
		{ href: '/proshop', label: 'Pro shop' },
		{ href: '/event-packages', label: 'Eventpakker' },
		{ href: '/partners', label: 'Samarbeidspartnere' },
		{ href: '/about', label: 'Om oss' },
		{ href: '/contact', label: 'Kontakt oss' },
	],
	logo: {
		lightSrc: '/Padel_Co_logo_refined_white.png',
		darkSrc: '/Padel_Co_logo_refined_green.png',
		alt: 'Padel Co Logo',
		width: 130,
		height: 5,
	},
};
