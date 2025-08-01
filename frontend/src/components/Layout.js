import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Palette, Heart, Camera, User, FileText, Shield } from "lucide-react";

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Startseite", icon: Heart },
    { path: "/gallery", label: "Galerie", icon: Camera },
    { path: "/ueber-mich", label: "Über mich", icon: User },
  ];

  const footerItems = [
    { path: "/impressum", label: "Impressum", icon: FileText },
    { path: "/datenschutz", label: "Datenschutz", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-teal-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-rose-200/30' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Palette className="w-8 h-8 text-rose-400 group-hover:text-rose-500 transition-colors duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-300 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                Kreative Welten
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                      isActive
                        ? 'bg-gradient-to-r from-rose-200 to-purple-200 text-purple-700 shadow-md'
                        : 'text-gray-600 hover:text-purple-600 hover:bg-white/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg bg-white/80 text-purple-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-rose-100 to-purple-100 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Palette className="w-6 h-6 text-rose-400" />
                <span className="text-xl font-bold text-gray-700">Kreative Welten</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Entdecke die Magie des Handwerks und lass deiner Kreativität freien Lauf. 
                Jedes Projekt erzählt eine einzigartige Geschichte.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-rose-200 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-rose-500" />
                </div>
                <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                  <Palette className="w-4 h-4 text-purple-500" />
                </div>
                <div className="w-8 h-8 bg-teal-200 rounded-full flex items-center justify-center">
                  <Camera className="w-4 h-4 text-teal-500" />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Navigation</h3>
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Rechtliches</h3>
              <div className="space-y-2">
                {footerItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-rose-200 mt-8 pt-8 text-center">
            <p className="text-gray-500">
              © 2025 Kreative Welten. Mit {' '}
              <Heart className="w-4 h-4 inline text-rose-400" />
              {' '} handgemacht.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;