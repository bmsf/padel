import Hero from './components/layout/Hero';
import FacilitiesSection from './components/layout/FacilitiesSection';
import PartnersAnimation from './components/ui/PartnersAnimation';
import InstagramFeed from './components/layout/InstagramFeed';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Hjem | Padel Co',
	description: 'Din destinasjon for padel i Norge',
};

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen items-center justify-between gap-16'>
			<main className='flex flex-col gap-8 flex-1 items-center sm:items-start w-full'>
				<Hero />
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl py-20'>
						Padelcenter med baner innendørs og utendørs
					</h2>
					<FacilitiesSection />
					<div className='py-20'>
						<PartnersAnimation />
					</div>
					<InstagramFeed />
				</div>
			</main>
		</div>
	);
}
