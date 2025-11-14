import React, {useState} from 'react';
import './premium.css';
import HeaderPremium from './components/HeaderPremium';
import HeroPremium from './components/HeroPremium';
import Updates from './components/Updates';
import Tutorial from './components/Tutorial';
import FooterPremium from './components/FooterPremium';
import BlogSection from './components/BlogSection';
import TeamSection from './components/TeamSection';
import EventSection from './components/EventSection';
import SponsorSection from './components/SponsorSection';
import MobileNav from './components/MobileNav';

export default function App(){
  const [mobileOpen, setMobileOpen] = useState(false);
  
  return (
    <>
      <HeaderPremium onToggleMobile={()=>setMobileOpen(v=>!v)} />
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <HeroPremium />
      <Updates />
      <EventSection />
      <TeamSection />
      <BlogSection />
      <SponsorSection />
      <Tutorial />
      <FooterPremium />
    </>
  );
}