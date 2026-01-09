import React from 'react';
import Navbar from '@/components/layout/Navbar/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Popular from './components/Popular';
import ClientReview from './components/ClientReview';
import Amazing from './components/Amazing';
import Footer from '@/components/layout/Footer';
import Eventswiper from './components/Eventswiper';
const HomeEvent = () => {
  return (
    <section>
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Popular />
      <Eventswiper />
      <ClientReview />
      <Amazing />
    </section>
  );
};

export default HomeEvent;
