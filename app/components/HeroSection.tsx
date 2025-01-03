'use client' // This marks the file as a client-side component

import React, { useState, useEffect } from 'react';

export const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const targetDate = new Date('2025-04-09T00:00:00'); // Event start date
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = targetDate.getTime() - currentTime;
      if (distance <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft(distance);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div
      className="relative bg-cover bg-center text-white py-24"
      style={{ backgroundImage: 'url(/images/bg.jpg)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">

        {/* Title and Subtitle */}
        <h1 className="text-5xl font-bold mb-6">YALI ALUMNI SUMMIT 2025 - BENIN</h1>
        <p className="text-xl mb-8">
          Inspirer l'Afrique de Demain : Leadership inclusif, Paix, Innovation et Technologie pour une Croissance Durable
        </p>

        {/* Dates and Location */}
        <p className="text-lg mb-4">9-11 Avril 2025</p>
        <p className="text-lg mb-8">Lieu: Cotonou, Bénin</p>

        {/* Countdown Timer */}
        <div className="text-xl mb-6">
          <p>Compte à rebours jusqu'à l'événement:</p>
          <div className="font-semibold text-2xl">
            {days} jours {hours} heures {minutes} minutes {seconds} secondes
          </div>
        </div>

        {/* Call to Action Button */}
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
          S'inscrire maintenant
        </button>
      </div>
    </div>
  );
};
