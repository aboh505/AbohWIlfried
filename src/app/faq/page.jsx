'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
	
	{
		question: 'Quels sont tes tarifs ?',
		answer:
			'Mes tarifs varient selon la complexité du projet. Contactez-moi pour une estimation personnalisée.',
		category: 'Tarifs',
	},
	{
		question: 'Quelles technologies utilises-tu ?',
		answer:
			"Je travaille principalement avec Next.js, Node.js, et les technologies modernes du web. Je peux m'adapter à vos besoins spécifiques.",
		category: 'Technologies',
	},
	{
		question: 'As-tu des références ?',
		answer:
			'Oui, je peux vous fournir des références de mes précédents clients. Contactez-moi pour en savoir plus.',
		category: 'Références',
	},
	{
		question: 'Peux-tu travailler sur des projets urgents ?',
		answer:
			"Oui, je peux m'adapter à vos délais. Contactez-moi pour discuter des détails de votre projet.",
		category: 'Disponibilité',
	},
];

export default function FAQ() {
	const [activeFAQ, setActiveFAQ] = useState(null);

	return (
		<main className="min-h-screen bg-[#0D0D14] text-white font-sans">
			<section className="py-20">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.h1
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
					>
						FAQ
					</motion.h1>

					<div className="flex flex-col mt-12 gap-8">
						{/* FAQ Items */}
						{faqs.map((faq, index) => (
							<motion.div
								key={faq.question}
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: index * 0.08 }}
								viewport={{ once: true }}
								className={`transition-all duration-300 border-none rounded-xl shadow-lg bg-gradient-to-br from-[#181824] to-[#23233a] ${
									activeFAQ === index ? 'ring-2 ring-orange-400' : ''
								}`}
							>
								<button
									onClick={() =>
										setActiveFAQ(activeFAQ === index ? null : index)
									}
									className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none group"
									aria-expanded={activeFAQ === index}
								>
									<span className="text-lg md:text-xl font-semibold text-white group-hover:text-orange-400 transition-colors flex-1 text-left">
										{faq.question}
									</span>
									<ChevronDown
										size={28}
										className={`transition-transform duration-300 text-orange-400 ${
											activeFAQ === index ? 'rotate-180' : ''
										}`}
									/>
								</button>
								<motion.div
									initial={false}
									animate={{
										height: activeFAQ === index ? 'auto' : 0,
										opacity: activeFAQ === index ? 1 : 0,
									}}
									transition={{ duration: 0.3 }}
									className={`overflow-hidden px-6 ${
										activeFAQ === index ? 'py-4' : 'py-0'
									}`}
								>
									{activeFAQ === index && (
										<p className="text-gray-200 text-base md:text-lg leading-relaxed">
											{faq.answer}
										</p>
									)}
								</motion.div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}