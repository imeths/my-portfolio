'use client';
import React, { useRef, useState } from 'react';
import { TrendingUp, Star, ShieldCheck } from 'lucide-react';

export default function TiltHero() {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glossPos, setGlossPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate rotation based on mouse distance from center
    // Dividing by 20 controls the sensitivity (higher = less rotation)
    const rotateX = (e.clientY - centerY) / -25;
    const rotateY = (e.clientX - centerX) / 25;

    setRotate({ x: rotateX, y: rotateY });
    setGlossPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Reset rotation smoothly when mouse leaves
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 perspective-1000"
      onMouseMove={(e) => { setIsHovering(true); handleMouseMove(e); }}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={ref}
        className="relative z-10 w-full max-w-[350px] lg:max-w-md transition-transform duration-200 ease-out preserve-3d"
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`,
        }}
      >
        {/* Gloss Effect Overlay */}
        {isHovering && (
          <div 
            className="absolute z-50 w-64 h-64 bg-white/20 blur-3xl rounded-full pointer-events-none mix-blend-overlay"
            style={{ 
              left: glossPos.x - 128, 
              top: glossPos.y - 128,
            }}
          />
        )}

        {/* --- MAIN IMAGE --- */}
        <img 
          src="https://i.ibb.co/WN0t7RLz/Imeth01.png" 
          alt="Imeth Sahabandu" 
          className="rounded-b-full rounded-t-[40px] shadow-2xl border-4 border-white object-cover h-[400px] lg:h-[500px] w-full"
        />

        {/* --- FLOATING 3D CARDS --- */}
        {/* Note: translateZ(50px) makes them pop out closer to the screen than the image */}
        
        {/* Card 1: ROI */}
        <div 
          className="absolute -bottom-6 left-0 right-0 mx-auto w-max md:bottom-8 md:right-auto md:-left-12 bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
          style={{ transform: 'translateZ(60px)' }} // Pushes this card forward in 3D space
        >
          <div className="bg-green-100 p-2 md:p-3 rounded-full text-green-600">
            <TrendingUp size={20} />
          </div>
          <div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">ROI Generated</p>
            <p className="text-slate-900 font-bold text-base md:text-lg">300% Avg</p>
          </div>
        </div>

        {/* Card 2: Rating */}
        <div 
          className="absolute top-4 right-4 md:top-50 md:-right-10 bg-white p-2 md:p-3 pr-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2"
          style={{ transform: 'translateZ(80px)' }} // Pushes this card even more forward
        >
          <div className="bg-yellow-100 p-1.5 rounded-full text-yellow-500">
            <Star size={14} fill="currentColor" />
          </div>
          <div>
            <p className="text-slate-900 font-bold text-xs md:text-sm">4.9 Rating</p>
            <p className="text-slate-400 text-[10px]">from 20+ clients</p>
          </div>
        </div>

        {/* Card 3: Certified */}
        <div 
          className="hidden md:flex absolute top-16 -left-16 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 items-center gap-3"
          style={{ transform: 'translateZ(40px)' }}
        >
          <div className="bg-blue-100 p-2 rounded-full text-blue-600">
            <ShieldCheck size={20} />
          </div>
          <div>
            <p className="text-slate-900 font-bold text-sm">Certified</p>
            <p className="text-slate-400 text-[10px]">AEO Expert</p>
          </div>
        </div>

      </div>
    </div>
  );
}