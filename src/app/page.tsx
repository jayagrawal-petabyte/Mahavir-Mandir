"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import SanctumHistory from "@/components/SanctumHistory";
import ActivityCards from "@/components/ActivityCards";
import HealthInstitutesSection from "@/components/HealthInstitutesSection";
import Footer from "@/components/Footer";

// Modals
import DonationModal from "@/components/DonationModal";
import LiveDarshanModal from "@/components/LiveDarshanModal";
import PujaBookingModal from "@/components/PujaBookingModal";

export default function Home() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isLiveOpen, setIsLiveOpen] = useState(false);
  const [isPujaOpen, setIsPujaOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#2a1e17] relative">
      {/* Header */}
      <Header
        onOpenDonate={() => setIsDonateOpen(true)}
        onOpenLive={() => setIsLiveOpen(true)}
      />

      {/* Modern Hero Section */}
      <Hero
        onOpenDonate={() => setIsDonateOpen(true)}
        onOpenLive={() => setIsLiveOpen(true)}
      />

      {/* Services Grid (Strong Typography & Numbering - No icons, No pill badges) */}
      <ServicesGrid />

      {/* Sanctum Sanctorum & History */}
      <SanctumHistory />

      {/* Present Activity Cards Layout */}
      <ActivityCards />

      {/* Health Institutes Section */}
      <HealthInstitutesSection />

      {/* Clean 3-Column Footer */}
      <Footer />

      {/* Interactive Modals */}
      <DonationModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
      />

      <LiveDarshanModal
        isOpen={isLiveOpen}
        onClose={() => setIsLiveOpen(false)}
      />

      <PujaBookingModal
        isOpen={isPujaOpen}
        onClose={() => setIsPujaOpen(false)}
      />
    </main>
  );
}
