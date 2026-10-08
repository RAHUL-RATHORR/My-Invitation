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
          </motion.div>
        )}
      </main>
    </div>
  );
}
