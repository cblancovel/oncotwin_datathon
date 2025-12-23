
import React from 'react';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = "", showSubtitle = true, size = 'md' }) => {
  const sizeClasses = {
    sm: "scale-[0.35]",
    md: "scale-[0.55]",
    lg: "scale-100",
    xl: "scale-125"
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className} ${size === 'sm' || size === 'md' ? '-my-12' : ''}`}>
      <div className={`relative flex items-center justify-center transition-transform ${sizeClasses[size]}`}>
        {/* Decorative circular dots background */}
        <svg width="420" height="420" viewBox="0 0 420 420" className="absolute animate-[spin_80s_linear_infinite]">
          <g fill="none" strokeWidth="1">
            {[...Array(28)].map((_, i) => {
              const angle = (i * 360) / 28;
              const radius = 180;
              const x = 210 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 210 + radius * Math.sin((angle * Math.PI) / 180);
              const colors = ['#8b5cf6', '#3b82f6', '#10b981', '#60a5fa', '#a78bfa'];
              const dotSize = 1.5 + (i % 6) * 0.8;
              return (
                <circle 
                  key={i} 
                  cx={x} 
                  cy={y} 
                  r={dotSize} 
                  fill={colors[i % colors.length]} 
                  className="opacity-60 transition-opacity hover:opacity-100"
                />
              );
            })}
          </g>
        </svg>

        {/* Main Logo Text Content */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center font-outfit font-black tracking-tight leading-none italic">
            <span className="text-6xl text-blue-500 uppercase tracking-tighter">Onco</span>
            <span className="text-6xl text-green-500 uppercase tracking-tighter ml-1">Twin</span>
          </div>
          
          {showSubtitle && (
            <div className="mt-6 flex flex-col items-center w-full">
              {/* Decorative line matching the image style */}
              <div className="flex items-center gap-2 w-full justify-center opacity-70 mb-2">
                <div className="h-[1.5px] w-20 bg-gradient-to-r from-transparent to-blue-400"></div>
                <svg width="60" height="12" viewBox="0 0 60 12" className="text-blue-400">
                  <path d="M0 6 Q 15 0, 30 6 T 60 6" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div className="h-[1.5px] w-20 bg-gradient-to-l from-transparent to-blue-400"></div>
              </div>
              <span className="text-lg font-semibold tracking-[0.25em] text-slate-300 uppercase whitespace-nowrap">
                Synthetic Oncology Data Challenge
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logo;
