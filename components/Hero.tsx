
import React, { useState, useEffect, useCallback } from 'react';
import { EVENT_DETAILS } from '../constants';
import Logo from './Logo';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const calculateTimeLeft = useCallback(() => {
    // Target: 18th April 2026
    // Note: Month is 0-indexed in JS Date constructor, so 3 is April.
    const targetDate = new Date(2026, 3, 18, 9, 0, 0).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }, []);

  useEffect(() => {
    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px] animate-pulse delay-700 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <div className="mb-4">
           {/* Ensuring margin bottom so it doesn't crowd content below and doesn't overlap navbar */}
           <Logo size="lg" className="mb-16 mt-8" />
        </div>

        <div className="text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
            {EVENT_DETAILS.date}, {EVENT_DETAILS.year}
          </div>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed font-light">
            {EVENT_DETAILS.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
            <button className="px-12 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-600/30 transform hover:-translate-y-1">
              Inscribirse
            </button>
            <button className="px-12 py-4 glass text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all transform hover:-translate-y-1">
              Ver Agenda
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-3xl mx-auto">
            {[
              { label: 'Días', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Minutos', value: timeLeft.minutes },
              { label: 'Segundos', value: timeLeft.seconds }
            ].map((item, idx) => (
              <div key={idx} className="glass p-6 md:p-8 rounded-[2rem] text-center border-white/5 group hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-5xl md:text-6xl font-bold font-outfit mb-1 text-white group-hover:text-blue-400 transition-colors">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500 font-black">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
