// components/Footer.jsx
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D14] text-white pt-12 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">ABOH</h2>
          
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navigation</h3>
          <ul className="text-sm space-y-2 text-gray-400">
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/portfolio">Projets</Link></li>
            <li><Link href="/portfolio">Blog</Link></li>
            <li><Link href="/portfolio">FAQ</Link></li>
            
          
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="text-sm space-y-2 text-gray-400">
            <li className="flex items-center gap-2"><Phone size={16} /> (+237) 69055-8216</li>
            <li className="flex items-center gap-2"><Mail size={16} /> abohwilfried91.gmailcom</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Cameroun, Douala, BD</li>
       
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Recevez les dernières informations</h3>
          <p className="text-sm text-gray-400 mb-3">
            Restez informé des nouveautés et conseils web.
          </p>
          
        </div>
      </div>

      {/* Social and copyright */}
      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>© 2024 Aboh. Tous droits réservés.</p>
        <div className="flex items-center gap-4">
          <Link href="#"><Facebook size={16} /></Link>
          <Link href="#"><Twitter size={16} /></Link>
          <Link href="#"><Instagram size={16} /></Link>
          <Link href="#"><Linkedin size={16} /></Link>
        </div>
        <div className="flex gap-4">
          <Link href="#">Conditions d'utilisation</Link>
          <Link href="#">Politique de confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}
