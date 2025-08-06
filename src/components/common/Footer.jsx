import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/navbar/logo.png';

export function Footer() {
  return (
    <footer className="bg-[#0f1f17] text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Fairmont Homes logo" className="h-10 w-auto" />
          </div>
          <div className="mt-2 text-sm">Building quality homes with transparency and care.</div>
        </div>
        <div>
          <div className="font-semibold mb-2">Explore</div>
          <div className="space-y-1 text-sm">
            <Link to="/" className="block hover:text-white">Home</Link>
            <Link to="/gallery" className="block hover:text-white">Gallery</Link>
            <Link to="/about" className="block hover:text-white">About</Link>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Resources</div>
          <div className="space-y-1 text-sm">
            <Link to="/" className="block hover:text-white">Pricing &amp; Plans</Link>
            <Link to="/" className="block hover:text-white">FAQ</Link>
            <Link to="/" className="block hover:text-white">Blog</Link>
            <Link to="contact" className="block hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <div className="text-sm">123 Fairmont Street, Calgary, AB</div>
          <div className="text-sm mt-1">
            <a href="mailto:info@fairmonthomes.com" className="hover:underline">
              xyzhomes.com
            </a>
          </div>
          <div className="text-sm mt-1">
            <a href="tel:+14031234567" className="hover:underline">
              +1 (403) 123-4567
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Fairmont Homes. All rights reserved.{' '}
        <span className="underline hover:text-white cursor-pointer">Privacy Policy</span>{' '}
        ·{' '}
        <span className="underline hover:text-white cursor-pointer">Terms</span>
      </div>
    </footer>
  );
}
