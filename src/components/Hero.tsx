import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">PK</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-white">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Purity Kerubo
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-white/80 font-light mb-4">
            Full-Stack Developer
          </h2>

          {/* Description */}
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Bachelor's in Software Engineering student at Kirinyaga University, passionate about creating 
            innovative web solutions. I build end-to-end applications with modern technologies and clean, efficient code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Purity-Inn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/purity-kerubo-b48851311/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:kpurity984@gmail.com"
              className="text-white/60 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a href="#about" className="inline-block text-white/60 hover:text-white transition-colors duration-300">
              <ArrowDown size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  )
}

export default Hero