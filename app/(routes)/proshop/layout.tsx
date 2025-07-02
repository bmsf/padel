import { generateMetadata } from '@/app/lib/metadata-utils';

export const metadata = generateMetadata({
	title: 'Pro Shop',
	description: 'Utforsk vårt utvalg av padelutstyr og tilbehør',
});

export default function ProShopLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
