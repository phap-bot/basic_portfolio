
import React, { useState } from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  // Helper to get icon based on category
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'AI': return 'fa-brain';
      case 'Frontend': return 'fa-laptop-code';
      case 'Backend': return 'fa-server';
      case 'Tools': return 'fa-screwdriver-wrench';
      default: return 'fa-layer-group';
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-900">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/50 via-slate-900 to-slate-950 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-4 animate-pulse">System Capabilities</span>
          <h2 className="text-5xl md:text-7xl font-bold heading-font text-white mb-6 tracking-tight">
            TECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">ARSENAL</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg font-light">
            My digital weaponry for conquering complex challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Visual Selector (Left Side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <div
                key={cat}
                onMouseEnter={() => setActiveCategory(cat)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`group relative p-8 rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden
                    ${activeCategory === cat
                    ? 'bg-slate-800/80 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] scale-[1.02]'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
              >
                <div className={`absolute top-0 right-0 p-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full transition-transform duration-700 pointer-events-none
                     ${activeCategory === cat ? 'translate-x-0 translate-y-0' : 'translate-x-[100%] -translate-y-[100%]'}`}
                ></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-300
                      ${activeCategory === cat ? 'bg-cyan-500 text-black' : 'bg-slate-800 text-slate-400'}`}>
                    <i className={`fa-solid ${getCategoryIcon(cat)}`}></i>
                  </div>

                  <h3 className={`text-2xl font-bold heading-font mb-2 transition-colors ${activeCategory === cat ? 'text-white' : 'text-slate-300'}`}>
                    {cat}
                  </h3>
                  <p className="text-sm text-slate-500 font-mono">
                    {SKILLS.filter(s => s.category === cat).length} MODULES
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Visualization (Right Side) */}
          <div className="relative min-h-[400px] p-8 rounded-[2.5rem] bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

            <div className="space-y-8">
              {SKILLS.filter(s => activeCategory ? s.category === activeCategory : true).map((skill, idx) => (
                <div key={skill.name} className="group/item">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-lg font-bold text-slate-200 group-hover/item:text-cyan-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono text-cyan-500/60 opacity-0 group-hover/item:opacity-100 transition-opacity">
                      {skill.category} / {skill.level}%
                    </span>
                  </div>

                  {/* High-tech Progress Bar */}
                  <div className="h-2 w-full bg-slate-800 rounded-sm overflow-hidden flex gap-0.5">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 transition-all duration-300 ${(i * 5) < skill.level
                            ? 'bg-cyan-500 shadow-[0_0_5px_rgba(6,182,212,0.5)]'
                            : 'bg-slate-800'
                          } ${(i * 5) < skill.level && activeCategory === skill.category
                            ? 'animate-pulse'
                            : ''
                          }`}
                        style={{
                          opacity: (i * 5) < skill.level ? 1 - (i * 0.02) : 1, // Slight fade effect
                          transitionDelay: `${i * 20}ms`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}

              {activeCategory && SKILLS.filter(s => s.category === activeCategory).length === 0 && (
                <div className="h-full flex items-center justify-center text-slate-500 font-mono text-sm">
                  NO MODULES DETECTED
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
