// Server Component
import BrandsSection from './components/BrandsSection';
import InfoSection from './components/InfoSection';
import CategoriesSection from './components/CategoriesSection';
import ServicesSection from './components/ServicesSection';
import HeroSection from './components/HeroSection';

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
		name: 'Adidas',
		logo: 'https://cdn.freebiesupply.com/logos/large/2x/adidas-logo.png',
		width: 200,
		height: 50,
	},
	{
		name: 'Wilson',
		logo: 'https://brandslogos.com/wp-content/uploads/images/large/wilson-logo-black-and-white.png',
		width: 200,
		height: 50,
	},
	{
		name: 'Bullpadel',
		logo: 'https://www.tennis-point.se/on/demandware.static/-/Library-Sites-TennisPoint/default/dw818bdcc0/brands/babolat.png',
		width: 200,
		height: 50,
	},
	{
		name: 'NOX',
		logo: 'https://cdn.freebiesupply.com/logos/large/2x/adidas-logo.png',
		width: 200,
		height: 50,
	},
	{
		name: 'Head',
		logo: 'https://brandslogos.com/wp-content/uploads/images/large/wilson-logo-black-and-white.png',
		width: 200,
		height: 50,
	},
];

interface CategoryProps {
	title: string;
	description: string;
}

export const categories: CategoryProps[] = [
	{
		title: 'Racketer',
		description: 'Kvalitetsracketer for alle nivåer',
	},
	{
		title: 'Tilbehør',
		description: 'Alt du trenger for å spille padel',
	},
	{
		title: 'Klær',
		description: 'Komfortable klær for padelspillere',
	},
];

export default function Proshop() {
	return (
		<div className='min-h-screen bg-background'>
			<HeroSection />
			<BrandsSection brands={brands} />
			<InfoSection />
			<CategoriesSection categories={categories} />
			<ServicesSection />
		</div>
	);
}
