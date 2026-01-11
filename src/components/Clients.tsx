import React from 'react';
import P1 from '@/assets/P1.png';
import P2 from '@/assets/P2.png';
import P3 from '@/assets/P3.png';
import P4 from '@/assets/P4.png';
import P5 from '@/assets/P5.png';
import P6 from '@/assets/P6.svg';
import P7 from '@/assets/P7.png';
import P8 from '@/assets/P8.png';
import P9 from '@/assets/P9.png';

const Client = () => {
  const clients = [
    { id: 1, logo: P1, alt: 'Client 1' },
    { id: 2, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMLFFT8iUbZVxJv96AjR68bC7WwM35urRwQ&s", alt: 'Client 2' },
    { id: 3, logo: P3, alt: 'Client 3' },
    { id: 4, logo: P4, alt: 'Client 4' },
    { id: 5, logo: P5, alt: 'Client 5' },
    { id: 6, logo: P6, alt: 'Client 6' },
    { id: 7, logo: P7, alt: 'Client 7' },
    { id: 8, logo: P8, alt: 'Client 8' },
    { id: 9, logo: P9, alt: 'Client 9' },
  ];

  // Duplicate the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join hundreds of companies that rely on our solutions
          </p>
        </div>

        {/* Logos Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div className="flex overflow-hidden py-4">
            <div className="flex animate-scroll">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 mx-4 md:mx-6"
                >
                  <div className="group relative">
                    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-5 transform hover:-translate-y-1 border border-slate-200 hover:border-blue-300">
                      <div className="w-28 h-16 md:w-36 md:h-20 flex items-center justify-center">
                        <img 
                          src={client.logo} 
                          alt={client.alt}
                          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 35s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Client;