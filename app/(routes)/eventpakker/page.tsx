'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Import Shadcn UI components
import { Button } from '@/components/ui/button';

export default function EventPackages() {
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
						Eventer hos Padel Co
					</h1>
					<p className='text-lg md:text-2xl leading-relaxed text-muted-foreground'>
						Kombiner aktivitet, samhold og en unik opplevelse – alt på ett sted.
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
						Arrangementer som engasjerer og inspirerer
					</h2>
					<p className=' mb-6 leading-relaxed'>
						Hos Padel Co legger vi til rette for arrangementer som engasjerer og
						inspirerer. Enten du planlegger et sosialt firmaarrangement, en
						bursdag, en kick-off eller en kveld med vennegjengen, sørger vi for
						at rammene er på plass – og stemningen følger etter.
					</p>
					<p className='leading-relaxed'>
						Vi skreddersyr opplegget etter dine behov, og vårt team sørger for
						en smidig og profesjonell gjennomføring fra start til slutt. Hos oss
						får du en aktiv og sosial opplevelse i flotte omgivelser – perfekt
						for å styrke både relasjoner og konkurranseinstinkt.
					</p>
				</motion.div>

				{/* Facilities Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='mb-16'
				>
					<h2 className='text-3xl font-bold mb-8 text-center'>
						Dette kan vi tilby
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className='flex items-center space-x-3'
						>
							<div className='w-2 h-2 dark:bg-primary bg-black rounded-full flex-shrink-0'></div>
							<p className=''>6 innendørs- og 3 utendørs padelbaner</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className='flex items-center space-x-3'
						>
							<div className='w-2 h-2 dark:bg-primary bg-black rounded-full flex-shrink-0'></div>
							<p className=''>
								Sosialt loungeområde og en hyggelig oppholdssone
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className='flex items-center space-x-3'
						>
							<div className='w-2 h-2 dark:bg-primary bg-black rounded-full flex-shrink-0'></div>
							<p className=''>Garderober og dusjfasiliteter</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className='flex items-center space-x-3'
						>
							<div className='w-2 h-2 dark:bg-primary bg-black rounded-full flex-shrink-0'></div>
							<p className=''>Skreddersydde turneringer og spillopplegg</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.5 }}
							className='flex items-center space-x-3'
						>
							<div className='w-2 h-2 dark:bg-primary bg-black rounded-full flex-shrink-0'></div>
							<p className=''>
								Pro Shop med kvalitetsutstyr fra HEAD og Babolat
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className='flex items-center space-x-3'
						>
							<div className='w-2 h-2 dark:bg-primary bg-black rounded-full flex-shrink-0'></div>
							<p className=''>Matservering og drikke etter avtale</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.7 }}
							className='flex items-center space-x-3'
						>
							<div className='w-2 h-2 dark:bg-primary bg-black rounded-full flex-shrink-0'></div>
							<p className=''>Mulighet for musikk og lys – Full feststemning</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.8 }}
							className='flex items-center space-x-3'
						>
							<div className='w-2 h-2 dark:bg-primary bg-black rounded-full flex-shrink-0'></div>
							<p className=''>Erfaren eventkoordinator som holder tråden</p>
						</motion.div>
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
							<p className=''>
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
							<p className=''>
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
							<p className=''>
								Etter bekreftelse får du en detaljert plan for arrangementet. Vi
								holder kontakten frem til dagen og sikrer at alt er klart for en
								suksessfull dag.
							</p>
						</motion.div>
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
						Klar til å booke ditt arrangement?
					</h2>
					<p className='max-w-2xl mx-auto mb-8'>
						Ta kontakt på e-post for å booke ditt arrangement. Send oss dine
						ønsker, så kommer vi tilbake med et skreddersydd forslag.
					</p>
					<Link href='mailto:post@padelco.no'>
						<Button size='lg' className='text-lg px-8 py-4'>
							Book arrangement på post@padelco.no
						</Button>
					</Link>
				</motion.div>
			</div>
		</div>
	);
}
