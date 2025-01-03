import React from 'react'

export default function About() {
    return (
      <div className="min-h-screen px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">À propos</h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Le YALI Africa Learning Summit 2024 est l'événement phare pour les jeunes leaders africains. 
              Cette année, nous nous réunissons à Capetown pour une semaine d'apprentissage, d'échange et 
              de networking.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Notre Mission</h2>
            <p className="mb-6">
              Développer la prochaine génération de leaders africains à travers des formations intensives, 
              du mentorat et des opportunités de networking.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Objectifs du Summit</h2>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Renforcer les compétences en leadership des participants</li>
              <li className="mb-2">Faciliter le partage d'expériences entre les pays africains</li>
              <li className="mb-2">Créer des opportunités de collaboration internationale</li>
              <li className="mb-2">Promouvoir l'innovation et l'entrepreneuriat en Afrique</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }