import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-[#3c605b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#f6db98] mb-16">
          Contact Us
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-[#f6db98] mb-6">
              Get in Touch
            </h3>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/10 text-[#f6db98] placeholder-[#f6db98]/50 border border-[#f6db98]/20 rounded focus:outline-none focus:border-[#f6db98]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/10 text-[#f6db98] placeholder-[#f6db98]/50 border border-[#f6db98]/20 rounded focus:outline-none focus:border-[#f6db98]"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-white/10 text-[#f6db98] placeholder-[#f6db98]/50 border border-[#f6db98]/20 rounded focus:outline-none focus:border-[#f6db98]"
              />
              <button className="w-full px-8 py-3 bg-[#b48c2e] text-white rounded hover:bg-[#f6db98] hover:text-[#15302d] transition-colors duration-200">
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-[#f6db98] mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-[#f6db98] mr-4" />
                <span className="text-[#f6db98]">contact@maden.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-[#f6db98] mr-4" />
                <span className="text-[#f6db98]">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-[#f6db98] mr-4" />
                <span className="text-[#f6db98]">123 Luxury Avenue, Suite 100<br />New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}