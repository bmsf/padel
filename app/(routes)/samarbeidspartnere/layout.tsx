import { generateMetadata } from '@/app/lib/metadata-utils';

export const metadata = generateMetadata({
	title: 'Samarbeidspartnere',
	description:
		'Møt våre verdifulle samarbeidspartnere som bidrar til å gjøre Padel Co Grini til et ledende padelsenter',
});

export default function PartnersLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
