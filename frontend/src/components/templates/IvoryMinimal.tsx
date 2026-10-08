"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import RSVPForm from "../shared/RSVPForm";

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
            <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-8 pt-12 pb-8">
              <p className="text-[10px] tracking-[0.5em] uppercase text-stone-400 mb-8">Save the Date</p>
              <h1 className="font-heading text-5xl text-stone-900 leading-tight">
                {data.couple.partner1Name}
                <span className="block font-script text-4xl text-amber-700 my-2">&amp;</span>
                {data.couple.partner2Name}
              </h1>
              <div className="w-16 h-px bg-stone-300 my-8"></div>
              <p className="text-stone-500 max-w-xs mx-auto text-sm leading-relaxed">{data.couple.story}</p>
            </section>

            <section className="py-12 px-8">
              <h2 className="text-center text-[11px] tracking-[0.5em] uppercase text-stone-500 mb-10">Schedule</h2>
              <div className="flex flex-col divide-y divide-stone-200 border-y border-stone-200">
                {data.events.map((event: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="py-8"
                  >
                    <h3 className="font-heading text-3xl text-stone-900 mb-4">{event.title}</h3>
                    <div className="space-y-2 text-sm text-stone-600">
                      <div className="flex items-center gap-3"><Calendar className="w-4 h-4 text-amber-700" /> {event.date}</div>
                      <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-amber-700" /> {event.time}</div>
                      <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-amber-700 mt-0.5" /> <span><span className="text-stone-900 font-medium">{event.venue}</span><br /><span className="text-xs">{event.address}</span></span></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="py-12 px-6">
              <RSVPForm events={data.events.map((e: any) => e.title)} invitationId={data.slug} />
            </section>
          </motion.div>
        )}
      </main>
    </div>
  );
}
