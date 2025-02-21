import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, Mail } from 'lucide-react';
import { useLanguage } from '../providers';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: '#about', en: 'About', es: 'Sobre mí' },
    { href: '#skills', en: 'Skills', es: 'Habilidades' },
    { href: '#projects', en: 'Projects', es: 'Proyectos' },
    { href: '#contact', en: 'Contact', es: 'Contacto' },
  ];

  const menuVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
              Your Name
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 transition-colors duration-200"
                >
                  {language === 'en' ? item.en : item.es}
                </Link>
              ))}
              <a
                href="mailto:your.email@example.com"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-200"
              >
                <Mail className="inline-block w-5 h-5 mr-2" />
                {language === 'en' ? 'Email Me' : 'Envíame un correo'}
              </a>
              <motion.button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2"
                whileTap={{ scale: 0.95 }}
              >
                {language === 'en' ? 'ES' : 'EN'}
              </motion.button>
              <motion.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2"
                whileTap={{ scale: 0.95 }}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
          <div className="md:hidden">
            <motion.button 
              onClick={toggleMenu} 
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 block px-3 py-2"
                  onClick={toggleMenu}
                >
                  {language === 'en' ? item.en : item.es}
                </Link>
              ))}
              <a
                href="mailto:your.email@example.com"
                className="bg-indigo-600 text-white block px-3 py-2 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                <Mail className="inline-block w-5 h-5 mr-2" />
                {language === 'en' ? 'Email Me' : 'Envíame un correo'}
              </a>
              <motion.button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 block px-3 py-2"
                whileTap={{ scale: 0.95 }}
              >
                {language === 'en' ? 'ES' : 'EN'}
              </motion.button>
              <motion.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 block px-3 py-2"
                whileTap={{ scale: 0.95 }}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;