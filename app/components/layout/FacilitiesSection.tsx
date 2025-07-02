'use client';

import { Trophy, Calendar, MapPin, Users } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import {
	containerVariants,
	itemVariants,
	defaultViewport,
} from '@/app/lib/animations';

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
	const shouldReduceMotion = useReducedMotion();

	return (
		<div className='w-full relative my-8'>
			<motion.div
				variants={itemVariants(shouldReduceMotion)}
				initial='hidden'
				whileInView='visible'
				viewport={defaultViewport}
				className='flex flex-col items-center justify-center text-center mb-16'
			>
				<h2 className='text-4xl font-bold mb-6'>
					Padelcenter med førsteklasses fasiliteter
				</h2>
			</motion.div>

			<motion.div
				className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
				variants={containerVariants(shouldReduceMotion)}
				initial='hidden'
				whileInView='visible'
				viewport={defaultViewport}
			>
				{facilityCards.map((card) => (
					<motion.div
						key={card.title}
						variants={itemVariants(shouldReduceMotion)}
						className='bg-card p-8 rounded-xl border-2 border-foreground/10 shadow-md hover:shadow-lg transition-colors duration-300 transform-gpu motion-safe:translate-z-0'
					>
						<div className='flex flex-col items-center text-center'>
							<div className=' mb-4'>{card.icon}</div>
							<h3 className='text-xl font-semibold mb-2'>{card.title}</h3>
							<p className=''>{card.description}</p>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default FacilitiesSection;
