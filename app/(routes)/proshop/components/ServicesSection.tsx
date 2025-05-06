'use client';

import AnimatedSection from '@/app/components/ui/AnimatedSection';

const services = [
	{
		title: 'Personlig veiledning',
		description:
			'Våre eksperter hjelper deg med å finne riktig utstyr basert på ditt nivå og spillestil.',
	},
	{
		title: 'Stringing-service',
		description:
			'Profesjonell stringing av din racket med høykvalitets strenger.',
	},
	{
		title: 'Test av racketer',
		description: 'Prøv før du kjøper - test ulike racketer på våre baner.',
	},
];

export default function ServicesSection() {
	return (
		<section className='py-20'>
			<div className='container mx-auto px-4'>
				<AnimatedSection className='max-w-4xl mx-auto'>
					<h2 className='text-3xl font-semibold mb-12 text-center'>
						Våre tjenester
					</h2>
					<div className='space-y-8'>
						{services.map((service, index) => (
							<AnimatedSection
								key={service.title}
								delay={index * 0.1}
								direction={index % 2 === 0 ? 'left' : 'right'}
								className='bg-card/50 backdrop-blur-sm p-10 rounded-2xl border-2 border-foreground/10 group hover:bg-card/70 transition-all duration-500'
							>
								<h3 className='text-2xl font-medium mb-4'>{service.title}</h3>
								<p className='text-lg text-card-foreground/80 group-hover:text-card-foreground'>
									{service.description}
								</p>
							</AnimatedSection>
						))}
					</div>
				</AnimatedSection>
			</div>
		</section>
	);
}
