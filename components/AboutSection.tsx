
import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Code, Star, Heart, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24 overflow-hidden">
      <section className="max-w-7xl mx-auto px-4 py-32">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-[#6D28D9] rounded-[4.5rem] transform rotate-6 scale-105 opacity-10"></div>
              <div className="absolute -inset-4 border-2 border-[#0F172A]/10 rounded-[4.5rem] -rotate-3"></div>
              
              <motion.div
                whileHover={{ rotate: 0 }}
                className="relative z-10 w-full aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl rotate-2 border-8 border-white cursor-pointer"
              >
              <img
                src="public/Images/Anne.png"
                alt="Anne Nana"
                fill
                priority
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />

              </motion.div>
              
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl z-20 border border-slate-100">
                <div className="text-4xl font-black text-[#6D28D9] mb-2">3+</div>
                <div className="text-slate-400 font-bold uppercase tracking-widest text-xs">Years of Impact</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-5 py-2.5 bg-purple-100 text-[#6D28D9] rounded-full font-black text-xs mb-10 uppercase tracking-[0.3em]">Biography</div>
            <h1 className="text-5xl md:text-7xl font-black text-[#0F172A] mb-10 leading-[1.1]">Merging Precision with Innovation.</h1>
            
            <div className="space-y-8 text-slate-500 text-xl leading-relaxed font-medium">
              <p>
                My professional ethos is simple: <span className="text-[#6D28D9] font-bold">Absolute efficiency.</span> I started my journey as a Virtual Assistant, refining the critical skills needed to manage complex high-stakes environments for top-tier executives.
              </p>
              <p>
                My passion for structural logic naturally led me to <span className="text-[#6D28D9] font-bold underline decoration-purple-200 decoration-8 underline-offset-4">Software Engineering</span>. Now, I use code as a medium to build the same systems that I once managed manually—creating scalable solutions for the digital age.
              </p>
              <p>
                I thrive in the intersection of <span className="italic">ops</span> and <span className="italic">dev</span>. I don't just build features; I architect workflows that drive measurable business outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
              <motion.div 
                whileHover={{ y: -8 }}
                className="flex items-start space-x-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm"
              >
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-[#6D28D9] shrink-0">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black text-[#0F172A] text-xl mb-2">Excellence</h4>
                  <p className="text-slate-400 leading-relaxed font-bold text-sm">Zero-compromise delivery on every project.</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -8 }}
                className="flex items-start space-x-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm"
              >
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                  <Heart className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black text-[#0F172A] text-xl mb-2">Commitment</h4>
                  <p className="text-slate-400 leading-relaxed font-bold text-sm">Long-term thinking for sustainable growth.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Identity Banner */}
      <section className="bg-[#0F172A] text-white py-40 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black mb-6">The Anne Nana Edge</h2>
            <div className="w-32 h-2 bg-[#6D28D9] rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { 
                icon: <Briefcase />, 
                title: "Biz-Minded Dev", 
                desc: "I build with ROI in mind. Every line of code I write serves a clear operational or strategic purpose for your business." 
              },
              { 
                icon: <Code />, 
                title: "Architectural VA", 
                desc: "My VA work is backed by developer-level logic. I don't just organize tasks; I build resilient administrative infrastructures." 
              },
              { 
                icon: <User />, 
                title: "Bilingual Leader", 
                desc: "I bridge the communication gap between technical teams and business owners, ensuring total alignment on every deliverable." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="text-center group"
              >
                <div className="w-24 h-24 bg-white/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-white group-hover:bg-white group-hover:text-[#6D28D9] transition-all duration-500 shadow-xl backdrop-blur-sm">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-10 h-10" })}
                </div>
                <h3 className="text-3xl font-black mb-6">{item.title}</h3>
                <p className="text-purple-100/70 text-lg leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;