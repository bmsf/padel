export default function Footer() {
	return (
		<footer className='py-6 mt-12'>
			<div className='container mx-auto px-4'>
				<div className='flex justify-between items-center'>
					<div>
						<h1 className='text-2xl font-bold'>Bærum Padel</h1>
						<p>Din destinasjon for padelglede og kvalitetstid</p>
					</div>
				</div>
				<hr className='my-4 border-gray-600' />
				<div className='flex justify-between items-center'>
					<p>&copy; {new Date().getFullYear()} BMSF. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
