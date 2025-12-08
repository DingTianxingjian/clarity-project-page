import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  grayBackground?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, grayBackground = false }) => {
  return (
    <section id={id} className={`py-12 ${grayBackground ? 'bg-gray-50' : 'bg-white'} ${className}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        {children}
      </div>
    </section>
  );
};
