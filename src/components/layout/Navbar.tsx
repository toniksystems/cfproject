import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronRight, TrendingUp } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="w-10 h-10 border-2 border-primary-600 rounded-full flex items-center justify-center bg-white dark:bg-neutral-900 z-10">
                 <TrendingUp className="text-primary-600 w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={cn("text-2xl font-bold font-display leading-none tracking-tight", isScrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white")}>
                Channels<span className="font-sans font-semibold">FinTrust</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400",
                  location.pathname === link.path 
                    ? "text-primary-600 dark:text-primary-400" 
                    : "text-slate-700 dark:text-slate-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors text-slate-700 dark:text-slate-300"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link to="/login">
              <Button size="sm" variant="primary" className="shadow-none">
                Client Portal
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors text-slate-700 dark:text-slate-300"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-primary-600"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-neutral-950 border-t border-slate-100 dark:border-neutral-900"
          >
            <div className="px-4 pt-2 pb-8 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-medium border-b border-slate-100 dark:border-neutral-800",
                    location.pathname === link.path
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-slate-700 dark:text-slate-300"
                  )}
                >
                  <div className="flex justify-between items-center">
                    {link.name}
                    <ChevronRight size={16} />
                  </div>
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Client Portal Login</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
