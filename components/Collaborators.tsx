
import React from 'react';
import { COLLABORATORS } from '../constants';

const Collaborators: React.FC = () => {
  return (
    <section id="collaborators" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-outfit font-bold mb-4">Colaboradores</h2>
          <p className="text-slate-400">Las instituciones y empresas que hacen posible ONCOTWIN.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {COLLABORATORS.map((collab) => (
            <a 
              key={collab.id} 
              href={collab.url}
              className="glass aspect-[2/1] rounded-2xl flex items-center justify-center p-8 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 border-white/5"
            >
              <img src={collab.logo} alt={collab.name} className="max-h-full max-w-full object-contain" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
