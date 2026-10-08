import type { ReactNode } from "react";
import { Heart, Star } from "lucide-react";

export type Design = {
  slug: string;
  title: string;
  couple: string;
  tier: string;
  tierClass: string;
  style: string;
  styleClass: string;
  price: string;
  mrp: string;
  stageBg: string;
  category: "wedding" | "engagement" | "haldi";
  cover: ReactNode;
  inside: ReactNode;
};

export function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
  );
}

// Each featured card mirrors a real template: cover = "tap to open" screen, inside = first section after opening
export const DESIGNS: Design[] = [
  {
    slug: "aarav-weds-meera",
    title: "Royal Gates",
    couple: "Aarav & Meera",
    tier: "Gold Tier",
    tierClass: "border-amber-200 text-amber-600",
    style: "Royal",
    styleClass: "border-primary/40 text-primary",
    price: "₹2,499",
    mrp: "₹3,999",
    stageBg: "bg-[#f6f3eb]",
    category: "wedding",
    cover: (
      <div className="w-full h-full bg-secondary flex items-center justify-center relative">
        <div className="absolute inset-0 flex opacity-30">
          <div className="w-1/2 h-full border-r-2 border-primary rounded-tr-full"></div>
          <div className="w-1/2 h-full border-l-2 border-primary rounded-tl-full"></div>
        </div>
        <div className="relative z-10 w-[85%] py-4 rounded-2xl border border-primary/40 bg-secondary/80 text-center">
          <p className="text-[5px] tracking-[0.3em] uppercase text-primary">You are invited</p>
          <p className="font-script text-primary text-lg leading-tight my-1">Aarav<br /><span className="text-[10px]">&amp;</span><br />Meera</p>
          <p className="text-[5px] tracking-widest uppercase text-primary/70 animate-pulse">Tap to Open</p>
        </div>
      </div>
    ),
    inside: (
      <div className="w-full h-full bg-[#fdf8f3] flex flex-col items-center justify-center text-center px-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,149,58,0.18),transparent_70%)]"></div>
        <p className="text-[5px] tracking-[0.3em] uppercase text-primary border-y border-primary/40 py-1 px-2 relative z-10">We are getting married</p>
        <p className="font-script text-[#3d261d] text-xl leading-tight my-2 relative z-10">Aarav<br /><span className="text-primary text-sm">&amp;</span><br />Meera</p>
        <p className="text-[6px] italic text-[#6b4c3b] relative z-10">Oct 25, 2026 · Mumbai</p>
      </div>
    ),
  },
  {
    slug: "rohan-weds-priya",
    title: "Floral Watercolor",
    couple: "Rohan & Priya",
    tier: "Silver Tier",
    tierClass: "border-slate-200 text-slate-500",
    style: "Floral",
    styleClass: "border-rose-200 text-rose-500",
    price: "₹999",
    mrp: "₹1,499",
    stageBg: "bg-rose-50/60",
    category: "wedding",
    cover: (
      <div className="w-full h-full bg-rose-100 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-rose-300/40 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-pink-300/40 rounded-full blur-xl"></div>
        <div className="relative z-10 w-[85%] py-4 rounded-3xl bg-white/60 border border-white text-center shadow-lg">
          <p className="text-[5px] tracking-[0.3em] uppercase text-rose-400">Save The Date</p>
          <p className="font-script text-rose-900 text-lg leading-tight my-1">Rohan<br /><span className="text-[10px] text-rose-400 font-sans">&amp;</span><br />Priya</p>
          <p className="text-[5px] tracking-widest uppercase text-rose-500">Tap to Open</p>
        </div>
      </div>
    ),
    inside: (
      <div className="w-full h-full bg-rose-50 flex flex-col items-center justify-center text-center px-2 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-16 bg-rose-200/50 rounded-br-full blur-lg"></div>
        <Heart className="w-4 h-4 text-rose-300 fill-rose-300 mb-2 relative z-10" />
        <p className="font-script text-rose-900 text-xl leading-tight relative z-10">Rohan<br /><span className="text-rose-400 font-sans text-sm">&amp;</span><br />Priya</p>
        <p className="text-[6px] italic text-rose-800/70 mt-2 relative z-10">Dec 06, 2026 · Jaipur</p>
      </div>
    ),
  },
  {
    slug: "vikram-weds-anjali",
    title: "Celestial Night",
    couple: "Vikram & Anjali",
    tier: "Platinum Tier",
    tierClass: "border-indigo-200 text-indigo-500",
    style: "Modern",
    styleClass: "border-blue-200 text-blue-500",
    price: "₹3,999",
    mrp: "₹5,499",
    stageBg: "bg-indigo-50/60",
    category: "wedding",
    cover: (
      <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute w-28 h-28 border border-indigo-500/20 rounded-full border-dashed"></div>
        <div className="absolute top-4 left-3 w-0.5 h-0.5 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-4 w-1 h-1 bg-blue-200 rounded-full animate-pulse"></div>
        <Star className="w-3 h-3 text-indigo-300 fill-indigo-300 mb-2 relative z-10" />
        <p className="font-script text-lg leading-tight text-transparent bg-clip-text bg-linear-to-r from-indigo-200 via-white to-blue-200 relative z-10">Vikram<br /><span className="text-[10px] font-sans">&amp;</span><br />Anjali</p>
        <span className="mt-2 px-2 py-0.5 rounded-full border border-indigo-400/30 text-[5px] tracking-widest uppercase text-indigo-200 relative z-10">Enter the Stars</span>
      </div>
    ),
    inside: (
      <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center text-center px-2 relative overflow-hidden">
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-indigo-700/30 blur-xl rounded-full"></div>
        <p className="text-[5px] tracking-[0.3em] uppercase text-indigo-300 relative z-10">Written in the stars</p>
        <p className="font-script text-xl leading-tight my-2 text-indigo-100 relative z-10">Vikram<br /><span className="text-indigo-400 text-sm font-sans">&amp;</span><br />Anjali</p>
        <p className="text-[6px] text-indigo-200/70 relative z-10">Nov 13, 2026 · Goa</p>
      </div>
    ),
  },
  {
    slug: "arjun-weds-kavya",
    title: "Emerald Mughal",
    couple: "Arjun & Kavya",
    tier: "Platinum Tier",
    tierClass: "border-emerald-200 text-emerald-600",
    style: "Royal",
    styleClass: "border-amber-300 text-amber-600",
    price: "₹4,499",
    mrp: "₹6,499",
    stageBg: "bg-emerald-50/70",
    category: "wedding",
    cover: (
      <div className="w-full h-full bg-[#062a1f] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#fbbf24_1px,transparent_1px)] bg-size-[8px_8px]"></div>
        <div className="absolute inset-x-3 top-6 bottom-6 border border-amber-400/50 rounded-t-[50%]"></div>
        <div className="relative z-10 text-center">
          <p className="text-[5px] tracking-[0.35em] uppercase text-amber-300/80">Shubh Vivah</p>
          <p className="font-script text-lg leading-tight my-1 text-transparent bg-clip-text bg-linear-to-b from-amber-200 to-amber-500">Arjun<br /><span className="text-[10px]">&amp;</span><br />Kavya</p>
          <p className="text-[5px] tracking-widest uppercase text-amber-200/60 animate-pulse">Tap to Open</p>
        </div>
      </div>
    ),
    inside: (
      <div className="w-full h-full bg-[#062a1f] flex flex-col items-center justify-center text-center px-2 relative overflow-hidden">
        <div className="absolute inset-x-2 top-5 bottom-2 border border-amber-400/25 rounded-t-[50%]"></div>
        <p className="text-[5px] tracking-[0.3em] uppercase text-amber-300 relative z-10">Together with families</p>
        <p className="font-script text-xl leading-tight my-2 text-amber-100 relative z-10">Arjun<br /><span className="text-amber-400 text-sm">&amp;</span><br />Kavya</p>
        <p className="text-[6px] text-emerald-100/70 relative z-10">Jan 19, 2027 · Jodhpur</p>
      </div>
    ),
  },
  {
    slug: "karan-weds-sneha",
    title: "Ivory Minimal",
    couple: "Karan & Sneha",
    tier: "Silver Tier",
    tierClass: "border-slate-200 text-slate-500",
    style: "Minimal",
    styleClass: "border-stone-300 text-stone-600",
    price: "₹799",
    mrp: "₹1,299",
    stageBg: "bg-stone-100",
    category: "wedding",
    cover: (
      <div className="w-full h-full bg-[#faf8f4] flex items-center justify-center relative">
        <div className="absolute inset-2 border border-stone-300"></div>
        <div className="text-center">
          <p className="text-[5px] tracking-[0.4em] uppercase text-stone-400">The Wedding Of</p>
          <div className="w-5 h-px bg-amber-600/60 mx-auto my-2"></div>
          <p className="font-heading text-sm text-stone-900 leading-snug">Karan<br /><span className="font-script text-xs text-amber-700">and</span><br />Sneha</p>
          <div className="w-5 h-px bg-amber-600/60 mx-auto my-2"></div>
          <p className="text-[5px] tracking-[0.3em] uppercase text-stone-400">Tap to Open</p>
        </div>
      </div>
    ),
    inside: (
      <div className="w-full h-full bg-[#faf8f4] flex flex-col justify-center px-3">
        <p className="text-[5px] tracking-[0.4em] uppercase text-stone-400 mb-2 text-center">Schedule</p>
        <div className="border-y border-stone-200 divide-y divide-stone-200">
          <div className="py-2"><p className="font-heading text-[10px] text-stone-900">Ceremony</p><p className="text-[5px] text-stone-500">Feb 14 · 11:00 AM</p></div>
          <div className="py-2"><p className="font-heading text-[10px] text-stone-900">Reception</p><p className="text-[5px] text-stone-500">Feb 14 · 7:00 PM</p></div>
        </div>
        <p className="text-[5px] text-amber-700 mt-2 text-center">The Leela Palace, Bengaluru</p>
      </div>
    ),
  },
  {
    slug: "dev-weds-isha",
    title: "Haldi Sunshine",
    couple: "Dev & Isha",
    tier: "Gold Tier",
    tierClass: "border-amber-200 text-amber-600",
    style: "Festive",
    styleClass: "border-orange-200 text-orange-500",
    price: "₹1,999",
    mrp: "₹2,999",
    stageBg: "bg-amber-50",
    category: "haldi",
    cover: (
      <div className="w-full h-full bg-linear-to-b from-amber-300 via-amber-200 to-orange-200 flex items-center justify-center relative overflow-hidden">
        <div className="absolute w-48 h-48 rounded-full bg-[repeating-conic-gradient(rgba(255,255,255,0.3)_0deg_10deg,transparent_10deg_20deg)]"></div>
        <div className="relative z-10 w-24 h-24 rounded-full bg-white/75 border-2 border-orange-400 flex flex-col items-center justify-center text-center">
          <p className="text-[4px] tracking-[0.3em] uppercase text-orange-700">Haldi &amp; Wedding</p>
          <p className="font-script text-sm text-orange-900 leading-tight">Dev &amp; Isha</p>
          <p className="text-[4px] tracking-widest uppercase text-orange-600 animate-pulse">Tap to Open</p>
        </div>
      </div>
    ),
    inside: (
      <div className="w-full h-full bg-[#fffaf0] flex flex-col items-center justify-center text-center px-2 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 flex justify-between px-0.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center"><div className="w-px h-2 bg-green-700/60"></div><div className={`w-2 h-2 rounded-full ${i % 2 ? "bg-orange-500" : "bg-amber-400"}`}></div></div>
          ))}
        </div>
        <p className="text-[5px] tracking-[0.3em] uppercase text-orange-600">Let the colours begin</p>
        <p className="font-script text-xl leading-tight my-2 text-orange-900">Dev<br /><span className="text-amber-500 text-sm">&amp;</span><br />Isha</p>
        <span className="px-2 py-0.5 rounded-full bg-orange-500 text-white text-[5px] font-bold uppercase tracking-widest">Haldi · Mar 03</span>
      </div>
    ),
  },
];
