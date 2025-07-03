import { useState, useEffect } from 'react';

export type CookieConsent = 'accepted' | 'declined' | 'customized' | null;

interface CookiePreferences {
	necessary: boolean;
	analytics: boolean;
	marketing: boolean;
	preferences: boolean;
}

export function useCookieConsent() {
	const [consent, setConsent] = useState<CookieConsent>(null);
	const [preferences, setPreferences] = useState<CookiePreferences>({
		necessary: true, // Alltid nødvendig
		analytics: false,
		marketing: false,
		preferences: false,
	});

	useEffect(() => {
		// Hent lagret consent fra localStorage
		if (typeof window !== 'undefined') {
			const savedConsent = localStorage.getItem(
				'cookieConsent'
			) as CookieConsent;
			const savedPreferences = localStorage.getItem('cookiePreferences');

			if (savedConsent) {
				setConsent(savedConsent);
			}

			if (savedPreferences) {
				try {
					setPreferences(JSON.parse(savedPreferences));
				} catch (error) {
					console.error('Feil ved parsing av cookie preferences:', error);
				}
			}
		}
	}, []);

	const acceptAll = () => {
		const allAccepted = {
			necessary: true,
			analytics: true,
			marketing: true,
			preferences: true,
		};

		setConsent('accepted');
		setPreferences(allAccepted);
		if (typeof window !== 'undefined') {
			localStorage.setItem('cookieConsent', 'accepted');
			localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
		}
	};

	const declineAll = () => {
		const allDeclined = {
			necessary: true, // Alltid nødvendig
			analytics: false,
			marketing: false,
			preferences: false,
		};

		setConsent('declined');
		setPreferences(allDeclined);
		if (typeof window !== 'undefined') {
			localStorage.setItem('cookieConsent', 'declined');
			localStorage.setItem('cookiePreferences', JSON.stringify(allDeclined));
		}
	};

	const updatePreferences = (newPreferences: Partial<CookiePreferences>) => {
		const updatedPreferences = { ...preferences, ...newPreferences };
		setPreferences(updatedPreferences);
		setConsent('customized');
		if (typeof window !== 'undefined') {
			localStorage.setItem('cookieConsent', 'customized');
			localStorage.setItem(
				'cookiePreferences',
				JSON.stringify(updatedPreferences)
			);
		}
	};

	const showCookieBanner = () => {
		setConsent(null);
		if (typeof window !== 'undefined') {
			localStorage.removeItem('cookieConsent');
		}
	};

	return {
		consent,
		preferences,
		acceptAll,
		declineAll,
		updatePreferences,
		showCookieBanner,
	};
}
