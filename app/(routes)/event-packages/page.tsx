'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Import Shadcn UI components
import { Button } from '@/components/ui/button';
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

interface EventPackage {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	features: string[];
	price: string;
	duration: string;
	category: string;
}

// Sample event package data
const eventPackages: EventPackage[] = [
	{
		id: 1,
		title: 'Bedriftsevent',
		description:
			'Perfekt for teambuilding og firmasammenkomster. Inkluderer baner, utstyr og instruktør.',
		imageUrl:
			'https://images.unsplash.com/photo-1527891751199-7225231a68dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		features: [
			'Reserverte baner (2-6 baner)',
			'Padel-instruktør for nybegynnere',
			'All nødvendig utstyr inkludert',
			'Møterom tilgjengelig før/etter spill',
			'Forfriskninger og enkle snacks',
			'Tilpasset turneringsoppsett',
		],
		price: 'Fra 4.900 NOK',
		duration: '3 timer',
		category: 'bedrift',
	},
	{
		id: 2,
		title: 'Bursdagspakke',
		description:
			'Feiringen blir uforglemmelig med padel-moro for alle aldre. Perfekt for både barn og voksne.',
		imageUrl:
			'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		features: [
			'Reserverte baner (1-3 baner)',
			'Instruktør for nybegynnere',
			'All nødvendig utstyr inkludert',
			'Dedikert område for kake/mat',
			'Tilpasset mini-turnering',
			'Spesialpriser for barn/ungdom',
		],
		price: 'Fra 2.900 NOK',
		duration: '2 timer',
		category: 'bursdag',
	},
	{
		id: 3,
		title: 'Turnering',
		description:
			'Organiser din egen padelturnering for venner, kolleger eller klubbmedlemmer med profesjonelt oppsett.',
		imageUrl:
			'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?q=80&w=3540&auto=format&fit=crop',
		features: [
			'Turneringsoppsett og planlegging',
			'Profesjonell turneringsledelse',
			'Scoreboard og resultatoppdateringer',
			'Premiepakke for vinnere',
			'Mat og drikke pakker tilgjengelig',
			'Fotograf (tilleggstjeneste)',
		],
		price: 'Fra 6.900 NOK',
		duration: '4-8 timer',
		category: 'turnering',
	},
	{
		id: 4,
		title: 'VIP Kveld',
		description:
			'Eksklusiv opplevelse med premium-service for deg og dine gjester i en privat atmosfære.',
		imageUrl:
			'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		features: [
			'Eksklusiv bruk av VIP-området',
			'Premium mat- og drikkemeny',
			'Dedikert personlig instruktør',
			'Luksus håndklær og premium utstyr',
			'Parkeringsplass reservert',
			'Personlig tilpasset opplegg',
		],
		price: 'Fra 8.900 NOK',
		duration: '4 timer',
		category: 'vip',
	},
];

// Testimonial data
const testimonials = [
	{
		id: 1,
		name: 'Morten Hansen',
		company: 'Innovasjon AS',
		quote:
			'Vi arrangerte et teambuilding-event hos dem, og det var en stor suksess! Personalet var profesjonelle og oppsettet perfekt for våre behov.',
		avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
	},
	{
		id: 2,
		name: 'Kristine Larsen',
		company: 'Tech Solutions',
		quote:
			'Arrangerte bursdagen min her og det overgikk alle forventninger. Selv nybegynnerne hadde det utrolig gøy med instruktørene!',
		avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
	},
	{
		id: 3,
		name: 'Thomas Berg',
		company: 'Sportsklubben Aktiv',
		quote:
			'Profesjonell turneringsorganisering med strålende atmosfære. Vil absolutt arrangere flere konkurranser her i fremtiden.',
		avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
	},
];

// FAQ data
const faqs = [
	{
		question: 'Hvor mange personer kan delta på et event?',
		answer:
			'Vi kan tilpasse eventet for grupper fra 4 til 60 personer, avhengig av type arrangement og tilgjengelighet.',
	},
	{
		question: 'Må deltakerne ha spilt padel før?',
		answer:
			'Nei, våre instruktører kan tilpasse aktivitetene for alle ferdighetsnivåer, fra nybegynnere til erfarne spillere.',
	},
	{
		question: 'Kan vi få mat og drikke til arrangementet?',
		answer:
			'Ja, vi tilbyr ulike catering-alternativer som kan tilpasses ditt budsjett og preferanser. Alt fra enkle forfriskninger til komplett bespisning.',
	},
	{
		question: 'Hvor lang tid i forveien bør vi bestille?',
		answer:
			'Vi anbefaler å bestille 2-4 uker i forveien for å sikre tilgjengelighet, spesielt i helger. For større arrangementer anbefaler vi 1-2 måneder.',
	},
];

export default function EventPackages() {
	const [activeTab, setActiveTab] = useState('alle');

	// Filter packages based on active tab
	const filteredPackages =
		activeTab === 'alle'
			? eventPackages
			: eventPackages.filter((pkg) => pkg.category === activeTab);

	return (
		<div className='min-h-screen bg-background overflow-x-hidden'>
			{/* Hero Section */}
			<div className='container mx-auto px-4 py-12 md:py-16'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='max-w-3xl mx-auto text-center space-y-6'
				>
					<h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
						Eventpakker
					</h1>
					<p className='text-lg md:text-2xl text-muted-foreground leading-relaxed'>
						Uforglemmelige opplevelser for bedrifter, bursdager, turneringer og
						private arrangementer.
					</p>
				</motion.div>
			</div>

			{/* Main Content */}
			<div className='max-w-5xl mx-auto px-4 py-12'>
				{/* Introduction */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='mb-16 max-w-3xl mx-auto'
				>
					<h2 className='text-3xl font-bold mb-6'>
						Arranger ditt neste event hos oss
					</h2>
					<p className='text-muted-foreground mb-6 leading-relaxed'>
						Våre skreddersydde eventpakker gir deg muligheten til å skape
						minnerike opplevelser for enhver anledning. Enten du planlegger et
						bedriftsarrangement, en bursdagsfeiring, en turnering eller et
						VIP-event, har vi pakken som passer for deg.
					</p>
					<p className='text-muted-foreground leading-relaxed'>
						Alle våre pakker kan tilpasses etter dine spesifikke behov og
						ønsker, og vårt dedikerte team vil hjelpe deg gjennom hele
						prosessen.
					</p>
				</motion.div>

				{/* Package Filtering with Shadcn Tabs */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					id='packages'
					className='mb-12'
				>
					<h2 className='text-2xl font-bold mb-8'>Våre Eventpakker</h2>

					<Tabs
						defaultValue='alle'
						onValueChange={setActiveTab}
						className='w-full'
					>
						<TabsList className='mb-8 grid w-full grid-cols-4'>
							<TabsTrigger value='alle'>Alle pakker</TabsTrigger>
							<TabsTrigger value='bedrift'>Bedriftsevent</TabsTrigger>
							<TabsTrigger value='bursdag'>Bursdager</TabsTrigger>
							<TabsTrigger value='turnering'>Turneringer</TabsTrigger>
						</TabsList>

						{/* Content will be rendered outside TabsContent for cleaner layout */}
						<TabsContent value='alle' className='mt-0'></TabsContent>
						<TabsContent value='bedrift' className='mt-0'></TabsContent>
						<TabsContent value='bursdag' className='mt-0'></TabsContent>
						<TabsContent value='turnering' className='mt-0'></TabsContent>
					</Tabs>

					{/* Package Cards */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
						{filteredPackages.map((pkg) => (
							<motion.div
								key={pkg.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8 }}
							>
								<Card className='h-full flex flex-col overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow'>
									<div className='h-48 relative'>
										<Image
											src={pkg.imageUrl}
											alt={pkg.title}
											fill
											className='object-cover'
										/>
									</div>
									<CardHeader>
										<div className='flex justify-between items-center mb-2'>
											<CardTitle className='text-xl'>{pkg.title}</CardTitle>
											<Badge variant='outline' className='font-medium'>
												{pkg.price}
											</Badge>
										</div>
										<div className='flex items-center text-sm text-muted-foreground mb-2'>
											<svg
												className='w-4 h-4 mr-1'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
												></path>
											</svg>
											{pkg.duration}
										</div>
										<CardDescription className='mt-2'>
											{pkg.description}
										</CardDescription>
									</CardHeader>
									<CardFooter className='mt-auto pt-0'>
										<Dialog>
											<DialogTrigger asChild>
												<Button>Se detaljer</Button>
											</DialogTrigger>
											<DialogContent className='max-w-3xl max-h-[90vh] overflow-y-auto'>
												<DialogHeader>
													<DialogTitle className='text-2xl'>
														{pkg.title}
													</DialogTitle>
													<DialogDescription className='text-base'>
														{pkg.description}
													</DialogDescription>
												</DialogHeader>

												<div className='relative h-60 my-6'>
													<Image
														src={pkg.imageUrl}
														alt={pkg.title}
														fill
														className='object-cover rounded-md'
													/>
												</div>

												<div className='space-y-6'>
													<div>
														<h3 className='text-lg font-medium mb-4'>
															Dette er inkludert:
														</h3>
														<ul className='space-y-3 pl-1'>
															{pkg.features.map((feature, index) => (
																<li key={index} className='flex items-start'>
																	<svg
																		className='h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0'
																		fill='none'
																		viewBox='0 0 24 24'
																		stroke='currentColor'
																	>
																		<path
																			strokeLinecap='round'
																			strokeLinejoin='round'
																			strokeWidth={2}
																			d='M5 13l4 4L19 7'
																		/>
																	</svg>
																	<span className='text-muted-foreground'>
																		{feature}
																	</span>
																</li>
															))}
														</ul>
													</div>

													<Separator />

													<div className='flex flex-col sm:flex-row justify-between items-center gap-6 py-2'>
														<div>
															<p className='text-sm text-muted-foreground mb-1'>
																Pris:
															</p>
															<p className='text-2xl font-bold text-foreground'>
																{pkg.price}
															</p>
														</div>
														<div>
															<p className='text-sm text-muted-foreground mb-1'>
																Varighet:
															</p>
															<p className='text-xl font-medium'>
																{pkg.duration}
															</p>
														</div>
														<Link href='/contact'>
															<Button>Bestill nå</Button>
														</Link>
													</div>

													<p className='text-sm text-muted-foreground'>
														Alle pakker kan tilpasses etter dine behov. Kontakt
														oss for en skreddersydd løsning.
													</p>
												</div>
											</DialogContent>
										</Dialog>
									</CardFooter>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Process Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='mb-20'
				>
					<h2 className='text-2xl font-bold mb-8'>Slik fungerer det</h2>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0 }}
							className='items-center justify-center'
						>
							<div className='w-12 h-12 rounded-full bg-primary/10 text-xl font-bold mb-4 flex items-center'>
								1
							</div>
							<h3 className='text-xl font-medium mb-3'>Kontakt oss</h3>
							<p className='text-muted-foreground'>
								Send oss en henvendelse via kontaktskjemaet eller ring oss
								direkte. Fortell oss om ditt arrangement, antall deltakere og
								ønsket dato.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className='items-center justify-center'
						>
							<div className='w-12 h-12 rounded-full text-xl font-bold mb-4 flex'>
								2
							</div>
							<h3 className='text-xl font-medium mb-3'>
								Tilpasset planlegging
							</h3>
							<p className='text-muted-foreground'>
								Vi lager en skreddersydd plan for ditt arrangement, inkludert
								valg av pakke, tidsplan, catering og eventuelle spesielle
								ønsker.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className=''
						>
							<div className='w-12 h-12 rounded-full text-xl font-bold mb-4 flex'>
								3
							</div>
							<h3 className='text-xl font-medium mb-3'>
								Bekreftelse og oppfølging
							</h3>
							<p className='text-muted-foreground'>
								Etter bekreftelse får du en detaljert plan for arrangementet. Vi
								holder kontakten frem til dagen og sikrer at alt er klart for en
								suksessfull dag.
							</p>
						</motion.div>
					</div>
				</motion.div>

				{/* Testimonials */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='mb-20'
				>
					<h2 className='text-2xl font-bold mb-8'>Hva våre kunder sier</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{testimonials.map((testimonial) => (
							<motion.div
								key={testimonial.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8 }}
								className='bg-card p-6 rounded-lg'
							>
								<div className='flex items-center mb-4'>
									<Image
										src={testimonial.avatar}
										alt={testimonial.name}
										width={48}
										height={48}
										className='rounded-full'
									/>
									<div className='ml-4'>
										<h3 className='font-semibold'>{testimonial.name}</h3>
										<p className='text-sm text-muted-foreground'>
											{testimonial.company}
										</p>
									</div>
								</div>
								<p className='text-muted-foreground'>{testimonial.quote}</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* FAQ Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='mb-20'
				>
					<h2 className='text-2xl font-bold mb-8'>Ofte stilte spørsmål</h2>
					<div className='space-y-4'>
						{faqs.map((faq) => (
							<motion.div
								key={faq.question}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8 }}
								className='bg-card p-6 rounded-lg'
							>
								<h3 className='font-semibold mb-2'>{faq.question}</h3>
								<p className='text-muted-foreground'>{faq.answer}</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* CTA Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='border-t border-border pt-12 pb-8 text-center'
				>
					<h2 className='text-2xl font-bold mb-4'>
						Klar til å planlegge ditt arrangement?
					</h2>
					<p className='text-muted-foreground max-w-xl mx-auto mb-8'>
						Kontakt oss i dag for å diskutere dine behov og reservere din
						foretrukne dato.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link href='/contact'>
							<Button size='lg'>Kontakt oss</Button>
						</Link>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
