import React from 'react';
import { Section } from '../components/ui/Section';
import { BarChart3, Wallet, PieChart, ShieldCheck, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ title, description, icon: Icon, features, reversed }: { title: string, description: string, icon: any, features: string[], reversed?: boolean }) => (
  <div className={`flex flex-col lg:flex-row gap-12 items-center py-12 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
    <div className="flex-1">
      <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
        <Icon size={32} />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white font-display">{title}</h2>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-slate-700 dark:text-slate-300">
            <Check className="text-primary-600 mr-3" size={20} />
            {feature}
          </li>
        ))}
      </ul>
      <Link to="/contact">
        <Button>Get Started</Button>
      </Link>
    </div>
    <div className="flex-1 w-full">
      <div className="aspect-video bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-xl relative group">
         <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-neutral-900/50 group-hover:opacity-0 transition-opacity duration-500" />
         {/* Placeholder for service image */}
         <div className="w-full h-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-slate-400">
            <Icon size={64} className="opacity-20" />
         </div>
      </div>
    </div>
  </div>
);

export const Services = () => {
  return (
    <div className="pt-20">
      <div className="bg-neutral-950 py-24 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-20">
           <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" className="w-full h-full object-cover grayscale" alt="Services" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">Our Services</h1>
          <p className="text-xl text-slate-300">Comprehensive financial solutions tailored to your needs.</p>
        </div>
      </div>

      <Section>
        <ServiceDetail 
          title="Investment Management"
          description="Our investment management services are designed to grow your wealth over time through strategic asset allocation and rigorous market analysis. We tailor our approach to your risk tolerance and financial goals."
          icon={BarChart3}
          features={['Portfolio Diversification', 'Risk Assessment', 'Market Analysis', 'Performance Monitoring']}
        />
        
        <div className="h-px bg-slate-200 dark:bg-neutral-800 my-8" />

        <ServiceDetail 
          title="Financial Management"
          description="We provide holistic financial management services to help you organize your finances, manage debt, and plan for major life events. Gain control over your financial future with our expert guidance."
          icon={Wallet}
          features={['Budgeting & Planning', 'Debt Management', 'Cash Flow Analysis', 'Retirement Planning']}
          reversed
        />

        <div className="h-px bg-slate-200 dark:bg-neutral-800 my-8" />

        <ServiceDetail 
          title="Tax & Savings"
          description="Maximize your savings and minimize your tax liability with our specialized tax and savings strategies. We help you navigate complex tax laws to ensure you keep more of what you earn."
          icon={PieChart}
          features={['Tax Optimization', 'Savings Strategies', 'Estate Planning', 'Compliance']}
        />

        <div className="h-px bg-slate-200 dark:bg-neutral-800 my-8" />

        <ServiceDetail 
          title="Insurance Services"
          description="Protect yourself, your family, and your assets with our comprehensive insurance solutions. We offer a range of insurance products to safeguard against unforeseen events."
          icon={ShieldCheck}
          features={['Life Insurance', 'Health Insurance', 'Asset Protection', 'Liability Coverage']}
          reversed
        />
      </Section>
    </div>
  );
};
