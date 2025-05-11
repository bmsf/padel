'use client';

import { ThemeProvider } from '@/components/theme-provider';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/ui/LoadingScreen';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface RootLayoutClientProps {
	children: React.ReactNode;
}

export default function RootLayoutClient({ children }: RootLayoutClientProps) {
	const [isLoading, setIsLoading] = useState(true);
	const [contentVisible, setContentVisible] = useState(false);

	const handleLoadingComplete = () => {
		setIsLoading(false);
		// Kort forsinkelse før innholdet vises for å unngå overlapping av animasjoner
		setTimeout(() => setContentVisible(true), 100);
	};

	const contentVariants = {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
			disableTransitionOnChange
		>
			{isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

			<AnimatePresence>
				{contentVisible && (
					<motion.div
						variants={contentVariants}
						initial='initial'
						animate='animate'
						className='flex flex-col min-h-screen'
					>
						<Header />
						<main className='flex-grow'>{children}</main>
						<Footer />
					</motion.div>
				)}
			</AnimatePresence>
		</ThemeProvider>
	);
}
