// Server Component
import BrandsSection from './components/BrandsSection';
import CategoriesSection from './components/CategoriesSection';
import ServicesSection from './components/ServicesSection';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
// import InfoSection from './components/InfoSection';
import { brands } from './data/brands';

export default function ProShop() {
	return (
		<div className='flex flex-col min-h-screen items-center justify-between gap-16 overflow-x-hidden'>
			<main className='flex flex-col gap-8 flex-1 items-center w-full max-w-7xl px-4 md:px-6'>
				<HeroSection />
				<FeaturedProducts />
				<BrandsSection brands={brands} />
				<CategoriesSection />
				<ServicesSection />
			</main>
		</div>
	);
}
