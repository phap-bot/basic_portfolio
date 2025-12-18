
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-5xl font-black heading-font mb-6 tracking-tight uppercase">MY <span className="text-cyan-400">JOURNEY</span></h2>
          <p className="text-slate-500 font-bold tracking-widest text-xs uppercase italic">Hành trình không ngừng nghỉ</p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {EXPERIENCES.map((exp, idx) => (
            <div 
              key={idx} 
              className={`glass-card p-10 rounded-[2.5rem] relative overflow-hidden group ${
                idx === 0 ? 'lg:col-span-8' : idx === 1 ? 'lg:col-span-4' : 'lg:col-span-12'
              }`}
            >
              {/* Background Glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] group-hover:bg-cyan-500/10 transition-colors"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 mb-3 block">
                      {exp.period}
                    </span>
                    <h3 className="text-3xl font-black heading-font mb-2 group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-slate-400 font-bold text-sm uppercase tracking-wider">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/30 transition-all">
                    <i className={`fa-solid ${idx === 0 ? 'fa-graduation-cap' : idx === 1 ? 'fa-trophy' : 'fa-futbol'} text-xl text-slate-300 group-hover:text-cyan-400`}></i>
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-start leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 mr-4 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
