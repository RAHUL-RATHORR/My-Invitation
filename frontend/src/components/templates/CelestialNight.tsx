"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock, Star } from "lucide-react";


export default function CelestialNight({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#0a0f1c] flex justify-center font-sans">
      <main className="relative w-full max-w-107.5 min-h-screen bg-slate-950 text-slate-100 shadow-[0_0_60px_rgba(99,102,241,0.15)] sm:border-x border-indigo-500/20 overflow-x-hidden z-10 flex flex-col selection:bg-indigo-500/30 pb-24">
        
        {/* Starry Background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
           <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-ping opacity-70"></div>
           <div className="absolute top-20 right-20 w-2 h-2 bg-indigo-300 rounded-full blur-sm opacity-50"></div>
           <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-blue-200 rounded-full animate-pulse"></div>
           <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-900/20 blur-[80px] rounded-full"></div>
           <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-blue-900/10 blur-[100px] rounded-full"></div>
        </div>

        <AnimatePresence>
          {!isOpen && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 cursor-pointer overflow-hidden"
              onClick={() => setIsOpen(true)}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                className="absolute w-80 h-80 border border-indigo-500/10 rounded-full border-dashed"
              ></motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="z-10 text-center relative w-full px-6"
              >
                <Star className="w-6 h-6 text-indigo-300 mx-auto mb-6 fill-indigo-300 animate-pulse" />
                <div className="text-transparent bg-clip-text bg-linear-to-r from-indigo-200 via-white to-blue-200 font-script text-6xl md:text-7xl mb-8 filter drop-shadow-[0_0_10px_rgba(199,210,254,0.5)] leading-tight">
                  {data.couple.partner1Name} <br/><span className="text-3xl font-sans">&</span><br/> {data.couple.partner2Name}
                </div>
                <button className="px-8 py-3 rounded-full border border-indigo-400/30 text-indigo-200 tracking-widest uppercase text-[10px] hover:bg-indigo-500/10 transition-all">
                  Enter the Stars
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="flex-1 flex flex-col relative z-10"
          >
            <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-12 pb-8">
              <h3 className="text-indigo-300 text-[10px] tracking-[0.4em] uppercase mb-8">Written in the Stars</h3>
              <h1 className="font-script text-white text-6xl md:text-7xl mb-6 leading-tight">
                {data.couple.partner1Name} <br/><span className="text-indigo-400 font-sans text-3xl">&</span><br/> {data.couple.partner2Name}
              </h1>
              <p className="text-slate-400 max-w-sm mx-auto font-light leading-relaxed text-sm mt-4">"{data.couple.story}"</p>
            </section>

            <section className="py-12 px-6">
              <h2 className="text-center font-heading text-2xl text-white mb-10 tracking-widest uppercase flex items-center justify-center gap-3">
                 <Star className="w-4 h-4 text-indigo-400" />
                 Events
                 <Star className="w-4 h-4 text-indigo-400" />
              </h2>
              <div className="flex flex-col gap-6">
                {data.events.map((event: any, idx: number) => (
                  <div key={idx} className="bg-slate-900/50 backdrop-blur-md p-6 rounded-3xl border border-indigo-500/20 hover:border-indigo-400/50 transition-colors shadow-[0_0_30px_rgba(99,102,241,0.05)] text-center">
                    <h3 className="text-2xl font-heading text-indigo-200 mb-6">{event.title}</h3>
                    <div className="space-y-4 text-slate-300 text-sm flex flex-col items-center">
                      <div className="flex items-center gap-3"><Calendar className="w-4 h-4 text-indigo-400" /> {event.date}</div>
                      <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-indigo-400" /> {event.time}</div>
                      <div className="flex flex-col items-center gap-2 mt-4 pt-4 border-t border-indigo-500/20 w-full"><MapPin className="w-4 h-4 text-indigo-400 mb-1" /> <div><p className="font-medium text-white">{event.venue}</p><p className="text-xs text-slate-400 mt-1">{event.address}</p></div></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            
          </motion.div>
        )}
      </main>
    </div>
  );
}
