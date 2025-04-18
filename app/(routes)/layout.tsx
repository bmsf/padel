import Header from '@/app/components/ui/Header';

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
