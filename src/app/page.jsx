'use client'

import Image from 'next/image';
import { Mail, Phone, ArrowRight, Star, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
            <Link href="/contact" className="bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-600 transition-all duration-300 shadow-lg">
              Me contacter
            </Link>
            <Link href="/resume" className="border border-orange-500 px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300">
              Télécharger mon CV
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center py-20 px-6 md:px-20"
      >
        <h2 className="text-3xl font-semibold mb-2">Mes <span className="text-orange-500">Compétences</span></h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">Découvrez les technologies et outils que je maîtrise pour réaliser vos projets web.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Figma', 'WordPress', 'Développement Web', 'Web Design', 'Sketch', 'Xd', 'Montage Vidéo', 'Application Mobile'].map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-800/80 p-6 rounded-lg shadow-lg"
            >
              <p className="text-xl font-bold mb-2">{skill}</p>
              <div className="bg-gray-700 h-2 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-2 w-[90%]"></div>
              </div>
              <p className="text-sm text-orange-400 mt-2">{90 + i % 10}%</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center py-20 px-6 md:px-20"
      >
        <h2 className="text-3xl font-semibold mb-2">Mes <span className="text-orange-500">Services</span></h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">Création de sites web, design UI/UX, développement d'applications et bien plus encore.</p>
        {/* <div className="grid md:grid-cols-3 gap-6">
          {["UI/UX Design", "Web Design", "Développement Web"].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-gray-800/80 rounded-xl p-4 shadow-lg hover:scale-[1.025] transition-transform duration-300"
            >
              <Image src="/portfolio.jpg" alt={service} width={300} height={200} className="rounded-md" />
              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-semibold">{service}</p>
                <ArrowRight className="text-orange-500" />
              </div>
            </motion.div>
          ))}
        </div> */}
        <Link href="/services" className="mt-10 bg-orange-500 px-6 py-2 rounded-md hover:bg-orange-600 transition-all duration-300 shadow-lg inline-block">
          Voir tous les services
        </Link>
      </motion.section>

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
          {["Robert J.", "Janice Z.", "Justin B."].map((name, i) => (
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
