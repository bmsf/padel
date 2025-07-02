// Server Component
import { Suspense } from 'react';
import BrandsSection from './components/BrandsSection';
import ServicesSection from './components/ServicesSection';
import HeroSection from './components/HeroSection';
// import ProShopInfoSection from './components/ProShopInfoSection';
import { brands } from './data/brands';

// Metadata for SEO and performance
export const metadata = {
	title: 'Pro Shop - Padel Co',
	description:
		'Oppgradert padelutstyr. Ekspert veiledning. Prøv før du kjøper.',
};

export default function ProShop() {
	return (
		<div className='flex flex-col min-h-screen items-center justify-between gap-16 overflow-x-hidden'>
			<main className='flex flex-col gap-8 flex-1 items-center w-full max-w-7xl px-4 md:px-6'>
				<HeroSection />
				<Suspense
					fallback={<div className='animate-pulse h-96 bg-muted rounded-lg' />}
				>
					<ServicesSection />
				</Suspense>
				<Suspense
					fallback={<div className='animate-pulse h-48 bg-muted rounded-lg' />}
				>
					<BrandsSection brands={brands} />
				</Suspense>
				{/* <ProShopInfoSection /> */}
			</main>
		</div>
	);
}
