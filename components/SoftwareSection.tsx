
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Github, ExternalLink, Database, Globe, Smartphone, Terminal, ArrowRight } from 'lucide-react';
import { PROJECTS, TECH_STACK } from '../constants';

const SoftwareSection: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-24 overflow-hidden">
      {/* Header */}
      <header className="gradient-purple py-36 px-4 text-center text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-[#0F172A] rounded-full blur-[180px]"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg px-5 py-2 rounded-full mb-10 border border-white/20">
            <Terminal className="w-5 h-5 text-purple-200" />
            <span className="text-sm font-black tracking-widest uppercase text-purple-50">Engineering Excellence</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9]">Building Fast & Robust Digital Systems.</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed font-medium opacity-90">
            Fullstack development with a focus on React, Node.js, and modern architecture that delivers real business value.
          </p>
        </motion.div>
      </header>

      {/* Tech Stack */}
      <section className="max-w-7xl mx-auto px-4 mt-20 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TECH_STACK.map((category, idx) => (
            <motion.div 
              key={category.name} 
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 shadow-sm"
            >
              <div className="flex items-center space-x-5 mb-8 text-[#6D28D9]">
                <div className="p-4 bg-white rounded-2xl shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-black text-[#0F172A]">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span key={item} className="px-5 py-2.5 bg-white text-[#6D28D9] rounded-2xl text-sm font-black border border-slate-100 shadow-sm transition-all hover:border-[#6D28D9] hover:text-[#5b21b6]">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-black text-[#0F172A] mb-6">Production Ready Case Studies</h2>
          <div className="w-32 h-2 bg-[#6D28D9] mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group bg-white rounded-[3.5rem] overflow-hidden shadow-2xl shadow-purple-900/5 border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0F172A]/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-8 backdrop-blur-sm">
                  <a href={project.liveUrl} className="p-5 bg-white rounded-3xl text-[#6D28D9] hover:scale-110 transition-transform shadow-2xl font-black flex items-center gap-2 uppercase tracking-widest text-xs">Demo <ExternalLink size={18}/></a>
                  <a href={project.githubUrl} className="p-5 bg-[#6D28D9] rounded-3xl text-white hover:scale-110 transition-transform shadow-2xl font-black flex items-center gap-2 uppercase tracking-widest text-xs">Code <Github size={18}/></a>
                </div>
              </div>
              
              <div className="p-12 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-4xl font-black text-[#0F172A] mb-6">{project.title}</h3>
                  <p className="text-slate-500 mb-10 leading-relaxed text-lg font-medium">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-12">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-black uppercase tracking-[0.2em] text-[#6D28D9] bg-purple-50 px-4 py-2 rounded-xl">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center space-x-3 text-[#6D28D9] font-black uppercase tracking-widest text-sm hover:translate-x-2 transition-transform"
                  >
                    <span>Launch Project</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="flex items-center space-x-3 text-slate-400 font-bold hover:text-[#0F172A] transition-colors"
                  >
                    <Github className="w-6 h-6" />
                    <span className="text-sm">Source</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section className="mt-48 bg-[#0F172A] py-40 relative overflow-hidden rounded-[5rem] mx-4 lg:mx-8">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
          {[
            { label: 'Yrs Dev Experience', val: '3+' },
            { label: 'Commits Shipped', val: '2.4k' },
            { label: 'Test Coverage', val: '92%' },
            { label: 'Tech Stacks', val: '15+' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-7xl font-black text-white mb-6 leading-none">{stat.val}</div>
              <div className="text-purple-300 font-black uppercase tracking-[0.3em] text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SoftwareSection;