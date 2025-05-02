'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Trophy } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface FacilityCard {
	title: string;
	description: string;
	icon: React.ReactNode;
}

const facilityCards: FacilityCard[] = [
	{
		title: '6 Moderne Baner',
		description:
			'Toppmoderne innendørs og utendørs baner med profesjonell standard.',
		icon: <Trophy className='w-8 h-8' />,
	},
	{
		title: 'Booking & Kurs',
		description:
			'Enkelt bookingsystem og kurs for alle nivåer med våre erfarne instruktører.',
		icon: <Calendar className='w-8 h-8' />,
	},
	{
		title: 'Sentral Beliggenhet',
		description:
			'Lett tilgjengelig på Grini med god parkering og kollektivtransport.',
		icon: <MapPin className='w-8 h-8' />,
	},
	{
		title: 'Arrangementer',
		description:
			'Bedriftsarrangementer, turneringer og private events for grupper.',
		icon: <Users className='w-8 h-8' />,
	},
];

const FacilitiesSection: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulerer en kort loading tid for å demonstrere skeleton
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<section className='w-full relative my-8'>
			{/* Content container */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className='flex flex-col items-center justify-center text-center mb-16'>
					<h2 className='text-4xl font-bold mb-6'>
						Padelcenter med førsteklasses fasiliteter
					</h2>
				</div>

				{/* Facility cards */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{isLoading ? (
						// Skeleton loading state
						<>
							{[...Array(4)].map((_, index) => (
								<div key={index} className='bg-card p-8 rounded-xl shadow-md'>
									<div className='flex flex-col items-center text-center'>
										<Skeleton className='w-8 h-8 rounded-full mb-4' />
										<Skeleton className='h-6 w-3/4 mb-2' />
										<Skeleton className='h-4 w-full' />
									</div>
								</div>
							))}
						</>
					) : (
						// Actual content
						facilityCards.map((card, index) => (
							<motion.div
								key={card.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className='bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300'
							>
								<div className='flex flex-col items-center text-center'>
									<div className='text-primary mb-4'>{card.icon}</div>
									<h3 className='text-xl font-semibold mb-2'>{card.title}</h3>
									<p className='text-muted-foreground'>{card.description}</p>
								</div>
							</motion.div>
						))
					)}
				</div>
			</motion.div>
		</section>
	);
};

export default FacilitiesSection;
