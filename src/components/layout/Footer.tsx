import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight, TrendingUp } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-slate-300 pt-24 pb-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 flex items-center justify-center bg-white rounded-full border-2 border-primary-700 shadow-sm overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-primary-700 opacity-10"></div>
                 <TrendingUp className="text-primary-700 w-6 h-6 relative z-10" strokeWidth={2.5} />
              </div>
              <span className="text-2xl leading-none tracking-tight font-display text-white">
                <span className="font-serif">Channels</span><span className="font-serif font-bold">FinTrust</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Delivering premium financial technology solutions and investment management services since 2009.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-primary-600 transition-colors text-white border border-neutral-800 hover:border-primary-600 group">
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-display">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Contact Us', 'Client Portal'].map((item) => (
                <li key={item}>
                  <Link to="/" className="flex items-center hover:text-primary-500 transition-colors group text-slate-400">
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary-500 -ml-6 group-hover:ml-0 duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-display">Our Services</h3>
            <ul className="space-y-4">
              {['Investment Management', 'Financial Planning', 'Tax & Savings', 'Insurance Services'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="hover:text-primary-500 transition-colors text-slate-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-display">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <MapPin className="w-6 h-6 text-primary-600 mr-4 shrink-0 group-hover:text-primary-500 transition-colors" />
                <span className="text-slate-400 group-hover:text-slate-200 transition-colors">123 Financial District, Tech Park Avenue, NY 10001</span>
              </li>
              <li className="flex items-center group">
                <Phone className="w-6 h-6 text-primary-600 mr-4 shrink-0 group-hover:text-primary-500 transition-colors" />
                <span className="text-slate-400 group-hover:text-slate-200 transition-colors">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center group">
                <Mail className="w-6 h-6 text-primary-600 mr-4 shrink-0 group-hover:text-primary-500 transition-colors" />
                <span className="text-slate-400 group-hover:text-slate-200 transition-colors">contact@channelsft.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Channels Financial Technology. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
