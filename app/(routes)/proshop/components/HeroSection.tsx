'use client';

import AnimatedSection from '@/app/components/ui/AnimatedSection';

export default function HeroSection() {
	return (
		<div className='container mx-auto px-4 py-16 md:py-24'>
			<AnimatedSection className='max-w-3xl mx-auto text-center space-y-6'>
				<h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
					Velkommen til vår Pro Shop
				</h1>
				<p className='text-lg md:text-2xl text-muted-foreground leading-relaxed'>
					Oppgradert. Gjennomført. Klar for kamp.
				</p>
				<AnimatedSection delay={0.5} className=''>
					<p className='text-lg'>
						Vi tilbyr nøye utvalgt padelutstyr for både nybegynnere og erfarne
						spillere. Finn racketen som passer deg, prøv før du kjøper – og få
						råd fra vårt team.
					</p>
				</AnimatedSection>
			</AnimatedSection>
		</div>
	);
}
