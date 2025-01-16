import HeroSection from './sections/HeroSection/HeroSection';
import ClientReviewSection from './sections/ClientReviewSection/ClientReviewSection';
import FAQSection from './sections/FAQSection/FAQSection';
import Navbar from './components/Navbar/Navbar';
import FeaturesSection from './sections/FeaturesSection/FeaturesSection';
import PricingSection from './sections/PricingSection/PricingSection';
import Footer from './components/Footer/Footer';
import Cta from './sections/Cta/Cta';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <TrustedBySection /> */}
      <FeaturesSection />
      <PricingSection />
      <ClientReviewSection />
      <FAQSection />
      <Cta/>
      {/* <ContactSection /> */}
      <Footer />
    </>
  );
}

export default App;