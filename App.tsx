
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Program from './components/Program';
import Collaborators from './components/Collaborators';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="about" className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-8 leading-tight">
                  Uniendo la Tecnología y la <span className="text-blue-400">Curación</span>
                </h2>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                  <p>
                    ONCOTWIN es el primer desafío de datos oncológicos sintéticos diseñado para romper los silos de información en el tratamiento del cáncer.
                  </p>
                  <p>
                    A través de los <strong className="text-white">Gemelos Digitales</strong>, podemos simular respuestas terapéuticas de forma personalizada, reduciendo riesgos en ensayos clínicos y acelerando el tiempo de llegada de nuevos fármacos al paciente.
                  </p>
                  <p>
                    Los <strong className="text-white">Datos Sintéticos</strong> nos permiten colaborar globalmente sin comprometer la identidad de un solo paciente, cumpliendo con las normativas más estrictas como el RGPD.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass p-8 rounded-3xl mt-12 flex flex-col justify-end">
                  <div className="text-4xl font-bold font-outfit mb-2 text-green-400">100%</div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">Privacidad</div>
                </div>
                <div className="glass p-8 rounded-3xl flex flex-col justify-end">
                  <div className="text-4xl font-bold font-outfit mb-2 text-blue-400">20+</div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">Ponentes</div>
                </div>
                <div className="glass p-8 rounded-3xl flex flex-col justify-end">
                  <div className="text-4xl font-bold font-outfit mb-2 text-purple-400">500+</div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">Asistentes</div>
                </div>
                <div className="glass p-8 rounded-3xl -mt-12 flex flex-col justify-end">
                  <div className="text-4xl font-bold font-outfit mb-2 text-blue-300">Global</div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">Investigación</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Program />
        
        <Collaborators />
      </main>

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;
