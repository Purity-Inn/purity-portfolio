import { Palette, Server, Smartphone, Globe } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Palette size={40} />,
      title: 'Frontend Development',
      description: 'Creating beautiful, responsive, and interactive user interfaces using modern frameworks like React, Vue.js, and cutting-edge CSS technologies.',
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimization', 'Cross-browser Compatibility']
    },
    {
      icon: <Server size={40} />,
      title: 'Backend Development',
      description: 'Building robust server-side applications, APIs, and databases that power your web applications with security and scalability in mind.',
      features: ['RESTful APIs', 'Database Design', 'Authentication', 'Server Management']
    },
    {
      icon: <Globe size={40} />,
      title: 'Full-Stack Solutions',
      description: 'End-to-end web application development from concept to deployment, handling both frontend and backend development seamlessly.',
      features: ['Complete Web Apps', 'System Architecture', 'Third-party Integrations', 'Deployment & DevOps']
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile applications using React Native and Flutter, bringing your ideas to iOS and Android devices.',
      features: ['Cross-platform Apps', 'Native Performance', 'App Store Deployment', 'Mobile UI/UX']
    }
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Comprehensive development services to bring your digital vision to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                <div className="text-amber-400 mb-6 group-hover:text-yellow-500 transition-colors duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-white/80 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/70">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <a 
                    href="#contact" 
                    className="text-amber-400 hover:text-yellow-500 font-medium transition-colors duration-300 inline-flex items-center"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Let's discuss your ideas and create something amazing together. 
                I'm here to help you turn your vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#contact" className="btn-primary">
                  Start a Project
                </a>
                <a href="#projects" className="btn-secondary">
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services