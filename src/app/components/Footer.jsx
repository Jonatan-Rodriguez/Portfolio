import { Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../providers';
import { motion } from 'framer-motion';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <motion.a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
        </div>
        <div className="mt-4 text-center text-sm">
          © {new Date().getFullYear()} Your Name. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
        </div>
      </div>
    </footer>
  );
};

export default Footer;