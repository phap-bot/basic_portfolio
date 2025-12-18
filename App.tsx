
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
      
      {/* AI Enhanced feature */}
      <ChatBot />
      
      {/* Global Scroll-to-top can be added here if desired */}
    </div>
  );
};

export default App;
