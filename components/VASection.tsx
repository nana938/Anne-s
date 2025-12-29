
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Mail, 
  Calendar, 
  Plane, 
  Search, 
  Headphones,
  ArrowRight
} from 'lucide-react';
import { VA_SERVICES, TOOLS } from '../constants';

const ICON_MAP: Record<string, any> = {
  Briefcase,
  Mail,
  Calendar,
  Plane,
  Search,
  Headphones
};

const VASection: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24 overflow-hidden">
      {/* Header */}
      <header className="gradient-purple-navy py-32 px-4 text-center text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
           <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-white rounded-full blur-[150px]"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-lg px-5 py-2 rounded-full mb-10 border border-white/20">
            <Briefcase className="w-4 h-4 text-purple-300" />
            <span className="text-sm font-bold tracking-widest uppercase text-purple-100">Executive VA Support</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-10 leading-tight">Elevating Operations for Scaling Businesses.</h1>
          <p className="text-xl text-purple-200/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Dedicated administrative excellence designed to free up your leadership and optimize every facet of your daily workflow.
          </p>
        </motion.div>
      </header>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VA_SERVICES.map((service, index) => {
            const IconComp = ICON_MAP[service.icon];
            return (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group bg-white p-10 rounded-[2.5rem] shadow-xl shadow-purple-900/5 border border-slate-100 hover:border-purple-300 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-8 text-[#6D28D9] group-hover:bg-[#0F172A] group-hover:text-white transition-all duration-500">
                  <IconComp className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#0F172A] mb-5">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-lg font-medium">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Tools Section */}
      <section className="max-w-7xl mx-auto px-4 mt-40">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-6">Tools of the Trade</h2>
          <div className="w-24 h-1.5 bg-[#6D28D9] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-500 font-medium">Leveraging best-in-class software for maximum efficiency.</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {TOOLS.map((tool, index) => (
            <motion.div 
              key={tool.name} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, backgroundColor: '#fdfdfd' }}
              className="flex flex-col items-center p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all cursor-default"
            >
              <span className="text-6xl mb-6">{tool.icon}</span>
              <span className="font-black text-[#0F172A] text-sm uppercase tracking-widest">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 mt-48">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#0F172A] rounded-[4rem] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between text-white overflow-hidden relative shadow-3xl shadow-purple-900/40"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] -mr-40 -mt-40"></div>
          
          <div className="relative z-10 text-center md:text-left mb-12 md:mb-0 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-8">Let's Clear Your Desk.</h2>
            <p className="text-purple-200 text-xl font-medium leading-relaxed">Reclaim your time and focus on scaling your vision while I handle the meticulous details.</p>
          </div>
          
          <Link to="/contact" className="group relative z-10 px-12 py-6 bg-[#6D28D9] hover:bg-[#5b21b6] text-white rounded-[2rem] font-black text-xl transition-all flex items-center shadow-2xl hover:-translate-y-2">
            Start Delegating <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default VASection;