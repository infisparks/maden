import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Philosophy() {
  const visionPoints = [
    'Globally recognized leader in luxury construction and interior design.',
    'Transforming lifestyles with innovative and sustainable solutions.',
    'Creating high-quality solutions for a better future.',
  ];

  const missionPoints = [
    'Craft exceptional living and working spaces.',
    'Reflect elegance and functionality in every project.',
    'Maintain unwavering commitment to quality and client satisfaction.',
  ];

  return (
    <section className="py-20 bg-[#15302d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#f6db98] mb-16">
          Our Vision & Mission
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Our Vision */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-[#f6db98] mb-4">
              Our Vision
            </h3>
            <p className="text-[#f6db98]/80 mb-6">
              To be a globally recognized leader in luxury construction and interior design, transforming lifestyles with innovative, sustainable, and high-quality solutions that create a better future.
            </p>
            <ul className="space-y-2">
              {visionPoints.map((point, index) => (
                <li key={index} className="flex items-start justify-center">
                  <CheckCircle className="w-5 h-5 text-[#f6db98] mr-2 mt-1" />
                  <span className="text-[#f6db98]/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Mission */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-[#f6db98] mb-4">
              Our Mission
            </h3>
            <p className="text-[#f6db98]/80 mb-6">
              To craft exceptional living and working spaces that reflect elegance, functionality, and our unwavering commitment to quality and client satisfaction.
            </p>
            <ul className="space-y-2">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start justify-center">
                  <CheckCircle className="w-5 h-5 text-[#f6db98] mr-2 mt-1" />
                  <span className="text-[#f6db98]/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
