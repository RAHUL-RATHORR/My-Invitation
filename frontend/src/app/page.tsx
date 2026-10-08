"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star, CheckCircle2, MapPin, Mail, Phone, Heart } from "lucide-react";
import Lenis from 'lenis';

const PREVIEWS = [
  { name: "Aarav & Meera", theme: "Royal Gates", color: "bg-linear-to-br from-amber-100 to-amber-50" },
  { name: "Rohan & Priya", theme: "Floral Watercolor", color: "bg-linear-to-br from-rose-100 to-rose-50" },
  { name: "Vikram & Anjali", theme: "Celestial Night", color: "bg-linear-to-br from-indigo-100 to-indigo-50" }
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

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* Unique Design Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 h-24 bg-background/80 backdrop-blur-xl border-b border-border flex items-center justify-between px-8 md:px-16"
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

      <main className="grow pt-32 pb-16">
        
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
                <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold tracking-widest uppercase text-sm hover:scale-105 active:scale-95 transition-transform shadow-[0_10px_40px_rgba(212,175,55,0.3)]">
                  View Templates
                </button>
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
                className="relative w-72 md:w-80 h-150 bg-card rounded-[3rem] p-2 shadow-2xl border border-border/50 z-10"
              >
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-accent">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPreview}
                      initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(10px)" }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className={`absolute inset-0 flex items-center justify-center ${PREVIEWS[currentPreview].color}`}
                    >
                       <div className="text-center p-6 bg-white/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 w-3/4">
                          <h3 className="font-script text-4xl text-secondary mb-2">{PREVIEWS[currentPreview].name}</h3>
                          <p className="font-heading text-xs uppercase tracking-widest text-primary font-bold">{PREVIEWS[currentPreview].theme}</p>
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
            
            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <motion.div variants={fadeUp} className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col group cursor-pointer">
                <div className="bg-[#f6f3eb] pt-8 pb-12 px-6 relative h-72 flex justify-center items-center overflow-hidden">
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white border border-slate-200 text-slate-500 text-[9px] font-bold uppercase rounded-full shadow-xs">Silver Tier</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white border border-blue-200 text-blue-500 text-[9px] font-bold uppercase rounded-full shadow-xs">Traditional</span>
                  </div>
                  
                  {/* Left Phone (Dark) */}
                  <div className="w-32 h-64 bg-black rounded-3xl border-4 border-slate-800 shadow-xl absolute left-[15%] rotate-[-5deg] z-10 flex flex-col items-center justify-center p-2 group-hover:rotate-[-8deg] group-hover:-translate-x-2 transition-all duration-500">
                    <div className="w-12 h-3 bg-black absolute top-2 rounded-full z-20"></div>
                    <div className="w-full h-full border border-white/10 rounded-2xl bg-black flex flex-col items-center justify-center text-center">
                       <span className="text-2xl">🕉️</span>
                       <div className="mt-4 px-3 py-1 border border-amber-500/50 rounded-full text-[6px] text-amber-500 uppercase">Shubh Vivah</div>
                    </div>
                  </div>
                  
                  {/* Right Phone (Light) */}
                  <div className="w-32 h-64 bg-black rounded-3xl border-4 border-slate-800 shadow-2xl absolute right-[15%] rotate-[5deg] z-20 flex flex-col items-center justify-center p-2 group-hover:rotate-[8deg] group-hover:translate-x-2 transition-all duration-500">
                    <div className="w-12 h-3 bg-black absolute top-2 rounded-full z-20"></div>
                    <div className="w-full h-full bg-[#fdfaf5] border border-black/10 rounded-2xl flex flex-col items-center justify-center text-center px-2">
                       <p className="text-[8px] text-slate-500 mb-2">Save the Date</p>
                       <h4 className="font-heading text-lg text-slate-800">Aarav <br/>&<br/> Meera</h4>
                    </div>
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="p-6 bg-white flex-1 flex flex-col group-hover:bg-amber-50/10 transition-colors">
                  <h3 className="font-heading text-lg font-bold text-slate-900 mb-4 line-clamp-1 group-hover:text-amber-700 transition-colors">Classic Gujarati Floral Kankotri</h3>
                  
                  <div className="flex items-center justify-between mb-5 mt-auto">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-slate-900">₹999</span>
                      <span className="text-xs text-slate-400 line-through">₹1,499</span>
                    </div>
                    <button className="flex items-center gap-1.5 px-4 py-1.5 border border-primary text-primary rounded-md text-[9px] font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors">
                      <Play className="w-2.5 h-2.5" /> Preview
                    </button>
                  </div>
                  
                  <button className="w-full py-3 bg-[#25d366] text-white rounded-lg font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-md hover:shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    Order On Whatsapp
                  </button>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={fadeUp} className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col group cursor-pointer">
                <div className="bg-[#f6f3eb] pt-8 pb-12 px-6 relative h-72 flex justify-center items-center overflow-hidden">
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white border border-amber-200 text-amber-500 text-[9px] font-bold uppercase rounded-full shadow-xs">Gold Tier</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white border border-amber-400 text-amber-600 text-[9px] font-bold uppercase rounded-full shadow-xs">Modern</span>
                  </div>
                  
                  {/* Left Phone */}
                  <div className="w-32 h-64 bg-black rounded-3xl border-4 border-slate-800 shadow-xl absolute left-[15%] rotate-[-5deg] z-10 flex flex-col items-center justify-center p-2 group-hover:rotate-[-8deg] group-hover:-translate-x-2 transition-all duration-500">
                    <div className="w-12 h-3 bg-black absolute top-2 rounded-full z-20"></div>
                    <div className="w-full h-full bg-[#3d0c10] border border-primary/30 rounded-2xl flex flex-col items-center justify-center text-center">
                       <div className="w-px h-16 bg-linear-to-b from-transparent via-primary to-transparent"></div>
                       <div className="w-6 h-6 rounded-full border border-primary my-2"></div>
                       <div className="w-px h-16 bg-linear-to-b from-primary via-primary to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Right Phone */}
                  <div className="w-32 h-64 bg-black rounded-3xl border-4 border-slate-800 shadow-2xl absolute right-[15%] rotate-[5deg] z-20 flex flex-col items-center justify-center p-2 group-hover:rotate-[8deg] group-hover:translate-x-2 transition-all duration-500">
                    <div className="w-12 h-3 bg-black absolute top-2 rounded-full z-20"></div>
                    <div className="w-full h-full bg-slate-100 border border-black/10 rounded-2xl overflow-hidden relative">
                       <div className="absolute inset-0 bg-linear-to-b from-blue-100 to-green-100"></div>
                       <div className="absolute bottom-0 w-full h-1/2 flex justify-center items-end pb-2">
                          <div className="w-3 h-8 bg-black rounded-t-lg mx-1"></div>
                          <div className="w-4 h-8 bg-white rounded-t-lg border border-slate-200 mx-1"></div>
                       </div>
                       <div className="absolute top-8 left-0 right-0 text-center z-10">
                         <h4 className="font-script text-xl text-slate-800">Vikram <br/>& Anjali</h4>
                       </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-white flex-1 flex flex-col group-hover:bg-amber-50/10 transition-colors">
                  <h3 className="font-heading text-lg font-bold text-slate-900 mb-4 line-clamp-1 group-hover:text-amber-700 transition-colors">Imperial Palace Elegance</h3>
                  
                  <div className="flex items-center justify-between mb-5 mt-auto">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-slate-900">₹2,499</span>
                      <span className="text-xs text-slate-400 line-through">₹3,999</span>
                    </div>
                    <button className="flex items-center gap-1.5 px-4 py-1.5 border border-primary text-primary rounded-md text-[9px] font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors">
                      <Play className="w-2.5 h-2.5" /> Preview
                    </button>
                  </div>
                  
                  <button className="w-full py-3 bg-[#25d366] text-white rounded-lg font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-md hover:shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    Order On Whatsapp
                  </button>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={fadeUp} className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col group cursor-pointer">
                <div className="bg-[#f6f3eb] pt-8 pb-12 px-6 relative h-72 flex justify-center items-center overflow-hidden">
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white border border-purple-200 text-purple-500 text-[9px] font-bold uppercase rounded-full shadow-xs">Platinum Tier</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white border border-pink-200 text-pink-500 text-[9px] font-bold uppercase rounded-full shadow-xs">Modern</span>
                  </div>
                  
                  {/* Left Phone */}
                  <div className="w-32 h-64 bg-black rounded-3xl border-4 border-slate-800 shadow-xl absolute left-[15%] rotate-[-5deg] z-10 flex flex-col items-center justify-center p-2 group-hover:rotate-[-8deg] group-hover:-translate-x-2 transition-all duration-500">
                    <div className="w-12 h-3 bg-black absolute top-2 rounded-full z-20"></div>
                    <div className="w-full h-full bg-[#f2fbff] border border-black/5 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden">
                       <div className="w-12 h-12 rounded-full border border-amber-300 flex items-center justify-center mt-4">
                         <span className="text-[10px] text-amber-600 font-heading">A & P</span>
                       </div>
                       <div className="absolute bottom-0 w-full h-1/2 flex justify-between items-end px-1">
                          <div className="w-4 h-16 bg-green-700/80 rounded-t-md"></div>
                          <div className="w-12 h-12 bg-amber-700/80 rounded-t-md"></div>
                          <div className="w-4 h-16 bg-green-700/80 rounded-t-md"></div>
                       </div>
                    </div>
                  </div>
                  
                  {/* Right Phone */}
                  <div className="w-32 h-64 bg-black rounded-3xl border-4 border-slate-800 shadow-2xl absolute right-[15%] rotate-[5deg] z-20 flex flex-col items-center justify-center p-2 group-hover:rotate-[8deg] group-hover:translate-x-2 transition-all duration-500">
                    <div className="w-12 h-3 bg-black absolute top-2 rounded-full z-20"></div>
                    <div className="w-full h-full bg-[#f2fbff] border border-black/10 rounded-2xl overflow-hidden relative">
                       <div className="absolute top-8 left-0 right-0 text-center z-10">
                         <h4 className="font-heading text-xs text-amber-700">Rohan <br/>&<br/> Priya</h4>
                       </div>
                       <div className="absolute bottom-0 w-full h-1/2 flex justify-center items-end px-1 pb-1">
                          <div className="w-full h-16 bg-slate-300 rounded-t-md border-t-4 border-pink-400"></div>
                       </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-white flex-1 flex flex-col group-hover:bg-amber-50/10 transition-colors">
                  <h3 className="font-heading text-lg font-bold text-slate-900 mb-4 line-clamp-1 group-hover:text-amber-700 transition-colors">Divine Temple Cinematic</h3>
                  
                  <div className="flex items-center justify-between mb-5 mt-auto">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-slate-900">₹3,999</span>
                      <span className="text-xs text-slate-400 line-through">₹5,499</span>
                    </div>
                    <button className="flex items-center gap-1.5 px-4 py-1.5 border border-primary text-primary rounded-md text-[9px] font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors">
                      <Play className="w-2.5 h-2.5" /> Preview
                    </button>
                  </div>
                  
                  <button className="w-full py-3 bg-[#25d366] text-white rounded-lg font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-md hover:shadow-lg">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    Order On Whatsapp
                  </button>
                </div>
              </motion.div>

            </div>

            {/* Bottom Explore Button */}
            <motion.div variants={fadeUp} className="flex justify-center mt-12">
              <button className="group px-8 py-3 bg-[#e8be66] text-[#6b4c3b] font-bold text-[10px] uppercase tracking-widest rounded-full hover:bg-[#d6a953] transition-colors flex items-center gap-2 hover:shadow-xl hover:-translate-y-1">
                Explore All Templates <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
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

        {/* PRICING */}
        <section id="pricing" className="py-32 bg-secondary/5 border-t border-border overflow-hidden">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto px-6"
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="text-4xl font-heading text-secondary mb-4">Investment Plans</h2>
              <p className="text-foreground/70 uppercase tracking-widest text-sm">Transparent pricing for your special day</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {[
                { name: "Basic", price: "₹2,499", desc: "Standard animated design, single page layout, background music, basic RSVP, and WhatsApp share link." },
                { name: "Premium Cinematic", price: "₹3,999", desc: "Cinematic animations, custom music, live RSVP dashboard, countdown timer, guest wishes wall, and lifetime link.", highlighted: true },
                { name: "Custom Bespoke", price: "Custom", desc: "Fully custom design with 3D assets, multi-page layout, personalized domain, and dedicated designer." }
              ].map((plan, i) => (
                <motion.div variants={fadeUp} key={i} className={`p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${plan.highlighted ? 'bg-secondary text-secondary-foreground border-secondary shadow-2xl md:scale-105 md:py-12 z-10' : 'bg-card border-border shadow-lg'}`}>
                  <h3 className="text-2xl font-heading mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-6 font-heading">{plan.price}</div>
                  <p className={`mb-8 font-light leading-relaxed ${plan.highlighted ? 'text-secondary-foreground/80' : 'text-foreground/70'}`}>{plan.desc}</p>
                  <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all ${plan.highlighted ? 'bg-primary text-primary-foreground hover:bg-white hover:text-secondary' : 'bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground'}`}>
                    Choose Plan
                  </button>
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
              <a href="tel:+919327374893" className="flex items-center gap-3 hover:text-primary transition-colors"><Phone className="w-4 h-4 text-primary" /> +91 9327374893</a>
              <p className="flex items-start gap-3"><MapPin className="w-4 h-4 shrink-0 mt-1 text-primary" /> ROYAL PLAZA, BRTS Rd, Laxmibai Nagar Society, Surat, Gujarat 395006</p>
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
