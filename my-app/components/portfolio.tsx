'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Download, Send, Github, Linkedin, Twitter, Code, Server, FileJson, Paintbrush, Globe, Blocks } from 'lucide-react'
import Image from 'next/image'


export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-blue-900 min-h-screen text-gray-800 dark:text-white transition-colors duration-300">
        <nav className="fixed w-full bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 backdrop-blur-sm z-10">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <a href="#" className="text-xl font-bold">Gabriel🚀Felix⚛️</a>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#home" onClick={() => setActiveSection('home')} className={`nav-link ${activeSection === 'home' ? 'text-blue-500' : ''}`}>Inicio</a>
              <a href="#about" onClick={() => setActiveSection('about')} className={`nav-link ${activeSection === 'about' ? 'text-blue-500' : ''}`}>Sobre mí</a>
              <a href="#projects" onClick={() => setActiveSection('projects')} className={`nav-link ${activeSection === 'projects' ? 'text-blue-500' : ''}`}>Proyectos</a>
              <a href="#skills" onClick={() => setActiveSection('skills')} className={`nav-link ${activeSection === 'skills' ? 'text-blue-500' : ''}`}>Habilidades</a>
              <a href="#contact" onClick={() => setActiveSection('contact')} className={`nav-link ${activeSection === 'contact' ? 'text-blue-500' : ''}`}>Contacto</a>
              <a href="#blog" onClick={() => setActiveSection('blog')} className={`nav-link ${activeSection === 'blog' ? 'text-blue-500' : ''}`}>Blog</a>
              <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-800 shadow-lg z-20 p-4"
            >
              <div className="flex justify-end">
                <button onClick={toggleMenu} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col space-y-4 mt-8">
                <a href="#home" onClick={() => { setActiveSection('home'); toggleMenu(); }} className={`nav-link ${activeSection === 'home' ? 'text-blue-500' : ''}`}>Inicio</a>
                <a href="#about" onClick={() => { setActiveSection('about'); toggleMenu(); }} className={`nav-link ${activeSection === 'about' ? 'text-blue-500' : ''}`}>Sobre mí</a>
                <a href="#projects" onClick={() => { setActiveSection('projects'); toggleMenu(); }} className={`nav-link ${activeSection === 'projects' ? 'text-blue-500' : ''}`}>Proyectos</a>
                <a href="#skills" onClick={() => { setActiveSection('skills'); toggleMenu(); }} className={`nav-link ${activeSection === 'skills' ? 'text-blue-500' : ''}`}>Habilidades</a>
                <a href="#contact" onClick={() => { setActiveSection('contact'); toggleMenu(); }} className={`nav-link ${activeSection === 'contact' ? 'text-blue-500' : ''}`}>Contacto</a>
                <button onClick={toggleDarkMode} className="flex items-center space-x-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  <span>{darkMode ? 'Modo claro' : 'Modo oscuro'}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="container mx-auto px-6 pt-20">
          <section id="home" className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 relative"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%5Bremoval.ai%5D_2f421267-1c2e-4409-b275-1d66a51460fd-mi-foto-kfObB4u0aeGSSsfCWDzXd6FRYC9BMg.png"
                  alt="Foto de perfil de Gabriel Felix"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto border-4 border-blue-500 shadow-lg"
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-blue-500 rounded-full p-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <code className="text-white text-xs">&lt;/&gt;</code>
                </motion.div>
              </motion.div>
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold mb-4"
              >
                Front End Developer👨🏾‍💻
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl mb-8"
              >
                Creando experiencias web únicas y atractivas
              </motion.p>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex justify-center space-x-4"
              >
                <a
                  href="#contact"
                  className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  Contáctame
                </a>
                <a
                  href="#projects"
                  className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white px-6 py-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
                >
                  Ver proyectos
                </a>
              </motion.div>
            </div>
          </section>
          <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
  <div className="container mx-auto px-6 lg:px-20">
    <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800 dark:text-white">
      Sobre mí
    </h2>
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-10 md:p-16">
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
        Soy un apasionado Desarrollador de Software, con experiencia en la creación de aplicaciones modernas y responsivas. Mi enfoque se centra en proporcionar soluciones eficientes y escalables utilizando las últimas tecnologías del mercado.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Con una sólida base en React JS, JavaScript, Next.js, CSS3 y Node.js, me esfuerzo por crear experiencias de usuario excepcionales y código limpio y mantenible. Mi objetivo es seguir aprendiendo y creciendo en el campo del desarrollo web, contribuyendo a proyectos innovadores y desafiantes.
      </p>
    </div>
  </div>
</section>


          <section id="projects" className="py-20">
  <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "WEB Fundacion y Ministerio FUMMHOR",
        description: "WEB Fundación y Ministerio FUMMHOR es un sitio web desarrollado para una fundación evangélica, diseñado con WordPress y el constructor visual Elementor. La página presenta información clave sobre la misión y actividades de la fundación, además de permitir la interacción con la comunidad a través de secciones dinámicas y personalizadas. Utilizando PHP para funciones avanzadas, el sitio es completamente responsive y optimizado para una navegación intuitiva y accesible en cualquier dispositivo.",
        tech: ["Wordpress", "Elementor", "PHP"],
        image: "/images/projects/Fummhor.png",
        link: "https://fummhor.com" // Reemplaza con el enlace real
      },
      {
        title: "Clon-Movies",
        description: "Clon-Movies es una aplicación web que permite a los usuarios explorar una amplia variedad de películas. La app está conectada a una API de películas que proporciona información actualizada sobre los últimos estrenos, detalles de cada película, incluyendo sinopsis, calificación, y más. Desarrollada con React.js para una experiencia de usuario dinámica y fluida, y estilizada con Tailwind CSS para un diseño moderno y responsive.",
        tech: ["React.js", "Tailwind CSS"],
        image: "/images/projects/clon.png",
        link: "https://clon-movie.vercel.app/" // Reemplaza con el enlace real
      },
      {
        title: "Andamios Web",
        description: "Andamios del Este es una página web informativa diseñada para proporcionar detalles sobre los servicios y productos de la empresa. Desarrollada en WordPress y utilizando el constructor visual Divi, el sitio ofrece una experiencia intuitiva y visualmente atractiva, permitiendo a los usuarios navegar fácilmente por la información relacionada con alquiler y venta de andamios. El diseño es totalmente responsive, asegurando una visualización óptima en cualquier dispositivo.",
        tech: ["JavascriptES6", "CSS3", "HTML5"],
        image: "/images/projects/Andamios.png",
        link: "https://andamiosdeleste.com.do" // Reemplaza con el enlace real
      },
      {
        title: "API Pokedex",
        description: "API Pokedex es una aplicación web que permite a los usuarios explorar una extensa colección de Pokémon a través de una API dedicada. Desarrollada utilizando JavaScript, CSS3 y HTML5, la aplicación ofrece una interfaz interactiva y responsive que presenta la información detallada de cada Pokémon, como tipo, habilidades y estadísticas. El diseño es ligero y optimizado para garantizar una experiencia de usuario fluida en cualquier dispositivo.",
        tech: ["JavaScript ES6", "CSS3", "HTML5"],
        image: "/images/projects/pokedex.png",
        link: "https://pokedex-tan-nu.vercel.app/" // Reemplaza con el enlace real
      },
      {
        title: "Aplicacion de presupuesto",
        description: "Aplicación de presupuesto es una herramienta web para gestionar y controlar el presupuesto personal. Permite a los usuarios registrar ingresos y gastos, y proporciona gráficos para visualizar el balance financiero. Desarrollada utilizando JavaScript, CSS3 y HTML5, la aplicación está diseñada para ser intuitiva y responsive.",
        tech: ["JavaScript ES6", "CSS3", "HTML5"],
        image: "/images/projects/presupuesto.png",
        link: "https://aplicacion-de-presupuesto.vercel.app/" // Reemplaza con el enlace real
      },
      {
        title: "Clon Testimonios FreeCodeCamp",
        description: "Este proyecto es un clon de la sección de testimonios de FreeCodeCamp, diseñado para replicar su funcionalidad y estética. Desarrollado con React JS, CSS3 y HTML5, el sitio recrea de manera precisa la presentación visual y el comportamiento interactivo de los testimonios. Es totalmente responsive, lo que garantiza una visualización óptima en cualquier dispositivo, y ofrece una experiencia de usuario fluida y atractiva.",
        tech: ["React JS", "CSS3", "HTML5"],
        image: "/images/projects/testimonios.png",
        link: "https://testimonios-freecodecamp-lemon.vercel.app/"
      }
    ].map((project, index) => (
      <motion.div
        key={index}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={project.image}
          alt={`Imagen del proyecto ${project.title}`}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, techIndex) => (
              <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
             target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition duration-300"
          >
            Ver más →
          </a>
        </div>
      </motion.div>
    ))}
  </div>
</section>



          <section id="skills" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Habilidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { skill: 'React JS', level: 90, icon: Code, color: '#61DAFB' },
                { skill: 'JavaScript', level: 85, icon: FileJson, color: '#F7DF1E' },
                { skill: 'CSS3', level: 80, icon: Paintbrush, color: '#1572B6' },
                { skill: 'Node.js', level: 75, icon: Server, color: '#339933' },
                { skill: 'Next.js', level: 70, icon: Globe, color: '#000000' },
                { skill: 'HTML5', level: 95, icon: Blocks, color: '#E34F26' }
              ].map((item, index) => (
                <div key={item.skill} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <item.icon className="w-8 h-8 mr-3" style={{ color: item.color }} />
                    <h3 className="text-xl font-bold">{item.skill}</h3>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <motion.div
                      className="h-2.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    ></motion.div>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">{item.level}%</span>
                </div>
              ))}
            </div>
          </section>

          <section id="blog" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {[
              {
                title: "Mejorando el rendimiento de React",
                description: "En este artículo te enseño técnicas para optimizar el rendimiento de tus aplicaciones React.",
                link: "https://es.legacy.reactjs.org/docs/optimizing-performance.html"
              },
              {
                title: "Integración de APIs con Next.js",
                description: "Aprende a integrar APIs de manera eficiente en tus proyectos de Next.js.",
                link: "https://nextjs.org/docs/pages/building-your-application/routing/api-routes"
              },
              {
                title: "Guía de estilos con Tailwind CSS",
                description: "Descubre cómo usar Tailwind CSS para crear interfaces modernas de forma rápida.",
                link: "https://www.freecodecamp.org/espanol/news/que-es-tailwind-css-guia-para-principiantes/"
              }
            ].map((blog, index) => (
              <motion.div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.description}</p>
                <a href={blog.link} className="text-blue-500 hover:text-blue-600 transition duration-300">
                  Leer más →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </section>

          <section id="cv" className="py-20 text-center">
            <motion.a
              href="/CV.pdf"
              download
              className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Download className="mr-2" />
              Descargar CV
            </motion.a>
          </section>  

          <form 
  action="https://formspree.io/f/meojwdll" // Reemplaza con tu URL de Formspree
  method="POST"
  className="max-w-lg mx-auto"
>
  <div className="mb-4">
    <label htmlFor="name" className="block text-sm font-medium mb-2">
      Nombre
    </label>
    <input
      type="text"
      id="name"
      name="name"
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
      required
    />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-sm font-medium mb-2">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
      required
    />
  </div>
  <div className="mb-4">
    <label htmlFor="message" className="block text-sm font-medium mb-2">
      Mensaje
    </label>
    <textarea
      id="message"
      name="message"
      rows={4}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
      required
    ></textarea>
  </div>
  <motion.button
    type="submit"
    className="w-full bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 flex items-center justify-center"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Send className="mr-2" />
    Enviar mensaje
  </motion.button>
</form>

          
        </main>

        <footer className="bg-white dark:bg-gray-800 py-6 mt-20">
          <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center space-x-4 mb-4">
              <a href="https://github.com/gfelix01" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/arturo-felix/" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.threads.net/@arturo01.js" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Gabriel Felix ❤️‍🔥.Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}