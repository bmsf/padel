'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';
import MapSection from '../../components/layout/MapSection';

export default function Contact() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		const formData = new FormData(e.currentTarget);
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			subject: formData.get('subject'),
			message: formData.get('message'),
		};

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || 'Noe gikk galt');
			}

			toast.success(
				'Takk for din henvendelse! Vi vil kontakte deg så snart som mulig.'
			);
			e.currentTarget.reset();
		} catch (error) {
			toast.error(
				error instanceof Error
					? error.message
					: 'Kunne ikke sende meldingen. Vennligst prøv igjen senere.'
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className='min-h-screen bg-background overflow-x-hidden'>
			{/* Hero Section */}
			<div className='container mx-auto px-4 py-12 md:py-16'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='max-w-3xl mx-auto text-center space-y-6'
				>
					<h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
						Kontakt Oss
					</h1>
					<p className='text-lg md:text-2xl text-muted-foreground leading-relaxed'>
						Har du spørsmål om våre tjenester eller ønsker å booke en bane? Vi
						er her for å hjelpe deg!
					</p>
				</motion.div>
			</div>

			<div className='py-12'>
				<div className='container mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'
					>
						{/* Kontaktinformasjon */}
						<div className='bg-card/50 backdrop-blur-sm p-12 rounded-2xl border-2 border-foreground/10 group hover:bg-card/70 transition-all duration-500'>
							<h2 className='text-2xl font-semibold mb-8'>
								Kontaktinformasjon
							</h2>

							<div className='space-y-6'>
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: 0.1 }}
									className='flex items-start group'
								>
									<div className='flex-shrink-0'>
										<Phone className='h-6 w-6 text-foreground/70 group-hover:text-foreground transition-colors duration-300' />
									</div>
									<div className='ml-4'>
										<h3 className='text-lg font-medium'>Telefon</h3>
										<p className='mt-1 text-muted-foreground group-hover:text-foreground transition-colors duration-300'>
											+47 48189107
										</p>
									</div>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: 0.2 }}
									className='flex items-start group'
								>
									<div className='flex-shrink-0'>
										<Mail className='h-6 w-6 text-foreground/70 group-hover:text-foreground transition-colors duration-300' />
									</div>
									<div className='ml-4'>
										<h3 className='text-lg font-medium'>E-post</h3>
										<p className='mt-1 text-muted-foreground group-hover:text-foreground transition-colors duration-300'>
											post@padelco.no
										</p>
									</div>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: 0.3 }}
									className='flex items-start group'
								>
									<div className='flex-shrink-0'>
										<MapPin className='h-6 w-6 text-foreground/70 group-hover:text-foreground transition-colors duration-300' />
									</div>
									<div className='ml-4'>
										<h3 className='text-lg font-medium'>Adresse</h3>
										<p className='mt-1 text-muted-foreground group-hover:text-foreground transition-colors duration-300'>
											Grini Næringspark 6
											<br />
											1361 Østerås
										</p>
									</div>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: 0.4 }}
									className='flex items-start group'
								>
									<div className='flex-shrink-0'>
										<Clock className='h-6 w-6 text-foreground/70 group-hover:text-foreground transition-colors duration-300' />
									</div>
									<div className='ml-4'>
										<h3 className='text-lg font-medium'>Åpningstider</h3>
										<div className='mt-1 space-y-1 text-muted-foreground group-hover:text-foreground transition-colors duration-300'>
											<p>Alle dager: 06:00 - 00:00</p>
										</div>
									</div>
								</motion.div>
							</div>
						</div>

						{/* Kontaktskjema */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4 }}
							className='bg-card/50 backdrop-blur-sm p-12 rounded-2xl border-2 border-foreground/10'
						>
							<h2 className='text-2xl font-semibold mb-8'>
								Send oss en melding
							</h2>

							<div className='bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-8'>
								<p className='text-yellow-500/90'>
									Kontaktskjemaet er midlertidig utilgjengelig mens vi setter
									opp e-postfunksjonaliteten. Vennligst kontakt oss direkte på{' '}
									<a
										href='mailto:post@padelco.no'
										className='underline hover:text-yellow-400 transition-colors'
									>
										post@padelco.no
									</a>
								</p>
							</div>

							<form
								onSubmit={handleSubmit}
								className='space-y-6 opacity-50 pointer-events-none'
							>
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.3, delay: 0.1 }}
								>
									<label
										htmlFor='name'
										className='block text-sm font-medium text-foreground mb-2'
									>
										Navn <span className='text-red-500'>*</span>
									</label>
									<input
										type='text'
										id='name'
										name='name'
										required
										className='w-full px-4 py-3 rounded-lg bg-card border-2 border-foreground/10 focus:border-foreground/20 focus:outline-none transition-colors duration-300'
									/>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.3, delay: 0.2 }}
								>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-foreground mb-2'
									>
										E-post <span className='text-red-500'>*</span>
									</label>
									<input
										type='email'
										id='email'
										name='email'
										required
										className='w-full px-4 py-3 rounded-lg bg-card border-2 border-foreground/10 focus:border-foreground/20 focus:outline-none transition-colors duration-300'
									/>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.3, delay: 0.3 }}
								>
									<label
										htmlFor='subject'
										className='block text-sm font-medium text-foreground mb-2'
									>
										Emne <span className='text-red-500'>*</span>
									</label>
									<input
										type='text'
										id='subject'
										name='subject'
										required
										className='w-full px-4 py-3 rounded-lg bg-card border-2 border-foreground/10 focus:border-foreground/20 focus:outline-none transition-colors duration-300'
									/>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.3, delay: 0.4 }}
								>
									<label
										htmlFor='message'
										className='block text-sm font-medium text-foreground mb-2'
									>
										Melding <span className='text-red-500'>*</span>
									</label>
									<textarea
										id='message'
										name='message'
										rows={4}
										required
										className='w-full px-4 py-3 rounded-lg bg-card border-2 border-foreground/10 focus:border-foreground/20 focus:outline-none transition-colors duration-300'
									></textarea>
								</motion.div>

								<motion.button
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.3, delay: 0.5 }}
									type='submit'
									disabled={isSubmitting}
									className='w-full py-4 px-6 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed'
								>
									{isSubmitting ? 'Sender...' : 'Send melding'}
								</motion.button>
							</form>
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Kart */}
			<MapSection />

			{/* Sosiale medier */}
			<section className='py-20'>
				<div className='container mx-auto px-4'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='max-w-4xl mx-auto'
					>
						<div className='bg-card/50 backdrop-blur-sm p-12 rounded-2xl border-2 border-foreground/10'>
							<h2 className='text-3xl font-semibold mb-8 text-center'>
								Følg oss på sosiale medier
							</h2>
							<div className='flex justify-center space-x-8'>
								<motion.a
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.3, delay: 0.1 }}
									href='#'
									className='text-foreground/70 hover:text-foreground transition-colors duration-300 flex items-center gap-2 group'
								>
									<Facebook className='h-6 w-6' />
									<span className='text-lg'>Facebook</span>
								</motion.a>
								<motion.a
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.3, delay: 0.2 }}
									href='#'
									className='text-foreground/70 hover:text-foreground transition-colors duration-300 flex items-center gap-2 group'
								>
									<Instagram className='h-6 w-6' />
									<span className='text-lg'>Instagram</span>
								</motion.a>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
