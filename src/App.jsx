import { useEffect } from 'react';
import HeroSection from './sections/HeroSection/HeroSection';
import ClientReviewSection from './sections/ClientReviewSection/ClientReviewSection';
import FAQSection from './sections/FAQSection/FAQSection';
import Navbar from './components/Navbar/Navbar';
import FeaturesSection from './sections/FeaturesSection/FeaturesSection';
import PricingSection from './sections/PricingSection/PricingSection';
import Footer from './components/Footer/Footer';
import Cta from './sections/Cta/Cta';

function App() {
  // Add light theme class to body
  useEffect(() => {
    document.body.classList.add('bg-light');
    
    return () => {
      document.body.classList.remove('bg-light');
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Grid Background - already added in the HeroSection component */}
      
      <div className="flex-grow">
        <div className="container mx-auto px-4">
          <Navbar />
        </div>
        
        <main>
          <HeroSection />
          {/* <TrustedBySection /> */}
          <FeaturesSection />
          <PricingSection />
          <ClientReviewSection />
          <FAQSection />
          <Cta />
          {/* <ContactSection /> */}
        </main>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;