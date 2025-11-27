import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'dark';
}

export const Section: React.FC<SectionProps> = ({ children, className, id, background = 'white' }) => {
  const bgStyles = {
    white: 'bg-white dark:bg-neutral-950',
    gray: 'bg-neutral-50 dark:bg-neutral-900',
    dark: 'bg-neutral-900 text-white',
  };

  return (
    <section id={id} className={cn('py-20 px-4 md:px-8', bgStyles[background], className)}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export const SectionHeader: React.FC<{ title: string; subtitle?: string; center?: boolean; className?: string }> = ({ 
  title, 
  subtitle, 
  center = true,
  className 
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={cn('mb-16', center && 'text-center', className)}
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white font-display">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
    <div className={cn("h-1 w-20 bg-primary-600 mt-6 rounded-full", center && "mx-auto")} />
  </motion.div>
);
