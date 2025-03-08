import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Hero from './components/layout/Hero';
import FacilitiesSection from './components/layout/FacilitiesSection';

export default function Home() {
	// const { userId } = auth();
	// if (userId != null) redirect('/events');
	return (
		<div className='flex flex-col min-h-screen items-center justify-between gap-16'>
			<main className='flex flex-col gap-8 flex-1 items-center sm:items-start w-full'>
				<Hero />
				<FacilitiesSection />
			</main>
		</div>
	);
}
