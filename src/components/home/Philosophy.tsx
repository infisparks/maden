"use client"

import founder from "../../icon/founder.jpg"

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

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

  const founderContent = "Mr. Ubaid Zariwala, Founder and CEO of Maden MultiCorp, brings over 7+ years of expertise in the real estate industry. With a passion for transforming the way people perceive luxury living, Mr. Zariwala envisioned Maden MultiCorp as a beacon of innovation and affordability. Guided by his dream of offering premium living spaces that blend opulence with practicality, he established Maden MultiCorp to make luxury homes accessible to all. Under Mr. Zariwala's leadership, Maden MultiCorp has become synonymous with quality, reliability, and value. His visionary approach drives the company's mission to redefine real estate by creating homes that are not just spaces to live in but milestones of aspiration and achievement.";

  return (
    <section className="py-20 bg-[#15302d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#f6db98] mb-16">
          Our Vision & Mission
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Our Vision */}
          <div className="bg-[#1a3d39] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#f6db98] mb-6">
              Our Vision
            </h3>
            <p className="text-[#f6db98]/90 mb-8 text-lg">
              To be a globally recognized leader in luxury construction and interior design, transforming lifestyles with innovative, sustainable, and high-quality solutions that create a better future.
            </p>
            <ul className="space-y-4">
              {visionPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#f6db98] mr-3 mt-1"><CheckIcon /></span>
                  <span className="text-[#f6db98]/80 text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Mission */}
          <div className="bg-[#1a3d39] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#f6db98] mb-6">
              Our Mission
            </h3>
            <p className="text-[#f6db98]/90 mb-8 text-lg">
              To craft exceptional living and working spaces that reflect elegance, functionality, and our unwavering commitment to quality and client satisfaction.
            </p>
            <ul className="space-y-4">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#f6db98] mr-3 mt-1"><CheckIcon /></span>
                  <span className="text-[#f6db98]/80 text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* About the Founder */}
        <div className="mt-20">
          <h3 className="text-3xl font-semibold text-center text-[#f6db98] mb-12">
            About the Founder
          </h3>
          <div className="flex flex-col items-center lg:flex-row lg:items-start gap-12">
            <div className="w-full lg:w-1/3 order-1 lg:order-2">
              <div className="relative w-full h-auto max-w-md mx-auto">
                <img
                  src={founder}
                  alt="Mr. Ubaid Zariwala"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                  style={{maxHeight: "400px"}}
                />
              </div>
            </div>
            <div className="w-full lg:w-2/3 order-2 lg:order-1">
              <p className="text-[#f6db98]/90 text-lg leading-relaxed">
                {founderContent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}