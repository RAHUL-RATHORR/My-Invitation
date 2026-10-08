"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";

/** Ivory Minimal — editorial, clean ivory + charcoal with thin gold rules */
export default function IvoryMinimal({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#efebe4] flex justify-center font-sans">
      <main className="relative w-full max-w-107.5 min-h-screen bg-[#faf8f4] text-stone-800 shadow-[0_0_60px_rgba(0,0,0,0.06)] sm:border-x border-stone-200 overflow-x-hidden z-10 flex flex-col pb-24">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 z-50 flex items-center justify-center bg-[#faf8f4] cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <div className="absolute inset-6 border border-stone-300"></div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="text-center px-10">
                <p className="text-[10px] tracking-[0.5em] uppercase text-stone-400">The Wedding Of</p>
                <div className="w-10 h-px bg-amber-600/60 mx-auto my-6"></div>
                <h2 className="font-heading text-4xl tracking-wide text-stone-900 leading-snug">
                  {data.couple.partner1Name}<br /><span className="font-script text-3xl text-amber-700">and</span><br />{data.couple.partner2Name}
                </h2>
                <div className="w-10 h-px bg-amber-600/60 mx-auto my-6"></div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-stone-400 animate-pulse">Tap to Open</p>
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
