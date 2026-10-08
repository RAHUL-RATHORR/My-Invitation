"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Play } from "lucide-react";
import { WhatsAppIcon, type Design } from "@/data/designs";

/** Template showcase card: two phone mockups (cover + inside) mirroring the real template */
export default function DesignCard({ design, variants }: { design: Design; variants?: Variants }) {
  return (
    <motion.div variants={variants} className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col group hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow duration-500">
      <Link href={`/${design.slug}`} target="_blank" aria-label={`Open ${design.title} preview`} className={`block ${design.stageBg} pt-8 pb-12 px-6 relative h-72 overflow-hidden`}>
        <div className="absolute top-4 left-4 z-30">
          <span className={`px-3 py-1 bg-white border text-[9px] font-bold uppercase rounded-full shadow-xs ${design.tierClass}`}>{design.tier}</span>
        </div>
        <div className="absolute top-4 right-4 z-30">
          <span className={`px-3 py-1 bg-white border text-[9px] font-bold uppercase rounded-full shadow-xs ${design.styleClass}`}>{design.style}</span>
        </div>

        {/* Left Phone - Cover screen */}
        <div className="w-32 h-64 bg-black rounded-3xl border-4 border-slate-800 shadow-xl absolute left-[15%] top-10 -rotate-5 z-10 p-1 group-hover:-rotate-8 group-hover:-translate-x-2 transition-all duration-500">
          <div className="w-12 h-3 bg-black absolute top-2 left-1/2 -translate-x-1/2 rounded-full z-20"></div>
          <div className="w-full h-full rounded-[1.2rem] overflow-hidden relative">{design.cover}</div>
        </div>

        {/* Right Phone - Inside screen */}
        <div className="w-32 h-64 bg-black rounded-3xl border-4 border-slate-800 shadow-2xl absolute right-[15%] top-10 rotate-5 z-20 p-1 group-hover:rotate-8 group-hover:translate-x-2 transition-all duration-500">
          <div className="w-12 h-3 bg-black absolute top-2 left-1/2 -translate-x-1/2 rounded-full z-20"></div>
          <div className="w-full h-full rounded-[1.2rem] overflow-hidden relative">{design.inside}</div>
        </div>
      </Link>

      {/* Content Area */}
      <div className="p-6 bg-white flex-1 flex flex-col group-hover:bg-amber-50/10 transition-colors">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">{design.couple}</p>
        <h3 className="font-heading text-lg font-bold text-slate-900 mb-4 line-clamp-1 group-hover:text-amber-700 transition-colors">{design.title}</h3>

        <div className="flex items-center justify-between mb-5 mt-auto">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-slate-900">{design.price}</span>
            <span className="text-xs text-slate-400 line-through">{design.mrp}</span>
          </div>
          <Link href={`/${design.slug}`} target="_blank" id={`preview-${design.slug}`} className="flex items-center gap-1.5 px-4 py-1.5 border border-primary text-primary rounded-md text-[9px] font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors">
            <Play className="w-2.5 h-2.5" /> Preview
          </Link>
        </div>

        <a href={`https://wa.me/919327374893?text=${encodeURIComponent(`Hi! I want to order the ${design.title} invitation (${design.tier}).`)}`} target="_blank" rel="noopener noreferrer" id={`whatsapp-${design.slug}`} className="w-full py-3 bg-[#25d366] text-white rounded-lg font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-md hover:shadow-lg">
          <WhatsAppIcon />
          Order On Whatsapp
        </a>
      </div>
    </motion.div>
  );
}
