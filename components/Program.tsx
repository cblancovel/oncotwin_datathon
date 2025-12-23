
import React from 'react';
import { PROGRAM } from '../constants';

const Program: React.FC = () => {
  return (
    <section id="program" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">Agenda del Evento</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Un día intensivo diseñado para profesionales de la salud, investigadores y expertos en tecnología.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {PROGRAM.map((item, idx) => (
            <div key={item.id} className="group relative pl-12 pb-12 last:pb-0 border-l border-slate-700 ml-4">
              {/* Timeline dot */}
              <div className={`absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-slate-900 shadow-sm z-10 transition-colors duration-300 ${
                item.type === 'keynote' ? 'bg-blue-500 group-hover:bg-blue-400' : 
                item.type === 'workshop' ? 'bg-green-500 group-hover:bg-green-400' : 'bg-slate-600'
              }`}></div>
              
              <div className="glass p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.05]">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                  <span className="text-sm font-bold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">{item.time}</span>
                  <span className="text-xs uppercase font-black tracking-widest text-slate-500">{item.type}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                
                {item.speaker && (
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
                    <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                    <span className="text-sm font-medium text-slate-300">Speaker: <span className="text-white">{item.speaker}</span></span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
