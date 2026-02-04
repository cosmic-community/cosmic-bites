import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🍜</span>
            <span className="font-bold text-xl text-gray-900">
              Wanderlust<span className="text-coral-500">Bites</span>
            </span>
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-coral-500 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/#latest" className="text-gray-600 hover:text-coral-500 text-sm font-medium transition-colors">
              Stories
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-coral-500 text-sm font-medium transition-colors">
              About
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Wanderlust Bites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}