import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre Nós", path: "/about" },
    { name: "Dúvidas", path: "/faq" },
    { name: "Contato", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-primary font-semibold"
      : "text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-primary transition-colors";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <span className="text-xl font-bold text-primary">
            Bem-vindo à Agiliza
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={`text-base font-medium ${isActive(link.path)}`}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5563984832805"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex bg-primary hover:bg-primary-dark text-white font-medium py-2.5 px-6 rounded-full items-center gap-2 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span className="material-icons-outlined text-xl">chat_bubble</span>
            <span>Fale Conosco</span>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="material-icons-outlined text-2xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 absolute w-full left-0 top-20 py-4 px-6 shadow-xl flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg py-2 ${isActive(link.path)}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/5563984832805"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors"
          >
            <span className="material-icons-outlined">chat_bubble</span>
            <span>Fale Conosco</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;