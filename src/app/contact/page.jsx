'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactHistory = JSON.parse(localStorage.getItem('contactHistory') || '[]');
    contactHistory.push({
      ...formData,
      date: new Date().toISOString()
    });
    localStorage.setItem('contactHistory', JSON.stringify(contactHistory));

    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true);

    alert('Votre message a été envoyé avec succès !');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen bg-[#0D0D14]">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-12 text-center text-white">
            Contactez-moi
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Formulaire à gauche */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/90 rounded-3xl p-10 shadow-2xl backdrop-blur-md flex flex-col justify-center min-h-[420px]"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    rows="4"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Envoyer le message
                </button>
              </form>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-8 text-center"
                >
                  <p className="text-green-500 text-base font-semibold bg-green-100/80 rounded-lg px-4 py-2 inline-block shadow">
                    Merci pour votre message! Je vous répondrai dès que possible.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Infos de contact à droite */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/90 rounded-3xl p-10 shadow-2xl flex flex-col justify-center min-h-[420px] backdrop-blur-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Informations de contact
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-orange-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">abohwilfried91@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-orange-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Téléphone</h3>
                    <p className="text-gray-600">+237 690558216</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="w-6 h-6 text-orange-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900">LinkedIn</h3>
                    <p className="text-gray-600">linkedin.com/in/abohwilfried</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="w-6 h-6 text-orange-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900">GitHub</h3>
                    <p className="text-gray-600">github.com/aboh505</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}