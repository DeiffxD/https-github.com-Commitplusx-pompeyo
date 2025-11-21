import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PinkBanner } from './components/PinkBanner';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { FloatingCTA } from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <PinkBanner />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <FloatingCTA />
    </div>
  );
};

export default App;
