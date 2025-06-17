'use client';

import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', message: '' });
  const [confirmation, setConfirmation] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    const nouveauMessage = {
      ...form,
      date: new Date().toLocaleString(),
    };
    localStorage.setItem('messages', JSON.stringify([...messages, nouveauMessage]));

    setForm({ nom: '', email: '', telephone: '', message: '' });
    setConfirmation(true);
    setTimeout(() => setConfirmation(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black-50 to-black px-4 py-10 text-gray-800">
      {/* Titre */}
      <div className="mt-20 text-center mb-14">
        <h1 className="text-5xl font-extrabold text-orange-800">Contactez-nous</h1>
      </div>

      {/* Contenu principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Infos de contact */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Entrer en contact</h2>
            <p className="text-gray-600">
              Notre équipe est disponible pour répondre à toutes vos questions dans les plus brefs délais.
            </p>
          </div>
          <div className="space-y-3 text-lg">
            <p><span className="font-semibold">📞 Téléphone :</span> (+237) 690 558 216</p>
            <p><span className="font-semibold">📧 Email :</span> abohwilfried91@gmail.com</p>
            <p><span className="font-semibold">📍 Adresse :</span> Cameroun, Douala</p>
            <p><span className="font-semibold">📸 Instagram :</span> _Depayyy</p>
          </div>
          <div>
            <p className="font-semibold">Réseaux sociaux :</p>
            <div className="flex gap-4 mt-2 text-xl">
              <a href="#"><i className="fab fa-facebook text-blue-600" /></a>
              <a href="#"><i className="fab fa-whatsapp text-green-500" /></a>
              <a href="#"><i className="fab fa-youtube text-red-600" /></a>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-6 space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              placeholder="Nom"
              required
              className="p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="p-3 border border-gray-300 rounded"
            />
          </div>
          <input
            type="text"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            placeholder="Téléphone"
            required
            className="p-3 border border-gray-300 rounded w-full"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Votre message"
            rows={5}
            required
            className="p-3 border border-gray-300 rounded w-full"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-800 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition-all"
          >
            Envoyer
          </button>

          {confirmation && (
            <p className="text-green-800 mt-2 font-medium animate-pulse">
              ✅ Message envoyé avec succès !
            </p>
          )}
        </form>
      </div>

      {/* Carte Google Maps Douala */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-orange-800 mb-4">📍 Nous localiser à Douala</h2>
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-blue-100">
          <iframe
            title="Carte de Douala, Cameroun"
            src="https://www.google.com/maps?q=Douala+Cameroun&output=embed"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
