
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <Logo size="sm" showSubtitle={false} className="origin-left transform -ml-20 mb-4" />
            <p className="text-slate-500 text-base leading-relaxed mt-2">
              Impulsando el futuro de la oncología digital mediante la creación ética de gemelos digitales y el intercambio seguro de datos sintéticos.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 w-full md:w-auto">
            <div>
              <h4 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-slate-400">Evento</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">Sobre nosotros</a></li>
                <li><a href="#program" className="hover:text-blue-400 transition-colors">Programa</a></li>
                <li><a href="#speakers" className="hover:text-blue-400 transition-colors">Ponentes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-slate-400">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Aviso Legal</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-slate-400">Contacto</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">@</span> info@oncotwin.org
                </li>
                <li>Auditorio Biomédico</li>
                <li>Madrid, España</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs uppercase tracking-widest">
          <span>© {new Date().getFullYear()} ONCOTWIN Synthetic Oncology Data Challenge</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Github</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
