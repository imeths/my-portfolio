'use client';
import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "Imeth combines technical precision with creative flair. He doesn't just deliver a service; he delivers a result.",
    name: "Sarah Jenkins",
    role: "CEO, TechFlow",
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    text: "The AEO campaign completely changed our traffic sources. We are now ranking for AI searches we didn't even know existed.",
    name: "David Ross",
    role: "Founder, Envision Studio",
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 3,
    text: "Our sales for the Boxy.lk promotion doubled within a week. The visual strategy was spot on.",
    name: "Kasun Perera",
    role: "Marketing Head, Boxy.lk",
    color: "bg-orange-100 text-orange-600"
  },
  {
    id: 4,
    text: "Professional, timely, and incredibly skilled. The web app for SELTech is exactly what we needed for international growth.",
    name: "M. Irfan",
    role: "Director, SELTech Intl",
    color: "bg-green-100 text-green-600"
  },
  {
    id: 5,
    text: "I've worked with many digital marketers, but Imeth's data-driven approach is on another level. Highly recommended.",
    name: "Amanda Cole",
    role: "VP, RealEstate Co",
    color: "bg-pink-100 text-pink-600"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-54 w-full"> {/* Fixed height container to prevent layout jumps */}
      {reviews.map((review, index) => (
        <div
          key={review.id}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out transform ${
            index === current 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-8 pointer-events-none'
          }`}
        >
          <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl h-full flex flex-col justify-center shadow-sm relative overflow-hidden">
            {/* Decorative Quote Icon */}
            <div className="absolute top-4 right-6 opacity-10">
               <Quote size={60} className="text-slate-900" />
            </div>

            <p className="italic text-slate-600 text-lg mb-6 relative z-10 leading-relaxed">
              "{review.text}"
            </p>
            
            <div className="flex items-center gap-4 mt-auto">
               <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${review.color}`}>
                 {review.name.charAt(0)}
               </div>
               <div>
                  <p className="text-slate-900 font-bold text-sm">{review.name}</p>
                  <p className="text-slate-500 text-xs uppercase tracking-wider">{review.role}</p>
               </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Dots Indicator */}
      <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === current ? 'bg-blue-600 w-6' : 'bg-slate-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}