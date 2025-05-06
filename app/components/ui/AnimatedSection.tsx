'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	direction?: 'up' | 'down' | 'left' | 'right';
}

export default function AnimatedSection({
	children,
	className = '',
	delay = 0,
	direction = 'up',
}: AnimatedSectionProps) {
	const getInitialPosition = () => {
		switch (direction) {
			case 'up':
				return { opacity: 0, y: 20 };
			case 'down':
				return { opacity: 0, y: -20 };
			case 'left':
				return { opacity: 0, x: 20 };
			case 'right':
				return { opacity: 0, x: -20 };
			default:
				return { opacity: 0, y: 20 };
		}
	};

	const getAnimatePosition = () => {
		switch (direction) {
			case 'up':
				return { opacity: 1, y: 0 };
			case 'down':
				return { opacity: 1, y: 0 };
			case 'left':
				return { opacity: 1, x: 0 };
			case 'right':
				return { opacity: 1, x: 0 };
			default:
				return { opacity: 1, y: 0 };
		}
	};

	return (
		<motion.div
			initial={getInitialPosition()}
			whileInView={getAnimatePosition()}
			viewport={{ once: true }}
			transition={{
				duration: 0.6,
				delay: delay,
				ease: [0.22, 1, 0.36, 1],
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}
