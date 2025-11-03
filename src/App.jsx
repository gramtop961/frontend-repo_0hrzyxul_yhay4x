import React from 'react';
import Hero from './components/Hero.jsx';
import AboutServices from './components/AboutServices.jsx';
import Portfolio from './components/Portfolio.jsx';
import ContactFooter from './components/ContactFooter.jsx';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white scroll-smooth">
      <Hero />
      <AboutServices />
      <Portfolio />
      <ContactFooter />
    </div>
  );
}
