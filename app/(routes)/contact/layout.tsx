import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Kontakt | Padel Co',
	description: 'Kontakt oss for mer informasjon om Padel Co',
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
