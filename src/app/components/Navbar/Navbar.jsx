// components/Navbar.jsx
'use client';

import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Fermer le dropdown quand l'utilisateur clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.dropdown-button') === null) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50  py-4 px-6`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between rounded-full bg-white px-6 py-2 shadow-md">
        {/* <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        > */}
        {/* Logo */}
        <div className="flex items-center gap-2">

          <Link
            href="/"
            className="text-4xl font-bold text-orange-500 hover:text-orange-400 transition-transform duration-300 
             hover:rotate-3 hover:scale-105 drop-shadow-[3px_3px_3px_rgba(0,0,0,0.3)]"
          >
            ABOH
          </Link>



        </div>

        {/* Menu */}
        <ul className="hidden font-bold md:flex gap-6 items-center font-medium text-sm">
          <li>
            <Link
              href="/"
              className={`text-gray-600 hover:text-orange-500 transition-colors duration-200 ${pathname === '/' ? 'text-orange-500' : ''}`}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className={`text-gray-600 hover:text-orange-500 transition-colors duration-200 ${pathname === '/portfolio' ? 'text-orange-500' : ''}`}
            >
              Projets
            </Link>
          </li>

          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="dropdown-button flex items-center gap-1 text-gray-600 hover:text-orange-500 transition-colors duration-200 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              Plus
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
              >
                <ul className="py-1">
                  <li>
                    <Link
                      href="/blog"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resume"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      CV
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </li>
        </ul>

        {/* Call to action */}
        <Link
          href="/contact"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium shadow-sm"
        >
          Me contacter <ArrowUpRight size={16} />
        </Link>
      </nav>
    </header>
  );
}
