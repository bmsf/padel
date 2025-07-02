import { generateMetadata } from '@/app/lib/metadata-utils';

export const metadata = generateMetadata({
	title: 'Om oss',
	description:
		'Lær mer om Padel Co - en nystartet satsning på en sport i sterk vekst',
});

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
