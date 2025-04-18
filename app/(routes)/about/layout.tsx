import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Om oss | Padel Co',
	description:
		'Lær mer om Padel Co - en nystartet satsning på en sport i sterk vekst',
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
