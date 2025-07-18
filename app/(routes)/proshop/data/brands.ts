interface BrandProps {
	name: string;
	logo: string;
	width: number;
	height: number;
}

export const brands: BrandProps[] = [
	{
		name: 'Babolat',
		logo: 'https://www.tennis-point.se/on/demandware.static/-/Library-Sites-TennisPoint/default/dw818bdcc0/brands/babolat.png',
		width: 200,
		height: 50,
	},
	{
		name: 'Head',
		logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2020/03/head-logo.png',
		width: 200,
		height: 50,
	},
];
