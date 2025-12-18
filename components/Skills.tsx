
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-5xl font-black heading-font mb-6 tracking-tight">MY <span className="text-lime-400">STACK</span></h2>
          <div className="h-1 w-20 bg-lime-400 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat} className="glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors"></div>
              
              <h3 className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                {cat}
              </h3>

              <div className="space-y-8">
                {SKILLS.filter(s => s.category === cat).map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-lg font-bold tracking-tight">{skill.name}</span>
                      <span className="text-[10px] font-bold text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-1 relative overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
