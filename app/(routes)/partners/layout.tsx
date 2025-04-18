import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Partnere | Padel Co',
	description: 'Våre partnere og sponsorer som gjør Padel Co mulig',
};

export default function PartnersLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
