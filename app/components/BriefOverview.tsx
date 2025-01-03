'use client'

import { useEffect, useState } from 'react';

export const BriefOverview = () => {
  const [animClass, setAnimClass] = useState('opacity-0');

  useEffect(() => {
    // Animation d'entrée lorsque la section est rendue
    const timer = setTimeout(() => {
      setAnimClass('opacity-100 transform translate-y-0');
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`py-16 bg-gray-100 transition-all duration-500 ${animClass}`}>
      <div className="max-w-7xl mx-auto px-4 text-center">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Chiffres clés */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-4xl font-bold text-blue-600">300+</h3>
            <p className="mt-2 text-lg text-gray-600">Participants</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-4xl font-bold text-blue-600">40</h3>
            <p className="mt-2 text-lg text-gray-600">Champions</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-4xl font-bold text-blue-600">3</h3>
            <p className="mt-2 text-lg text-gray-600">Jours d'événement</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-4xl font-bold text-blue-600">7</h3>
            <p className="mt-2 text-lg text-gray-600">Panels thématiques</p>
          </div>
        </div>
      </div>
    </section>
  );
};
