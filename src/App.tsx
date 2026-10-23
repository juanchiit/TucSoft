import React, { useCallback, useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { MissionVisionSection } from './components/sections/MissionVisionSection';
import { ColdTrackShowcase } from './components/sections/ColdTrackShowcase';
import { WhyUsSection } from './components/sections/WhyUsSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { Footer } from './components/layout/Footer';
import { DemoModal } from './components/ui/DemoModal';

export const App: React.FC = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  const openDemo = useCallback(() => setDemoOpen(true), []);
  const closeDemo = useCallback(() => setDemoOpen(false), []);

  return (
    <div className="min-h-screen bg-ink text-white font-poppins overflow-x-hidden">
      <Navbar onOpenDemo={openDemo} />

      <main>
        <HeroSection onOpenDemo={openDemo} />
        <ServicesSection />
        <MissionVisionSection />
        <WhyUsSection />
        <ColdTrackShowcase />
        <TestimonialsSection onOpenDemo={openDemo} />
      </main>

      <Footer />

      {demoOpen && <DemoModal onClose={closeDemo} />}
    </div>
  );
};

export default App;
