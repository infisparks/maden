import React from 'react';
import { Feather, Clock, Shield } from 'lucide-react';

export default function Philosophy() {
  const values = [
    {
      icon: Feather,
      title: 'Elegant Design',
      description: 'Creating spaces that blend sophistication with functionality',
    },
    {
      icon: Clock,
      title: 'Timeless Appeal',
      description: 'Crafting environments that stand the test of time',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Committed to excellence in every detail',
    },
  ];

  return (
    <section className="py-20 bg-[#15302d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#f6db98] mb-16">
          Our Philosophy
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="inline-block p-4 bg-[#3c605b] rounded-full mb-6">
                <value.icon className="w-8 h-8 text-[#f6db98]" />
              </div>
              <h3 className="text-xl font-semibold text-[#f6db98] mb-4">
                {value.title}
              </h3>
              <p className="text-[#f6db98]/80">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}