import React from 'react';
import Navbar from '@/components/layout/Navbar/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Mission from './components/Mission';
import Auth from './components/Auth';
import Commitment from './components/Commitment';
import Quality from './components/Quality';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const slideUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  return (
    <section className="overflow-hidden">
      <Hero />
      <motion.div {...slideUp}>
        <Story />
      </motion.div>
      <motion.div {...slideUp}>
        <Mission />
      </motion.div>
      <motion.div {...slideUp}>
        <Auth />
      </motion.div>
      <motion.div {...slideUp}>
        <Commitment />
      </motion.div>
      <motion.div {...slideUp}>
        <Quality />
      </motion.div>
    </section>
  );
};

export default AboutUs;
