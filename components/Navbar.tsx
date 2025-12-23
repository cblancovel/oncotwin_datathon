
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-1 border-b border-white/10' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo in navbar should be subtle but visible */}
          <Logo size="sm" showSubtitle={false} className="origin-left transform -translate-x-12 opacity-90 hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-slate-400">
          <a href="#about" className="hover:text-blue-400 transition-colors">Sobre el Evento</a>
          <a href="#program" className="hover:text-blue-400 transition-colors">Programa</a>
          <a href="#speakers" className="hover:text-blue-400 transition-colors">Ponentes</a>
          <a href="#collaborators" className="hover:text-blue-400 transition-colors">Colaboradores</a>
          <button className="bg-white text-slate-900 hover:bg-blue-500 hover:text-white px-8 py-2.5 rounded-full font-black transition-all shadow-xl hover:shadow-blue-500/40 transform active:scale-95">
            Inscribirse
          </button>
        </div>

        <button className="lg:hidden text-white p-2 glass rounded-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
