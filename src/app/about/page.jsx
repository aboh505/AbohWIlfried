'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const skills = [
  { name: 'React', level: 90, icon: 'react' },
  { name: 'Next.js', level: 85, icon: 'nextjs' },
  { name: 'Node.js', level: 80, icon: 'node' },
  { name: 'TypeScript', level: 75, icon: 'typescript' },
  { name: 'Tailwind CSS', level: 85, icon: 'tailwind' },
  { name: 'MongoDB', level: 70, icon: 'mongodb' },
];

const services = [
  { name: 'Web Design', description: 'Modern and responsive design solutions' },
  { name: 'Fullstack Development', description: 'Complete web application development' },
  { name: 'API Integration', description: 'Seamless integration with third-party services' },
  { name: 'Performance Optimization', description: 'Fast and optimized web applications' },
];

export default function About() {
  return (
    <main className="about-page min-h-screen bg-[#0D0D14] text-white">
      {/* Hero Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-64 h-64 rounded-full overflow-hidden">
                <img
                  src="/a1.jpg"
                  alt="Profile"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 border-4 border-orange-500 rounded-full transition-transform duration-300" />
              </div>
            </motion.div>

            {/* Info Section */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Développeur Web Fullstack
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Passionné par la création d'applications web modernes et performantes. 
                Spécialisé dans le développement fullstack avec React, Node.js et MongoDB.
              </p>

              {/* Download CV and Contact buttons */}
              <div className="flex gap-4">
                <Link
                  href="/cv.pdf"
                  className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
                >
                  Télécharger CV
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white text-orange-500 border border-orange-500 rounded-full hover:bg-orange-50 transition-colors"
                >
                  Me contacter
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Mes Compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl p-6 bg-white/10 shadow-xl border border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h3>
                  <span className="text-orange-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-orange-400 to-pink-500 h-3 rounded-full shadow-lg"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white-900 mb-12 text-center">
            Services Proposés
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}