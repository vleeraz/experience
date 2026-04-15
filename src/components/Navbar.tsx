import { useState, useEffect } from 'react';
import { navLinks } from '../data/content';
import { useScrollSpy } from '../hooks/useScrollSpy';

const sectionIds = ['about', 'programs', 'retreats', 'gallery', 'team', 'booking'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Awaken" className="h-10 w-auto" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeId === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-orange'
                      : scrolled
                        ? 'text-charcoal hover:text-orange'
                        : 'text-charcoal/80 hover:text-orange'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#booking"
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-orange to-orange-light text-white text-sm font-semibold rounded-full shadow-lg shadow-orange/25 hover:shadow-orange/40 hover:-translate-y-0.5 transition-all"
        >
          Book Now
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-charcoal"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-cream-dark px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-charcoal font-medium hover:text-orange transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="block text-center mt-2 px-5 py-2.5 bg-gradient-to-r from-orange to-orange-light text-white font-semibold rounded-full"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
