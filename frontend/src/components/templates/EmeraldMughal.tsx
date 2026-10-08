"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";


/** Emerald Mughal — deep emerald + antique gold, Mughal arch motifs */
export default function EmeraldMughal({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#04140f] flex justify-center font-sans">
      <main className="relative w-full max-w-107.5 min-h-screen bg-[#062a1f] text-emerald-50 shadow-[0_0_60px_rgba(16,185,129,0.15)] sm:border-x border-amber-400/20 overflow-x-hidden z-10 flex flex-col pb-24">
        {/* Jaali pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[radial-gradient(circle,#fbbf24_1px,transparent_1px)] bg-size-[18px_18px]"></div>

        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.15 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="absolute inset-0 z-50 flex items-center justify-center bg-[#062a1f] cursor-pointer overflow-hidden"
              onClick={() => setIsOpen(true)}
            >
              {/* Mughal arch */}
              <div className="absolute inset-x-8 top-16 bottom-16 border-2 border-amber-400/40 rounded-t-[50%]"></div>
              <div className="absolute inset-x-12 top-24 bottom-20 border border-amber-400/20 rounded-t-[50%]"></div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="z-10 text-center px-10"
              >
                <p className="text-amber-300/80 text-[10px] tracking-[0.4em] uppercase mb-6">Shubh Vivah</p>
                <div className="font-script text-6xl leading-tight text-transparent bg-clip-text bg-linear-to-b from-amber-200 to-amber-500 drop-shadow-[0_0_12px_rgba(251,191,36,0.3)]">
                  {data.couple.partner1Name}<br /><span className="text-3xl">&amp;</span><br />{data.couple.partner2Name}
                </div>
                <p className="text-amber-200/60 text-[10px] tracking-widest uppercase mt-8 animate-pulse">Tap to Open</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} className="flex-1 flex flex-col relative z-10">
            <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-12 pb-8 relative">
              <div className="absolute inset-x-6 top-10 bottom-4 border border-amber-400/25 rounded-t-[50%] pointer-events-none"></div>
              <p className="text-amber-300 text-[10px] tracking-[0.35em] uppercase mb-6">Together with their families</p>
              <h1 className="font-script text-6xl leading-tight text-amber-100">
                {data.couple.partner1Name}<br /><span className="text-amber-400 text-4xl">&amp;</span><br />{data.couple.partner2Name}
              </h1>
              <p className="text-emerald-100/70 max-w-xs mx-auto italic text-sm mt-6">"{data.couple.story}"</p>
            </section>

            <section className="py-12 px-6">
              <h2 className="text-center font-heading text-2xl text-amber-300 mb-10 tracking-widest uppercase">Celebrations</h2>
              <div className="flex flex-col gap-6">
                {data.events.map((event: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: idx * 0.1 }}
                    className="bg-emerald-950/60 backdrop-blur p-8 rounded-t-[5rem] rounded-b-2xl border border-amber-400/30 text-center"
                  >
                    <h3 className="text-2xl font-heading text-amber-200 mb-6">{event.title}</h3>
                    <div className="space-y-3 text-emerald-50/80 flex flex-col items-center text-sm">
                      <div className="flex items-center gap-3"><Calendar className="w-4 h-4 text-amber-400" /> {event.date}</div>
                      <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-amber-400" /> {event.time}</div>
                      <div className="flex flex-col items-center gap-1 mt-4 pt-4 border-t border-amber-400/20 w-full">
                        <MapPin className="w-4 h-4 text-amber-400 mb-1" />
                        <p className="font-medium text-amber-50">{event.venue}</p>
                        <p className="text-xs opacity-70">{event.address}</p>
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
