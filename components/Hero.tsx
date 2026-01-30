
import React from 'react';
import { DEV_NAME, GITHUB_URL, LINKEDIN_URL, FACEBOOK_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Sophisticated Background Gradient */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">

        {/* Minimalist Badge */}
        <div className="inline-block mb-8">
          <div className="px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-md text-xs font-medium text-sky-400 tracking-wider uppercase">
            AI Engineer & Developer
          </div>
        </div>

        {/* Editorial Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold heading-font tracking-tight mb-8 leading-[1.1] text-white">
          Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Intelligence</span><br />
          <span className="text-slate-500 font-medium text-4xl md:text-6xl lg:text-7xl mt-2 block">with Code & Data.</span>
        </h1>

        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg text-slate-400 leading-relaxed font-light">
            Hi, I'm <span className="text-white font-medium">{DEV_NAME}</span>. I build robust AI systems and scalable web applications,
            bridging the gap between <span className="text-sky-400">complex algorithms</span> and <span className="text-indigo-400">human experience</span>.
          </p>
        </div>

        {/* Professional Call to Actions */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a href="#projects" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 bg-transparent border border-slate-700 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
            Contact Me
          </a>
        </div>

        {/* Minimal Social Links */}
        <div className="flex justify-center items-center gap-8">
          {[
            { icon: 'fa-github', url: GITHUB_URL },
            { icon: 'fa-linkedin', url: LINKEDIN_URL },
            { icon: 'fa-facebook', url: FACEBOOK_URL }
          ].map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              className="text-slate-500 hover:text-sky-400 transition-colors text-2xl"
            >
              <i className={`fa-brands ${social.icon}`}></i>
            </a>
          ))}
        </div>

      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <i className="fa-solid fa-arrow-down"></i>
      </div>
    </section>
  );
};

export default Hero;
