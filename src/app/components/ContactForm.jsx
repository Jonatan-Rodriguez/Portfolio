import { useState } from 'react';
import { useLanguage } from '../providers';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const content = {
    en: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
    },
    es: {
      name: 'Nombre',
      email: 'Correo electrónico',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="max-w-lg mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
          {content[language].name}
        </label>
        <motion.input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
          whileFocus={{ scale: 1.02 }}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
          {content[language].email}
        </label>
        <motion.input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
          whileFocus={{ scale: 1.02 }}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
          {content[language].message}
        </label>
        <motion.textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
          whileFocus={{ scale: 1.02 }}
        ></motion.textarea>
      </div>
      <motion.button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content[language].send}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;