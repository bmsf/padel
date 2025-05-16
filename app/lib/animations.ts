import { Variants } from 'framer-motion';

export const containerVariants = (
	shouldReduceMotion: boolean | null
): Variants => ({
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: shouldReduceMotion ? 0 : 0.15,
		},
	},
});

export const itemVariants = (shouldReduceMotion: boolean | null): Variants => ({
	hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: shouldReduceMotion ? 'tween' : 'spring',
			duration: shouldReduceMotion ? 0.4 : undefined,
			damping: 20,
			stiffness: 100,
		},
	},
});

export const fadeInVariants = (
	shouldReduceMotion: boolean | null
): Variants => ({
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: shouldReduceMotion ? 0.4 : 0.5,
		},
	},
});

export const defaultViewport = {
	once: true,
	margin: '0px 0px -100px 0px',
};
