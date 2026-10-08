"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star, CheckCircle2, MapPin, Mail, Phone, Heart } from "lucide-react";
import Lenis from 'lenis';
import Link from 'next/link';
import DesignCard from "@/components/shared/DesignCard";
import { DESIGNS } from "@/data/designs";

const PREVIEWS = [
  { name: "Aarav & Meera", theme: "Royal Gates", slug: "aarav-weds-meera", color: "bg-linear-to-br from-amber-100 to-amber-50" },
  { name: "Rohan & Priya", theme: "Floral Watercolor", slug: "rohan-weds-priya", color: "bg-linear-to-br from-rose-100 to-rose-50" },
  { name: "Vikram & Anjali", theme: "Celestial Night", slug: "vikram-weds-anjali", color: "bg-linear-to-br from-indigo-100 to-indigo-50" }
];

const TESTIMONIALS = [
  { name: "Drashti Shah", text: "From start to finish, the entire process was seamless and enjoyable. The design options were beautiful, easy to customize, and perfectly matched our wedding theme. Highly recommended!" },
  { name: "Hida Mariyam", text: "I randomly sent a DM did not expect such good work absolutely amazing!! Special occasions like these are meant to be perfect. Glad I found this platform." },
  { name: "Prathmesh Magdum", text: "Absolutely loved the experience! Customizing our wedding invitation was simple, and the final result looked stunning. We received so many compliments." },
  { name: "Bhavesh Charaniya", text: "We are absolutely delighted with our wedding invitation! The design was elegant, premium, and beautifully captured the essence of our special day." }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const [currentPreview, setCurrentPreview] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const timer = setInterval(() => {
      setCurrentPreview((prev) => (prev + 1) % PREVIEWS.length);
    }, 4000);
    
    return () => {
      clearInterval(timer);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* Unique Design Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 h-24 flex items-center justify-between px-8 md:px-16 transition-all duration-500 ${isScrolled ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-sm' : 'bg-transparent border-transparent'}`}
      >
        <div className="text-3xl font-bold tracking-widest font-heading text-secondary">
          My Invitation
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase text-foreground/70">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">Couples</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
        </div>
        <button className="px-6 py-2.5 rounded-full bg-primary text-white font-bold uppercase tracking-wider text-xs transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group">
          <span className="relative z-10">Start Creating</span>
          <div className="absolute inset-0 h-full w-full bg-white/20 group-hover:scale-x-100 scale-x-0 origin-left transition-transform duration-500 ease-out z-0"></div>
        </button>
      </motion.nav>

      <main className="grow pb-16">
        
        {/* UNIQUE HERO SECTION */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/10 via-background/0 to-transparent blur-[120px]"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-secondary/5 via-background/0 to-transparent blur-[100px]"></div>
          </motion.div>

          <div className="max-w-7xl mx-auto px-6 w-full relative z-20 flex flex-col lg:flex-row items-center justify-between gap-16">
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:w-1/2 space-y-8"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-4 py-2 px-4 rounded-full border border-primary/30 bg-primary/5 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                <Star className="w-4 h-4 text-primary fill-primary animate-pulse" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">India's Premier Invitation Studio</span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-heading leading-tight text-foreground">
                Craft Your Dream <br />
                <span className="font-script text-7xl lg:text-9xl block mt-2 bg-clip-text text-transparent bg-linear-to-r from-secondary to-amber-700">Cinematic</span>
                Invitations
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg text-foreground/70 max-w-md font-light leading-relaxed">
                Experience premium interactive wedding invitation websites designed for modern Indian weddings. Bespoke layouts with dynamic RSVP, timeline counters, map navigation, and music integration.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex gap-4 pt-4">
                <a href="#features" id="hero-view-templates" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold tracking-widest uppercase text-sm hover:scale-105 active:scale-95 transition-transform shadow-[0_10px_40px_rgba(212,175,55,0.3)]">
                  View Templates
                </a>
                <button className="group px-8 py-4 rounded-full border border-border bg-card text-foreground font-bold tracking-widest uppercase text-sm hover:border-primary transition-all flex items-center gap-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
                  <Play className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" /> Watch Demo
                </button>
              </motion.div>
            </motion.div>

            {/* Unique Mockup Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="lg:w-1/2 flex justify-center relative perspective-1000"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse duration-10000"></div>
              <motion.div 
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-64 sm:w-70 aspect-9/19 bg-slate-900 rounded-[2.5rem] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-slate-800 ring-1 ring-primary/20 z-10 mx-auto"
              >
                {/* Dynamic Island / Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-950 rounded-full z-30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-800 ml-10"></div>
                </div>
                
                {/* Screen */}
                <div className="w-full h-full rounded-[2.3rem] overflow-hidden relative bg-slate-100 shadow-inner">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPreview}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className={`absolute inset-0 flex flex-col items-center justify-center ${PREVIEWS[currentPreview].color}`}
                    >
                       <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent z-10 pointer-events-none"></div>
                       
                       <div className="relative z-20 text-center w-full px-6 mt-auto mb-16">
                          <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full">
                            <Star className="w-3 h-3 text-amber-300 fill-amber-300" />
                            <span className="text-[9px] uppercase tracking-widest text-white font-bold">{PREVIEWS[currentPreview].theme}</span>
                          </div>
                          <h3 className="font-script text-4xl text-white mb-6 drop-shadow-md">{PREVIEWS[currentPreview].name}</h3>
                          
                          <Link href={`/${PREVIEWS[currentPreview].slug}`} className="w-full py-3.5 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 font-bold uppercase tracking-wider text-[10px] flex items-center justify-center gap-2 hover:bg-white transition-all shadow-xl">
                            <Play className="w-3.5 h-3.5 fill-slate-900" /> Live Preview
                          </Link>
                       </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-20 border-y border-border bg-card/50 overflow-hidden">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
          >
            {[
              { num: "1000+", label: "Happy Couples" },
              { num: "24 Hrs", label: "Fast Delivery" },
              { num: "4.9/5", label: "Star Rating" },
              { num: "100%", label: "Customizable" }
            ].map((stat, i) => (
              <motion.div variants={fadeUp} key={i} className="space-y-2 group cursor-default">
                <h3 className="text-4xl md:text-5xl font-heading text-primary group-hover:scale-110 transition-transform duration-500 origin-bottom">{stat.num}</h3>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/60">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* FEATURED INVITATION DESIGNS - EXACT MATCH TO IMAGE */}
        <section id="features" className="py-24 relative bg-[#fdf8f3] overflow-hidden">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-6 relative z-10"
          >
            
            {/* Title */}
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="text-4xl md:text-[2.75rem] font-bold font-heading text-primary">
                Featured Invitation <span className="text-[#6e3b3b]">Designs</span>
              </h2>
            </motion.div>
            
            {/* Filter Tabs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3 mb-16">
              <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#3d261d] text-white text-[11px] font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-transform">
                <span className="w-2.5 h-2.5 rounded-full border-2 border-white/70"></span>
                Wedding Invitations
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-slate-500 border border-slate-200 text-[11px] font-bold uppercase tracking-wider hover:border-amber-200 transition-colors hover:scale-105">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-200"></span>
                Baby Shower
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-slate-500 border border-slate-200 text-[11px] font-bold uppercase tracking-wider hover:border-blue-200 transition-colors hover:scale-105">
                <Heart className="w-3 h-3 text-blue-400 fill-blue-400" />
                Engagement
              </button>
            </motion.div>
            
            {/* Cards Grid - each card mirrors its real template */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DESIGNS.slice(0, 3).map((design) => (
                <DesignCard key={design.slug} design={design} variants={fadeUp} />
              ))}
            </div>

            {/* Bottom Explore Button */}
            <motion.div variants={fadeUp} className="flex justify-center mt-12">
              <Link href="/templates" id="explore-all-templates" className="group px-8 py-3 bg-[#e8be66] text-[#6b4c3b] font-bold text-[10px] uppercase tracking-widest rounded-full hover:bg-[#d6a953] transition-colors flex items-center gap-2 hover:shadow-xl hover:-translate-y-1">
                Explore All Templates <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
          </motion.div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-32 relative overflow-hidden">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-6"
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="text-4xl font-heading text-secondary mb-4">Love Stories</h2>
              <p className="text-foreground/70 uppercase tracking-widest text-sm">What our couples say</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <motion.div variants={fadeUp} key={i} className="glass p-8 rounded-2xl flex flex-col justify-between hover:-translate-y-4 transition-transform duration-500 shadow-md hover:shadow-2xl">
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-primary fill-primary" />)}
                  </div>
                  <p className="text-foreground/80 font-light italic mb-8 leading-relaxed">"{t.text}"</p>
                  <p className="font-bold tracking-wider text-sm uppercase text-secondary font-heading">— {t.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>



      </main>

      {/* PREMIUM FOOTER */}
      <footer className="relative bg-night text-accent pt-24 pb-12 overflow-hidden">
        {/* Subtle top gold glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16 relative z-10">
          
          <div className="space-y-6 md:col-span-2">
            <div className="text-4xl font-bold tracking-widest font-heading text-primary">
              My Invitation
            </div>
            <p className="text-accent/60 text-sm leading-relaxed max-w-sm font-light">
              India's premier studio for cinematic, animated, and breathtaking digital wedding experiences. Crafted with love, designed for eternity.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-[0.2em] text-primary text-xs">Contact Us</h4>
            <div className="space-y-4 text-sm text-accent/80 font-light">
              <a href="mailto:dreamsinvite239@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors"><Mail className="w-4 h-4 text-primary" /> dreamsinvite239@gmail.com</a>
              <a href="tel:+917568450691" className="flex items-center gap-3 hover:text-primary transition-colors"><Phone className="w-4 h-4 text-primary" /> +91 7568450691</a>
              <p className="flex items-start gap-3"><MapPin className="w-4 h-4 shrink-0 mt-1 text-primary" /> Jaipur, Rajasthan, India</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-[0.2em] text-primary text-xs">Legal</h4>
            <div className="flex flex-col gap-4 text-sm text-accent/80 font-light">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-accent/40 relative z-10">
          <p>© 2026 My Invitation. All rights reserved.</p>
          <p className="flex items-center gap-2">Crafted with <Heart className="w-3 h-3 text-primary fill-primary" /> in India</p>
        </div>
      </footer>

    </div>
  );
}
