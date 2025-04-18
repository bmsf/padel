import Header from '@/app/components/layout/Header';

export default function RoutesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<main className='pt-20'>{children}</main>
		</>
	);
}
