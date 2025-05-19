interface CategoryProps {
	title: string;
	description: string;
	imageUrl: string;
	features: string[];
}

export const categories: CategoryProps[] = [
	{
		title: 'Racketer',
		description:
			'Kvalitetsracketer for alle nivåer, fra nybegynnere til profesjonelle spillere',
		imageUrl:
			'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
		features: [
			'Stort utvalg av merker',
			'Prøv før du kjøper',
			'Stringing-service',
			'Profesjonell rådgivning',
		],
	},
	{
		title: 'Tilbehør',
		description:
			'Alt du trenger for å spille padel, fra strenger til baller og beskyttelsesutstyr',
		imageUrl:
			'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
		features: [
			'Strenger og grip',
			'Padelballer',
			'Beskyttelsesutstyr',
			'Bag og vesker',
		],
	},
	{
		title: 'Klær',
		description:
			'Komfortable og funksjonelle klær for padelspillere, designet for ytelse og stil',
		imageUrl:
			'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
		features: ['Treningsklær', 'Skotøy', 'Accessories', 'Merkevarer'],
	},
];
