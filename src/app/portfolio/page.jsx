'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'E-commerce Dashboard',
    description: 'Plateforme de commerce électronique complète avec catalogue de produits, panier d\'achat et intégration de paiement',
    technologies: ['Next.js', 'MongoDB', 'Tailwind CSS'],
    image: '/b10.jpg',
    demo: 'https://dashboarddummy-eight.vercel.app/',
    github: 'https://github.com/username/ecommerce'
  },
  {
    title: 'Bible media PLatform',
    description: 'Tableau de bord interactif avec analyses en temps réel et suivi de l\'engagement des utilisateurs',
    technologies: ['React', 'Tailwind.css', ],
    image: '/a5.jpg',
    demo: 'https://bibleverse-nine.vercel.app/',
    github: 'https://github.com/aboh505/bibliaOnline.git'
  },
  {
    title: 'Portfolio Personnel',
    description: 'Plateforme de blogging moderne avec système de gestion de contenu et interface d\'administration',
    technologies: ['Next.js', 'Tailwind CSS'],
    image: '/profil.jpeg',
    demo: 'https://quizsphere-anr4.vercel.app',
    github: 'https://github.com/aboh505/Quizsphere.git'
  },
  {
    title: 'Application ',
    description: 'Système de gestion des disponibilités bancaires',
    technologies: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    image: '/a6.jpg',
    demo: 'https://easybank-beryl-six.vercel.app/',
    github: 'https://github.com/aboh505/easybank.git'
  },
  {
    title: 'Blog Personnel',
    description: 'Site movies responsive avec animations et système de galerie de films',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    image: '/m2.jpg',
    demo: 'https://aboh-movies-9zlo.vercel.app',
    github: 'https://github.com/aboh505/AbohMovies.git'
  },
   {
    title: 'Galery',
    description: 'Site  responsive avec animations et système de livraison des menus',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    image: '/b4.jpg',
    demo: 'https://la-bonjournaise-usyd.vercel.app/',
    github: 'https://github.com/aboh505/LaBonjournaise.git'
  },
  
];

export default function Portfolio() {
  return (
    <main className="portfolio-page min-h-screen bg-[#0D0D14] text-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-12 text-center">
            Mes Réalisations
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="card rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Project Image */}
                  <div className="relative h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <h3 className="font-semibold mb-2">{project.title}</h3>
                        <div className="flex gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-orange-500 text-white rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex gap-4">
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="flex items-center gap-1 text-orange-500 hover:text-orange-600 transition-colors"
                      >
                        Voir le projet
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-1 text-orange-500 hover:text-orange-600 transition-colors"
                      >
                        Code source
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>

    
  );
}