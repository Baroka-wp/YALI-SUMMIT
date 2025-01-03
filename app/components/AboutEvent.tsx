'use client'

import { useEffect, useState } from 'react';

export const AboutEvent = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Fonction pour récupérer les données de la vidéo
  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        // Exemple de requête API pour obtenir l'URL de la vidéo teaser
        const response = await fetch('/api/video-teaser'); // Remplacer par l'API réelle
        const data = await response.json();
        if (data && data.videoUrl) {
          setVideoUrl(data.videoUrl);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération de la vidéo:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">À propos de l'événement</h2>

        {/* Description concise de l'événement */}
        <p className="text-xl text-gray-700 mb-8">
          Le YALI Alumni Summit 2025, prévu à Cotonou, au Bénin, rassemble des leaders africains et des innovateurs pour
          discuter des enjeux critiques du continent, notamment le leadership inclusif, la paix, l'innovation numérique
          et l'entrepreneuriat.
        </p>

        {/* Importance et impact attendu */}
        <p className="text-lg text-gray-600 mb-8">
          Cet événement a pour objectif de renforcer la collaboration entre les jeunes leaders africains et de promouvoir
          des solutions durables pour un développement économique et social inclusif. L'impact attendu est une transformation
          positive des sociétés africaines, avec des leaders mieux préparés à relever les défis du futur.
        </p>

        {/* Public cible */}
        <p className="text-lg text-gray-600 mb-8">
          Le sommet s'adresse aux jeunes professionnels, aux entrepreneurs, aux activistes, aux innovateurs, ainsi qu'aux
          représentants des gouvernements et des organisations internationales.
        </p>

        {/* Vidéo teaser (si disponible) */}
        <div className="mb-8">
          {loading ? (
            <p>Chargement de la vidéo...</p>
          ) : videoUrl ? (
            <div>
              <h3 className="text-xl font-semibold mb-4">Vidéo teaser de l'événement</h3>
              <iframe
                width="560"
                height="315"
                src={videoUrl}
                title="Teaser YALI Alumni Summit 2025"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <p>Aucune vidéo teaser disponible pour le moment.</p>
          )}
        </div>
      </div>
    </section>
  );
};
