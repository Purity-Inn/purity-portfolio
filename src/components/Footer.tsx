import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/30 pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Purity Kerubo
              </div>
              <p className="text-white/70 leading-relaxed">
                Full-Stack Developer passionate about creating innovative web solutions 
                that make a difference. Always ready for new challenges and opportunities.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Purity-Inn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-amber-500/20 transition-all duration-300"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/purity-kerubo-b48851311/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-amber-500/20 transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:kpurity984@gmail.com"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-amber-500/20 transition-all duration-300"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-white/70 hover:text-white transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white/70 hover:text-white transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-white transition-colors duration-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-white/70 hover:text-white transition-colors duration-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-lg">Services</h4>
              <ul className="space-y-2 text-white/70">
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Full-Stack Solutions</li>
                <li>Mobile Development</li>
                <li>Technical Consulting</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-white/70">
                <span>© {currentYear} Purity Kerubo. Made with</span>
                <Heart size={16} className="text-red-400" />
                <span>and lots of coffee ☕</span>
              </div>
              <div className="flex items-center space-x-6 text-sm text-white/70">
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center mt-8">
            <a
              href="#home"
              className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/20 rounded-full text-amber-400 hover:bg-amber-500/30 hover:text-amber-300 transition-all duration-300"
            >
              ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer