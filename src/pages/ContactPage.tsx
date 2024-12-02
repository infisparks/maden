import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import AnimatedSection from '../components/shared/AnimatedSection';

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Let's discuss your next project"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#15302d] mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b48c2e] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b48c2e] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b48c2e] focus:border-transparent"
                />
              </div>
              <button className="w-full px-8 py-3 bg-[#b48c2e] text-white rounded-lg hover:bg-[#15302d] transition-colors duration-200">
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-[#15302d] mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-[#b48c2e] mr-4" />
                <span>contact@maden.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-[#b48c2e] mr-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-[#b48c2e] mr-4" />
                <span>123 Luxury Avenue, Suite 100<br />New York, NY 10001</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#15302d] mb-4">Office Hours</h3>
              <div className="space-y-2">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: By appointment only</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}