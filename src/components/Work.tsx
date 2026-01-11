import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Lightbulb, Zap, ArrowRight } from 'lucide-react';

export default function Work() {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const stepRefs = useRef([]);

  const steps = [
    {
      icon: MessageSquare,
      title: "Consultation",
      description: "Discuss your energy needs.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Lightbulb,
      title: "Custom Solutions",
      description: "Receive tailored recommendations.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Zap,
      title: "Implementation",
      description: "Enjoy your clean energy system.",
      color: "from-amber-500 to-orange-600"
    }
  ];

  useEffect(() => {
    setTimeout(() => setHeaderVisible(true), 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const index = parseInt(target.getAttribute('data-index') || '0');
            setVisibleSteps((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-secondary text-white py-6 sm:py-8 lg:py-10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className={`relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            How It Works
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-emerald-50 max-w-2xl mx-auto">
            Transitioning to clean energy is simple with Kriya. Follow these easy steps to get started.
          </p>
        </div>
      </div>

      {/* Steps in Row */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-2 sm:pb-3 lg:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleSteps.includes(index);
            
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) {
                    stepRefs.current[index] = el;
                    el.setAttribute('data-index', index.toString());
                  }
                }}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl transform hover:scale-110 transition-all duration-300 relative z-10 ${
                      isVisible ? 'scale-100' : 'scale-0'
                    }`} style={{ transitionDelay: `${index * 150 + 200}ms` }}>
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    {/* Pulse Effect */}
                    <div className={`absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${step.color} opacity-20 ${
                      isVisible ? 'animate-ping' : ''
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="text-4xl font-bold text-slate-200">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow (between steps on desktop) */}
                {index < steps.length - 1 && (
                  <div className={`hidden md:block absolute top-10 -right-4 lg:-right-6 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`} style={{ transitionDelay: `${index * 150 + 400}ms` }}>
                    <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 text-slate-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}