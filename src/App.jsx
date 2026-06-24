import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function App() {
  const projects = [
    { 
      title: "Student Result Management Engine", 
      desc: "Full-stack implementation managing secure data distribution routes for academic record processing.", 
      tags: ["Python", "Flask", "MySQL", "Relational DB"] 
    },
    { 
      title: "Relational Library System", 
      desc: "Object-oriented desktop system designing high-frequency transactional mappings for tracking catalogs.", 
      tags: ["Java", "JDBC", "SQL Database", "OOP"] 
    },
    { 
      title: "Custom Interactive Portfolio", 
      desc: "High-performance interface running explicit canvas components, particle grids, and optimized animation hooks.", 
      tags: ["React", "Framer Motion", "Tailwind CSS", "Vite"] 
    }
  ];

  const skills = ["Python", "Java", "C Language", "MySQL / SQL", "Linux Systems", "Git & GitHub", "React Architecture"];

  return (
    /* FIXED: Added 'relative' class so ambient glows stay securely clipped inside this box */
    <div className="relative min-h-screen bg-[#050508] text-[#eeeef5] font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#050508]/40 border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sm font-mono tracking-widest flex items-center gap-2 cursor-pointer text-cyan-400"
        >
          <Code className="w-4 h-4" /> &lt;SP /&gt;
        </motion.div>
        <div className="flex gap-6 text-xs uppercase tracking-wider font-mono text-gray-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#work" className="hover:text-cyan-400 transition-colors">Work</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-20">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.span variants={fadeInUp} className="text-cyan-400 uppercase tracking-[0.2em] text-xs font-semibold font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Available for internships & collaboration
          </motion.span>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.05]">
            Samir <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Parajuli</span>.
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
            <strong className="text-white font-medium">BIT Student</strong> at MIT Bagbazar, Kathmandu. 
            I build robust software architectures using Python, Java, and Linux execution environments.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
            <a href="#work" className="px-6 py-3 rounded-md bg-cyan-400 text-black font-semibold text-sm tracking-wider hover:bg-cyan-300 transition-all shadow-lg hover:scale-105 duration-300">
              SEE EXPERIMENTS →
            </a>
            <a href="https://github.com/Samirp7" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-md border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-mono text-gray-300 hover:bg-white/10 transition-all duration-300">
              ↗ GITHUB PROFILE
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          /* FIXED: Changed 'md:grid-columns-2' to correct class 'md:grid-cols-2' */
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div className="space-y-6">
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-white">
              01 / Engineering Profile
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 font-light leading-relaxed">
              Managing a rigorous academic track while implementing clean, system-level logic. Following a comprehensive frontend and design internship, I have developed a strong foundational framework for writing structured web solutions, maintaining clean components, and committing sustainable production code.
            </motion.p>
          </div>

          {/* Pseudo Code Terminal Visual */}
          <motion.div variants={fadeInUp} className="bg-[#12121e] border border-white/5 rounded-xl p-5 font-mono text-xs text-gray-400 shadow-2xl">
            <div className="flex gap-1.5 mb-4"><div className="w-2.5 h-2.5 rounded-full bg-red-500/60"/><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"/><div className="w-2.5 h-2.5 rounded-full bg-green-500/60"/></div>
            <p className="text-purple-400">samir@dev:~$ <span className="text-white">cat profile.json</span></p>
            <p className="mt-2 text-gray-500">{"{"}</p>
            <p className="pl-4">"institution": <span className="text-cyan-400">"MIT Bagbazar"</span>,</p>
            <p className="pl-4">"degree": <span className="text-cyan-400">"BIT Undergrad"</span>,</p>
            <p className="pl-4">"philosophy": <span className="text-pink-400">"Clean logic, explicit execution"</span></p>
            <p className="text-gray-500">{"}"}</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight">
            02 / Capabilities
          </motion.h2>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-[#12121e] border border-white/5 rounded-md font-mono text-sm text-gray-300 shadow-md">
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

     {/* Works Section Grid */}
<section id="work" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={staggerContainer}
    className="space-y-12"
  >
    <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight">
      03 / Core Implementations
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div 
          key={index}
          variants={fadeInUp}
          whileHover={{ y: -8 }}
          /* FIXED: Removed the stray 'absolute' class here */
          className="group relative rounded-xl border border-white/5 bg-[#12121e]/40 p-6 flex flex-col justify-between aspect-[4/3] cursor-pointer overflow-hidden transition-all duration-300 hover:border-cyan-500/20"
        >
          <div className="absolute inset-0 bg-cyan-400/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          
          <div className="flex justify-between items-start z-10">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t, idx) => (
                <span key={idx} className="text-[10px] uppercase tracking-wider font-mono bg-white/5 px-2 py-1 rounded border border-white/5 text-cyan-400">
                  {t}
                </span>
              ))}
            </div>
            <a href="https://github.com/Samirp7" target="_blank" rel="noreferrer">
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>

          <div className="z-10 mt-auto">
            <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">{project.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

      {/* Footer / Connect */}
      <footer id="contact" className="border-t border-white/5 bg-black/40 backdrop-blur-md py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-sm font-mono text-gray-400">© 2026 Samir Parajuli. All rights reserved.</p>
            <p className="text-xs text-gray-600 font-mono">MIT Bagbazar • Kathmandu, Nepal</p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/Samirp7" target="_blank" rel="noreferrer" className="p-3 rounded-md bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 transition-all">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/samir-parajuli-078139340/" target="_blank" rel="noreferrer" className="p-3 rounded-md bg-white/5 border border-white/5 hover:bg-white/10 hover:border-purple-500/30 text-gray-400 hover:text-purple-400 transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:samir.115172@mitnepal.edu.np" className="p-3 rounded-md bg-white/5 border border-white/5 hover:bg-white/10 hover:border-pink-500/30 text-gray-400 hover:text-pink-400 transition-all">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}