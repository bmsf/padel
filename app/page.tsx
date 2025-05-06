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
		<div className='flex flex-col min-h-screen items-center justify-between gap-0 overflow-x-hidden'>
			<main className='flex flex-col gap-0 flex-1 items-center sm:items-start w-full'>
				<Hero />
				<div className='container mx-auto px-4 py-16'>
					<FacilitiesSection />

					<InstagramFeed />
					{/* <div className='py-16'>
						<PartnersAnimation />
					</div> */}
				</div>
			</main>
		</div>
	);
}
