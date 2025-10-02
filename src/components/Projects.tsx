import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Healthy Living Website',
      description: 'A comprehensive health and wellness website featuring tips, recipes, and resources to help users live a healthier lifestyle. Built with modern web technologies.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      githubUrl: 'https://github.com/Purity-Inn/healthy-living-website',
      liveUrl: 'https://purity-inn.github.io/healthy-living-website/',
      featured: true
    },
    {
      title: 'Finance Tracker App',
      description: 'A full-stack personal finance management application with user authentication, expense tracking, and financial insights. Deployed on Firebase.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center',
      technologies: ['React', 'Firebase', 'Authentication', 'Real-time Database'],
      githubUrl: 'https://github.com/Purity-Inn/finance-tracker',
      liveUrl: 'https://financetracker-eed50.web.app',
      featured: true
    },
    {
      title: 'RiseUp AI - Blockchain Chatbot',
      description: 'An innovative AI chatbot running on the Internet Computer blockchain, designed to inspire and educate young minds about decentralized technology and Motoko programming.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center',
      technologies: ['Motoko', 'Internet Computer', 'AI/ML', 'Blockchain'],
      githubUrl: 'https://github.com/Purity-Inn/riseup-ai',
      liveUrl: 'https://tubular-medovik-d38232.netlify.app/',
      featured: true
    },
    {
      title: 'City Weather App',
      description: 'A responsive weather application providing real-time weather information for cities worldwide with an intuitive user interface.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center',
      technologies: ['JavaScript', 'Weather API', 'CSS3', 'HTML5'],
      githubUrl: 'https://github.com/Purity-Inn/City-Weather-App',
      liveUrl: 'https://purity-inn.github.io/City-Weather-App/',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with smooth animations and modern design principles.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/Purity-Inn/purity-portfolio',
      liveUrl: 'https://purity-kerubo-portfolio.vercel.app',
      featured: false
    },
    {
      title: 'E-Learning Platform',
      description: 'An educational platform with course management, student progress tracking, and interactive learning modules.',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop&crop=center',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/Purity-Inn/elearning-platform',
      liveUrl: 'https://elearning-demo.vercel.app',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I love working with
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div key={index} className="glass rounded-xl overflow-hidden group hover:bg-white/10 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-amber-500/15 text-amber-300 rounded-full text-sm border border-amber-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-300"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Other Notable Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div key={index} className="glass p-6 rounded-xl hover:bg-white/15 transition-all duration-300 group">
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-amber-500/15 text-amber-300 rounded text-xs border border-amber-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors duration-300"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and create innovative solutions. 
                Let's discuss your next project!
              </p>
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects