'use client';

import { useEffect, useState } from 'react';

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export default function Countdown() {
	const [timeLeft, setTimeLeft] = useState<TimeLeft>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const targetDate = new Date('May 24, 2025 00:00:00').getTime();

		const calculateTimeLeft = () => {
			const now = new Date().getTime();
			const difference = targetDate - now;

			if (difference > 0) {
				setTimeLeft({
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor(
						(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
					),
					minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
					seconds: Math.floor((difference % (1000 * 60)) / 1000),
				});
			}
		};

		calculateTimeLeft();
		const timer = setInterval(calculateTimeLeft, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className='flex flex-col items-center mb-8'>
			{/* <p className='text-white text-lg mb-3'>
				Nedtelling til åpning 24. mai 2025
			</p> */}
			<div className='bg-transparent border-2 border-white text-white rounded-lg px-4 py-3'>
				<div className='flex items-center'>
					<TimeUnit value={timeLeft.days} label='Dager' />
					<Divider />
					<TimeUnit value={timeLeft.hours} label='Timer' />
					<Divider />
					<TimeUnit value={timeLeft.minutes} label='Min' />
					<Divider />
					<TimeUnit value={timeLeft.seconds} label='Sek' />
				</div>
			</div>
		</div>
	);
}

function TimeUnit({ value, label }: { value: number; label: string }) {
	// Ensure two digits for display
	const displayValue = value < 10 ? `0${value}` : value;

	return (
		<div className='flex flex-col items-center px-2 md:px-3'>
			<span className='text-xl md:text-2xl font-bold'>{displayValue}</span>
			<span className='text-white text-xs mt-1'>{label}</span>
		</div>
	);
}

function Divider() {
	return <div className='h-8 w-px bg-white mx-1 md:mx-2'></div>;
}
