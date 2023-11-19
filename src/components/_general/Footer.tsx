import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contact J.A.M WebDesign!</h2>
        <p className="text-lg mb-8">Personal links:</p>
        <div className="flex justify-center">
          <Link href="https://facebook.com" passHref>
            <div className="text-3xl text-white hover:text-gray-300 mx-4">
              <FaFacebook />
            </div>
          </Link>
          <Link href="https://twitter.com" passHref>
            <div className="text-3xl text-white hover:text-gray-300 mx-4">
              <FaTwitter />
            </div>
          </Link>
          <Link href="https://instagram.com" passHref>
            <div className="text-3xl text-white hover:text-gray-300 mx-4">
              <FaInstagram />
            </div>
          </Link>
        </div>
        <p className="mt-8 text-sm">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
