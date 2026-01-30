
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold heading-font mb-4 text-white">My <span className="text-indigo-400">Journey</span></h2>
          <p className="text-slate-400 max-w-xl text-lg">Continuous learning and growth.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className={`bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl relative overflow-hidden group hover:border-sky-500/30 transition-all duration-300 ${idx === 0 ? 'lg:col-span-8' : idx === 1 ? 'lg:col-span-4' : 'lg:col-span-12'
                }`}
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-700/50 border border-slate-600/50 text-xs font-mono text-sky-400 mb-4">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold heading-font mb-2 text-slate-100 group-hover:text-sky-400 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-slate-400 font-medium text-sm uppercase tracking-wider">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center border border-slate-600/30 group-hover:border-sky-500/30 transition-all text-slate-400 group-hover:text-sky-400">
                    <i className={`fa-solid ${idx === 0 ? 'fa-graduation-cap' : idx === 1 ? 'fa-trophy' : 'fa-futbol'} text-lg`}></i>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-start leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 shrink-0"></span>
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
