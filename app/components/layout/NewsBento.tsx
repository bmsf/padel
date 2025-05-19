'use client';

import { motion } from 'framer-motion';
import {
	Calendar,
	Newspaper,
	Trophy,
	Tag,
	Instagram,
	ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect, useState } from 'react';
import {
	containerVariants,
	itemVariants,
	defaultViewport,
} from '@/app/lib/animations';
import { useReducedMotion } from 'framer-motion';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

// Beholder eksisterende typer fra NewsAndEvents
interface NewsItem {
	id: string;
	title: string;
	date: string;
	description: string;
	imageUrl?: string;
	type: 'news' | 'event' | 'tournament' | 'campaign';
	link?: string;
}

// Beholder eksisterende Instagram type
type InstagramMedia = {
	id: string;
	media_type: string;
	media_url: string;
	permalink: string;
	caption?: string;
	timestamp: string;
	thumbnail_url?: string;
};

// Midlertidig testdata - vil bli erstattet med Sanity-data
const mockData: NewsItem[] = [
	{
		id: '1',
		title: 'Sommerkampanje 2025',
		date: '2025-06-01',
		description:
			'Spill padel hele sommeren med 20% rabatt på alle baner! Bli med på sommerens største padel-event.',
		type: 'campaign',
		imageUrl:
			'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1200&auto=format&fit=crop',
		link: '/kampanje/sommer2025',
	},
	{
		id: '2',
		title: 'Grini Open 2025',
		date: '2025-07-15',
		description:
			'Årets største padel-turnering på Grini. Påmelding åpner snart! Bli med på 3 dager med topp padel og fest.',
		type: 'tournament',
		imageUrl:
			'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1200&auto=format&fit=crop',
		link: '/turnering/grini-open-2025',
	},
	{
		id: '3',
		title: 'Nye treningsprogram',
		date: '2025-05-20',
		description:
			'Vi lanserer nye treningsprogram for alle nivåer. Bli med på introduksjonskurs og forbedre spillet ditt!',
		type: 'news',
		imageUrl:
			'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1200&auto=format&fit=crop',
		link: '/nyheter/treningsprogram',
	},
];

const getIcon = (type: NewsItem['type']) => {
	switch (type) {
		case 'news':
			return <Newspaper className='w-5 h-5' />;
		case 'event':
			return <Calendar className='w-5 h-5' />;
		case 'tournament':
			return <Trophy className='w-5 h-5' />;
		case 'campaign':
			return <Tag className='w-5 h-5' />;
	}
};

const NewsBento = () => {
	const [instagramPosts, setInstagramPosts] = useState<InstagramMedia[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		const fetchInstagramPosts = async () => {
			try {
				setLoading(true);
				const response = await fetch('/api/instagram-feed');
				if (!response.ok) throw new Error('Kunne ikke hente Instagram-innlegg');
				const data = await response.json();
				setInstagramPosts(data.data || []);
			} catch (err) {
				console.error('Feil ved henting av Instagram-feed:', err);
				setError('Kunne ikke laste inn Instagram-feed');
			} finally {
				setLoading(false);
			}
		};

		fetchInstagramPosts();
	}, []);

	// Henter hovednyheten (turnering)
	const mainNews =
		mockData.find((item) => item.type === 'tournament') || mockData[0];
	// Henter andre nyheter
	const otherNews = mockData.filter((item) => item.id !== mainNews.id);

	return (
		<section className='w-full py-24 bg-background'>
			<div className='container mx-auto px-4'>
				<motion.div
					variants={itemVariants(shouldReduceMotion)}
					initial='hidden'
					whileInView='visible'
					viewport={defaultViewport}
					className='text-center mb-16'
				>
					<h2 className='text-5xl font-bold mb-6'>Nyheter & Arrangementer</h2>
					<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
						Hold deg oppdatert med de siste nyhetene, kommende arrangementer og
						spennende kampanjer
					</p>
				</motion.div>

				<motion.div
					className='grid grid-cols-12 gap-6 auto-rows-[200px]'
					variants={containerVariants(shouldReduceMotion)}
					initial='hidden'
					whileInView='visible'
					viewport={defaultViewport}
				>
					{/* Hovednyhet (6x2) */}
					<motion.article
						variants={itemVariants(shouldReduceMotion)}
						className='col-span-12 md:col-span-6 row-span-2 bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer'
						whileHover={{ y: -5 }}
					>
						<Dialog>
							<DialogTrigger asChild>
								<div className='relative h-full'>
									{mainNews.imageUrl && (
										<div className='absolute inset-0'>
											<Image
												src={mainNews.imageUrl}
												alt={mainNews.title}
												fill
												className='object-cover transition-transform duration-500 group-hover:scale-105'
											/>
											<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
										</div>
									)}
									<div className='relative h-full flex flex-col justify-end p-8 text-white'>
										<div className='flex items-center gap-2 text-white/90 mb-3'>
											{getIcon(mainNews.type)}
											<span className='text-sm font-medium capitalize'>
												{mainNews.type === 'news' && 'Nyhet'}
												{mainNews.type === 'event' && 'Arrangement'}
												{mainNews.type === 'tournament' && 'Turnering'}
												{mainNews.type === 'campaign' && 'Kampanje'}
											</span>
										</div>
										<h3 className='text-3xl font-bold mb-3'>
											{mainNews.title}
										</h3>
										<p className='text-white/80 mb-4 text-lg'>
											{mainNews.description}
										</p>
										<div className='flex justify-between items-center'>
											<time className='text-sm text-white/70'>
												{new Date(mainNews.date).toLocaleDateString('nb-NO', {
													year: 'numeric',
													month: 'long',
													day: 'numeric',
												})}
											</time>
											<Button
												variant='ghost'
												className='text-white hover:text-white/90 hover:bg-white/10'
											>
												Les mer
												<ArrowRight className='w-4 h-4 ml-2' />
											</Button>
										</div>
									</div>
								</div>
							</DialogTrigger>
							<DialogContent className='max-w-3xl max-h-[90vh] overflow-y-auto'>
								<DialogHeader>
									<DialogTitle className='text-2xl'>
										{mainNews.title}
									</DialogTitle>
									<DialogDescription className='text-base'>
										{mainNews.description}
									</DialogDescription>
								</DialogHeader>

								<div className='relative h-60 my-6'>
									<Image
										src={mainNews.imageUrl || ''}
										alt={mainNews.title}
										fill
										className='object-cover rounded-md'
									/>
								</div>

								<div className='space-y-6'>
									<div className='flex items-center gap-2 text-muted-foreground'>
										{getIcon(mainNews.type)}
										<span className='text-sm font-medium capitalize'>
											{mainNews.type === 'news' && 'Nyhet'}
											{mainNews.type === 'event' && 'Arrangement'}
											{mainNews.type === 'tournament' && 'Turnering'}
											{mainNews.type === 'campaign' && 'Kampanje'}
										</span>
									</div>

									<time className='block text-sm text-muted-foreground'>
										{new Date(mainNews.date).toLocaleDateString('nb-NO', {
											year: 'numeric',
											month: 'long',
											day: 'numeric',
										})}
									</time>

									<div className='prose prose-sm dark:prose-invert max-w-none'>
										<p>{mainNews.description}</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
										<h3>Detaljer</h3>
										<p>
											Duis aute irure dolor in reprehenderit in voluptate velit
											esse cillum dolore eu fugiat nulla pariatur. Excepteur
											sint occaecat cupidatat non proident, sunt in culpa qui
											officia deserunt mollit anim id est laborum.
										</p>
										<ul>
											<li>Punkt 1</li>
											<li>Punkt 2</li>
											<li>Punkt 3</li>
										</ul>
									</div>
								</div>
							</DialogContent>
						</Dialog>
					</motion.article>

					{/* Instagram Feed (6x1) */}
					<motion.div
						variants={itemVariants(shouldReduceMotion)}
						className='col-span-12 md:col-span-6 bg-card rounded-2xl overflow-hidden shadow-lg p-6'
					>
						<div className='flex items-center justify-between mb-6'>
							<div className='flex items-center gap-2 text-primary'>
								<Instagram className='w-6 h-6' />
								<h3 className='text-xl font-semibold'>Instagram Feed</h3>
							</div>
							<a
								href='https://www.instagram.com/padel_co/'
								target='_blank'
								rel='noopener noreferrer'
								className='text-sm text-primary hover:underline flex items-center gap-1'
							>
								Følg oss
								<ArrowRight className='w-4 h-4' />
							</a>
						</div>

						{loading ? (
							<div className='grid grid-cols-4 gap-4'>
								{[...Array(4)].map((_, index) => (
									<div key={index} className='aspect-square'>
										<Skeleton className='w-full h-full rounded-xl' />
									</div>
								))}
							</div>
						) : error ? (
							<div className='text-center text-red-500 p-4'>
								<p>{error}</p>
								<a
									href='https://www.instagram.com/padel_co/'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-block mt-2 text-primary hover:underline'
								>
									Besøk Instagram-profilen vår
								</a>
							</div>
						) : (
							<motion.div
								className='grid grid-cols-4 gap-4'
								variants={containerVariants(shouldReduceMotion)}
								initial='hidden'
								animate='visible'
							>
								{instagramPosts.slice(0, 4).map((post) => (
									<motion.a
										key={post.id}
										variants={itemVariants(shouldReduceMotion)}
										whileHover={{ scale: 1.05 }}
										href={post.permalink}
										target='_blank'
										rel='noopener noreferrer'
										className='aspect-square relative rounded-xl overflow-hidden group'
									>
										<Image
											src={
												post.media_type === 'VIDEO'
													? post.thumbnail_url || post.media_url
													: post.media_url
											}
											alt={post.caption?.substring(0, 100) || 'Instagram post'}
											fill
											className='object-cover transition-transform duration-500 group-hover:scale-110'
										/>
										<div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
									</motion.a>
								))}
							</motion.div>
						)}
					</motion.div>

					{/* Andre nyheter (3x1) */}
					{otherNews.map((item) => (
						<motion.article
							key={item.id}
							variants={itemVariants(shouldReduceMotion)}
							whileHover={{ y: -5 }}
							className='col-span-12 md:col-span-3 bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer'
						>
							<Dialog>
								<DialogTrigger asChild>
									<div className='relative h-full'>
										{item.imageUrl && (
											<div className='absolute inset-0'>
												<Image
													src={item.imageUrl}
													alt={item.title}
													fill
													className='object-cover transition-transform duration-500 group-hover:scale-105'
												/>
												<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
											</div>
										)}
										<div className='relative h-full flex flex-col justify-end p-6 text-white'>
											<div className='flex items-center gap-2 text-white/90 mb-2'>
												{getIcon(item.type)}
												<span className='text-sm font-medium capitalize'>
													{item.type === 'news' && 'Nyhet'}
													{item.type === 'event' && 'Arrangement'}
													{item.type === 'tournament' && 'Turnering'}
													{item.type === 'campaign' && 'Kampanje'}
												</span>
											</div>
											<h3 className='text-xl font-bold mb-2 line-clamp-2'>
												{item.title}
											</h3>
											<p className='text-white/80 text-sm mb-3 line-clamp-2'>
												{item.description}
											</p>
											<div className='flex justify-between items-center'>
												<time className='text-xs text-white/70'>
													{new Date(item.date).toLocaleDateString('nb-NO', {
														year: 'numeric',
														month: 'long',
														day: 'numeric',
													})}
												</time>
												<Button
													variant='ghost'
													size='sm'
													className='text-white hover:text-white/90 hover:bg-white/10'
												>
													Les mer
													<ArrowRight className='w-3 h-3 ml-1' />
												</Button>
											</div>
										</div>
									</div>
								</DialogTrigger>
								<DialogContent className='max-w-3xl max-h-[90vh] overflow-y-auto'>
									<DialogHeader>
										<DialogTitle className='text-2xl'>{item.title}</DialogTitle>
										<DialogDescription className='text-base'>
											{item.description}
										</DialogDescription>
									</DialogHeader>

									<div className='relative h-60 my-6'>
										<Image
											src={item.imageUrl || ''}
											alt={item.title}
											fill
											className='object-cover rounded-md'
										/>
									</div>

									<div className='space-y-6'>
										<div className='flex items-center gap-2 text-muted-foreground'>
											{getIcon(item.type)}
											<span className='text-sm font-medium capitalize'>
												{item.type === 'news' && 'Nyhet'}
												{item.type === 'event' && 'Arrangement'}
												{item.type === 'tournament' && 'Turnering'}
												{item.type === 'campaign' && 'Kampanje'}
											</span>
										</div>

										<time className='block text-sm text-muted-foreground'>
											{new Date(item.date).toLocaleDateString('nb-NO', {
												year: 'numeric',
												month: 'long',
												day: 'numeric',
											})}
										</time>

										<div className='prose prose-sm dark:prose-invert max-w-none'>
											<p>{item.description}</p>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Sed do eiusmod tempor incididunt ut labore et dolore
												magna aliqua. Ut enim ad minim veniam, quis nostrud
												exercitation ullamco laboris nisi ut aliquip ex ea
												commodo consequat.
											</p>
											<h3>Detaljer</h3>
											<p>
												Duis aute irure dolor in reprehenderit in voluptate
												velit esse cillum dolore eu fugiat nulla pariatur.
												Excepteur sint occaecat cupidatat non proident, sunt in
												culpa qui officia deserunt mollit anim id est laborum.
											</p>
											<ul>
												<li>Punkt 1</li>
												<li>Punkt 2</li>
												<li>Punkt 3</li>
											</ul>
										</div>
									</div>
								</DialogContent>
							</Dialog>
						</motion.article>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default NewsBento;
