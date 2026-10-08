"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import RSVPForm from "../shared/RSVPForm";

export default function RoyalGates({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-secondary cursor-pointer border-x-20 border-primary/20"
            onClick={() => setIsOpen(true)}
          >
            {/* Ornate Gates Graphic (CSS representation) */}
            <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20">
               <div className="w-1/2 h-full border-r-8 border-primary rounded-tr-full"></div>
               <div className="w-1/2 h-full border-l-8 border-primary rounded-tl-full"></div>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="z-10 text-center bg-secondary/80 backdrop-blur-md p-12 rounded-full border border-primary/30 shadow-[0_0_50px_rgba(201,149,58,0.2)]"
            >
              <h2 className="text-primary font-heading text-xl mb-4 tracking-[0.3em] uppercase">You are invited</h2>
              <div className="text-primary font-script text-6xl md:text-8xl my-6">
                {data.couple.partner1Name} <br/><span className="text-3xl">&</span><br/> {data.couple.partner2Name}
              </div>
              <p className="text-primary/70 text-sm tracking-widest uppercase mt-8 animate-pulse">Tap to Open</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pb-24"
        >
          <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 relative pt-20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10"></div>
            <h3 className="font-heading text-primary text-sm mb-4 tracking-[0.3em] uppercase border-y border-primary/30 py-2 px-8">We are getting married</h3>
            <h1 className="font-script text-foreground text-7xl md:text-9xl my-8">
              {data.couple.partner1Name} <span className="text-primary mx-4">&</span> {data.couple.partner2Name}
            </h1>
            <p className="text-foreground/80 max-w-lg mx-auto font-light italic text-xl">"{data.couple.story}"</p>
          </section>

          <section className="py-20 px-4 max-w-5xl mx-auto">
            <h2 className="text-center font-heading text-4xl text-secondary mb-16 tracking-widest uppercase flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-primary"></span>
              The Celebrations
              <span className="w-12 h-px bg-primary"></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {data.events.map((event: any, idx: number) => (
                <div key={idx} className="glass p-10 rounded-t-full rounded-b-3xl relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-primary/20 text-center">
                  <h3 className="text-3xl font-heading text-secondary mb-6">{event.title}</h3>
                  <div className="space-y-4 text-foreground/80 flex flex-col items-center">
                    <div className="flex flex-col items-center gap-2"><Calendar className="w-5 h-5 text-primary" /> <span>{event.date}</span></div>
                    <div className="flex flex-col items-center gap-2"><Clock className="w-5 h-5 text-primary" /> <span>{event.time}</span></div>
                    <div className="flex flex-col items-center gap-2 mt-4 pt-4 border-t border-primary/20"><MapPin className="w-5 h-5 text-primary" /> <div><p className="font-medium text-foreground">{event.venue}</p><p className="text-sm">{event.address}</p></div></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-20 px-4 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/5 via-background to-background">
            <div className="max-w-3xl mx-auto relative">
               <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <RSVPForm events={data.events.map((e:any) => e.title)} invitationId={data.slug} />
            </div>
          </section>
        </motion.div>
      )}
    </main>
  );
}
