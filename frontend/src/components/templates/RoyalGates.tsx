"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock, Music, Music2, Heart, Star } from "lucide-react";

export default function RoyalGates({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.log("Auto-play blocked"));
    }
  }, [isOpen]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Scroll animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };
  
  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen w-full bg-[#111] flex justify-center font-sans">
      <main className="relative w-full max-w-107.5 min-h-screen bg-[#140b0b] text-[#f4ecd8] shadow-[0_0_60px_rgba(212,175,55,0.15)] overflow-x-hidden z-10 flex flex-col pb-24">
        
        {/* Background texture & overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none fixed"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#140b0b] via-transparent to-[#140b0b] pointer-events-none fixed z-0"></div>

        {/* Audio Element */}
        <audio ref={audioRef} loop>
          <source src="https://assets.mixkit.co/music/preview/mixkit-wedding-dreams-253.mp3" type="audio/mpeg" />
        </audio>

        <AnimatePresence>
          {!isOpen && (
            <motion.div 
              className="absolute inset-0 z-50 flex items-center justify-center cursor-pointer overflow-hidden bg-[#140b0b]"
              onClick={() => setIsOpen(true)}
            >
              {/* Left Gate */}
              <motion.div 
                initial={{ x: 0 }}
                exit={{ x: "-100%", transition: { duration: 1.8, ease: [0.7, 0, 0.3, 1] } }}
                className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#221313] border-r border-[#d4af37]/40 shadow-[15px_0_40px_rgba(0,0,0,0.6)] flex items-center justify-end overflow-hidden"
              >
                 <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
                 <div className="h-full w-16 border-x border-[#d4af37]/20 flex flex-col justify-center gap-16 py-12 relative z-10">
                   {[1,2,3,4,5,6].map(i => <div key={i} className="w-full h-1.5 bg-[#d4af37]/40"></div>)}
                 </div>
                 {/* Half emblem */}
                 <div className="absolute right-0 translate-x-1/2 w-40 h-64 border-4 border-[#d4af37] rounded-full flex items-center justify-center bg-[#140b0b] z-20 shadow-xl">
                   <div className="w-32 h-56 border-2 border-[#d4af37]/60 rounded-full flex items-center justify-center bg-[#221313]">
                     <span className="text-[#d4af37] font-script text-6xl mr-6">{data.couple.partner1Name[0]}</span>
                   </div>
                 </div>
              </motion.div>

              {/* Right Gate */}
              <motion.div 
                initial={{ x: 0 }}
                exit={{ x: "100%", transition: { duration: 1.8, ease: [0.7, 0, 0.3, 1] } }}
                className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#221313] border-l border-[#d4af37]/40 shadow-[-15px_0_40px_rgba(0,0,0,0.6)] flex items-center justify-start overflow-hidden"
              >
                 <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
                 <div className="h-full w-16 border-x border-[#d4af37]/20 flex flex-col justify-center gap-16 py-12 relative z-10">
                   {[1,2,3,4,5,6].map(i => <div key={i} className="w-full h-1.5 bg-[#d4af37]/40"></div>)}
                 </div>
                 <div className="absolute left-0 -translate-x-1/2 w-40 h-64 border-4 border-[#d4af37] rounded-full flex items-center justify-center pointer-events-none z-20">
                   <div className="w-32 h-56 border-2 border-[#d4af37]/60 rounded-full flex items-center justify-center">
                     <span className="text-[#d4af37] font-script text-6xl ml-6">{data.couple.partner2Name[0]}</span>
                   </div>
                 </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.5, duration: 1.5 }}
                className="absolute bottom-20 text-[#d4af37] flex flex-col items-center z-50 drop-shadow-lg"
              >
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <span className="font-heading tracking-[0.5em] text-xs uppercase bg-[#140b0b]/80 px-6 py-2 rounded-full border border-[#d4af37]/50">Tap to Open</span>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex-1 flex flex-col relative z-10"
          >
            {/* Music Control */}
            <div className="fixed top-6 right-6 sm:right-[calc(50%-180px)] z-50">
              <button onClick={toggleMusic} className={`w-10 h-10 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 flex items-center justify-center backdrop-blur-md text-[#d4af37] transition-all ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}>
                {isPlaying ? <Music className="w-4 h-4" /> : <Music2 className="w-4 h-4 opacity-50" />}
              </button>
            </div>

            {/* Section 1: Intro */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative py-20 overflow-hidden">
              {/* Falling particles/stars */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: "100vh", opacity: [0, 1, 0] }}
                  transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, delay: Math.random() * 5 }}
                  className="absolute w-1 h-1 bg-[#d4af37] rounded-full blur-[1px]"
                  style={{ left: `${Math.random() * 100}%` }}
                />
              ))}

              <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Om_symbol.svg" 
                className="w-16 h-16 mb-12 opacity-80 filter drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]" 
                style={{ filter: 'invert(75%) sepia(54%) saturate(478%) hue-rotate(5deg) brightness(95%) contrast(87%)' }}
                alt="Om" 
              />
              
              <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="font-heading text-[#d4af37] text-xs md:text-sm tracking-[0.4em] uppercase mb-16 leading-loose max-w-sm">
                Together with their families <br/><span className="inline-block mt-4 text-[#f4ecd8]/60 text-[10px]">Invite you to celebrate the wedding of</span>
              </motion.p>
              
              <motion.div variants={scaleUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_70%)] -z-10 blur-xl"></div>
                <h1 className="font-script text-[#f4ecd8] text-7xl md:text-8xl lg:text-9xl my-6 leading-[1.2] drop-shadow-[0_5px_15px_rgba(212,175,55,0.3)]">
                  {data.couple.partner1Name} 
                  <br/>
                  <motion.span 
                    initial={{ rotate: -180, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-[#d4af37] text-5xl md:text-7xl inline-block my-4 font-sans font-light"
                  >
                    &
                  </motion.span>
                  <br/> 
                  {data.couple.partner2Name}
                </h1>
              </motion.div>
              
              <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-[#f4ecd8]/80 text-lg md:text-xl font-light mt-12 italic tracking-wide">
                "{data.couple.story}"
              </motion.p>

              {/* Scroll Down Indicator */}
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
              >
                <span className="text-[#d4af37]/60 text-[9px] uppercase tracking-widest mb-4">Scroll</span>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-px h-16 bg-gradient-to-b from-[#d4af37] to-transparent"></motion.div>
              </motion.div>
            </section>

            {/* Divider */}
            <div className="flex justify-center my-12">
              <img src="/assets/mandala-gold.svg" alt="" className="w-24 h-24 opacity-30" onError={(e) => (e.currentTarget.style.display='none')} />
            </div>

            {/* Events Section */}
            <section className="py-24 px-6 md:px-12 relative min-h-screen">
              <motion.h2 
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-center font-heading text-3xl md:text-4xl text-[#d4af37] mb-24 tracking-[0.3em] uppercase"
              >
                Celebrations
              </motion.h2>
              
              <div className="flex flex-col gap-24 relative">
                {/* Vertical timeline line connecting events */}
                <div className="absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent -translate-x-1/2 z-0"></div>

                {data.events.map((event: any, idx: number) => (
                  <motion.div 
                    key={idx} 
                    variants={idx % 2 === 0 ? fadeUp : scaleUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative z-10 w-full md:w-[85%] mx-auto ${idx % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto'}`}
                  >
                    <div className="bg-gradient-to-br from-[#2a1a1a]/95 to-[#1c1010]/95 backdrop-blur-md p-10 md:p-12 rounded-[2rem] border border-[#d4af37]/30 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                      {/* Top ornate decoration */}
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-px bg-[#d4af37]/50 relative">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#d4af37]"></div>
                        </div>
                      </div>

                      <h3 className="text-3xl md:text-5xl font-script text-[#d4af37] mb-8 drop-shadow-md">{event.title}</h3>
                      
                      <div className="space-y-6 text-[#f4ecd8] flex flex-col items-center">
                        <div className="flex items-center gap-4 text-base md:text-lg font-light tracking-[0.1em] uppercase bg-[#140b0b]/50 px-6 py-2 rounded-full border border-[#d4af37]/20">
                          <Calendar className="w-5 h-5 text-[#d4af37]" /> 
                          {event.date}
                        </div>
                        <div className="flex items-center gap-4 text-sm md:text-base font-light tracking-[0.1em] uppercase">
                          <Clock className="w-5 h-5 text-[#d4af37]" /> 
                          {event.time}
                        </div>
                        <div className="flex flex-col items-center gap-4 mt-8 pt-8 border-t border-[#d4af37]/20 w-full">
                          <MapPin className="w-6 h-6 text-[#d4af37] mb-2" /> 
                          <div className="space-y-2">
                            <p className="font-heading text-[#d4af37] tracking-widest text-lg md:text-xl uppercase">{event.venue}</p>
                            <p className="text-sm md:text-base text-[#f4ecd8]/60 leading-relaxed max-w-sm mx-auto font-light">{event.address}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Footer / Outro */}
            <section className="py-32 px-6 flex flex-col items-center justify-center text-center relative border-t border-[#d4af37]/20 mt-20">
              <motion.div variants={scaleUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Heart className="w-12 h-12 text-[#d4af37] mb-10 mx-auto opacity-80" />
                <h2 className="font-script text-[#f4ecd8] text-5xl md:text-6xl mb-6">Thank You</h2>
                <p className="font-heading text-[#d4af37] tracking-[0.3em] uppercase text-xs md:text-sm leading-loose">We can't wait to celebrate<br/>our special day with you</p>
              </motion.div>
            </section>
          </motion.div>
        )}
      </main>
    </div>
  );
}
