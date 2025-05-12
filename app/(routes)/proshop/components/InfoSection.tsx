'use client';

import AnimatedSection from '@/app/components/ui/AnimatedSection';

export default function InfoSection() {
	return (
		<section className='py-12'>
			<div className='container mx-auto px-4'>
				<AnimatedSection className='max-w-3xl mx-auto'>
					<div className='bg-card/50 backdrop-blur-sm p-12 rounded-2xl border-2 border-foreground/10'>
						<h3 className='text-2xl font-semibold mb-8'>Besøk oss</h3>
						<div className='space-y-4 text-lg text-card-foreground/80'>
							<p className='flex items-center gap-3'>
								<strong className='text-card-foreground'>Plassering:</strong>
								Ved inngangen til padelsenteret
							</p>
							<p className='flex items-center gap-3'>
								<strong className='text-card-foreground'>Åpningstider:</strong>
								Samme som senteret
							</p>
							<p className='flex items-center gap-3'>
								<strong className='text-card-foreground'>Kontakt:</strong>
								proshop@padelcenter.no
							</p>
						</div>
					</div>
				</AnimatedSection>
			</div>
		</section>
	);
}
