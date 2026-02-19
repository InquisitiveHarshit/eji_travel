import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="h-auto md:h-20 flex items-center border-b border-bg-light bg-white sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex items-center justify-between py-4 md:py-0">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <img src="/logo.svg" alt="EJI Travel" className="h-10 sm:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#itinerary-anchor" className="text-text hover:text-accent font-medium transition-smooth no-underline text-sm md:text-base">
              Itinerary
            </a>
            <a href="#" className="text-text hover:text-accent font-medium transition-smooth no-underline text-sm md:text-base">
              About
            </a>
            <a href="#" className="text-text hover:text-accent font-medium transition-smooth no-underline text-sm md:text-base">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl text-primary`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 py-4 border-t border-bg-light mt-2">
            <a
              href="#itinerary-anchor"
              className="text-text hover:text-accent font-medium transition-smooth no-underline text-base py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Itinerary
            </a>
            <a
              href="#"
              className="text-text hover:text-accent font-medium transition-smooth no-underline text-base py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="text-text hover:text-accent font-medium transition-smooth no-underline text-base py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
