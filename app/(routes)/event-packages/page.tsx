'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Import Shadcn UI components
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
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
	DialogClose,
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
	const [selectedPackage, setSelectedPackage] = useState<EventPackage | null>(
		null
	);
	const [activeTab, setActiveTab] = useState('alle');

	// Filter packages based on active tab
	const filteredPackages =
		activeTab === 'alle'
			? eventPackages
			: eventPackages.filter((pkg) => pkg.category === activeTab);

	return (
		<div className='bg-background text-foreground'>
			{/* Hero Section */}
			<div className='relative h-96 w-full overflow-hidden'>
				<Image
					src='https://images.unsplash.com/photo-1526888935184-a82d2a4b7e67?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='Padel center events'
					fill
					className='object-cover'
					priority
				/>
				<div className='absolute inset-0 bg-primary/40' />
				<div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4'>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
						Arranger ditt neste event hos oss
					</h1>
					<p className='text-xl text-white max-w-3xl mb-8'>
						Uforglemmelige opplevelser for bedrifter, bursdager, turneringer og
						private arrangementer
					</p>
					<Button
						onClick={() =>
							document
								.getElementById('packages')
								?.scrollIntoView({ behavior: 'smooth' })
						}
						size='lg'
						className='bg-primary hover:bg-primary/90'
					>
						Utforsk våre pakker
					</Button>
				</div>
			</div>

			{/* Main Content */}
			<div className='max-w-7xl mx-auto px-4 py-16'>
				{/* Package Filtering with Shadcn Tabs */}
				<div id='packages' className='mb-12'>
					<h2 className='text-3xl font-bold text-center mb-10'>
						Våre Event Pakker
					</h2>

					<Tabs
						defaultValue='alle'
						className='w-full max-w-3xl mx-auto'
						onValueChange={setActiveTab}
					>
						<TabsList className='grid w-full grid-cols-4'>
							<TabsTrigger value='alle'>Alle pakker</TabsTrigger>
							<TabsTrigger value='bedrift'>Bedriftsevent</TabsTrigger>
							<TabsTrigger value='bursdag'>Bursdager</TabsTrigger>
							<TabsTrigger value='turnering'>Turneringer</TabsTrigger>
						</TabsList>

						<TabsContent value='alle' className='mt-0'></TabsContent>
						<TabsContent value='bedrift' className='mt-0'></TabsContent>
						<TabsContent value='bursdag' className='mt-0'></TabsContent>
						<TabsContent value='turnering' className='mt-0'></TabsContent>
					</Tabs>
				</div>

				{/* Package Cards using Shadcn Card */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
					{filteredPackages.map((pkg) => (
						<motion.div
							key={pkg.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3 }}
						>
							<Card className='h-full flex flex-col'>
								<div className='h-48 relative'>
									<Image
										src={pkg.imageUrl}
										alt={pkg.title}
										fill
										className='object-cover rounded-t-lg'
									/>
								</div>
								<CardHeader>
									<CardTitle>{pkg.title}</CardTitle>
									<CardDescription>{pkg.description}</CardDescription>
								</CardHeader>
								<CardContent className='flex-grow'>
									<div className='flex justify-between items-center mb-4'>
										<Badge
											variant='outline'
											className='font-semibold text-primary'
										>
											{pkg.price}
										</Badge>
										<span className='text-muted-foreground'>
											{pkg.duration}
										</span>
									</div>
								</CardContent>
								<CardFooter>
									<Dialog>
										<DialogTrigger asChild>
											<Button
												className='w-full'
												onClick={() => setSelectedPackage(pkg)}
											>
												Se detaljer
											</Button>
										</DialogTrigger>
										<DialogContent className='max-w-4xl max-h-[90vh] overflow-y-auto'>
											<DialogHeader>
												<DialogTitle className='text-2xl'>
													{pkg.title}
												</DialogTitle>
												<DialogDescription>{pkg.description}</DialogDescription>
											</DialogHeader>

											<div className='relative h-60 my-4'>
												<Image
													src={pkg.imageUrl}
													alt={pkg.title}
													fill
													className='object-cover rounded-md'
												/>
											</div>

											<div className='space-y-4'>
												<h3 className='text-xl font-semibold'>
													Dette er inkludert:
												</h3>
												<ul className='space-y-2'>
													{pkg.features.map((feature, index) => (
														<li key={index} className='flex items-start'>
															<svg
																className='h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0'
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
															<span>{feature}</span>
														</li>
													))}
												</ul>

												<div className='flex flex-col sm:flex-row justify-between items-center gap-4 py-4'>
													<div>
														<p className='text-muted-foreground'>Pris:</p>
														<p className='text-2xl font-bold text-primary'>
															{pkg.price}
														</p>
													</div>
													<div>
														<p className='text-muted-foreground'>Varighet:</p>
														<p className='text-xl font-semibold'>
															{pkg.duration}
														</p>
													</div>
													<Link href='/contact'>
														<Button>Bestill nå</Button>
													</Link>
												</div>

												<Separator />

												<p className='text-muted-foreground pt-2'>
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

				{/* Process Section */}
				<div className='py-16'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						Slik fungerer det
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<Card className='text-center'>
							<CardHeader>
								<div className='mx-auto inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl font-bold mb-4'>
									1
								</div>
								<CardTitle>Kontakt oss</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-muted-foreground'>
									Fortell oss om ditt arrangement, antall deltakere og ønsket
									dato. Vi hjelper deg med å finne den beste løsningen.
								</p>
							</CardContent>
						</Card>

						<Card className='text-center'>
							<CardHeader>
								<div className='mx-auto inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl font-bold mb-4'>
									2
								</div>
								<CardTitle>Tilpass pakken</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-muted-foreground'>
									Vi tilpasser opplevelsen etter dine behov og ønsker, enten det
									er mat, instruktører eller spesielle aktiviteter.
								</p>
							</CardContent>
						</Card>

						<Card className='text-center'>
							<CardHeader>
								<div className='mx-auto inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl font-bold mb-4'>
									3
								</div>
								<CardTitle>Nyt arrangementet</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-muted-foreground'>
									Vi tar oss av alt det praktiske, slik at du og dine gjester
									kan fokusere på å ha det gøy og nyte opplevelsen.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Testimonials */}
				<div className='py-16'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						Hva våre kunder sier
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>
						{testimonials.map((testimonial) => (
							<Card key={testimonial.id} className='bg-card'>
								<CardHeader className='pb-2'>
									<div className='flex items-center'>
										<div className='h-12 w-12 rounded-full overflow-hidden mr-4'>
											<Image
												src={testimonial.avatar}
												alt={testimonial.name}
												width={48}
												height={48}
												className='h-full w-full object-cover'
											/>
										</div>
										<div>
											<CardTitle className='text-base'>
												{testimonial.name}
											</CardTitle>
											<CardDescription>{testimonial.company}</CardDescription>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<p className='italic text-muted-foreground'>
										"{testimonial.quote}"
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>

				{/* CTA Section */}
				<div className='py-16 text-center'>
					<h2 className='text-3xl font-bold mb-6'>
						Klar til å planlegge ditt arrangement?
					</h2>
					<p className='text-muted-foreground max-w-2xl mx-auto mb-8'>
						Kontakt oss i dag for å diskutere dine behov og reservere din
						foretrukne dato for et uforglemmelig event.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link href='/contact'>
							<Button size='lg'>Kontakt oss</Button>
						</Link>
						<Link href='/facilities'>
							<Button variant='outline' size='lg'>
								Se våre fasiliteter
							</Button>
						</Link>
					</div>
				</div>

				{/* FAQ Section */}
				<div className='py-16'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						Ofte stilte spørsmål
					</h2>

					<div className='max-w-3xl mx-auto space-y-6'>
						{faqs.map((faq, index) => (
							<Card key={index}>
								<CardHeader>
									<CardTitle className='text-xl'>{faq.question}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className='text-muted-foreground'>{faq.answer}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
