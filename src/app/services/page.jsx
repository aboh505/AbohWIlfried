'use client';

import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <div className="bg-[#0D0D14] text-white font-sans">
      {/* Bannière */}
      <section className="py-20 text-center bg-[url('/background.jpg')] bg-cover">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Services</h1>
        <p className="text-orange-400">Découvrez mes services</p>
        <p className="text-gray-300">Solutions professionnelles</p>
      </section>

      {/* Services Principaux */}
      <section className="py-20 px-4 md:px-20">
        <h2 className="text-3xl font-semibold mb-2 text-center">Mes Services</h2>
        <p className="text-gray-300 mb-12 text-center">Services web professionnels adaptés à vos besoins</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "Web Design", image: "/b1.jpg" },
            { title: "Développement Web", image: "/p1.jpg" },
            { title: "UI/UX Design", image: "/b3.jpg" },
            { title: "Applications Mobiles", image: "/b2.jpg" },
            { title: "SEO & Référencement", image: "/b5.jpg" },
            { title: "Maintenance", image: "/b6.jpg" }
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/10 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.04] transition-transform duration-300 flex flex-col"
            >
              <div className="relative h-40 w-full">
                <Image src={service.image} alt={service.title} fill className="object-cover w-full h-full" />
              </div>
              <div className="flex-1 flex flex-col justify-between p-5">
                <p className="text-lg font-semibold text-white mb-2">{service.title}</p>
                <div className="flex justify-end">
                  <ArrowRight className="text-orange-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section Photo */}
      <section className="py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-6xl font-semibold mb-4">Expert Web</h2>
            <p className="text-3xl text-gray-300 mb-8">2+ ans d'expérience</p>
          </div>
          <div className="relative w-80 h-80 mx-auto flex items-center justify-center">
            <div className="absolute -top-10 -left-10 w-96 h-96 bg-gradient-to-br from-orange-400 via-pink-400 to-orange-500 rounded-full z-0 blur-2xl opacity-60 animate-pulse" />
            <Image src="/a2.jpg" alt="Saira" width={320} height={320} className="rounded-full relative z-10 shadow-2xl border-8 border-white/20 object-cover w-80 h-80" />
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-2">Compétences</h2>
        <p className="text-gray-300 mb-12">Technologies maîtrisées</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "React", percentage: 95 },
            { title: "Next.js", percentage: 90 },
            { title: "Node.js", percentage: 85 },
            { title: "TypeScript", percentage: 80 },
            { title: "Tailwind", percentage: 95 },
            { title: "MongoDB", percentage: 85 },
            { title: "Git", percentage: 90 },
            { title: "Docker", percentage: 80 }
          ].map((skill, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg">
              <p className="text-xl font-bold mb-2">{skill.title}</p>
              <div className="bg-gray-700 h-2 rounded-full overflow-hidden">
                <motion.div 
                  className="bg-orange-500 h-2"
                  initial={{ width: '0%' }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                ></motion.div>
              </div>
              <p className="text-sm text-orange-400 mt-2">{skill.percentage}%</p>
            </div>
          ))}
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 px-6 md:px-20 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-2">Témoignages</h2>
        <p className="text-gray-300 mb-12">Avis clients</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "NJifanda E.",
              testimonial: "Travail professionnel et très réactif.",
              image: "/a7.jpg"
            },
            {
              name: "Mbah Mercy.",
              testimonial: "Site web magnifique et fonctionnel.",
              image: "/a9.jpg"
            },
            {
              name: "Maturin w.",
              testimonial: "Très satisfait du résultat.",
              image: "/a8.jpg"
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, j) => <Star key={j} size={18} className="text-yellow-400" />)}
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Image src={testimonial.image} alt={testimonial.name} width={40} height={40} className="rounded-full" />
                <p className="text-orange-400 font-semibold">{testimonial.name}</p>
              </div>
              <p className="text-gray-300 text-sm">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
