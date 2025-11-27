import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, ShieldCheck, Wallet, PieChart, Users, Briefcase, CheckCircle } from 'lucide-react';
import { Section, SectionHeader } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-100 dark:border-neutral-800 group"
  >
    <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{description}</p>
    <Link to="/services" className="text-primary-600 dark:text-primary-400 font-medium flex items-center hover:gap-2 transition-all">
      Learn More <ArrowRight size={16} className="ml-1" />
    </Link>
  </motion.div>
);

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Financial Background" 
            className="w-full h-full object-cover opacity-10 dark:opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-transparent dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-900/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-primary-50 dark:bg-primary-900/10 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-6 border border-primary-100 dark:border-primary-900/30">
              Leading Financial Technology
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6 font-display">
              Smart <span className="text-gradient">Investing</span> for Your Future
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-lg">
              We combine expert financial advice with cutting-edge technology to help you grow, protect, and manage your wealth efficiently.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="shadow-primary-500/25">Get A Quote</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Contact Us</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl opacity-20 blur-2xl animate-pulse" />
            <div className="relative glass-panel p-8 rounded-2xl">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Total Balance</p>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white">$1,240,500.00</h3>
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  +12.5%
                </div>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600">
                        <BarChart3 size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Investment Portfolio</p>
                        <p className="text-xs text-slate-500">Growth Fund</p>
                      </div>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-white">+$4,200</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work / Services */}
      <Section background="gray">
        <SectionHeader 
          title="How We Work" 
          subtitle="Comprehensive financial solutions tailored to your unique goals and needs."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            icon={BarChart3}
            title="Investment Mgmt"
            description="Strategic portfolio management designed to maximize returns while minimizing risk."
          />
          <ServiceCard 
            icon={Wallet}
            title="Financial Mgmt"
            description="Holistic financial planning to secure your present and future monetary health."
          />
          <ServiceCard 
            icon={PieChart}
            title="Tax & Savings"
            description="Optimized tax strategies and efficient savings plans to preserve your wealth."
          />
          <ServiceCard 
            icon={ShieldCheck}
            title="Insurance Services"
            description="Comprehensive coverage options to protect what matters most to you."
          />
        </div>
      </Section>

      {/* Company Overview */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
              alt="Team Meeting" 
              className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-600 rounded-full opacity-10 blur-3xl" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white font-display">
              Empowering Your Financial Success Since 2009
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              At Channels Financial Technology, we are dedicated to providing top-tier financial services. Our team of experts works tirelessly to ensure your investments are managed with precision and care.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              We believe in transparency, integrity, and results. Whether you are an individual investor or a large corporation, we have the tools and expertise to help you succeed in today's complex financial landscape.
            </p>
            <Link to="/about">
              <Button variant="primary">Read More About Us</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Statistics */}
      <section className="py-20 bg-neutral-950 relative overflow-hidden border-y border-neutral-900">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center group">
              <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display group-hover:text-primary-500 transition-colors">2009</h4>
              <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">Year Founded</p>
            </div>
            <div className="text-center group">
              <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display group-hover:text-primary-500 transition-colors">632</h4>
              <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">Finances Managed</p>
            </div>
            <div className="text-center group">
              <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display group-hover:text-primary-500 transition-colors">35+</h4>
              <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">Business Consults</p>
            </div>
            <div className="text-center group">
              <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display group-hover:text-primary-500 transition-colors">309</h4>
              <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <Section background="gray">
        <SectionHeader title="Why Choose Us" subtitle="Our core values define who we are and how we serve you." />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Expert Guidance', desc: 'Access to seasoned financial professionals with years of industry experience.' },
            { title: 'Tailored Solutions', desc: 'Strategies customized to fit your specific financial goals and risk tolerance.' },
            { title: 'Innovative Tech', desc: 'Utilizing the latest financial technology for real-time analysis and reporting.' },
            { title: 'Transparency', desc: 'Clear, upfront communication about fees, risks, and potential returns.' },
            { title: 'Security', desc: 'Bank-grade security measures to protect your sensitive financial data.' },
            { title: '24/7 Support', desc: 'Dedicated support team available to assist you whenever you need it.' },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-primary-100 dark:hover:border-primary-900/50">
              <CheckCircle className="text-primary-600 shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">{item.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <Section>
        <div className="bg-neutral-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden border border-neutral-800">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-600 rounded-full opacity-20 blur-3xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Subscribe to Our Newsletter</h2>
            <p className="text-slate-400 mb-8 text-lg">Stay updated with the latest financial trends, market insights, and company news.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 bg-white"
              />
              <Button variant="primary" size="lg">
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};
