'use client';

import { useState } from 'react';
import CookieBanner from './CookieBanner';
import CookiePreferences from './CookiePreferences';
import { useCookieConsent } from '@/hooks/use-cookie-consent';

export default function CookieConsent() {
	const { consent, acceptAll, declineAll } = useCookieConsent();
	const [showPreferences, setShowPreferences] = useState(false);

	const handleCustomize = () => {
		setShowPreferences(true);
	};

	const handleClosePreferences = () => {
		setShowPreferences(false);
	};

	// Vis ikke banner hvis consent allerede er gitt
	if (consent !== null) {
		return null;
	}

	return (
		<>
			<CookieBanner
				onAccept={acceptAll}
				onDecline={declineAll}
				onCustomize={handleCustomize}
			/>
			<CookiePreferences
				isOpen={showPreferences}
				onClose={handleClosePreferences}
			/>
		</>
	);
}
