// PrivacyPolicyPage.tsx

import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import AnimatedSection from '../components/shared/AnimatedSection';

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        subtitle="Your Privacy Matters to Us"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection>
          {/* Our Story */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#15302d] mb-4">Our Story</h2>
            <p>
              At Maden Multicorp LLP, we redefine luxury with a harmonious blend of sophistication and accessibility. With over 30 years of legacy in the construction industry, we bring decades of expertise into a new era, embracing cutting-edge techniques and contemporary design under a bold new brand name.
            </p>
            <p className="mt-4">
              Our mission is to deliver unparalleled quality, combining innovative designs with budget-conscious solutions. Whether it's bespoke construction projects or meticulously crafted interiors, our work is a testament to excellence, innovation, and precision.
            </p>
          </section>
          
          {/* Our Office */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#15302d] mb-4">Our Office</h2>
            <p>
              A Legacy of Excellence, A Vision for the Future
            </p>
            <p className="mt-4">
              Founded on three decades of experience, Maden Multicorp LLP represents the culmination of tradition and progress. Our team comprises seasoned professionals and dynamic new-generation innovators, ensuring we stay ahead of the curve while maintaining the highest standards of craftsmanship.
            </p>
          </section>
          
          {/* Additional Business Content */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#15302d] mb-4">Why Choose Maden Multicorp LLP?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Luxury Made Accessible:</strong> Premium quality projects tailored to fit various budgets without compromising on excellence.</li>
              <li><strong>People-Centric Expertise:</strong> Our dedicated team is our greatest asset, working with passion and precision to deliver impeccable results.</li>
              <li><strong>Trust Through Transparency:</strong> From concept to completion, our clients are at the heart of every decision, fostering partnerships built on integrity.</li>
              <li><strong>Proven Legacy:</strong> Over seven years of success in the construction industry.</li>
              <li><strong>Innovative Design:</strong> Blending timeless architecture with modern functionality.</li>
              <li><strong>Customer-First Approach:</strong> Personalized solutions that exceed expectations.</li>
              <li><strong>Skilled Team:</strong> A blend of experienced veterans and ambitious young talents who collaborate to deliver transformative spaces.</li>
            </ul>
          </section>
          
          {/* Vision and Mission */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#15302d] mb-4">Our Vision & Mission</h2>
            <p>
              <strong>Our Vision:</strong> To be a globally recognized leader in luxury construction and interior design, transforming lifestyles with innovative, sustainable, and high-quality solutions that create a better future.
            </p>
            <p className="mt-4">
              <strong>Our Mission:</strong> To craft exceptional living and working spaces that reflect elegance, functionality, and our unwavering commitment to quality and client satisfaction.
            </p>
          </section>
          
          {/* Why Choose Us */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#15302d] mb-4">Why Choose Maden Multicorp LLP?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Expert Team:</strong> A team of experts with unmatched dedication and skill.</li>
              <li><strong>Cutting-edge Techniques:</strong> Ensuring modern, efficient construction.</li>
              <li><strong>Proven Commitment:</strong> Delivering projects on time and within budget.</li>
            </ul>
          </section>
          
          {/* Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#15302d] mb-4">Privacy Policy</h2>
            <p>
              Your privacy is important to us. It is Maden Multicorp LLP's policy to respect your privacy regarding any information we may collect from you across our website, <a href="https://www.madenmulticorp.com" className="text-[#b48c2e] underline">https://www.madenmulticorp.com </a>, and other sites we own and operate.
            </p>
            <p className="mt-4">
              We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
            </p>
            <p className="mt-4">
              We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.
            </p>
            <p className="mt-4">
              We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
            </p>
            <p className="mt-4">
              Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
            </p>
            <p className="mt-4">
              You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
            </p>
            <p className="mt-4">
              Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
            </p>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
}
