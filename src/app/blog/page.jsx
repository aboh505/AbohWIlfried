'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
	{
		title: 'Développement Web Modern',
		date: '15 mai 2025',
		category: 'Développement',
		excerpt: 'Découvrez les dernières tendances en développement web et comment les intégrer dans vos projets.',
		slug: 'developpement-web-modern',
	},
	{
		title: 'Optimisation des Performances',
		date: '10 mai 2025',
		category: 'Performance',
		excerpt: 'Techniques avancées pour améliorer les performances de vos applications web.',
		slug: 'optimisation-performances',
	},
	{
		title: 'UI/UX Design',
		date: '05 mai 2025',
		category: 'Design',
		excerpt: 'Conseils pour créer des interfaces utilisateur modernes et intuitives.',
		slug: 'ui-ux-design',
	},
	{
		title: 'React Avancé',
		date: '01 mai 2025',
		category: 'Développement',
		excerpt: 'Techniques avancées pour optimiser vos applications React.',
		slug: 'react-avance',
	},
];

export default function Blog() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-[#0D0D14] via-[#181824] to-[#23233a] text-white">
			<section className="py-20">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.h1
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
					>
						Mon Blog
					</motion.h1>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{blogPosts.map((post, index) => (
							<motion.div
								key={post.slug}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.08 }}
								viewport={{ once: true }}
								className="rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/10 p-7 flex flex-col justify-between hover:scale-[1.025] transition-transform duration-300"
							>
								<div>
									<span className="inline-block px-3 py-1 bg-orange-100/80 text-orange-700 rounded-full text-xs font-semibold mb-3">
										{post.category}
									</span>
									<h2 className="text-2xl font-bold mb-2 text-white/90">
										{post.title}
									</h2>
									<p className="text-gray-400 mb-3 text-sm">
										{post.date}
									</p>
									<p className="mb-4 text-white/80">
										{post.excerpt}
									</p>
								</div>
								<Link
									href="/article"
									className="inline-flex items-center text-orange-500 hover:text-pink-500 transition-colors font-semibold mt-auto"
								>
									Lire l'article{' '}
									<ArrowUpRight className="ml-1 h-4 w-4" />
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}