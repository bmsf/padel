import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import RootLayoutClient from './RootLayoutClient';
import { defaultMetadata } from './config/metadata';
import { getOrganizationSchema, getWebsiteSchema } from './lib/json-ld';
import Script from 'next/script';
import { Toaster } from 'sonner';
import { ThemeProvider } from 'next-themes';

const ibm_plex_sans = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['400', '600'],
	variable: '--font-IBM',
});

export const metadata = defaultMetadata;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='nb' suppressHydrationWarning>
			<head>
				<Script
					id='cookiebot'
					src='https://consent.cookiebot.com/uc.js'
					data-cbid='7a095d30-1325-497a-85bd-433d14485695'
					data-blockingmode='auto'
					type='text/javascript'
					strategy='beforeInteractive'
				/>

				<Script
					id='json-ld-website'
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(getWebsiteSchema()),
					}}
				/>
				<Script
					id='json-ld-organization'
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(getOrganizationSchema()),
					}}
				/>
			</head>
			<body
				className={`${ibm_plex_sans.variable} font-body antialiased flex flex-col min-h-screen overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange
				>
					<Toaster richColors position='top-center' />
					<RootLayoutClient>{children}</RootLayoutClient>
				</ThemeProvider>
			</body>
		</html>
	);
}
