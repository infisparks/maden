// src/pages/AboutPage.tsx

// import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/shared/PageHeader';
// import { awards } from '../data/awards';
import building from "../icon/logo.jpeg"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="About Us"
        subtitle="Crafting Timeless Elegance in Every Detail"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
      />
      
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        {/* Our Story Section */}
        <motion.section 
          className="py-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#15302d] mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                At Maden Multicorp LLP, we redefine luxury with a harmonious blend of sophistication and accessibility. With over 30 years of legacy in the construction industry, we bring decades of expertise into a new era, embracing cutting-edge techniques and contemporary design under a bold new brand name.
              </p>
              <p className="text-lg text-gray-700">
                Our mission is to deliver unparalleled quality, combining innovative designs with budget-conscious solutions. Whether it's bespoke construction projects or meticulously crafted interiors, our work is a testament to excellence, innovation, and precision.
              </p>
            </div>
            
            {/* Image Content */}
            <div className="relative">
              <img
src={building}                alt="Our Office"
                className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[500px]" // Added max-h to prevent excessive height
              />
            </div>
          </div>
        </motion.section>

        {/* Legacy Section */}
        <motion.section 
          className="py-20 bg-[#15302d]"
          style={{ padding: '10px' }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#f6db98] mb-16">A Legacy of Excellence, A Vision for the Future</h2>
          <p className="text-lg text-[#f6db98]/80 mb-8 text-center max-w-3xl mx-auto">
            Founded on three decades of experience, Maden Multicorp LLP represents the culmination of tradition and progress. Our team comprises seasoned professionals and dynamic new-generation innovators, ensuring we stay ahead of the curve while maintaining the highest standards of craftsmanship.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-[#f6db98]">
            {/* Feature 1 */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Luxury Made Accessible</h3>
              <p className="text-[#f6db98]/70">Premium quality projects tailored to fit various budgets without compromising on excellence.</p>
            </div>
            {/* Feature 2 */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">People-Centric Expertise</h3>
              <p className="text-[#f6db98]/70">Our dedicated team is our greatest asset, working with passion and precision to deliver impeccable results.</p>
            </div>
            {/* Feature 3 */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Trust Through Transparency</h3>
              <p className="text-[#f6db98]/70">From concept to completion, our clients are at the heart of every decision, fostering partnerships built on integrity.</p>
            </div>
          </div>
        </motion.section>

        {/* What Sets Us Apart Section */}
        <motion.section 
          className="py-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#15302d] mb-16">What Sets Us Apart?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature Card 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#15302d] mb-2">Proven Legacy</h3>
              <p className="text-gray-600">Over seven years of success in the construction industry.</p>
            </div>
            {/* Feature Card 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#15302d] mb-2">Innovative Design</h3>
              <p className="text-gray-600">Blending timeless architecture with modern functionality.</p>
            </div>
            {/* Feature Card 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#15302d] mb-2">Customer-First Approach</h3>
              <p className="text-gray-600">Personalized solutions that exceed expectations.</p>
            </div>
            {/* Feature Card 4 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#15302d] mb-2">Skilled Team</h3>
              <p className="text-gray-600">A blend of experienced veterans and ambitious young talents who collaborate to deliver transformative spaces.</p>
            </div>
          </div>
        </motion.section>

        {/* Vision and Mission Section */}
        <motion.section 
          className="py-20 bg-[#15302d]"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="grid md:grid-cols-2 gap-12  items-center">
            {/* Text Content */}
            <div className='text-center'>
              <h2 className="text-3xl md:text-4xl font-bold text-[#f6db98] mb-6">Our Vision</h2>
              <p className="text-lg text-[#f6db98]/80 mb-4">
                To be a globally recognized leader in luxury construction and interior design, transforming lifestyles with innovative, sustainable, and high-quality solutions that create a better future.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#f6db98] mb-6 mt-8">Our Mission</h2>
              <p className="text-lg text-[#f6db98]/80">
                To craft exceptional living and working spaces that reflect elegance, functionality, and our unwavering commitment to quality and client satisfaction.
              </p>
            </div>
            
            {/* Image Content */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Our Vision"
                className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[500px]" // Added max-h to prevent excessive height
              />
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section 
          className="py-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#15302d] mb-16">Why Choose Maden Multicorp LLP?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#15302d] mb-2">Expert Team</h3>
              <p className="text-gray-600">A team of experts with unmatched dedication and skill.</p>
            </div>
            {/* Feature Card 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#15302d] mb-2">Cutting-edge Techniques</h3>
              <p className="text-gray-600">Ensuring modern, efficient construction.</p>
            </div>
            {/* Feature Card 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#15302d] mb-2">Proven Commitment</h3>
              <p className="text-gray-600">Delivering projects on time and within budget.</p>
            </div>
          </div>
          
        </motion.section>

        {/* Awards & Recognition Section */}
        
      </div>
    </>
  );
}
