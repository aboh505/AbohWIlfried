'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Article() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0D0D14] via-[#181824] to-[#23233a] text-white font-sans">
      <section className="py-20 px-4 md:px-20 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          Développement Web Moderne
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 mb-8 text-center"
        >
          Découvrez les bases et les bonnes pratiques du développement web moderne, avec des exemples de code et des explications claires.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-white/10 rounded-2xl shadow-xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-orange-400 mb-4">Exemple de composant React</h2>
          <pre className="bg-[#181824] text-green-400 rounded-lg p-4 overflow-x-auto text-sm mb-4">
{`import React from 'react';

export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
      {children}
    </button>
  );
}`}
          </pre>
          <p className="text-gray-200">Ce composant React affiche un bouton stylisé et réutilisable. Il illustre la simplicité et la puissance du développement web moderne avec React et Tailwind CSS.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-white/10 rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold text-orange-400 mb-4">Bonnes pratiques</h2>
          <ul className="list-disc pl-6 text-gray-200 space-y-2">
            <li>Utiliser des composants réutilisables et modulaires</li>
            <li>Adopter un design responsive et accessible</li>
            <li>Optimiser les performances (lazy loading, code splitting...)</li>
            <li>Écrire un code lisible et bien commenté</li>
            <li>Utiliser des outils modernes (React, Next.js, Tailwind CSS...)</li>
          </ul>
        </motion.div>
        <div className="mt-10 text-center">
          <Link href="/blog" className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all shadow-lg">
            ← Retour au blog
          </Link>
        </div>
      </section>
    </main>
  );
}