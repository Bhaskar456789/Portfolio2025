import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = {
    github: 'https://github.com/Bhaskar456789',
    linkedin: 'https://www.linkedin.com/in/bhaskar-dasari-4a6520224/',
    email: 'mailto:bhaskard16965@gmail.com'
  };
  const projects = [
    {
      title: 'Car Racing Game',
      description: ' A Simple Car Racing game with live functionality, built using HTML, CSS and Javascript',
      demo: 'https://bhaskar456789.github.io/CarRaceGame/',
    },
    {
      title: 'React Router Project',
      description: 'This is a demonstration project for React Router DOM along with Context API',
      demo: 'https://bhaskar456789.github.io/React_Router_Project/',
    },
    {
      title: 'Facebook Clone',
      description: ' A  similar facebook UI Clone is developed using React JS and Scripting',
      demo: 'https://bhaskar456789.github.io/Facebook-clone/',
    },
  ];

  const skills = ['React','MongoDB', 'Express.js', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'Python', 'Git'];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-maroon-600">JD</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveSection(item.name.toLowerCase())}
                  className={`${
                    activeSection === item.name.toLowerCase()
                      ? 'text-maroon-600'
                      : 'text-gray-600 hover:text-maroon-600'
                  } px-3 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-maroon-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.name.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className={`${
                    activeSection === item.name.toLowerCase()
                      ? 'text-maroon-600'
                      : 'text-gray-600'
                  } block px-3 py-2 text-base font-medium`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-b from-red-50 to-white relative overflow-hidden">
        {/* Circular Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 w-[800px] h-[800px] rounded-full bg-red-100/30 blur-3xl"></div>
          <div className="absolute -left-20 top-1/2 w-[400px] h-[400px] rounded-full bg-red-200/20 blur-2xl"></div>
          <div className="absolute right-1/4 bottom-20 w-[300px] h-[300px] rounded-full bg-red-300/20 blur-xl"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left pl-8">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Hi, I'm</span>
                <span className="block text-[#800000]">Bhaskar Dasari</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
                Full Stack Developer specializing in MERN Stack development. Building interactive and functional web applications.
              </p>
              <div className="mt-5 flex space-x-4">
                <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#800000] hover:bg-[#600000]">
                  Contact Me
                </a>
                <a href="#projects" className="inline-flex items-center px-6 py-3 border border-[#800000] text-base font-medium rounded-md text-[#800000] bg-transparent hover:bg-red-50">
                  View Projects
                </a>
              </div>
              {/* Social Links */}
              <div className="mt-8 flex space-x-6">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#800000] transition-colors">
                  <Github size={24} />
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#800000] transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href={socialLinks.email} className="text-gray-400 hover:text-[#800000] transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-red-100 animate-pulse"></div>
                <img
                  src="src/images/Profile.jpeg"
                  alt="Profile"
                  className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="relative">
              <img
                className="rounded-lg shadow-lg object-cover"
                src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Developer"
              />
            </div>
            <div className="mt-10 lg:mt-0">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Me
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                I'm a passionate MERN Stack Developer with 3+ years of experience in building scalable web applications. 
                I specialize in creating responsive and user-friendly interfaces using modern web technologies.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900">Skills</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-red-100 text-[#800000] rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-500">{project.description}</p>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-[#800000] hover:text-[#600000]"
                  >
                    Live Demo
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
              Get In Touch
            </h2>
            <div className="mt-12">
              <form className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#800000] focus:ring-[#800000]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#800000] focus:ring-[#800000]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#800000] focus:ring-[#800000]"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#800000] hover:bg-[#600000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#800000]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-8 flex justify-center space-x-6">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#800000]">
                <Github size={24} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#800000]">
                <Linkedin size={24} />
              </a>
              <a href={socialLinks.email} className="text-gray-400 hover:text-[#800000]">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;