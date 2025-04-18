import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Pro Shop | Padel Co',
	description: 'Utforsk vårt utvalg av padelutstyr og tilbehør',
};

export default function ProShopLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
