import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import HowItWorks from '../components/landing/HowItWorks';
import CampusRoles from '../components/landing/CampusRoles';
import Testimonials from '../components/landing/Testimonials';
import CTA from '../components/landing/CTA';
import Footer from '../components/landing/Footer';

const Home = () => {
  return (
    <div className="landing-page-root">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CampusRoles />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
