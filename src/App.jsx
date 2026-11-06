import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EmergencyBar from './components/EmergencyBar';
import QuickNeeds from './components/QuickNeeds';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Calculator from './components/Calculator';
import CoverageAreas from './components/CoverageAreas';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-brand-500 selection:text-slate-950 font-sans">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <QuickNeeds />
        <Services />
        <WhyUs />
        <Calculator />
        <CoverageAreas />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Call & WhatsApp Bar */}
      <EmergencyBar />
    </div>
  );
}
