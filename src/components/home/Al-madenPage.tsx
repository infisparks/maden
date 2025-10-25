// src/pages/AlMadenPage.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Construction, TrendingUp, DollarSign, Zap } from 'lucide-react';
// Assuming PageHeader is in '../components/shared/PageHeader'
import PageHeader from '../shared/PageHeader'; // Assuming correct path is 'components/shared/PageHeader'
import noori_heights from '../../icon/noori-heights.svg'; // Retaining imported asset path
import bluebells from '../../icon/blue-bells.svg';
import bellavista from '../../icon/bella-vista.svg';
import medford_hospital from '../../icon/medford-photo.svg';
import noori_horizon from '../../icon/noori-horizon.svg';
import edu_crest_school from '../../icon/edu-crest-school.svg';
import noori_crest from '../../icon/noori-crest.svg';
import downe_house from '../../icon/down-house-school.svg';
import al_maden from '../../icon/Al-maden-banner-img.svg';
import building from '../../icon/al-maden-logo.svg';
import international_strategy from '../../icon/international-strategy-vision-img.svg';



// Animation variants for smooth loading
const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

// Component for the feature cards (reusable from AboutPage style)
interface FeatureCardProps {
    Icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    isDark: boolean;
}

const FeatureCard = ({ Icon, title, description, isDark }: FeatureCardProps) => (
    <motion.div
        className={`p-6 rounded-lg shadow-xl transition-all duration-300 hover:scale-[1.03] ${isDark
            ? 'bg-[#1a3d39] text-white'
            : 'bg-white text-[#15302d] border border-gray-100'
            }`}
        variants={fadeInUp}
    >
        <Icon className={`w-8 h-8 mb-4 ${isDark ? 'text-[#f6db98]' : 'text-[#b48c2e]'}`} />
        <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-[#f6db98]' : 'text-[#15302d]'}`}>{title}</h3>
        <p className={`${isDark ? 'text-white/80' : 'text-gray-600'}`}>{description}</p>
    </motion.div>
);

// Interface for ProjectCard props
interface ProjectCardProps {
    title: string;
    location: string;
    description: string;
    imagePath: string;
}

// Component for the Project Cards (for the new section)
const ProjectCard = ({ title, location, description, imagePath }: ProjectCardProps) => (
    <div className="bg-[#1a3d39] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.02] border-t-4 border-[#b48c2e]">
        <div className="h-60 w-full overflow-hidden">
            {/* The height has been adjusted from h-58 to h-60 to better accommodate the wider images like Bluebells and Bellavista, ensuring they are fully filled using object-cover. */}
            <img
                src={imagePath}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 "
            />
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-bold text-[#f6db98] mb-1">{title}</h3>
            <p className="text-sm font-semibold text-white/70 mb-4">{location}</p>
            <p className="text-white/80 text-base">{description}</p>
        </div>
    </div>
);


export default function AlMadenPage() {
    return (
        <>
            {/* Page Header - Dynamic content */}
            <PageHeader
                title="AL Maden International Business"
                subtitle="Derived by Vision, Powered by Execution"
                image={al_maden}
            />

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">

                {/* 1. About Al Maden International Business (White Background Section) */}
                <motion.section
                    className="py-20"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeInUp}
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Text Content - Extracted from PDF */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#15302d] mb-6 border-l-4 border-[#b48c2e] pl-4">About AL Maden International Business</h2>
                            <p className="text-lg text-gray-700 mb-4 font-medium">
                                AL Maden International Business is a <span className="font-bold text-[#2C4F5F]">dynamic and diversified firm</span> specializing in <span className="font-bold text-[#2C4F5F]">construction contracting and material trading</span>. With a solid foundation in India's real estate and infrastructure sectors, the company has built a reputation for delivering <span className="font-bold text-[#2C4F5F]">high-quality, cost-effective, and innovative construction solutions</span>.
                            </p>
                            <p className="text-lg text-gray-700 font-medium">
                                Over the years, AL Maden has successfully executed <span className="font-bold text-[#2C4F5F]">residential and infrastructure projects</span> that reflect excellence in design, engineering, and <span className="font-bold text-[#2C4F5F]">sustainability</span>. Our growth is fueled by a <span className="font-bold text-[#2C4F5F]">customer-first philosophy</span> and a deep commitment to innovation. We are now expanding our footprint to the Middle East, targeting Oman and Dubai.
                            </p>
                        </div>

                        {/* Image Content */}
                        <div className="relative">
                            <img
                                src={building} // IMAGE PATH 1: Use an image of an Indian project or skyline
                                alt="Maden India Projects"
                                className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[500px]"
                            />
                        </div>

                    </div>
                </motion.section>

                {/* --- New Flagship Projects Section (Dark Background) --- */}
                <motion.section
                    className="py-20 bg-[#15302d]"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeInUp}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#f6db98] mb-16">OUR FLAGSHIP PROJECTS</h2>

                    {/* Grid for the first 6 projects */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 ml-10 mr-10">

                        {/* Project 1: Flagship Mumbai Tower */}
                        <ProjectCard
                            title="Noori Heights (Bellamonte)"
                            location="Mumbra, Mumbai (Mumbra's Tallest Tower)"
                            description="A magnificent 24-story tower redefining luxury living with two levels of underground parking and stunning panoramic views of the Mumbra Mountains and cityscape."
                            imagePath={noori_heights} // IMAGE PATH 3
                        />

                        {/* Project 2: NEW - Bluebells */}
                        <ProjectCard
                            title="Bluebells"
                            location="Mumbra Bypass Road, Mumbai (Approx 1,26,000 sq ft)"
                            description="Features four 7-story wings with modern design and top security. Includes a fully-equipped 60-bed hospital on the first floor, blending convenience with peace of mind."
                            imagePath={bluebells} // IMAGE PATH 4a
                        />

                        {/* Project 3: NEW - Bellavista */}
                        <ProjectCard
                            title="Bellavista"
                            location="Mumbra Bypass Road, Mumbai (Approx 1,05,000 sq ft)"
                            description="Features three 7-story wings opposite Bluebells with excellent road connectivity to Navi Mumbai, Thane, and Mumbai. Enjoy breathtaking views of the Mumbra Mountains."
                            imagePath={bellavista} // IMAGE PATH 4b
                        />

                        {/* Project 4: Healthcare Initiative */}
                        <ProjectCard
                            title="Medford Multi-speciality Hospital"
                            location="Mumbra, Mumbai"
                            description="A major initiative to provide quality healthcare at affordable costs. Plans include expanding this to a chain of multi-speciality hospitals and establishing a Dialysis Centre."
                            imagePath={medford_hospital} // IMAGE PATH 5
                        />

                        {/* Project 5: Noori Horizon (Bandra West) */}
                        <ProjectCard
                            title="Noori Horizon"
                            location="Bandra West, Mumbai (Approx 1,05,000 sq ft, Completion 2027)"
                            description="A magnificent 32-story tower in a prime location off SV Road, offering breathtaking views of the Arabian Sea. Designed to enrich lifestyles with a podium, clubhouse, and premium facilities."
                            imagePath={noori_horizon} // IMAGE PATH 6
                        />

                        {/* Project 6: Education Initiative */}
                        <ProjectCard
                            title="Edu Crest School"
                            location="Dawla Village (Estimated Commencement 15 August 2025)"
                            description="A planned CBSE-affiliated school aiming to be a hub for holistic development. Emphasis on co-curricular activities, sports, and an affordable fee structure."
                            imagePath={edu_crest_school} // IMAGE PATH 7
                        />

                        <ProjectCard
                            title="Noori Crest"
                            location="Mumbra (Ongoing - Approx 15,000 sq ft, Completion 2025)"
                            description="A 7-storey residential cum commercial tower strategically situated off the bustling Mumbra bypass. It is part of our on-going projects, boasting a serene neighborhood and proximity to esteemed educational institutions and medical facilities."
                            imagePath={noori_crest} // IMAGE PATH 9
                        />

                        {/* Project 8: International - Downe House School Muscat */}
                        <ProjectCard
                            title="Downe House School Muscat"
                            location="Muscat, Oman (International Project)"
                            description="A key international contracting project demonstrating our capability in large-scale works, specifically involving external paint work at the Downe House School in Muscat."
                            imagePath={downe_house} // IMAGE PATH 8
                        />



                    </div>



                </motion.section>
                {/* --- End Flagship Projects Section --- */}


                {/* 2. Core Services & Competitive Advantages (Restored to position after projects) */}
                <motion.section
                    className="py-20"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeInUp}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#15302d] mb-16">Core Services & Competitive Advantages</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Contracting Services */}
                        <FeatureCard
                            Icon={Construction}
                            title="Contracting Solutions"
                            description="End-to-end construction solutions from design to execution, specializing in residential and commercial projects."
                            isDark={false}
                        />
                        {/* Trading Services */}
                        <FeatureCard
                            Icon={DollarSign}
                            title="Material Trading"
                            description="Supply of high-quality, sustainable construction materials, partnering with reliable vendors for cost-efficient sourcing."
                            isDark={false}
                        />
                        {/* Cost Efficiency */}
                        <FeatureCard
                            Icon={TrendingUp}
                            title="Cost & Quality"
                            description="Competitive pricing without compromising on quality, backed by project management aligned with international standards."
                            isDark={false}
                        />
                        {/* Innovation */}
                        <FeatureCard
                            Icon={Zap}
                            title="Innovation & Expertise"
                            description="Proven expertise in India and use of modern construction techniques and sustainable materials for innovation."
                            isDark={false}
                        />
                    </div>
                </motion.section>

               {/* 3. International Expansion (Retained Dark Background Section) */}
               <motion.section
                    className="py-20 bg-[#15302d]"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Image Content (Image 2) */}
                        <div className="relative order-2 md:order-1 ml-10 mr-10">
                            <img
                                src={international_strategy} // IMAGE PATH 2: Use an image of an Oman/Dubai office or project like Downe House 
                                alt="Global Expansion"
                                className="rounded-lg shadow-xl w-full h-auto object-cover "
                            />
                        </div>

                        {/* Text Content - International Strategy */}
                        <div className="order-1 md:order-2 mr-10 ml-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#f6db98] mb-6 border-l-4 border-[#b48c2e] pl-4">International Strategy & Vision</h2>
                            <p className="text-lg text-white/90 mb-4 font-medium">
                                Al Maden International Business is expanding its footprint to the Middle East, specifically targeting Oman and Dubai, to serve the growing demand for residential, commercial, and government infrastructure development. Our international strategy is built on maximizing efficiency and compliance from day one.
                            </p>
                            <ul className="list-disc list-inside space-y-3 text-white/90 text-lg font-medium">
                                <li className="text-white/90"><span className="font-bold text-[#f6db98]">Vision:</span> To become a leading name in the contracting and trading industry across the GCC, recognized for integrity, innovation, and execution excellence.</li>
                                <li className="text-white/90"><span className="font-bold text-[#f6db98]">Initial Operation:</span> Successfully establish operations in Oman and Dubai within the first 12 months.</li>
                                <li className="text-white/90"><span className="font-bold text-[#f6db98]">Local Presence:</span> Fully functional offices in Oman and Dubai are established for direct management, client engagement, and regulatory compliance.</li>
                                <li className="text-white/90"><span className="font-bold text-[#f6db98]">Legal Setup:</span> Local business entities are formed and compliant with host country laws to facilitate transparent operations.</li>
                                <li className="text-white/90"><span className="font-bold text-[#f6db98]">Target Clients:</span> Includes Residential Clients (local families and NRIs), Commercial Clients, and Government Bodies for infrastructure projects.</li>
                                <li className="text-white/90"><span className="font-bold text-[#f6db98]">Growth Plan:</span> Evaluate entry into other GCC countries such as Qatar, Bahrain, and Saudi Arabia in Phase II.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* 5. Director's Message (Quote Block - White Background Theme) */}
                <motion.section
                    className="py-20"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="p-10 bg-gray-50 rounded-xl shadow-2xl relative border-t-8 border-[#b48c2e] max-w-5xl mx-auto">
                        <h3 className="text-3xl font-bold text-[#15302d] mb-4">From the Desk of the Director</h3>
                        <blockquote className="text-xl italic text-gray-700 leading-relaxed">
                            "At AL Maden International Business, we believe in building more than just structures – we build <span className="font-bold text-[#2C4F5F]">trust, value, and enduring partnerships</span>. Our journey, which began in India, has shaped us into a name synonymous with reliability. As we confidently step into new territories like Oman and Dubai, we carry the same core values that define us: <span className="font-bold text-[#2C4F5F]">integrity, innovation, and excellence</span>. Our aim is to bring <span className="font-bold text-[#2C4F5F]">world-class solutions backed by our Indian expertise and a global outlook</span> to fulfill the dreams of those who live, work, and grow in our projects."
                        </blockquote>
                        <p className="text-right mt-6 text-[#15302d] font-semibold">
                            — Faiz Zariwala, Founder and Director
                        </p>
                    </div>
                </motion.section>

            </div>
        </>
    );
}