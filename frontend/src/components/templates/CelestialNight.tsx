"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock, Star } from "lucide-react";
import RSVPForm from "../shared/RSVPForm";

export default function CelestialNight({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative overflow-x-hidden font-sans selection:bg-indigo-500/30">
      
      {/* Starry Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-ping opacity-70"></div>
         <div className="absolute top-40 right-40 w-2 h-2 bg-indigo-300 rounded-full blur-sm opacity-50"></div>
         <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-blue-200 rounded-full animate-pulse"></div>
         <div className="absolute -top-20 -right-20 w-125 h-125 bg-indigo-900/20 blur-[120px] rounded-full"></div>
         <div className="absolute -bottom-20 -left-20 w-150 h-150 bg-blue-900/10 blur-[150px] rounded-full"></div>
      </div>

      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute w-200 h-200 border border-indigo-500/10 rounded-full border-dashed"
            ></motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="z-10 text-center relative"
            >
              <Star className="w-8 h-8 text-indigo-300 mx-auto mb-6 fill-indigo-300 animate-pulse" />
              <div className="text-transparent bg-clip-text bg-linear-to-r from-indigo-200 via-white to-blue-200 font-script text-7xl md:text-9xl mb-8 filter drop-shadow-[0_0_10px_rgba(199,210,254,0.5)]">
                {data.couple.partner1Name} <br/><span className="text-4xl font-sans">&</span><br/> {data.couple.partner2Name}
              </div>
              <button className="px-10 py-3 rounded-full border border-indigo-400/30 text-indigo-200 tracking-widest uppercase text-xs hover:bg-indigo-500/10 transition-all">
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
          className="pb-24 relative z-10"
        >
          <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-indigo-300 text-sm tracking-[0.4em] uppercase mb-8">Written in the Stars</h3>
            <h1 className="font-script text-white text-7xl md:text-9xl mb-6">
              {data.couple.partner1Name} <span className="text-indigo-400 font-sans mx-4">&</span> {data.couple.partner2Name}
            </h1>
            <p className="text-slate-400 max-w-lg mx-auto font-light leading-loose text-lg">"{data.couple.story}"</p>
          </section>

          <section className="py-20 px-4 max-w-5xl mx-auto">
            <h2 className="text-center font-heading text-4xl text-white mb-16 tracking-widest uppercase flex items-center justify-center gap-4">
               <Star className="w-5 h-5 text-indigo-400" />
               The Constellation of Events
               <Star className="w-5 h-5 text-indigo-400" />
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {data.events.map((event: any, idx: number) => (
                <div key={idx} className="bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-indigo-500/20 hover:border-indigo-400/50 transition-colors shadow-[0_0_30px_rgba(99,102,241,0.05)]">
                  <h3 className="text-3xl font-heading text-indigo-200 mb-6">{event.title}</h3>
                  <div className="space-y-4 text-slate-300">
                    <div className="flex items-center gap-4"><Calendar className="w-5 h-5 text-indigo-400" /> {event.date}</div>
                    <div className="flex items-center gap-4"><Clock className="w-5 h-5 text-indigo-400" /> {event.time}</div>
                    <div className="flex items-start gap-4"><MapPin className="w-5 h-5 text-indigo-400 mt-1" /> <div><p className="font-medium text-white">{event.venue}</p><p className="text-sm text-slate-400">{event.address}</p></div></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-20 px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-indigo-500/20 text-slate-900">
                <RSVPForm events={data.events.map((e:any) => e.title)} invitationId={data.slug} />
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </main>
  );
}
