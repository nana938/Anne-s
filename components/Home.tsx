
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Code, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center bg-white overflow-hidden px-4 sm:px-8 py-12 lg:py-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, 50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-10 left-10 w-[500px] h-[500px] bg-purple-300 rounded-full blur-[100px]"
          ></motion.div>
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, -50, 0]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-slate-400 rounded-full blur-[120px]"
          ></motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-full text-[#6D28D9] font-bold text-xs uppercase tracking-widest mb-8 border border-purple-100">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Accepting New Clients</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black tracking-tight text-[#0F172A] mb-8 leading-[1.1]">
              Anne <br /><span className="text-[#6D28D9]">Nana</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed max-w-xl">
              <span className="font-bold text-[#0F172A] underline decoration-purple-200 decoration-4">Virtual Assistant</span> & <span className="font-bold text-[#0F172A] underline decoration-purple-200 decoration-4">Software Engineer</span>. 
              Bridging the gap between operational excellence and technical innovation.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
              <Link to="/VA" className="group flex items-center justify-center px-10 py-5 bg-[#6D28D9] text-white rounded-2xl font-black text-lg shadow-2xl shadow-purple-900/30 hover:bg-[#5b21b6] transition-all hover:-translate-y-1">
              <Briefcase className=""/>
                Hire Me as a VA
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/software" className="group flex items-center justify-center px-10 py-5 bg-slate-50 text-[#0F172A] border-2 border-slate-200 rounded-2xl font-black text-lg hover:border-[#0F172A] hover:bg-white transition-all hover:-translate-y-1">
                View My Code
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Image Space */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Backglow */}
              <div className="absolute inset-0 bg-purple-50 rounded-[4rem] rotate-3 scale-105 opacity-50"></div>
              
              {/* Image Frame */}
              <motion.div 
                whileHover={{ rotate: 0 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full rounded-[4rem] overflow-hidden shadow-2xl bg-slate-100 -rotate-3 border-4 border-white"
              >
                <img 
                  src="/Images/Anne.png"
                  alt="Anne Nana" 
                  className="w-full h-full object-cover transition-transform duration-700 grayscale hover:grayscale-110"
                />
              </motion.div>
              
              {/* Info Badges */}
              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center space-x-4 z-20"
              >
                <div className="w-14 h-14 bg-[#0F172A] rounded-2xl flex items-center justify-center text-white text-2xl font-black">A</div>
                <div>
                  <div className="font-black text-[#0F172A] text-lg">Anne Nana</div>
                  <div className="text-slate-400 font-bold text-sm uppercase tracking-widest">Tech Architect & Admin Pro</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute top-10 -right-10 bg-[#6D28D9] p-4 rounded-2xl shadow-xl z-20 text-white flex items-center space-x-3"
              >
                <Code className="w-6 h-6" />
                <span className="font-bold">Fullstack Ready</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Quote */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-32 bg-slate-50 border-y border-slate-200"
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block mb-10 text-[#6D28D9] opacity-20">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.899 14.899 16 16.017 16H19.017V14H15.017C13.359 14 12.017 12.658 12.017 11V7C12.017 5.342 13.359 4 15.017 4H19.017C20.675 4 22.017 5.342 22.017 7V16.718C22.017 19.083 20.1 21 17.735 21H14.017ZM2.017 21L2.017 18C2.017 16.899 2.899 16 4.017 16H7.017V14H3.017C1.359 14 0.017 12.658 0.017 11V7C0.017 5.342 1.359 4 3.017 4H7.017C8.675 4 10.017 5.342 10.017 7V16.718C10.017 19.083 8.1 21 5.735 21H2.017Z"/></svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-10 leading-snug">
            "I transform business complexity into streamlined <span className="text-[#6D28D9]">operational systems</span> and high-impact <span className="text-[#6D28D9]">digital products</span>."
          </h2>
          <div className="flex flex-col items-center">
             <div className="w-16 h-1 bg-[#6D28D9] rounded-full mb-6"></div>
             <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-sm">Anne Nana</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;