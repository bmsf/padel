import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='container mx-auto px-4 min-h-[calc(100vh-4rem)] flex items-center justify-center'>
			<div className='text-center space-y-6 p-8 bg-card border rounded-lg shadow-lg'>
				<h1 className='text-6xl font-bold text-foreground'>404</h1>
				<h2 className='text-2xl font-semibold text-foreground/80'>
					Siden ble ikke funnet
				</h2>
				<p className='text-muted-foreground'>
					Beklager, men siden du leter etter eksisterer ikke eller har blitt
					flyttet.
				</p>
				<Link
					href='/'
					className='inline-block px-6 py-3 bg-foreground text-background rounded-md transition-all duration-300 hover:scale-105'
				>
					Gå tilbake til hjemmesiden
				</Link>
			</div>
		</div>
	);
}
