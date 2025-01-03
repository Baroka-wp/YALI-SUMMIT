import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // You can import icons here

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section: Important Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens importants</h3>
            <ul>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white">
                  Conditions d'utilisation
                </Link>
              </li>
            </ul>
          </div>

          {/* Middle Section: Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Réseaux sociaux</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/YALI" className="text-gray-400 hover:text-white" target="_blank">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://twitter.com/YALI" className="text-gray-400 hover:text-white" target="_blank">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://www.instagram.com/YALI" className="text-gray-400 hover:text-white" target="_blank">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://www.linkedin.com/YALI" className="text-gray-400 hover:text-white" target="_blank">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Right Section: Logo and Contact */}
          <div className="text-center md:text-right">
            <div className="mb-4">
              <img src="/logo.png" alt="YALI Summit" className="h-10 mx-auto md:mx-0" />
            </div>
            <p className="text-gray-400 mb-2">© 2025 YALI Summit. Tous droits réservés.</p>
            <p className="text-gray-400">Tel: +123 456 7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
