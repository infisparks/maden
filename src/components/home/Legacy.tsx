// src/components/home/Legacy.tsx

// import React from 'react';
import { motion } from 'framer-motion';


// Define the structure for each company's data, now using imagePath
const zariwalaGroupCompanies = [
    {
        id: 1,
        name: "Maden Multi Corp",
        description: "Construction and Development",
        imagePath: "/path/to/maden_multi_corp_logo.png", // UPDATE THIS PATH
        link: "/",
    },
    {
        id: 2,
        name: "Faiz Zariwala",
        description: "Fashion designer and interior designer",
        imagePath: "/path/to/faiz_zariwala_logo.png", // UPDATE THIS PATH
        link: "/",
    },
    {
        id: 3,
        name: "Maden Farm",
        description: "Hydrophobic and Organic farming",
        imagePath: "/path/to/maden_farm_logo.png", // UPDATE THIS PATH
        link: "/",
    },
    {
        id: 4,
        name: "Maden Project Management (Dubai)",
        description: "Project management company",
        imagePath: "/path/to/maden_dubai_pm_logo.png", // UPDATE THIS PATH
        link: "/",
    },
    {
        id: 5,
        name: "Al Maden International Business (Oman)",
        description: "Construction and Development",
        imagePath: "/path/to/al_maden_oman_logo.png", // UPDATE THIS PATH
        link: "/Al-madenPage",
    },
    {
        id: 6,
        name: "Built-in Enterprises & Contractors LLP",
        description: "Construction and Development",
        imagePath: "/path/to/built_in_logo.png", // UPDATE THIS PATH
        link: "/",
    },
];

// Helper component for the styled company logo circles - REMOVED

// Main Legacy Component
export default function Legacy() {
    const highlightClass = "font-bold text-[#2C4F5F]"; // The requested highlight style
    const madenCompanyContent = (
        <>
            <p className="text-[#18322F]/80 text-lg leading-relaxed mb-6 font-normal">
                The Maden Company stands as a <span className={highlightClass}>beacon of innovation and reliability</span> within the <span className={highlightClass}>Indian real estate and infrastructure sectors</span>. Our foundation is built on an unwavering dedication to delivering <span className={highlightClass}>superior quality</span>, <span className={highlightClass}>exceptional cost-effectiveness</span>, and pioneering construction solutions that redefine industry standards. We take immense pride in our <span className={highlightClass}>robust track record</span>, marked by the successful execution of diverse <span className={highlightClass}>residential and large-scale infrastructure projects</span> that exemplify excellence in design, advanced engineering, and a deep commitment to environmental sustainability across India.
            </p>
            <p className="text-[#18322F]/80 text-lg leading-relaxed font-normal">
                Our sustained growth is a testament to our <span className={highlightClass}>customer-centric philosophy</span>, where client satisfaction is paramount, coupled with a relentless pursuit of innovation. As a pivotal entity within the expansive and diversified <span className={highlightClass}>Zariwala Group of Companies</span>, Maden Company's influence extends across various industries. Furthermore, our distinguished international division, <span className={highlightClass}>Al Maden International Business</span>, is strategically broadening its horizons into the burgeoning markets of the Middle East, with a concentrated focus on <span className={highlightClass}>Oman and Dubai</span>. This expansion is geared towards addressing the escalating demand for premium residential, commercial, and government development projects, projecting Maden Company's expertise onto a <span className={highlightClass}>global stage</span>.
            </p>
            <p className="text-[#18322F]/80 text-lg leading-relaxed font-normal mt-6">
                Our vision is to not only construct structures but to build <span className={highlightClass}>enduring communities</span> and foster <span className={highlightClass}>sustainable environments</span> that contribute significantly to regional growth and prosperity. Through meticulous planning, <span className={highlightClass}>cutting-edge technology</span>, and a highly skilled workforce, Maden Company is poised to continue its trajectory of success, creating landmarks that inspire and stand the test of time.
            </p>
        </>
    );

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#18322F]" // Updated text color to dark teal/black
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Our Legacy & The Zariwala Group
                </motion.h2>

                <div className="flex flex-col lg:flex-row items-start gap-16">

                    {/* Left Side: Maden Company Overview (White Background Theme) */}
                    <motion.div
                        className="w-full lg:w-3/5"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-semibold text-[#18322F] mb-8 border-l-4 border-[#b48c2e] pl-4"> {/* Updated heading text color */}
                            Maden Company: Building a Better Future
                        </h3>
                        {madenCompanyContent}
                    </motion.div>

                    {/* Right Side: Zariwala Group Companies List (Retains Dark Theme for Contrast) */}
                    <motion.div
                        className="w-full lg:w-2/5 bg-[#1a3d39] p-8 rounded-xl shadow-2xl relative"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-10">
                            <span className="text-7xl font-extrabold text-[#f6db98] block mb-2 leading-none">6+</span>
                            <h4 className="text-xl font-normal text-white italic">
                                Zariwala Group of Companies
                            </h4>
                        </div>

                        {/* Timeline/List Structure with connecting lines */}
                        <div className="relative pl-8 pr-4"> {/* Reduced left padding since no logo circles */}
                            {/* Vertical Connecting Line (Timeline Spine) */}
                            <div
                                className="absolute left-[20px] top-0 bottom-0 w-0.5"
                                style={{ background: 'linear-gradient(to bottom, #b48c2e, #f6db98, #b48c2e)' }}
                            />

                            {zariwalaGroupCompanies.map((company, index) => (
                                <div key={company.id} className="mb-8 relative flex items-center"> {/* Use flex to align items */}

                                    {/* Horizontal Connector Line - No Logo Circle */}
                                    <div className="absolute left-[8px] flex items-center z-20"> {/* Adjusted left position */}
                                        <div className="w-4 h-0.5 bg-[#b48c2e]" /> {/* Horizontal line */}
                                    </div>

                                    {/* Company Details - No Link, No Navigation */}
                                    <div className="ml-12 flex-grow"> {/* Reduced left margin since no logo circles */}
                                        <motion.div
                                            className="text-xl font-bold text-[#f6db98] block text-left"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            {company.name}
                                        </motion.div>
                                        <p className="text-white/70 text-base font-normal">{company.description}</p> {/* Ensured font-light for contrast */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}