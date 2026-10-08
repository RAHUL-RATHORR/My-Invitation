"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock, Star } from "lucide-react";

export default function RoyalGates({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants
  const gateLeftVariant = {
    initial: { x: 0 },
    exit: { x: "-100%", transition: { duration: 1.5, ease: [0.65, 0, 0.35, 1] } }
  };
  const gateRightVariant = {
    initial: { x: 0 },
    exit: { x: "100%", transition: { duration: 1.5, ease: [0.65, 0, 0.35, 1] } }
  };
  
  const contentVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.3, 
        delayChildren: 1.2 
      } 
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen w-full bg-[#111] flex justify-center font-sans">
      <main className="relative w-full max-w-107.5 min-h-screen bg-[#1c1212] text-[#f4ecd8] shadow-[0_0_60px_rgba(212,175,55,0.1)] overflow-x-hidden z-10 flex flex-col pb-24">
        
        {/* Decorative background pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none"></div>

        <AnimatePresence>
          {!isOpen && (
            <motion.div 
              className="absolute inset-0 z-50 flex items-center justify-center cursor-pointer overflow-hidden"
              onClick={() => setIsOpen(true)}
            >
              {/* Left Gate */}
              <motion.div 
                variants={gateLeftVariant}
                initial="initial"
                exit="exit"
                className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#2a1b1b] border-r border-[#d4af37]/30 shadow-[10px_0_30px_rgba(0,0,0,0.5)] flex items-center justify-end"
              >
                 <div className="h-full w-12 border-x border-[#d4af37]/20 flex flex-col justify-center gap-12 py-12">
                   {[1,2,3,4,5].map(i => <div key={i} className="w-full h-1 bg-[#d4af37]/40"></div>)}
                 </div>
                 {/* Half emblem */}
                 <div className="absolute right-0 translate-x-1/2 w-32 h-48 border-2 border-[#d4af37] rounded-full flex items-center justify-center bg-[#1c1212] z-10">
                   <div className="w-28 h-44 border border-[#d4af37]/50 rounded-full flex items-center justify-center">
                     <span className="text-[#d4af37] font-script text-4xl mr-4">{data.couple.partner1Name[0]}</span>
                   </div>
                 </div>
              </motion.div>

              {/* Right Gate */}
              <motion.div 
                variants={gateRightVariant}
                initial="initial"
                exit="exit"
                className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#2a1b1b] border-l border-[#d4af37]/30 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] flex items-center justify-start"
              >
                 <div className="h-full w-12 border-x border-[#d4af37]/20 flex flex-col justify-center gap-12 py-12">
                   {[1,2,3,4,5].map(i => <div key={i} className="w-full h-1 bg-[#d4af37]/40"></div>)}
                 </div>
                 <div className="absolute left-0 -translate-x-1/2 w-32 h-48 border-2 border-[#d4af37] rounded-full flex items-center justify-center pointer-events-none z-10">
                   <div className="w-28 h-44 border border-[#d4af37]/50 rounded-full flex items-center justify-center">
                     <span className="text-[#d4af37] font-script text-4xl ml-4">{data.couple.partner2Name[0]}</span>
                   </div>
                 </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-16 text-[#d4af37] font-heading tracking-[0.4em] text-[10px] uppercase animate-pulse flex flex-col items-center z-50"
              >
                <span>Tap to Open</span>
                <div className="w-px h-8 bg-gradient-to-b from-[#d4af37] to-transparent mt-3"></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {isOpen && (
          <motion.div 
            variants={contentVariant}
            initial="hidden"
            animate="visible"
            className="flex-1 flex flex-col relative z-10"
          >
            {/* Hero Section */}
            <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 relative pt-16 pb-8">
              <motion.div variants={itemVariant} className="mb-8">
                 <img src="/assets/mandala-gold.svg" alt="" className="w-24 h-24 opacity-60 mx-auto animate-[spin_30s_linear_infinite]" onError={(e) => (e.currentTarget.style.display='none')} />
                 <div className="w-24 h-24 rounded-full border border-[#d4af37]/30 absolute top-0 left-1/2 -translate-x-1/2"></div>
              </motion.div>
              
              <motion.div variants={itemVariant}>
                <h3 className="font-heading text-[#d4af37] text-[11px] mb-8 tracking-[0.4em] uppercase flex items-center justify-center gap-4">
                  <span className="w-12 h-px bg-[#d4af37]/50"></span>
                  Join us to celebrate
                  <span className="w-12 h-px bg-[#d4af37]/50"></span>
                </h3>
              </motion.div>
              
              <motion.div variants={itemVariant}>
                <h1 className="font-script text-[#f4ecd8] text-6xl md:text-7xl my-6 leading-[1.1] text-shadow-sm shadow-[#d4af37]/20">
                  {data.couple.partner1Name} <br/><span className="text-[#d4af37] text-4xl md:text-5xl inline-block my-2">&</span><br/> {data.couple.partner2Name}
                </h1>
              </motion.div>
              
              <motion.div variants={itemVariant}>
                <p className="text-[#f4ecd8]/60 max-w-sm mx-auto font-light text-sm mt-8 leading-relaxed italic">
                  "{data.couple.story}"
                </p>
              </motion.div>
            </section>

            {/* Events Section */}
            <section className="py-20 px-6 relative">
              <motion.div variants={itemVariant}>
                <h2 className="text-center font-heading text-3xl text-[#d4af37] mb-16 tracking-[0.2em] uppercase flex items-center justify-center gap-4">
                  <Star className="w-4 h-4" />
                  Events
                  <Star className="w-4 h-4" />
                </h2>
              </motion.div>
              
              <div className="flex flex-col gap-12 relative">
                {/* Vertical timeline line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4af37]/30 to-transparent -translate-x-1/2 z-0 hidden md:block"></div>

                {data.events.map((event: any, idx: number) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariant}
                    className="bg-[#231717]/80 backdrop-blur-sm p-8 rounded-2xl relative overflow-hidden group shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-[#d4af37]/20 text-center z-10"
                  >
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#d4af37]/50 rounded-tl-xl"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#d4af37]/50 rounded-tr-xl"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#d4af37]/50 rounded-bl-xl"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#d4af37]/50 rounded-br-xl"></div>
                    
                    <h3 className="text-2xl md:text-3xl font-heading text-[#d4af37] mb-6">{event.title}</h3>
                    
                    <div className="space-y-4 text-[#f4ecd8]/80 flex flex-col items-center text-sm md:text-base font-light tracking-wide">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-[#d4af37]" /> 
                        <span className="uppercase tracking-wider">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-[#d4af37]" /> 
                        <span className="uppercase tracking-wider">{event.time}</span>
                      </div>
                      <div className="flex flex-col items-center gap-3 mt-6 pt-6 border-t border-[#d4af37]/20 w-full md:w-2/3">
                        <MapPin className="w-5 h-5 text-[#d4af37] mb-2" /> 
                        <div>
                          <p className="font-medium text-[#f4ecd8] text-lg mb-1">{event.venue}</p>
                          <p className="text-xs md:text-sm text-[#f4ecd8]/50 leading-relaxed max-w-xs">{event.address}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        )}
      </main>
    </div>
  );
}
