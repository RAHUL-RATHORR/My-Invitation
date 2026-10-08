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

            <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 relative z-10 pt-12">
              <Heart className="w-8 h-8 text-rose-300 fill-rose-300 mb-6" />
              <h1 className="font-script text-rose-900 text-6xl md:text-7xl mb-6 filter drop-shadow-md leading-tight">
                {data.couple.partner1Name} <br/><span className="text-rose-400 font-sans text-4xl">&</span><br/> {data.couple.partner2Name}
              </h1>
              <p className="text-rose-800/70 max-w-sm mx-auto font-medium italic text-sm mt-4">"{data.couple.story}"</p>
            </section>

            <section className="py-12 px-6 relative z-10 bg-white/30 backdrop-blur-sm">
              <div className="text-center mb-10">
                <h2 className="font-script text-5xl text-rose-800 mb-2">The Details</h2>
                <p className="text-rose-500 uppercase tracking-widest text-[10px] font-bold">Join us to celebrate</p>
              </div>
              
              <div className="flex flex-col gap-6">
                {data.events.map((event: any, idx: number) => (
                  <div key={idx} className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white shadow-[0_10px_40px_rgba(225,29,72,0.05)] text-center">
                    <h3 className="text-2xl font-heading text-rose-900 mb-6">{event.title}</h3>
                    <div className="space-y-4 text-rose-800/80 text-sm">
                      <div className="flex items-center gap-3"><Calendar className="w-4 h-4 text-rose-400" /> {event.date}</div>
                      <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-rose-400" /> {event.time}</div>
                      <div className="flex flex-col items-center gap-2 mt-4 pt-4 border-t border-rose-200"><MapPin className="w-4 h-4 text-rose-400 mb-1" /> <div><p className="font-semibold text-rose-950">{event.venue}</p><p className="text-xs mt-1">{event.address}</p></div></div>
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
