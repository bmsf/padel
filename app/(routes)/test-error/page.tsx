'use client';

import { useEffect } from 'react';

export default function TestError() {
	useEffect(() => {
		// Simulerer en feil ved å kaste en Error
		throw new Error('Dette er en test-feil for å vise error-siden');
	}, []);

	return (
		<div>Denne teksten vil aldri vises fordi vi kaster en feil i useEffect</div>
	);
}
