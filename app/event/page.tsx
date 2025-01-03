import React from 'react'

export default function Events() {
    const events = [
      {
        title: "Cérémonie d'ouverture",
        date: "15 Nov 2024",
        time: "09:00 - 10:30",
        description: "Lancement officiel du YALI Africa Learning Summit 2024"
      },
      {
        title: "Leadership Workshop",
        date: "16 Nov 2024",
        time: "10:00 - 12:00",
        description: "Développez vos compétences en leadership avec des experts"
      },
      {
        title: "Innovation Forum",
        date: "17 Nov 2024",
        time: "14:00 - 16:00",
        description: "Découvrez les dernières innovations en Afrique"
      }
    ];
  
    return (
      <div className="min-h-screen px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">Événements</h1>
          <div className="grid gap-6">
            {events.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <div className="flex gap-4 text-gray-600 mb-3">
                  <span>{event.date}</span>
                  <span>{event.time}</span>
                </div>
                <p className="text-gray-700">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }