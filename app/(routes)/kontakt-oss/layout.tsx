import { generateMetadata } from '@/app/lib/metadata-utils';

export const metadata = generateMetadata({
	title: 'Kontakt',
	description: 'Kontakt oss for mer informasjon om Padel Co',
});

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
