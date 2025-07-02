'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import {
	containerVariants,
	itemVariants,
	defaultViewport,
} from '@/app/lib/animations';

interface FAQItem {
	question: string;
	answer: string;
}

const faqItems: FAQItem[] = [
	{
		question: 'Hva er forskjellen mellom padel og tennis?',
		answer:
			'Padel spilles på en mindre bane (10×20m vs tennis 23.77×8.23m), med vegger som kan brukes i spillet, og racketer uten strenger. Banen er lukket med glass og stålgitter.',
	},
	{
		question: 'Kan jeg spille padel alene?',
		answer:
			'Padel spilles som regel i double format (4 spillere), men du kan øve på teknikken alene mot veggene. For full spillopplevelse trenger du 3 andre spillere.',
	},
	{
		question: 'Hva slags utstyr trenger jeg?',
		answer:
			'Du trenger en padel-racket (mindre enn tennis-racket og uten strenger), padel-baller (lignende tennisballer), og godt sko med god grep på underlaget.',
	},
	{
		question: 'Er padel vanskelig å lære?',
		answer:
			'Padel er relativt enkelt å lære sammenlignet med tennis. Teknikken er enklere og banen er mindre, noe som gjør det lettere for nybegynnere å komme i gang.',
	},
	{
		question: 'Hvor lenge varer en padel-kamp?',
		answer:
			'En typisk padel-kamp varer 60-90 minutter, avhengig av spillernes nivå og intensitet. Kamper spilles vanligvis til best av 3 sett.',
	},
	{
		question: 'Kan jeg spille padel året rundt?',
		answer:
			'Ja! Padel kan spilles både inne og ute, så du kan spille året rundt. Våre baner er tilgjengelige hele året.',
	},
];

const FAQSection: React.FC = () => {
	const shouldReduceMotion = useReducedMotion();
	const [openItems, setOpenItems] = useState<number[]>([]);

	const toggleItem = (index: number) => {
		setOpenItems((prev) =>
			prev.includes(index)
				? prev.filter((item) => item !== index)
				: [...prev, index]
		);
	};

	return (
		<section className='py-16 bg-card/30'>
			<div className='container mx-auto px-4'>
				<motion.div
					variants={containerVariants(shouldReduceMotion)}
					initial='hidden'
					whileInView='visible'
					viewport={defaultViewport}
					className='max-w-4xl mx-auto'
				>
					<motion.div
						variants={itemVariants(shouldReduceMotion)}
						className='text-center mb-12'
					>
						<div className='flex justify-center mb-6'>
							<HelpCircle className='w-12 h-12' />
						</div>
						<h2 className='text-4xl font-bold mb-4'>
							Vanlige Spørsmål om Padel
						</h2>
						<p className='text-xl'>Alt du lurer på om sporten</p>
					</motion.div>

					<motion.div
						variants={itemVariants(shouldReduceMotion)}
						className='space-y-4'
					>
						{faqItems.map((item, index) => (
							<div
								key={index}
								className='bg-card rounded-xl border border-foreground/10 overflow-hidden shadow-sm'
							>
								<button
									onClick={() => toggleItem(index)}
									className='w-full p-6 text-left flex items-center justify-between hover:bg-card/80 transition-colors duration-200'
								>
									<h3 className='text-lg font-semibold pr-4'>
										{item.question}
									</h3>
									{openItems.includes(index) ? (
										<ChevronUp className='w-5 h-5 flex-shrink-0' />
									) : (
										<ChevronDown className='w-5 h-5 flex-shrink-0' />
									)}
								</button>
								{openItems.includes(index) && (
									<div className='px-6 pb-6'>
										<p className='leading-relaxed'>{item.answer}</p>
									</div>
								)}
							</div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default FAQSection;
