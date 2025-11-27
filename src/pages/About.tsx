import React from 'react';
import { Section, SectionHeader } from '../components/ui/Section';
import { Target, Eye, Award, Briefcase, Building2, Users, Globe } from 'lucide-react';

const ValueCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white dark:bg-neutral-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-neutral-800 text-center hover:border-primary-200 dark:hover:border-primary-900 transition-colors">
    <div className="w-16 h-16 mx-auto bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-500 mb-6">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
  </div>
);

export const About = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-neutral-950 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" className="w-full h-full object-cover grayscale" alt="Office" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">About Channels FT</h1>
          <p className="text-xl text-slate-300">Building the future of finance with integrity and innovation.</p>
        </div>
      </div>

      {/* Main Content */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white font-display">Who We Are</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Channels Financial Technology is a premier financial services provider established in 2009. We specialize in delivering comprehensive investment and financial management solutions to a diverse clientele.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Our operational history is built on a foundation of trust, expertise, and a relentless pursuit of excellence. We bridge the gap between traditional financial wisdom and modern technological advancements.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="rounded-xl shadow-lg w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Team" />
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="rounded-xl shadow-lg w-full h-64 object-cover mt-8 grayscale hover:grayscale-0 transition-all duration-500" alt="Meeting" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ValueCard 
            icon={Target}
            title="Our Mission"
            description="To empower individuals and businesses with the financial tools and knowledge they need to achieve lasting prosperity."
          />
          <ValueCard 
            icon={Eye}
            title="Our Vision"
            description="To be the leading global provider of integrated financial technology solutions, setting the standard for innovation."
          />
          <ValueCard 
            icon={Award}
            title="Our Values"
            description="Integrity, Transparency, Customer-Centricity, and Excellence in everything we do."
          />
        </div>
      </Section>

      {/* Clients */}
      <Section background="gray">
        <SectionHeader title="Our Clients" subtitle="We serve a wide range of institutional and individual clients." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {[
            { icon: Building2, name: 'Banks' },
            { icon: Briefcase, name: 'Mutual Funds' },
            { icon: Globe, name: 'Intermediaries' },
            { icon: Award, name: 'Insurance Cos' },
            { icon: Users, name: 'Investors' },
          ].map((client, idx) => (
            <div key={idx} className="flex flex-col items-center p-6 bg-white dark:bg-neutral-900 rounded-xl hover:shadow-md transition-all border border-transparent hover:border-primary-100 dark:hover:border-primary-900">
              <client.icon size={40} className="text-primary-600 mb-4" />
              <h4 className="font-bold text-slate-900 dark:text-white">{client.name}</h4>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
