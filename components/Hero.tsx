
import React from 'react';
import { DEV_NAME, DEV_ROLE, DEV_BIO, GITHUB_URL, LINKEDIN_URL, FACEBOOK_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Dynamic Background elements */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px] animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400 mb-10 animate-bounce">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          AI Engineering Student
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black heading-font tracking-tighter mb-10 leading-[0.8] drop-shadow-2xl">
          <span className="block hover-glitch transition-all">CRAFTING</span>
          <span className="gradient-text italic">INTELLIGENCE</span>
        </h1>

        <div className="max-w-2xl mx-auto mb-16 relative">
          <p className="text-xl text-slate-400 leading-relaxed font-medium">
            Hi! Pháp đây. Mình kiến tạo tương lai bằng <span className="text-white">Python</span>, 
            tối ưu hóa dữ liệu với <span className="text-white">SQL</span> và đam mê 
            chinh phục các thử thách <span className="text-cyan-400">AI</span>.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-20">
          <a href="#projects" className="group relative px-10 py-5 bg-white text-black font-black rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10">EXPLORE WORKS</span>
            <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          
          <div className="flex items-center gap-4">
            {[
              { icon: 'fa-github', url: GITHUB_URL },
              { icon: 'fa-linkedin', url: LINKEDIN_URL },
              { icon: 'fa-facebook', url: FACEBOOK_URL }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" 
                className="w-14 h-14 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all text-xl"
              >
                <i className={`fa-brands ${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
