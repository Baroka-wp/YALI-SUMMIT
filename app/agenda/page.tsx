import React from 'react'

export default function Agenda() {
    const schedule = [
      {
        time: "09:00 - 10:30",
        sessions: [
          {
            title: "Session d'ouverture",
            location: "Salle principale",
            speaker: "Dr. Sarah Johnson"
          }
        ]
      },
      {
        time: "11:00 - 12:30",
        sessions: [
          {
            title: "Leadership et Innovation",
            location: "Salle A",
            speaker: "Prof. John Smith"
          }
        ]
      }
    ];
  
    return (
      <div className="min-h-screen px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">Agenda</h1>
          <div className="grid gap-8">
            {schedule.map((timeSlot, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">{timeSlot.time}</h3>
                {timeSlot.sessions.map((session, sessionIndex) => (
                  <div key={sessionIndex} className="ml-4">
                    <h4 className="font-medium">{session.title}</h4>
                    <p className="text-gray-600">{session.location} | {session.speaker}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }