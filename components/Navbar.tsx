
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
    { name: 'Home', href: '#about', id: 'about' },
    { name: 'Stack', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? 'w-[90%] md:w-auto' : 'w-[95%] md:w-auto'
      }`}>
      <div className={`mx-auto rounded-full px-6 py-3 flex items-center justify-between gap-8 transition-all duration-500 ${isScrolled
        ? 'bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-[1.01]'
        : 'bg-transparent border border-transparent shadow-none'
        }`}>

        <a
          href="#about"
          onClick={scrollToTop}
          className="text-lg font-bold tracking-tight text-slate-100 flex items-center gap-1 group"
        >
          PHÁP<span className="text-sky-400">.</span>DEV
        </a>

        <div className="hidden md:flex items-center space-x-1 bg-slate-800/50 rounded-full p-1 border border-slate-700/30 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === link.id
                ? 'bg-slate-700 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 pl-4 md:border-l md:border-slate-700/50 text-xs font-medium text-slate-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="hidden sm:inline">Available for work</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
