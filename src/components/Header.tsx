"use client";

import { useState } from "react";
import { Radio, Menu, X, Clock, MapPin } from "lucide-react";

interface HeaderProps {
  onOpenDonate: () => void;
  onOpenLive: () => void;
}

export default function Header({ onOpenDonate, onOpenLive }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#faf7f2]/95 backdrop-blur-md border-b border-amber-900/10 shadow-sm">
      
      {/* Top Info Bar */}
      <div className="bg-[#8b1e0f] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Daily Schedule: Opens 5:00 AM | Morning Aarti 5:00 PM</span>
            {/* VERIFY: exact morning vs evening aarti timings against live site before final launch */}
          </div>
          <div className="flex items-center gap-4 text-[11px] text-amber-200">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-400" />
              Patna Junction, Bihar
            </span>
            <span>•</span>
            <button onClick={onOpenDonate} className="hover:underline font-bold text-white">
              Shree Mahavir Sthan Nayas Samiti Trust
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Emblem & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#8b1e0f] to-[#d94e16] text-white flex items-center justify-center font-serif text-2xl font-bold shadow-sm group-hover:scale-105 transition-transform border border-amber-400/40">
            ॐ
          </div>
          <div>
            <h1 className="font-serif-title text-lg sm:text-xl font-bold tracking-tight text-[#2a1e17] group-hover:text-[#8b1e0f] transition-colors leading-snug">
              Mahavir Mandir, Patna
            </h1>
            <p className="text-xs text-[#8b1e0f] font-semibold tracking-wide">
              Shree Mahavir Sthan Nayas Samiti
            </p>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-[#2a1e17]">
          <a href="#about" className="hover:text-[#8b1e0f] transition-colors">About Us</a>
          <a href="#services" className="hover:text-[#8b1e0f] transition-colors">Rituals & Offerings</a>
          <a href="#publications" className="hover:text-[#8b1e0f] transition-colors">Research & Publications</a>
          <a href="#online-services" className="hover:text-[#8b1e0f] transition-colors">Online Services</a>
          <a href="#health-institutes" className="hover:text-[#8b1e0f] transition-colors">Health Institutes</a>
          <a href="#contact" className="hover:text-[#8b1e0f] transition-colors">Contact Us</a>
        </nav>

        {/* Live Stream Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenLive}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-red-200 text-[#8b1e0f] font-bold text-xs shadow-sm hover:bg-red-50 transition-colors"
          >
            <Radio className="w-4 h-4 text-red-600 animate-pulse" />
            <span>Live Darshan</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#2a1e17] hover:bg-amber-100/60"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf7f2] border-b border-amber-900/10 px-4 py-4 space-y-3 font-semibold text-xs text-[#2a1e17] shadow-lg">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#8b1e0f]">About Us</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#8b1e0f]">Rituals & Offerings</a>
          <a href="#publications" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#8b1e0f]">Research & Publications</a>
          <a href="#online-services" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#8b1e0f]">Online Services</a>
          <a href="#health-institutes" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#8b1e0f]">Health Institutes</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#8b1e0f]">Contact Us</a>
          
          <div className="pt-2 border-t border-amber-900/10">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenLive(); }}
              className="w-full py-2.5 rounded-lg bg-red-600 text-white font-bold text-xs"
            >
              Watch Live Darshan Stream
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
