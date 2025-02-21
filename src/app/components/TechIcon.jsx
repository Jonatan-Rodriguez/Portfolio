import { 
    SiJavascript, 
    SiTypescript, 
    SiReact, 
    SiNextdotjs, 
    SiNodedotjs, 
    SiPython, 
    SiPostgresql, 
    SiMongodb,
    SiDjango
  } from 'react-icons/si';
  import { motion } from 'framer-motion';
  
  const iconMap = {
    javascript: SiJavascript,
    typescript: SiTypescript,
    react: SiReact,
    nextjs: SiNextdotjs,
    nodejs: SiNodedotjs,
    python: SiPython,
    postgresql: SiPostgresql,
    mongodb: SiMongodb,
    django: SiDjango,
  };
  
  const TechIcon = ({ name, className }) => {
    const Icon = iconMap[name.toLowerCase()];
  
    if (!Icon) {
      return null;
    }
  
    return (
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon className={className} />
      </motion.div>
    );
  };
  
  export default TechIcon;