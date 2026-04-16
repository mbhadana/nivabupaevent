import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import cityLogo from '../assets/city-logo.svg';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Speaker videos', href: '/speakers' },
    { name: 'Highlight videos', href: '/keynotes' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Get your photos', href: '/photos' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : 'initial'}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src={cityLogo} alt="Niva Bupa" style={{ height: '72px', width: 'auto' }} />
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
