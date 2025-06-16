'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Resume() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0D0D14] via-[#181824] to-[#23233a] text-white font-sans">
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
          >
            Mon Résumé
          </motion.h1>

          {/* Section Éducation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/10 mb-12 hover:scale-[1.01] transition-transform duration-300"
          >
            <div className="flex items-center justify-between p-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Éducation</h2>
                <p className="text-gray-400">Formation et diplômes</p>
              </div>
              <div className="flex gap-2">
                <span className="text-orange-500">🎓</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200">
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">BTS1 en DOT</h3>
                  <p className="text-sm text-gray-400 mb-2">Université de la Cote • 2012 - 2023</p>
                  <p className="mb-4">Spécialisation en Douane et Transit</p>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500">⭐</span>
                    <span className="text-gray-400">Mention Bien</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2"> Informatique</h3>
                  <p className="text-sm text-gray-400 mb-2">Seven Advanced Academy • 2023 - 2024</p>
                  <p className="mb-4">Focus sur le développement web et la programmation</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section Expérience Professionnelle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/10 mb-12 hover:scale-[1.01] transition-transform duration-300"
          >
            <div className="flex items-center justify-between p-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Expérience Professionnelle</h2>
                <p className="text-gray-400">Parcours professionnel</p>
              </div>
              <div className="flex gap-2">
                <span className="text-orange-500">💼</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200">
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Développeur Web </h3>
                  <p className="text-sm text-gray-400 mb-2">Common Factor • 2025 - Présent</p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Développement d'applications web fullstack</li>
                    <li>Leadership technique</li>
                    <li>Optimisation des performances</li>
                  </ul>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500">🛠️</span>
                    <span className="text-gray-400">React, Node.js, MongoDB</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Développeur Web Junior</h3>
                  <p className="text-sm text-gray-400 mb-2">Frontend • 2022 - 2023</p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Développement front-end</li>
                    <li>Collaboration avec l'équipe design</li>
                    <li>Maintenance des applications</li>
                  </ul>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500">🛠️</span>
                    <span className="text-gray-400">React, Redux, CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section Compétences Techniques */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/10 mb-12 hover:scale-[1.01] transition-transform duration-300"
          >
            <div className="flex items-center justify-between p-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Compétences Techniques</h2>
                <p className="text-gray-400">Expertise technique</p>
              </div>
              <div className="flex gap-2">
                <span className="text-orange-500">📚</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Langages */}
                  <div>
                    <h3 className="font-semibold mb-4">Langages</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>JavaScript</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Python</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>HTML/CSS</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Frameworks & Outils */}
                  <div>
                    <h3 className="font-semibold mb-4">Frameworks & Outils</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>React</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Node.js</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Git</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section Langues & Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/10 hover:scale-[1.01] transition-transform duration-300"
          >
            <div className="flex items-center justify-between p-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Langues & Soft Skills</h2>
                <p className="text-gray-400">Compétences personnelles</p>
              </div>
              <div className="flex gap-2">
                <span className="text-orange-500">💬</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Langues */}
                  <div>
                    <h3 className="font-semibold mb-4">Langues</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Français</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Anglais</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Soft Skills */}
                  <div>
                    <h3 className="font-semibold mb-4">Soft Skills</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Travail en équipe</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Communication</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Autonomie</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Boutons */}
      <div className="mt-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-4">
            <a
              href="/CV.pdf"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors shadow-lg text-lg font-semibold"
            >
              <span>Télécharger CV</span>
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center px-6 py-3 bg-white text-orange-500 rounded-full hover:bg-orange-50 transition-colors shadow-lg text-lg font-semibold"
            >
              <span>Voir Portfolio</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}