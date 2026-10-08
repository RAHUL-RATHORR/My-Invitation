"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock, Sun } from "lucide-react";

/** Haldi Sunshine — marigold yellow + orange, festive and joyful */
export default function HaldiSunshine({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#fff4d6] flex justify-center font-sans">
      <main className="relative w-full max-w-107.5 min-h-screen bg-[#fffaf0] text-orange-950 shadow-[0_0_60px_rgba(245,158,11,0.2)] sm:border-x border-amber-300 overflow-x-hidden z-10 flex flex-col pb-24">
        {/* Marigold toran */}
        <div className="absolute top-0 inset-x-0 flex justify-between px-1 z-20 pointer-events-none">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-px h-6 bg-green-700/60"></div>
              <div className={`w-4 h-4 rounded-full ${i % 2 ? "bg-orange-500" : "bg-amber-400"} shadow-sm`}></div>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 z-40 flex items-center justify-center bg-linear-to-b from-amber-300 via-amber-200 to-orange-200 cursor-pointer overflow-hidden"
              onClick={() => setIsOpen(true)}
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute w-130 h-130 rounded-full bg-[repeating-conic-gradient(rgba(255,255,255,0.25)_0deg_10deg,transparent_10deg_20deg)]"></motion.div>
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, type: "spring" }} className="relative z-10 text-center bg-white/70 backdrop-blur-md rounded-full w-72 h-72 flex flex-col items-center justify-center border-4 border-orange-400 shadow-2xl">
                <Sun className="w-7 h-7 text-orange-500 mb-2" />
                <p className="text-[10px] tracking-[0.3em] uppercase text-orange-700">Haldi &amp; Wedding</p>
                <div className="font-script text-5xl text-orange-900 leading-tight my-2">
                  {data.couple.partner1Name}<br /><span className="text-2xl">&amp;</span> {data.couple.partner2Name}
                </div>
                <p className="text-[10px] tracking-widest uppercase text-orange-600 animate-pulse">Tap to Open</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className="flex-1 flex flex-col">
          </motion.div>
        )}
      </main>
    </div>
  );
}
