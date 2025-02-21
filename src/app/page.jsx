import { useLanguage } from './providers';
import ContactForm from './components/ContactForm';
import TechIcon from './components/TechIcon';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const { language } = useLanguage();

  const content = {
    en: {
      about: {
        title: 'About Me',
        description: 'A passionate and experienced full stack developer with a strong background in creating robust and scalable web applications. Skilled in both front-end and back-end technologies, with a keen eye for design and user experience.',
      },
      skills: {
        title: 'Skills & Experience',
        technicalSkills: 'Technical Skills',
        workExperience: 'Work Experience',
      },
      projects: {
        title: 'Featured Projects',
        viewProject: 'View Project',
      },
      contact: {
        title: 'Get in Touch',
      },
    },
    es: {
      about: {
        title: 'Sobre Mí',
        description: 'Un desarrollador full stack apasionado y experimentado con una sólida formación en la creación de aplicaciones web robustas y escalables. Hábil en tecnologías tanto de front-end como de back-end, con un ojo agudo para el diseño y la experiencia del usuario.',
      },
      skills: {
        title: 'Habilidades y Experiencia',
        technicalSkills: 'Habilidades Técnicas',
        workExperience: 'Experiencia Laboral',
      },
      projects: {
        title: 'Proyectos Destacados',
        viewProject: 'Ver Proyecto',
      },
      contact: {
        title: 'Ponte en Contacto',
      },
    },
  };

  const skills = [
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Python', icon: 'python' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'MongoDB', icon: 'mongodb' },
  ];

  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of the project, highlighting key features and technologies used.',
      image: '/placeholder.svg?height=200&width=400',
      technologies: ['react', 'nodejs', 'mongodb'],
    },
    {
      title: 'Project 2',
      description: 'Another project description showcasing different technologies and achievements.',
      image: '/placeholder.svg?height=200&width=400',
      technologies: ['nextjs', 'typescript', 'postgresql'],
    },
    {
      title: 'Project 3',
      description: 'A third project highlighting your versatility and range of skills.',
      image: '/placeholder.svg?height=200&width=400',
      technologies: ['python', 'django', 'react'],
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      <motion.section 
        id="about" 
        className="mb-16"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        ref={ref}
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Your Name"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h1 className="text-4xl font-bold mb-4">Your Name</h1>
            <h2 className="text-2xl text-indigo-600 dark:text-indigo-400 mb-4">Full Stack Developer</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {content[language].about.description}
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="skills" 
        className="mb-16"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <h2 className="text-3xl font-bold mb-8">{content[language].skills.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-4">{content[language].skills.technicalSkills}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <motion.div key={skill.name} className="flex items-center space-x-2" variants={fadeInUp}>
                  <TechIcon name={skill.icon} className="w-6 h-6" />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-4">{content[language].skills.workExperience}</h3>
            <div className="space-y-4">
              <motion.div variants={fadeInUp}>
                <h4 className="font-semibold">Senior Full Stack Developer</h4>
                <p className="text-gray-600 dark:text-gray-400">TechCorp Inc. | 2020 - Present</p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h4 className="font-semibold">Full Stack Developer</h4>
                <p className="text-gray-600 dark:text-gray-400">WebSolutions LLC | 2017 - 2020</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        id="projects" 
        className="mb-16"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerChildren}
      >
        <h2 className="text-3xl font-bold mb-8">{content[language].projects.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              variants={fadeInUp}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-2 mb-4">
                  {project.technologies.map((tech) => (
                    <TechIcon key={tech} name={tech} className="w-6 h-6" />
                  ))}
                </div>
                <motion.a
                  href="#"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {content[language].projects.viewProject} →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        id="contact" 
        className="mb-16"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-8">{content[language].contact.title}</h2>
        <ContactForm />
      </motion.section>
    </div>
  );
}