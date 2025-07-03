'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface CookieBannerProps {
	onAccept: () => void;
	onDecline: () => void;
	onCustomize: () => void;
	onEssentialOnly?: () => void;
}

export default function CookieBanner({
	onAccept,
	onDecline,
	onCustomize,
	onEssentialOnly,
}: CookieBannerProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Sjekk om cookie consent allerede er gitt
		if (typeof window !== 'undefined') {
			const hasConsent = localStorage.getItem('cookieConsent');
			if (!hasConsent) {
				setIsVisible(true);
			}
		}
	}, []);

	const handleAccept = () => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('cookieConsent', 'accepted');
		}
		setIsVisible(false);
		onAccept();
	};

	const handleDecline = () => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('cookieConsent', 'declined');
		}
		setIsVisible(false);
		onDecline();
	};

	const handleCustomize = () => {
		setIsVisible(false);
		onCustomize();
	};

	const handleEssentialOnly = () => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('cookieConsent', 'essential');
		}
		setIsVisible(false);
		onEssentialOnly?.();
	};

	if (!isVisible) return null;

	return (
		<div className='fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg'>
			<div className='container mx-auto px-4 py-6 max-w-4xl'>
				<div className='flex flex-col lg:flex-row items-start lg:items-center gap-6'>
					<div className='flex-1'>
						<div className='flex items-start justify-between gap-4'>
							<div className='flex-1'>
								<h3 className='text-lg font-semibold text-foreground mb-2'>
									🍪 Vi bruker cookies
								</h3>
								<p className='text-sm leading-relaxed'>
									Vi bruker cookies for å gi deg den beste opplevelsen på vårt
									nettsted. Cookies hjelper oss å forbedre tjenestene våre og gi
									deg personlig tilpasset innhold. Du kan når som helst endre
									dine preferanser.
								</p>
							</div>
						</div>
					</div>

					<div className='flex flex-col sm:flex-row gap-3 w-full lg:w-auto'>
						<Button
							variant='outline'
							size='sm'
							onClick={handleDecline}
							className='border-border text-foreground hover:bg-muted'
						>
							Avvis alle
						</Button>
						<Button
							variant='outline'
							size='sm'
							onClick={handleEssentialOnly}
							className='border-border text-foreground hover:bg-muted'
						>
							Kun nødvendige
						</Button>
						<Button
							variant='outline'
							size='sm'
							onClick={handleCustomize}
							className='border-border text-foreground hover:bg-muted'
						>
							Tilpass
						</Button>
						<Button
							size='sm'
							onClick={handleAccept}
							className='text-primary-foreground'
						>
							Godta alle
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
