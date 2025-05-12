export interface NavLink {
	href: string;
	label: string;
	permission?: string;
	icon?: string;
}

export interface NavConfig {
	links: NavLink[];
	logo: {
		lightSrc: string;
		darkSrc: string;
		alt: string;
		width: number;
		height: number;
	};
}
