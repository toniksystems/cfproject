import React from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-20">
      <div className="bg-neutral-950 py-24 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">Contact Us</h1>
          <p className="text-xl text-slate-300">We'd love to hear from you. Get in touch with us today.</p>
        </div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Get In Touch</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Would you like to speak to one of our financial advisers? Fill out the form or contact us directly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Visit Us</h4>
                  <p className="text-slate-600 dark:text-slate-400">123 Financial District, Tech Park Avenue, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Call Us</h4>
                  <p className="text-slate-600 dark:text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Email Us</h4>
                  <p className="text-slate-600 dark:text-slate-400">contact@channelsft.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Working Hours</h4>
                  <p className="text-slate-600 dark:text-slate-400">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-neutral-800">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="+1 (555) 000-0000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <Button size="lg" className="w-full md:w-auto">Send Message</Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};
