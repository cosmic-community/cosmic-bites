'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🍜</span>
              <span className="font-bold text-xl text-gray-900">
                Wanderlust<span className="text-coral-500">Bites</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-600 hover:text-coral-500 font-medium transition-colors">
                Home
              </Link>
              <Link href="/#latest" className="text-gray-600 hover:text-coral-500 font-medium transition-colors">
                Stories
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Rendered outside header for proper stacking */}
      <div
        className={`fixed inset-0 bg-black/50 z-[100] md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />

      {/* Mobile Menu Drawer - Rendered outside header for proper stacking */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 bg-white z-[101] transform transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <span className="font-bold text-lg text-gray-900">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-gray-600 hover:text-gray-900"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="block py-3 px-4 text-gray-700 hover:bg-coral-50 hover:text-coral-600 rounded-lg font-medium transition-colors"
          >
            🏠 Home
          </Link>
          <Link
            href="/#latest"
            onClick={() => setIsMenuOpen(false)}
            className="block py-3 px-4 text-gray-700 hover:bg-coral-50 hover:text-coral-600 rounded-lg font-medium transition-colors"
          >
            📖 Latest Stories
          </Link>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            Powered by Cosmic
          </p>
        </div>
      </div>
    </>
  );
}