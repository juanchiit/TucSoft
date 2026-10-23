import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { MissionVisionSection } from './components/sections/MissionVisionSection';
import { ColdTrackShowcase } from './components/sections/ColdTrackShowcase';
import { WhyUsSection } from './components/sections/WhyUsSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { Footer } from './components/layout/Footer';
import { EstimateModal } from './components/ui/EstimateModal';

export const App: React.FC = () => {
  const [estimateModalOpen, setEstimateModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ink text-white font-poppins overflow-x-hidden">
      <Navbar onOpenEstimate={() => setEstimateModalOpen(true)} />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <MissionVisionSection />
        <WhyUsSection />
        <ColdTrackShowcase />
        <TestimonialsSection onConnect={() => setEstimateModalOpen(true)} />
      </main>

      <Footer />

      <EstimateModal
        isOpen={estimateModalOpen}
        onClose={() => setEstimateModalOpen(false)}
      />
    </div>
  );
};

export default App;
