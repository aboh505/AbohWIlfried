'use client'

import Image from 'next/image';
import { Mail, Phone, ArrowRight, Star, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';


const skills = [
  { name: 'React', level: 60, icon: 'react' },
  { name: 'Next.js', level: 90, icon: 'nextjs' },
  { name: 'Node.js', level: 80, icon: 'node' },
  { name: 'JavaScript', level: 75, icon: 'typescript' },
  { name: 'Tailwind CSS', level: 85, icon: 'tailwind' },
  { name: 'MongoDB', level: 70, icon: 'mongodb' },
];

const services = [
  { name: 'Web Design', description: 'Modern and responsive design solutions' },
  { name: 'Fullstack Development', description: 'Complete web application development' },
  { name: 'API Integration', description: 'Seamless integration with third-party services' },
  { name: 'Performance Optimization', description: 'Fast and optimized web applications' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0D0D14] via-[#181824] to-[#23233a] text-white font-sans">
      {/* Hero/About */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="py-20 text-center bg-[url('/background.jpg')] bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">À propos de moi</h1>
          <p className="text-orange-400">Accueil / À propos</p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="relative w-64 h-64 mx-auto">
          <div className="absolute -top-6 -left-6 w-72 h-72 bg-orange-500 rounded-full z-0 blur-xl opacity-60" />
          <Image
            src="/a1.jpg"
            alt="Saira"
            width={500}
            height={500}
            className="rounded-full relative z-10 shadow-2xl"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Obtenez un site web qui marquera durablement votre audience !</h2>
          <p className="text-gray-300">Développeur passionné, je crée des sites modernes, performants et adaptés à vos besoins. Contactez-moi pour donner vie à vos projets !</p>
          <div className="bg-gray-800/80 p-4 rounded-md space-y-2">
            <p><strong>Nom :</strong> Aboh Wilfried</p>
            <p className="flex items-center gap-2"><Mail size={16} /> abohwilfried91@gmail.com</p>
            <p className="flex items-center gap-2"><Phone size={16} /> +237 690 55 82 16</p>
            <p className="flex items-center gap-2"><Instagram size={16} /> @depayy joseph</p>
          </div>
          <div className="space-x-4">

            <Link href="/resume" className="border border-orange-500 px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300">
              Voir mon CV
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Services */}

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
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
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
                <h3 className="text-xl font-semibold text-white-600 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center py-20 px-6 md:px-20 bg-gray-900/80"
      >
        <h2 className="text-3xl font-semibold mb-2">Ce que disent mes <span className="text-orange-500">clients</span></h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">Ils m'ont fait confiance pour leurs projets web. Voici leurs retours.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {["Latiffa F.", "Serge T.", "Ebong T."].map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-gray-800/80 p-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, j) => <Star key={j} size={18} className="text-yellow-400" />)}
              </div>
              <p className="text-orange-400 font-semibold">{name}</p>
              <p className="text-gray-300 text-sm mt-2">"Super expérience, travail rapide et de qualité !"</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
