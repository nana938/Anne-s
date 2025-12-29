import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageCircle, Globe, Briefcase, Code } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    service: 'software',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappMessage = `
Name: ${formState.name}
Email: ${formState.email}
Service: ${formState.service}
Message: ${formState.message}
    `;

    const whatsappURL = `https://wa.me/2349130801986?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    // window.open(whatsappURL, '_blank');

    // Submit email via FormSubmit
    e.currentTarget.submit();

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', service: 'software', message: '' });
    }, 4000);
  };

  return (
    <div className="bg-white min-h-screen py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[150px] -mr-96 -mt-96"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-5 py-2.5 bg-[#0F172A] text-white rounded-full font-black text-xs mb-8 uppercase tracking-[0.3em]">
            Get In Touch
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-[#0F172A] mb-8 leading-none">
            Let's Build Synergy.
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Contact me to discuss how my dual-track expertise can provide the
            technical and administrative foundation your vision needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* CONTACT CHANNELS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-200 shadow-sm h-full w-full">
              <h3 className="text-3xl font-black text-[#0F172A] mb-12">
                Contact Channels
              </h3>

              <div className="space-y-12">
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#6D28D9] shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                      Direct Mail
                    </div>
                    <div className="text-base sm:text-lg md:text-xl font-black text-[#0F172A] break-all">
                      annetechsavvyvagmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-purple-500 shadow-sm">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                      LinkedIn
                    </div>
                    <a
                      href="https://www.linkedin.com/in/ann-nana-93b023330"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-black text-[#0F172A] hover:text-purple-600"
                    >
                      Ann Nana
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-500 shadow-sm">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                      Service Zone
                    </div>
                    <div className="text-xl font-black text-[#0F172A]">
                      Global / Remote
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/annetechsavvyva@gmail.com"
              method="POST"
              className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl shadow-purple-950/5 border border-slate-100 relative"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Portfolio Message" />
              <input type="hidden" name="_template" value="table" />

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-white/98 z-50 rounded-[2rem] flex flex-col items-center justify-center text-center p-6 md:p-12 backdrop-blur-md"
                >
                  <div className="w-24 h-24 bg-purple-100 text-[#6D28D9] rounded-3xl flex items-center justify-center mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-4xl font-black text-[#0F172A] mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-lg text-slate-500 font-medium">
                    I’ll get back to you shortly.
                  </p>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-3xl text-lg font-bold"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-3xl text-lg font-bold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <button
                  type="button"
                  onClick={() =>
                    setFormState({ ...formState, service: 'va' })
                  }
                  className={`py-6 rounded-3xl font-black border-2 ${
                    formState.service === 'va'
                      ? 'border-[#6D28D9] bg-purple-50 text-[#6D28D9]'
                      : 'border-slate-100 text-slate-400'
                  }`}
                >
                  <Briefcase className="inline mr-2" /> VA Operations
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setFormState({ ...formState, service: 'software' })
                  }
                  className={`py-6 rounded-3xl font-black border-2 ${
                    formState.service === 'software'
                      ? 'border-[#6D28D9] bg-purple-50 text-[#6D28D9]'
                      : 'border-slate-100 text-slate-400'
                  }`}
                >
                  <Code className="inline mr-2" /> Software Engineering
                </button>
              </div>

              <textarea
                name="message"
                required
                rows={6}
                placeholder="Outline your objectives..."
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-3xl text-lg font-bold mb-10 resize-none"
              />

              <button
                type="submit"
                className="w-full py-8 rounded-3xl bg-[#6D28D9] text-white font-black uppercase tracking-widest text-lg"
              >
                Dispatch Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
