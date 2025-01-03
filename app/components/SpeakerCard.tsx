// components/SpeakerCard.tsx
import React from 'react';

interface SpeakerProps {
  name: string;
  photo: string;
  bio: string;
  expertise: string;
  country: string;
}

const SpeakerCard: React.FC<SpeakerProps> = ({ name, photo, bio, expertise, country }) => {
  const fallbackImage = `https://via.placeholder.com/150/FFFFFF/000000?text=${name[0]}`;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img 
        src={photo || fallbackImage} 
        alt={name} 
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-center">{name}</h3>
      <p className="text-sm text-gray-500 text-center mb-2">{bio}</p>
      <p className="font-medium text-center text-blue-500">{expertise}</p>
      <p className="text-center text-gray-400">{country}</p>
    </div>
  );
};

export default SpeakerCard;  // Assurez-vous que c'est bien exporté par défaut
