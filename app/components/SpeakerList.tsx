// ../app/components/Speakerlist.tsx
import React from 'react';
import SpeakerCard from './SpeakerCard'; // Assurez-vous que le chemin vers SpeakerCard est correct
import { speakers } from '../../data/speaker'; // Assurez-vous que le chemin est correct

const SpeakersList = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-8">Les Intervenants de cet Événement</h2> {/* Titre ajouté */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              photo={speaker.photo}
              bio={speaker.bio}
              expertise={speaker.expertise}
              country={speaker.country}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersList; // Assurez-vous que le composant est bien exporté par défaut
