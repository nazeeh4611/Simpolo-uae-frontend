import React from 'react';
import { ImageWithFallback } from '../../util/Fallback';

function ValuableClients() {
  const clients = [
    { id: 1, name: 'Emaar Properties', logo: '/emaar.webp' },
    { id: 2, name: 'Dubai Properties', logo: '/dub.webp' },
    { id: 3, name: 'PIVOT', logo: '/pivot.webp' },
    { id: 4, name: 'SOBHA', logo: '/sobha.webp' },
    { id: 5, name: 'Damac Properties', logo: '/damac.webp' },
    { id: 6, name: 'NSHAMA', logo: '/nshama.webp' },
    { id: 7, name: 'Main 10', logo: '/main.webp' },
    { id: 8, name: 'ASAK', logo: '/asak.webp' },
    { id: 9, name: 'Rotana Hotels', logo: '/rotana.webp' },
    { id: 10, name: 'ASHIYANA', logo: '/ashiyna.webp' },
    { id: 11, name: 'TRI', logo: '/tri.webp' },
    { id: 12, name: 'GCC', logo: '/gcc.webp' },
    { id: 13, name: 'Splash', logo: '/splash.webp' },
    { id: 14, name: 'Najmat al sharq', logo: '/najma.webp' },
    { id: 15, name: 'Crystal', logo: '/crystal.webp' },
    { id: 16, name: 'AL TURATH AL A RABI', logo: '/turat.webp' },
    { id: 17, name: 'REAL ESTATE', logo: '/real.webp' },
    { id: 18, name: 'APPAREL GROUP', logo: '/Apprel.webp' },
  ];

  // Duplicate list for seamless loop
  const scrollingClients = [...clients, ...clients];

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-gray-900 text-gray-300 text-sm font-semibold">
            Trusted By
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our <span className="trading-text">Valuable Clients</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Proudly serving prestigious organizations across the UAE and GCC region
          </p>
        </div>

        {/* Auto scrolling container */}
        <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md py-10">
          <div className="flex gap-10 animate-client-scroll w-max">
            {scrollingClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex items-center justify-center bg-white rounded-xl p-4 w-[180px] h-24 shadow-lg"
              >
                <ImageWithFallback
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-12 w-auto object-contain opacity-80"
                  fallbackSrc="/clients/fallback-logo.png"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-10">
          Trusted by 300+ leading organizations across the UAE
        </p>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes client-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-client-scroll {
            animation: client-scroll 35s linear infinite;
          }
        `}
      </style>
    </section>
  );
}

export default ValuableClients;
