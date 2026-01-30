import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Tracking section để làm nổi bật menu tương ứng
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Me', href: '#about', id: 'about' },
    { name: 'Stack', href: '#skills', id: 'skills' },
    { name: 'Works', href: '#projects', id: 'projects' },
    { name: 'Journey', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-max z-50 transition-all duration-500 rounded-full px-8 py-3 flex items-center gap-12 ${
      isScrolled ? 'bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl py-3 scale-[0.98]' : 'bg-transparent py-5 scale-100'
    }`}>
      <a 
        href="#about" 
        onClick={scrollToTop}
        className="text-xl font-extrabold tracking-tighter heading-font group flex items-center gap-2"
      >
        PHÁP<span className="text-cyan-400 group-hover:text-lime-400 transition-colors">.</span>DEV
      </a>
      
      <div className="hidden md:flex items-center space-x-10">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className={`relative text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-white ${
              activeSection === link.id ? 'text-cyan-400' : 'text-slate-400'
            }`}
          >
            {link.name}
            {activeSection === link.id && (
              <span className="absolute -bottom-1 left-0 w-full h-px bg-cyan-400 animate-in fade-in slide-in-from-left-2 duration-500"></span>
            )}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4 border-l border-white/10 pl-8">
         <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></div>
         <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 hidden sm:inline">ONLINE</span>
      </div>
    </nav>
  );
};

export default Navbar;
