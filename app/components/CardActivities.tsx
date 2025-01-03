'use client'

import { useState } from 'react';

const activities = [
  'Soirée culturelle',
  'Gala de clôture',
  'Activités communautaires',
  'Marche sportive et don de sang',
  'Écotourisme',
  'Visites d\'entreprises',
  'Foire d\'innovation'
];

export const SpecialActivitiesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + activities.length) % activities.length
    );
  };

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-8">Activités Spéciales</h2>

        <div className="relative">
          {/* Carousel */}
          <div className="flex justify-center items-center">
            <button
              onClick={handlePrev}
              className="absolute left-0 z-10 text-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-4"
            >
              &lt;
            </button>
            
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-2xl font-semibold">{activities[currentIndex]}</h3>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 z-10 text-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-4"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
