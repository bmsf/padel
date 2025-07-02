import { generateMetadata } from '@/app/lib/metadata-utils';

export const metadata = generateMetadata({
	title: 'Eventpakker',
	description:
		'Book din perfekte eventpakke hos Padel Co Grini - vi tilbyr skreddersydde pakker for bedrifter, grupper og private arrangementer',
});

export default function EventPackagesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
