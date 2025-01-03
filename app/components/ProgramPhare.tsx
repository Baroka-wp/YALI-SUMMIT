'use client'

import { useState, useEffect } from 'react';
import programmeData from '../../data/programmeData'; // Assurez-vous que le chemin est correct

export const ProgramPhare = () => {
  const [programme, setProgramme] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setProgramme(programmeData);
    };

    fetchData();
  }, []);

  if (!programme) {
    return <div>Chargement...</div>;
  }

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-8">Programme Phare</h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-white"></div>

          {/* Jour 1 */}
          {programme.jour1 && (
            <div className="flex items-center justify-between mb-12 animate__animated animate__fadeIn">
              <div className="flex items-center space-x-6 justify-start">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-125">
                  1
                </div>
                <div className="text-left max-w-xs">
                  <h3 className="text-2xl font-semibold">{programme.jour1.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-100">
                    {programme.jour1.points.map((point, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Jour 2 */}
          {programme.jour2 && (
            <div className="flex items-center justify-between mb-12 animate__animated animate__fadeIn">
              <div className="flex items-center space-x-6 justify-end">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-125">
                  2
                </div>
                <div className="text-left max-w-xs">
                  <h3 className="text-2xl font-semibold">{programme.jour2.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-100">
                    {programme.jour2.points.map((point, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Jour 3 */}
          {programme.jour3 && (
            <div className="flex items-center justify-between mb-12 animate__animated animate__fadeIn">
              <div className="flex items-center space-x-6 justify-start">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-125">
                  3
                </div>
                <div className="text-left max-w-xs">
                  <h3 className="text-2xl font-semibold">{programme.jour3.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-100">
                    {programme.jour3.points.map((point, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12">
          <a
            href="/programme-complet"
            className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 text-white py-3 px-8 rounded-full text-lg shadow-lg hover:bg-gradient-to-l transform transition-all hover:scale-110"
          >
            Voir le programme complet
          </a>
        </div>
      </div>
    </section>
  );
};
