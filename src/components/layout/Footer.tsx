import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight, TrendingUp } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-slate-300 pt-20 pb-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 border border-primary-600 rounded-full flex items-center justify-center bg-neutral-900 text-primary-600">
                <TrendingUp size={16} />
              </div>
              <span className="text-xl font-bold text-white font-display">Channels<span className="font-sans font-normal text-slate-300">FinTrust</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Delivering premium financial technology solutions and investment management services since 2009.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-primary-600 transition-colors text-white border border-neutral-800 hover:border-primary-600">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Contact Us', 'Client Portal'].map((item) => (
                <li key={item}>
                  <Link to="/" className="flex items-center hover:text-primary-500 transition-colors group">
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              {['Investment Management', 'Financial Planning', 'Tax & Savings', 'Insurance Services'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="hover:text-primary-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="w-6 h-6 text-primary-600 mr-4 shrink-0" />
                <span>123 Financial District, Tech Park Avenue, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-6 h-6 text-primary-600 mr-4 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-6 h-6 text-primary-600 mr-4 shrink-0" />
                <span>contact@channelsft.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Channels Financial Technology. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
