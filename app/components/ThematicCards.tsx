'use client'

import { FaLightbulb, FaRobot, FaShieldAlt, FaTree, FaFlask, FaBusinessTime } from 'react-icons/fa'; // Vous pouvez installer react-icons

export const ThematicCards = () => {
  return (
    <div className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Thématiques Principales</h2>

        {/* Grid des cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Leadership Inclusif */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:bg-blue-600 hover:text-white transition-all duration-300">
            <div className="mb-6">
              <FaLightbulb className="text-5xl text-blue-600 mx-auto group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-semibold group-hover:text-white">Leadership Inclusif</h3>
            <p className="mt-4 text-gray-700 group-hover:text-white">
              Développer des leaders inclusifs pour un avenir prospère et équitable en Afrique.
            </p>
          </div>

          {/* Innovation Numérique */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:bg-blue-600 hover:text-white transition-all duration-300">
            <div className="mb-6">
              <FaRobot className="text-5xl text-blue-600 mx-auto group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-semibold group-hover:text-white">Innovation Numérique</h3>
            <p className="mt-4 text-gray-700 group-hover:text-white">
              L'innovation numérique comme moteur du développement et de la transformation économique.
            </p>
          </div>

          {/* Intelligence Artificielle */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:bg-blue-600 hover:text-white transition-all duration-300">
            <div className="mb-6">
              <FaRobot className="text-5xl text-blue-600 mx-auto group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-semibold group-hover:text-white">Intelligence Artificielle</h3>
            <p className="mt-4 text-gray-700 group-hover:text-white">
              Comment l'IA transforme les industries et ouvre de nouvelles perspectives d'innovation.
            </p>
          </div>

          {/* Sécurité et Paix */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:bg-blue-600 hover:text-white transition-all duration-300">
            <div className="mb-6">
              <FaShieldAlt className="text-5xl text-blue-600 mx-auto group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-semibold group-hover:text-white">Sécurité et Paix</h3>
            <p className="mt-4 text-gray-700 group-hover:text-white">
              Construire des solutions pour un environnement de sécurité durable et la paix.
            </p>
          </div>

          {/* Environnement */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:bg-blue-600 hover:text-white transition-all duration-300">
            <div className="mb-6">
              <FaTree className="text-5xl text-blue-600 mx-auto group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-semibold group-hover:text-white">Environnement</h3>
            <p className="mt-4 text-gray-700 group-hover:text-white">
              Sensibiliser aux enjeux environnementaux pour un développement durable et responsable.
            </p>
          </div>

          {/* STEM */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:bg-blue-600 hover:text-white transition-all duration-300">
            <div className="mb-6">
              <FaFlask className="text-5xl text-blue-600 mx-auto group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-semibold group-hover:text-white">STEM</h3>
            <p className="mt-4 text-gray-700 group-hover:text-white">
              Promouvoir les sciences, la technologie, l'ingénierie et les mathématiques pour l'Afrique.
            </p>
          </div>

          {/* Entrepreneuriat */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:bg-blue-600 hover:text-white transition-all duration-300">
            <div className="mb-6">
              <FaBusinessTime className="text-5xl text-blue-600 mx-auto group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-semibold group-hover:text-white">Entrepreneuriat</h3>
            <p className="mt-4 text-gray-700 group-hover:text-white">
              Encourager l'entrepreneuriat et l'innovation pour créer des solutions aux défis sociaux.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
