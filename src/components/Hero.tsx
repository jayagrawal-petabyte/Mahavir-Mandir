"use client";

import { Heart, Radio, Clock, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenDonate: () => void;
  onOpenLive: () => void;
}

export default function Hero({ onOpenDonate, onOpenLive }: HeroProps) {
  return (
    <section id="hero" className="relative py-14 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#5c1208] via-[#75190b] to-[#3d0903] text-white border-b-4 border-[#d4af37] overflow-hidden">
      
      {/* Background Subtle Architectural Texture */}
      {/* TODO: replace with real temple photo (mahavirmandirpatna.org official banner graphic) */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Direct Heading (NO pill badges) */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          <div className="space-y-3">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block">
              Shree Mahavir Sthan Nayas Samiti
            </span>

            <h1 className="font-serif-title text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Mahavir Mandir, <br />
              <span className="text-amber-300">Patna, Bihar</span>
            </h1>

            <p className="text-sm sm:text-base text-amber-100/90 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              One of the oldest and holiest Hanuman temples in India. Enshrining the sacred Sanctum Sanctorum of Lord Hanuman and the Lord Shiva Corridor.
            </p>
          </div>

          {/* Daily Schedule Banner */}
          <div className="bg-black/30 p-4 rounded-xl border border-amber-400/20 max-w-lg mx-auto lg:mx-0 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-amber-200 font-bold">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Daily Schedule: Opens 5:00 AM</span>
            </div>
            <div className="text-white/90 font-medium">
              Morning Aarti: <strong className="text-amber-300 font-bold">5:00 PM</strong>
              {/* VERIFY: exact morning vs evening aarti timings against live site before final launch */}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={onOpenDonate}
              className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold text-sm shadow-lg flex items-center gap-2 transition-all"
            >
              <Heart className="w-4 h-4 fill-gray-950 text-gray-950" />
              <span>Online Donation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenLive}
              className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 flex items-center gap-2 transition-all"
            >
              <Radio className="w-4 h-4 text-red-400" />
              <span>Watch Live Stream</span>
            </button>
          </div>

        </div>

        {/* Right Column: Restyled Architectural/Ornamental Sanctum Frame (Pattern Fix 4: Architectural Frame) */}
        <div className="lg:col-span-5 flex justify-center">
          
          <div className="relative w-full max-w-sm bg-[#420d06] p-6 rounded-xl border-2 border-[#d4af37]/60 shadow-2xl text-center space-y-4">
            
            {/* Ornamental Corner Motifs */}
            <div className="absolute top-2 left-2 text-[#d4af37] text-xs font-serif">🪷</div>
            <div className="absolute top-2 right-2 text-[#d4af37] text-xs font-serif">🪷</div>
            <div className="absolute bottom-2 left-2 text-[#d4af37] text-xs font-serif">🪷</div>
            <div className="absolute bottom-2 right-2 text-[#d4af37] text-xs font-serif">🪷</div>

            {/* Traditional Emblem Frame */}
            {/* TODO: replace with real temple photo */}
            <div className="w-20 h-20 rounded-full border-2 border-[#d4af37] bg-gradient-to-b from-[#75190b] to-[#3d0903] text-amber-300 flex items-center justify-center font-serif-title text-4xl font-bold mx-auto shadow-inner">
              ॐ
            </div>
            
            <div className="space-y-1 pt-1">
              <h3 className="font-serif-title text-xl font-bold text-amber-200">
                Sanctum Sanctorum
              </h3>
              <p className="text-xs text-amber-300 font-serif">
                श्री महावीर हनुमान मंदिर
              </p>
            </div>
            
            <div className="border-t border-b border-[#d4af37]/30 py-3 my-2 text-xs text-amber-100/90 leading-relaxed font-normal">
              Renovated Nov 30, 1984 – Mar 4, 1985 covering 10,000 sq ft. Housing the main sanctum of Lord Hanuman and surrounding Lord Shiva corridor.
            </div>

            <div className="text-[11px] font-bold text-amber-300 uppercase tracking-widest">
              Patna Junction Complex • Bihar
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
