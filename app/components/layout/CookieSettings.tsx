'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import CookiePreferences from './CookiePreferences';
import { useCookieConsent } from '@/hooks/use-cookie-consent';

export default function CookieSettings() {
	const [showPreferences, setShowPreferences] = useState(false);
	const { showCookieBanner } = useCookieConsent();

	const handleOpenPreferences = () => {
		setShowPreferences(true);
	};

	const handleClosePreferences = () => {
		setShowPreferences(false);
	};

	const handleShowBanner = () => {
		showCookieBanner();
	};

	return (
		<>
			<div className='flex gap-2'>
				<Button
					variant='ghost'
					size='sm'
					onClick={handleOpenPreferences}
					className='text-muted-foreground hover:text-foreground text-xs'
				>
					<Settings className='h-3 w-3 mr-1' />
					Cookie innstillinger
				</Button>
				<Button
					variant='ghost'
					size='sm'
					onClick={handleShowBanner}
					className='text-muted-foreground hover:text-foreground text-xs'
				>
					Endre samtykke
				</Button>
			</div>

			<CookiePreferences
				isOpen={showPreferences}
				onClose={handleClosePreferences}
			/>
		</>
	);
}
