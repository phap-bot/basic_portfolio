
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import ParticleBackground from './components/ParticleBackground';
import SettingsPanel from './components/SettingsPanel';

const App: React.FC = () => {
  const [isSnowEnabled, setIsSnowEnabled] = useState(true);

  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      {isSnowEnabled && <ParticleBackground />}

      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />

      {/* Interactive Features */}
      <ChatBot />
      <SettingsPanel
        isSnowEnabled={isSnowEnabled}
        toggleSnow={() => setIsSnowEnabled(!isSnowEnabled)}
      />
    </div>
  );
};

export default App;
