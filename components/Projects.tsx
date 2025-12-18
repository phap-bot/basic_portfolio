
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl font-black heading-font mb-6 tracking-tight">SELECTED <span className="text-violet-500">WORKS</span></h2>
            <p className="text-slate-400 text-lg">Hành trình biến ý tưởng thành hiện thực thông qua AI và code.</p>
          </div>
          <a href="#" className="px-8 py-3 rounded-full border border-white/10 font-bold hover:bg-white hover:text-black transition-all group shrink-0">
            DISCOVER ALL <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="glass-card rounded-[2.5rem] overflow-hidden group flex flex-col h-full">
              <div className="relative h-72 overflow-hidden p-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-4 rounded-[2rem] bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  <a href={project.github} target="_blank" className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors shadow-2xl">
                    <i className="fa-brands fa-github text-xl"></i>
                  </a>
                  <a href={project.link} target="_blank" className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors shadow-2xl">
                    <i className="fa-solid fa-arrow-up-right-from-square text-lg"></i>
                  </a>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-cyan-400 px-3 py-1 bg-cyan-400/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-black heading-font mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                   <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Case Study</span>
                   <i className="fa-solid fa-arrow-right text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
