"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";

export default function RoyalGates({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#fdf8f3] flex justify-center font-sans">
      <main className="relative w-full max-w-107.5 min-h-screen bg-background shadow-[0_0_60px_rgba(201,149,58,0.15)] sm:border-x border-primary/20 overflow-x-hidden z-10 flex flex-col pb-24">
        <AnimatePresence>
          {!isOpen && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-secondary cursor-pointer border-x-8 border-primary/20 overflow-hidden"
              onClick={() => setIsOpen(true)}
            >
              {/* Ornate Gates Graphic (CSS representation) */}
              <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20">
                 <div className="w-1/2 h-full border-r-4 border-primary rounded-tr-full"></div>
                 <div className="w-1/2 h-full border-l-4 border-primary rounded-tl-full"></div>
              </div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="z-10 text-center bg-secondary/80 backdrop-blur-md p-8 w-4/5 rounded-4xl border border-primary/30 shadow-[0_0_50px_rgba(201,149,58,0.2)]"
              >
                <h2 className="text-primary font-heading text-sm mb-4 tracking-[0.3em] uppercase">You are invited</h2>
                <div className="text-primary font-script text-5xl md:text-6xl my-4 leading-tight">
                  {data.couple.partner1Name} <br/><span className="text-2xl">&</span><br/> {data.couple.partner2Name}
                </div>
                <p className="text-primary/70 text-[10px] tracking-widest uppercase mt-6 animate-pulse">Tap to Open</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex-1 flex flex-col"
          >
          </motion.div>
        )}
      </main>
    </div>
  );
}
