import React, { useCallback, useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { MissionVisionSection } from './components/sections/MissionVisionSection';
import { ColdTrackShowcase } from './components/sections/ColdTrackShowcase';
import { WhyUsSection } from './components/sections/WhyUsSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { Footer } from './components/layout/Footer';
import { EstimateModal } from './components/ui/EstimateModal';
import { services } from './data/services';

export const App: React.FC = () => {
  const [estimateService, setEstimateService] = useState<string | null>(null);

  const openEstimate = useCallback((service = services[0].title) => setEstimateService(service), []);
  const closeEstimate = useCallback(() => setEstimateService(null), []);

  return (
    <div className="min-h-screen bg-ink text-white font-poppins overflow-x-hidden">
      <Navbar onOpenEstimate={() => openEstimate()} />

      <main>
        <HeroSection onOpenEstimate={() => openEstimate()} />
        <ServicesSection onSelectService={openEstimate} />
        <MissionVisionSection />
        <WhyUsSection />
        <ColdTrackShowcase />
        <TestimonialsSection onConnect={() => openEstimate()} />
      </main>

      <Footer />

      {estimateService && <EstimateModal initialService={estimateService} onClose={closeEstimate} />}
    </div>
  );
};

export default App;
