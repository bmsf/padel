'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';

// Definerer typen for Instagram media-elementer
type InstagramMedia = {
	id: string;
	media_type: string;
	media_url: string;
	permalink: string;
	caption?: string;
	timestamp: string;
	thumbnail_url?: string;
};

const InstagramFeed = () => {
	const [posts, setPosts] = useState<InstagramMedia[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchInstagramPosts = async () => {
			try {
				setLoading(true);
				const response = await fetch('/api/instagram-feed');

				if (!response.ok) {
					throw new Error('Kunne ikke hente Instagram-innlegg');
				}

				const data = await response.json();
				setPosts(data.data || []);
			} catch (err) {
				console.error('Feil ved henting av Instagram-feed:', err);
				setError('Kunne ikke laste inn Instagram-feed');
			} finally {
				setLoading(false);
			}
		};

		fetchInstagramPosts();
	}, []);

	return (
		<section className='w-full py-12 bg-white'>
			<div className='container mx-auto px-4'>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-3xl font-semibold mb-8'
				>
					Følg oss på Instagram
				</motion.h2>

				{loading && (
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
						{[...Array(8)].map((_, index) => (
							<div key={index} className='aspect-square'>
								<Skeleton className='w-full h-full rounded-lg' />
							</div>
						))}
					</div>
				)}

				{error && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='text-center text-red-500 p-4'
					>
						<p>{error}</p>
						<a
							href='https://www.instagram.com/padel_co/'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-block mt-2 text-blue-500 hover:underline'
						>
							Besøk Instagram-profilen vår
						</a>
					</motion.div>
				)}

				{!loading && !error && (
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
						{posts.map((post, index) => (
							<motion.a
								key={post.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: 0.1 * index }}
								href={post.permalink}
								target='_blank'
								rel='noopener noreferrer'
								className='block overflow-hidden rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg'
							>
								{post.media_type === 'VIDEO' ? (
									<div className='relative aspect-square'>
										<Image
											src={post.thumbnail_url || post.media_url}
											alt={post.caption?.substring(0, 100) || 'Instagram post'}
											fill
											className='object-cover'
											sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
										/>
										<div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-20'>
											<svg
												className='w-12 h-12 text-white'
												fill='currentColor'
												viewBox='0 0 20 20'
											>
												<path d='M6 4l10 6-10 6V4z' />
											</svg>
										</div>
									</div>
								) : (
									<div className='relative aspect-square'>
										<Image
											src={post.media_url}
											alt={post.caption?.substring(0, 100) || 'Instagram post'}
											fill
											className='object-cover'
											sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
										/>
									</div>
								)}
							</motion.a>
						))}
					</div>
				)}

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='text-center mt-8'
				>
					<a
						href='https://www.instagram.com/padel_co/'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300'
					>
						Se mer på Instagram
					</a>
				</motion.div>
			</div>
		</section>
	);
};

export default InstagramFeed;
