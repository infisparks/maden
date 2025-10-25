// src/components/home/about-al-maden.tsx

// import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import building from '../../icon/al-maden-logo.svg';

// Animation variants for smooth loading
const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

export default function AboutAlMaden() {
    const navigate = useNavigate();

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Professional Centered Heading */}
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold text-center mb-16 text-[#18322F]"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    AL Maden International Business
                </motion.h2>

                {/* About Section Content */}
                <motion.div
                    className="grid md:grid-cols-2 gap-12 items-center"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeInUp}
                >
                    {/* Text Content */}
                    <div>
                        <h3 className="text-3xl md:text-4xl font-semibold text-[#15302d] mb-6 border-l-4 border-[#b48c2e] pl-4">
                            About AL Maden International Business
                        </h3>
                        <p className="text-lg text-gray-700 mb-4 font-medium">
                            AL Maden International Business is a <span className="font-bold text-[#2C4F5F]">dynamic and diversified firm</span> specializing in <span className="font-bold text-[#2C4F5F]">construction contracting and material trading</span>. With a solid foundation in India's real estate and infrastructure sectors, the company has built a reputation for delivering <span className="font-bold text-[#2C4F5F]">high-quality, cost-effective, and innovative construction solutions</span>.
                        </p>
                        <p className="text-lg text-gray-700 font-medium">
                            Over the years, AL Maden has successfully executed <span className="font-bold text-[#2C4F5F]">residential and infrastructure projects</span> that reflect excellence in design, engineering, and <span className="font-bold text-[#2C4F5F]">sustainability</span>. Our growth is fueled by a <span className="font-bold text-[#2C4F5F]">customer-first philosophy</span> and a deep commitment to innovation. We are now expanding our footprint to the Middle East, targeting Oman and Dubai.
                        </p>
                        
                        {/* See More Link */}
                        <div className="pt-4">
                            <button 
                                onClick={() => {
                                    navigate('/Al-madenPage');
                                    // Scroll to top of the page after navigation
                                    setTimeout(() => {
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }, 100);
                                }}
                                className="group bg-[#18322F] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#2C4F5F] transition duration-300 flex items-center space-x-2"
                            >
                                <span>See more...</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative">
                        <img
                            src={building}
                            alt="Maden India Projects"
                            className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[500px]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
