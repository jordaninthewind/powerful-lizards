import { SiteNav } from '../../components/SiteNav';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import HeroSection from './components/HeroSection';
import { InventorySection } from './components/InventorySection';

import '../../App.css';
import './HomePage.css';

const HomePage = () => (
  <>
    <SiteNav />
    <div className="hp-root">
      <HeroSection />
      <AboutSection />
      <InventorySection />
      <ContactSection />
    </div>
  </>
);

export default HomePage;