import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const ibm_plex_sans = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['400', '600'], // Angi vekter du vil bruke
	variable: '--font-IBM', // Legg til en CSS-variabel (valgfritt)
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${ibm_plex_sans.variable} font-body antialiased flex flex-col min-h-screen`}
			>
				<Header />
				<main className='flex-grow'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
