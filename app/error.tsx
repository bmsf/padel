'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Logg feilen til en feilrapporteringstjeneste
		console.error(error);
	}, [error]);

	return (
		<div className='container mx-auto px-4 min-h-screen pt-32 md:pt-40 flex items-center justify-center'>
			<div className='text-center space-y-6 p-8 bg-card border rounded-lg shadow-lg max-w-2xl w-full'>
				<div className='flex justify-center'>
					<AlertCircle className='h-16 w-16 text-destructive' />
				</div>
				<h1 className='text-6xl font-bold text-foreground'>500</h1>
				<h2 className='text-2xl font-semibold text-foreground/80'>
					Noe gikk galt
				</h2>
				<p className='text-muted-foreground'>
					Beklager, men det oppstod en feil. Vi jobber med å løse problemet.
				</p>
				{process.env.NODE_ENV === 'development' && (
					<div className='p-4 bg-destructive/10 rounded-lg text-left'>
						<p className='text-sm font-mono text-destructive'>
							{error.message}
						</p>
						{error.digest && (
							<p className='text-xs text-muted-foreground mt-2'>
								Feil-ID: {error.digest}
							</p>
						)}
					</div>
				)}
				<div className='flex flex-col sm:flex-row gap-4 justify-center'>
					<button
						onClick={reset}
						className='inline-block px-6 py-3 bg-foreground text-background rounded-md transition-all duration-300 hover:scale-105'
					>
						Prøv igjen
					</button>
					<Link
						href='/'
						className='inline-block px-6 py-3 bg-foreground text-background rounded-md transition-all duration-300 hover:scale-105'
					>
						Gå tilbake til hjemmesiden
					</Link>
				</div>
				<p className='text-sm text-muted-foreground mt-4'>
					Hvis problemet vedvarer, vennligst{' '}
					<Link href='/kontakt-oss' className='text-foreground hover:underline'>
						kontakt oss
					</Link>
					.
				</p>
			</div>
		</div>
	);
}
