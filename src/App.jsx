import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Sparkles } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function App() {
  const projects = [
    { title: "3D Immersive Concept", desc: "WebGL interactive experience", tags: ["React", "Three.js", "GSAP"] },
    { title: "AI Interface Design", desc: "Futuristic dashboard with fluid motion", tags: ["Vite", "Framer Motion"] },
    { title: "E-Commerce Reimagined", desc: "Micro-interactions and micro-transactions", tags: ["React", "Tailwind"] }
  ];

  return (
    <div className="min-h-screen bg-[#0d0d11] text-[#f4f4f6] font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0d0d11]/40 border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg font-bold tracking-tight flex items-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-5 h-5 text-purple-400" /> CREATIVE.DEV
        </motion.div>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
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
          <motion.span variants={fadeInUp} className="text-purple-400 uppercase tracking-[0.2em] text-xs font-semibold block">
            Available for freelance & contract
          </motion.span>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.05]">
            Crafting <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">Digital</span> <br />
            Experiences.
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 max-w-xl font-light">
            I build highly interactive, motion-driven frontend applications that merge cinematic design with clean engineering code.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
            <a href="#work" className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-all shadow-lg hover:scale-105 duration-300">
              View Work
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm font-medium hover:bg-white/10 transition-all duration-300">
              Let's talk
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Works Section Grid */}
      <section id="work" className="py-32 px-6 max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight border-b border-white/5 pb-4">
            Selected Works
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-6 flex flex-col justify-between aspect-[4/3] cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="flex justify-between items-start z-10">
                  <div className="flex gap-2">
                    {project.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded border border-white/5 text-gray-400">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </div>

                <div className="z-10 mt-auto">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer / Connect */}
      <footer id="contact" className="border-t border-white/5 bg-black/30 backdrop-blur-md py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">© 2026 Creative Dev. Built with React & Motion.</p>
          <div className="flex gap-4">
            <a href="#" className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
