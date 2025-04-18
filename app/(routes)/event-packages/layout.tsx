import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Arrangementer | Padel Co',
	description:
		'Arranger bedriftsevents, bursdager og andre arrangementer hos oss',
};

export default function EventPackagesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
