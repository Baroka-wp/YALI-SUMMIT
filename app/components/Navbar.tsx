'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Détecte si l'utilisateur a fait défiler la page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`bg-white shadow-lg ${isScrolled ? 'fixed top-0 left-0 w-full z-10 transition-shadow duration-300 shadow-lg' : 'relative'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-semibold text-blue-600 hover:text-blue-700 transition duration-300">
              <img
                src="/images/logo.png"  // Référence de l'image dans le dossier public
                alt="YALI Summit Logo"
                className="h-10"  // Ajustez la taille du logo selon votre préférence
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/events" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Events
            </Link>
            <Link href="/agenda" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Agenda
            </Link>
            <Link href="/speakers" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Speakers
            </Link>
            <Link href="/attendees" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Attendees
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">
              About
            </Link>
            {/* Reserve Button */}
            <Link href="#reserve" className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg shadow-md transition duration-300">
              Réserver ma place
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">
          <Link href="/events" className="block text-gray-700 hover:text-blue-600 transition duration-300">
            Events
          </Link>
          <Link href="/agenda" className="block text-gray-700 hover:text-blue-600 transition duration-300">
            Agenda
          </Link>
          <Link href="/speakers" className="block text-gray-700 hover:text-blue-600 transition duration-300">
            Speakers
          </Link>
          <Link href="/attendees" className="block text-gray-700 hover:text-blue-600 transition duration-300">
            Attendees
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-blue-600 transition duration-300">
            About
          </Link>
          <Link href="#reserve" className="block text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-center shadow-md transition duration-300">
            Réserver ma place
          </Link>
        </div>
      )}
    </nav>
  )
}
