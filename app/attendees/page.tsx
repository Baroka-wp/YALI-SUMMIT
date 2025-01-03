import React from 'react'

  // src/app/attendees/page.tsx
export default function Attendees() {
    const attendees = [
      {
        name: "Marie Dupont",
        country: "Sénégal",
        sector: "Education"
      },
      {
        name: "John Doe",
        country: "Kenya",
        sector: "Technology"
      }
    ];
  
    return (
      <div className="min-h-screen px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">Liste des Participants</h1>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-600">Nom</th>
                  <th className="px-6 py-3 text-left text-gray-600">Pays</th>
                  <th className="px-6 py-3 text-left text-gray-600">Secteur</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {attendees.map((attendee, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4">{attendee.name}</td>
                    <td className="px-6 py-4">{attendee.country}</td>
                    <td className="px-6 py-4">{attendee.sector}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  