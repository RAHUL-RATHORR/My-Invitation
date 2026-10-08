"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock, Heart } from "lucide-react";
import RSVPForm from "../shared/RSVPForm";

export default function FloralWatercolor({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-rose-50 text-rose-950 relative overflow-x-hidden">
      
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-rose-100 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            {/* Soft floral background graphic using radial gradients */}
            <div className="absolute top-0 left-0 w-100 h-100 bg-rose-300/30 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 right-0 w-100 h-100 bg-pink-300/30 rounded-full blur-[80px]"></div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="z-10 text-center bg-white/50 backdrop-blur-xl p-16 rounded-[4rem] border border-white shadow-2xl"
            >
              <h2 className="text-rose-400 font-heading text-sm mb-4 tracking-[0.4em] uppercase">Save The Date</h2>
              <div className="text-rose-900 font-script text-6xl md:text-8xl my-6 filter drop-shadow-sm">
                {data.couple.partner1Name} <span className="text-4xl text-rose-400 font-sans mx-2">&</span> {data.couple.partner2Name}
              </div>
              <p className="text-rose-500 font-medium tracking-widest uppercase text-xs mt-8">Click to Open Invitation</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="pb-24"
        >
          {/* Parallax Floral Elements (Static for now) */}
          <div className="fixed top-0 left-0 w-64 h-64 bg-rose-200/40 rounded-br-full blur-3xl pointer-events-none"></div>
          <div className="fixed bottom-0 right-0 w-80 h-80 bg-pink-200/40 rounded-tl-full blur-3xl pointer-events-none"></div>

          <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
            <Heart className="w-8 h-8 text-rose-300 fill-rose-300 mb-6" />
            <h1 className="font-script text-rose-900 text-7xl md:text-9xl mb-8 filter drop-shadow-md">
              {data.couple.partner1Name} <span className="text-rose-400 font-sans mx-4">&</span> {data.couple.partner2Name}
            </h1>
            <p className="text-rose-800/70 max-w-lg mx-auto font-medium italic text-xl">"{data.couple.story}"</p>
          </section>

          <section className="py-20 px-4 max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-script text-6xl text-rose-800 mb-2">The Details</h2>
              <p className="text-rose-500 uppercase tracking-widest text-xs font-bold">Join us to celebrate</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {data.events.map((event: any, idx: number) => (
                <div key={idx} className="bg-white/60 backdrop-blur-md p-10 rounded-3xl border border-white shadow-[0_10px_40px_rgba(225,29,72,0.05)] hover:-translate-y-1 transition-transform">
                  <h3 className="text-3xl font-heading text-rose-900 mb-6 text-center">{event.title}</h3>
                  <div className="space-y-4 text-rose-800/80">
                    <div className="flex items-center gap-3"><Calendar className="w-5 h-5 text-rose-400" /> {event.date}</div>
                    <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-rose-400" /> {event.time}</div>
                    <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-rose-400 mt-1" /> <div><p className="font-semibold text-rose-950">{event.venue}</p><p className="text-sm">{event.address}</p></div></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-20 px-4 relative z-10">
            <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl rounded-3xl border border-white shadow-[0_20px_50px_rgba(225,29,72,0.1)] p-8">
              <RSVPForm events={data.events.map((e:any) => e.title)} invitationId={data.slug} />
            </div>
          </section>
        </motion.div>
      )}
    </main>
  );
}
