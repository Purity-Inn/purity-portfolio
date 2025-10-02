import { Code, Database, Globe, Smartphone } from 'lucide-react'

const About = () => {
  const skills = [
    { icon: <Code size={24} />, name: 'Frontend Development', technologies: ['React', 'TypeScript', 'Tailwind CSS'] },
    { icon: <Database size={24} />, name: 'Backend Development', technologies: ['Node.js', 'Python', 'PostgreSQL'] },
    { icon: <Globe size={24} />, name: 'Full-Stack Projects', technologies: ['MERN Stack', 'Next.js', 'API Development'] },
    { icon: <Smartphone size={24} />, name: 'Mobile Development', technologies: ['React Native', 'Flutter', 'iOS/Android'] }
  ]

  return (
    <section id="about" className="py-20 bg-black/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Personal Info */}
            <div className="space-y-6">
              {/* Profile Picture */}
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <img
                    src="/profile.jpg"
                    alt="Purity Kerubo"
                    className="w-48 h-48 rounded-full object-cover border-4 border-amber-400/30 shadow-2xl mx-auto"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-48 h-48 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-4xl font-bold text-black shadow-2xl mx-auto">
                    PK
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mt-4 mb-2">Purity Kerubo</h3>
                <p className="text-amber-400 font-medium">Full-Stack Developer</p>
              </div>
              
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4 text-white">My Journey</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  I'm a dedicated Bachelor's in Software Engineering student at Kirinyaga University with a passion for full-stack development. 
                  My journey began with curiosity about how websites work, and has evolved into a deep 
                  love for creating complete digital solutions.
                </p>
                <p className="text-white/80 leading-relaxed mb-4">
                  I enjoy the challenge of bringing ideas to life through code, from the user interface 
                  down to the database layer. Every project is an opportunity to learn something new 
                  and push the boundaries of what's possible.
                </p>
                <p className="text-white/80 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or mentoring fellow students in their programming journey.
                </p>
              </div>
            </div>

            {/* Right Side - Skills Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="text-amber-400 mt-1">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{skill.name}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skill.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-amber-500/15 text-amber-300 rounded-full text-sm border border-amber-400/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center glass p-6 rounded-xl">
              <div className="text-3xl font-bold text-amber-400 mb-2">15+</div>
              <div className="text-white/70">Projects Completed</div>
            </div>
            <div className="text-center glass p-6 rounded-xl">
              <div className="text-3xl font-bold text-amber-400 mb-2">3+</div>
              <div className="text-white/70">Years Learning</div>
            </div>
            <div className="text-center glass p-6 rounded-xl">
              <div className="text-3xl font-bold text-amber-400 mb-2">10+</div>
              <div className="text-white/70">Technologies</div>
            </div>
            <div className="text-center glass p-6 rounded-xl">
              <div className="text-3xl font-bold text-amber-400 mb-2">100%</div>
              <div className="text-white/70">Commitment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About