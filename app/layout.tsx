import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import RootLayoutClient from './RootLayoutClient';
import type { Metadata } from 'next';

const ibm_plex_sans = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['400', '600'],
	variable: '--font-IBM',
});

export const metadata: Metadata = {
	title: 'Padel Co',
	description: 'Din destinasjon for padel i Norge',
	icons: {
		icon: '/favicon-padelco.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${ibm_plex_sans.variable} font-body antialiased flex flex-col min-h-screen overflow-x-hidden`}
			>
				<RootLayoutClient>{children}</RootLayoutClient>
			</body>
		</html>
	);
}
