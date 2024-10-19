import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
	const { userId } = auth();
	if (userId != null) redirect('/events');
	return (
		<div className='items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
				<div className='grid grid-cols-1 gap-4 p-3 md:grid-cols-10 md:grid-rows-4 w-full'>
					<div className='relative col-span-4 row-span-2 bg-foreground text-background'>
						<p className='text-4xl uppercase p-6'>
							Din suksess starter <br /> på
						</p>

						{/* Center "banen" with padding */}
						<p className='absolute inset-0 flex items-center justify-center text-4xl uppercase p-6'>
							banen
						</p>

						<p className='text-1xl uppercase p-10'>baerumpadel.no</p>
					</div>

					<div className='col-span-3 row-span-3 relative'>
						<Image
							src='https://images.unsplash.com/photo-1673253408728-134f84f9279c?q=80&w=2618&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							alt='Background Image'
							layout='fill' // This makes the image cover the div entirely
							objectFit='cover' // Ensures the image covers the entire div without distortion
							className='z-0'
						/>
					</div>

					<div className='bg-green-300 col-span-3'>Box 3</div>

					<div className='col-span-3 bg-yellow-300'>Box 4</div>

					<div className='bg-purple-300 col-span-2 row-span-2'>Box 5</div>

					<div className='col-span-2 row-span-2 bg-pink-300'>Box 6</div>

					<div className='bg-indigo-300 col-span-6 row-span-2'>Box 7</div>
				</div>
			</main>
			<footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
				hello
			</footer>
		</div>
	);
}
