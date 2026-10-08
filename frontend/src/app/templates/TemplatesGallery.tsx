"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import DesignCard from "@/components/shared/DesignCard";
import { DESIGNS } from "@/data/designs";

const TIERS = ["All", "Silver Tier", "Gold Tier", "Platinum Tier"];

export default function TemplatesGallery() {
  const styles = useMemo(() => ["All", ...Array.from(new Set(DESIGNS.map((d) => d.style)))], []);
  const [style, setStyle] = useState("All");
  const [tier, setTier] = useState("All");

  const filtered = DESIGNS.filter((d) => (style === "All" || d.style === style) && (tier === "All" || d.tier === tier));

  return (
    <div className="min-h-screen bg-[#fdf8f3] text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 h-20 bg-[#fdf8f3]/85 backdrop-blur-xl border-b border-border flex items-center justify-between px-6 md:px-16">
        <Link href="/" id="templates-back-home" className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" /> Home
        </Link>
        <Link href="/" className="text-2xl font-bold tracking-widest font-heading text-secondary">My Invitation</Link>
        <span className="hidden sm:block w-16" />
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-10 px-6 text-center">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-180 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-white text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
            <Sparkles className="w-3 h-3" /> {DESIGNS.length} Premium Designs
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold font-heading text-primary">
            All Invitation <span className="text-[#6e3b3b]">Templates</span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-foreground/60 font-light">
            Har design ka live preview dekhiye, apna favourite chuniye aur WhatsApp par order kijiye. Naam, date aur venue aapke hisaab se customise honge.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter by style">
            {styles.map((s) => (
              <button
                key={s}
                id={`filter-style-${s.toLowerCase()}`}
                onClick={() => setStyle(s)}
                className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all ${style === s ? "bg-[#3d261d] text-white shadow-md scale-105" : "bg-white text-slate-500 border border-slate-200 hover:border-primary/50"}`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2" aria-label="Filter by tier">
            {TIERS.map((t) => (
              <button
                key={t}
                id={`filter-tier-${t.split(" ")[0].toLowerCase()}`}
                onClick={() => setTier(t)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-colors ${tier === t ? "bg-primary text-white" : "text-slate-500 hover:text-primary"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
          <AnimatePresence mode="popLayout">
            {filtered.map((design) => (
              <motion.div
                key={design.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <DesignCard design={design} />
              </motion.div>
            ))}
          </AnimatePresence>
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-foreground/50 py-16">Is filter mein abhi koi template nahi hai.</p>
          )}
        </motion.div>
      </section>
    </div>
  );
}
