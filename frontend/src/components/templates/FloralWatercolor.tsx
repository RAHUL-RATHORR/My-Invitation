"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock, Heart } from "lucide-react";

export default function FloralWatercolor({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#fdf8f3] flex justify-center font-sans">
      <main className="relative w-full max-w-107.5 min-h-screen bg-rose-50 text-rose-950 shadow-[0_0_60px_rgba(225,29,72,0.1)] sm:border-x border-rose-200 overflow-x-hidden z-10 flex flex-col pb-24">
        
        <AnimatePresence>
          {!isOpen && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-rose-100 cursor-pointer overflow-hidden"
              onClick={() => setIsOpen(true)}
            >
              {/* Soft floral background graphic using radial gradients */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-rose-300/30 rounded-full blur-[80px]"></div>
              <div className="absolute bottom-0 right-0 w-full h-1/2 bg-pink-300/30 rounded-full blur-[80px]"></div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="z-10 text-center bg-white/50 backdrop-blur-xl p-10 w-4/5 rounded-[3rem] border border-white shadow-2xl"
              >
                <h2 className="text-rose-400 font-heading text-[10px] mb-4 tracking-[0.4em] uppercase">Save The Date</h2>
                <div className="text-rose-900 font-script text-5xl md:text-6xl my-4 filter drop-shadow-sm leading-tight">
                  {data.couple.partner1Name} <br/><span className="text-2xl text-rose-400 font-sans">&</span><br/> {data.couple.partner2Name}
                </div>
                <p className="text-rose-500 font-medium tracking-widest uppercase text-[10px] mt-6">Tap to Open</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="flex-1 flex flex-col relative"
          >
            {/* Parallax Floral Elements (Static for now) */}
            <div className="absolute top-0 left-0 w-full h-64 bg-rose-200/40 rounded-br-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-full h-64 bg-pink-200/40 rounded-tl-full blur-3xl pointer-events-none"></div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
