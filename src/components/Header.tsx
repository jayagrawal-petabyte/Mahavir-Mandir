"use client";

import { useState, useEffect } from "react";
import { Radio, Menu, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onOpenDonate: () => void;
  onOpenLive: () => void;
}

export default function Header({ onOpenDonate, onOpenLive }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      try {
        return !sessionStorage.getItem("hasSeenHeaderAnimation");
      } catch {
        return false;
      }
    }
    return false;
  });

  const [stage, setStage] = useState<"centered" | "moving" | "settled">(() => {
    if (typeof window !== "undefined") {
      try {
        return sessionStorage.getItem("hasSeenHeaderAnimation") ? "settled" : "centered";
      } catch {
        return "settled";
      }
    }
    return "settled";
  });

  useEffect(() => {
    if (isFirstVisit && stage === "centered") {
      try {
        sessionStorage.setItem("hasSeenHeaderAnimation", "true");
      } catch {
        // ignore
      }

      const timer1 = setTimeout(() => {
        setStage("moving");
      }, 600);

      const timer2 = setTimeout(() => {
        setStage("settled");
      }, 1400);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [isFirstVisit, stage]);

  // Framer Motion Stagger Variants for Nav Items
  const navContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.15,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Centered Entrance Splash Overlay (First visit in session only) */}
      <AnimatePresence>
        {stage !== "settled" && isFirstVisit && (
          <motion.div
            key="splash-overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: stage === "centered" ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed inset-0 z-50 bg-[#faf7f2] flex items-center justify-center ${
              stage === "moving" ? "pointer-events-none" : ""
            }`}
          >
            {stage === "centered" && (
              <motion.div
                layoutId="header-logo-brand"
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1], // smooth ease-out, no bounce
                }}
                className="flex items-center gap-4 scale-[1.75] sm:scale-[2.2] origin-center cursor-default select-none p-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shadow-md border border-amber-400/40">
                  <img
                    src="/images/logo.png"
                    alt="Mahavir Mandir Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="font-serif-title text-xl sm:text-2xl font-bold tracking-tight text-[#2a1e17] leading-snug">
                    Mahavir Mandir, Patna
                  </h1>
                  <p className="text-xs text-[#8b1e0f] font-semibold tracking-wide">
                    Shree Mahavir Sthan Nayas Samiti
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <header
        suppressHydrationWarning
        className="sticky top-0 z-40 bg-[#faf7f2]/95 backdrop-blur-md border-b border-amber-900/10 shadow-sm"
      >
        {/* Top Info Bar */}
        <motion.div
          initial={isFirstVisit ? { opacity: 0, y: -8 } : { opacity: 1, y: 0 }}
          animate={stage === "centered" ? { opacity: 0, y: -8 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-[#8b1e0f] text-white text-xs py-2 px-4"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Daily Schedule: Opens 5:00 AM | Morning Aarti 5:00 PM</span>
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
        </motion.div>

        {/* Main Nav Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* Emblem & Name */}
          <div className="min-h-[44px] flex items-center">
            {stage !== "centered" ? (
              <motion.a
                href="#"
                layoutId="header-logo-brand"
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center gap-3 group"
              >
                <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform border border-amber-400/40">
                  <img
                    src="/images/logo.png"
                    alt="Mahavir Mandir Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="font-serif-title text-lg sm:text-xl font-bold tracking-tight text-[#2a1e17] group-hover:text-[#8b1e0f] transition-colors leading-snug">
                    Mahavir Mandir, Patna
                  </h1>
                  <p className="text-xs text-[#8b1e0f] font-semibold tracking-wide">
                    Shree Mahavir Sthan Nayas Samiti
                  </p>
                </div>
              </motion.a>
            ) : (
              <div className="w-48 h-11" />
            )}
          </div>

          {/* Navigation Links */}
          <motion.nav
            variants={navContainerVariants}
            initial={isFirstVisit ? "hidden" : "visible"}
            animate={stage === "centered" ? "hidden" : "visible"}
            className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-[#2a1e17]"
          >
            <motion.a variants={navItemVariants} href="#about" className="hover:text-[#8b1e0f] transition-colors">
              About Us
            </motion.a>
            <motion.a variants={navItemVariants} href="#services" className="hover:text-[#8b1e0f] transition-colors">
              Rituals & Offerings
            </motion.a>
            <motion.a variants={navItemVariants} href="#publications" className="hover:text-[#8b1e0f] transition-colors">
              Research & Publications
            </motion.a>
            <motion.a variants={navItemVariants} href="#online-services" className="hover:text-[#8b1e0f] transition-colors">
              Online Services
            </motion.a>
            <motion.a variants={navItemVariants} href="#health-institutes" className="hover:text-[#8b1e0f] transition-colors">
              Health Institutes
            </motion.a>
            <motion.a variants={navItemVariants} href="#contact" className="hover:text-[#8b1e0f] transition-colors">
              Contact Us
            </motion.a>
          </motion.nav>

          {/* Live Stream Button */}
          <motion.div
            initial={isFirstVisit ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
            animate={stage === "centered" ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="hidden sm:flex items-center gap-3"
          >
            <button
              onClick={onOpenLive}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-red-200 text-[#8b1e0f] font-bold text-xs shadow-sm hover:bg-red-50 transition-colors"
            >
              <Radio className="w-4 h-4 text-red-600 animate-pulse" />
              <span>Live Darshan</span>
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={isFirstVisit ? { opacity: 0 } : { opacity: 1 }}
            animate={stage === "centered" ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#2a1e17] hover:bg-amber-100/60"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#faf7f2] border-b border-amber-900/10 px-4 py-4 space-y-3 font-semibold text-xs text-[#2a1e17] shadow-lg">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#8b1e0f]">
              About Us
            </a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#8b1e0f]">
              Rituals & Offerings
            </a>
            <a href="#publications" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#8b1e0f]">
              Research & Publications
            </a>
            <a href="#online-services" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#8b1e0f]">
              Online Services
            </a>
            <a href="#health-institutes" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#8b1e0f]">
              Health Institutes
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#8b1e0f]">
              Contact Us
            </a>

            <div className="pt-2 border-t border-amber-900/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLive();
                }}
                className="w-full py-2.5 rounded-lg bg-red-600 text-white font-bold text-xs"
              >
                Watch Live Darshan Stream
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

