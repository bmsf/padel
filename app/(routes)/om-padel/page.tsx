import { generateMetadata } from '@/app/lib/metadata-utils';
import PadelInfoHero from './components/PadelInfoHero';
import PadelHistorySection from './components/PadelHistorySection';
import PadelRulesSection from './components/PadelRulesSection';
import FAQSection from './components/FAQSection';

export const metadata = generateMetadata({
	title: 'Slik Spilles Padel',
	description:
		'Lær om padel - den raskest voksende sporten i verden. Oppdag historien, reglene og hvordan spillet fungerer på våre moderne baner.',
});

export default function OmPadelPage() {
	return (
		<div className='flex flex-col min-h-screen items-center justify-between gap-0 overflow-x-hidden'>
			<main className='flex flex-col gap-0 flex-1 items-center sm:items-start w-full'>
				<PadelInfoHero />
				<div className='container mx-auto px-4 py-16'>
					<PadelHistorySection />
					<PadelRulesSection />
					<FAQSection />
				</div>
			</main>
		</div>
	);
}
