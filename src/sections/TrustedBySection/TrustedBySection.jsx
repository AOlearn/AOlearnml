import React from "react";
import { motion } from "framer-motion";

// Example company logos (Replace with actual logos)
const companyLogos = [
    "https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751_640.png",
    "https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658_1280.png",
    "https://cdn.pixabay.com/photo/2015/04/13/17/45/icon-720944_640.png",
    "https://cdn.pixabay.com/photo/2014/04/02/10/19/unicef-303450_640.png",
    "https://framerusercontent.com/images/Qvd78eUVBy9feOrLCQ4ZBwlnM.svg",
    "https://framerusercontent.com/images/E8ZAFIyCzpJq216NhXZGH6uato.svg",
];

// Function to duplicate items for seamless looping
const createDuplicatedArray = (array) => {
    return [...array, ...array];
};

const LogoCard = ({ logo }) => {
    return (
        <div className="flex-shrink-0 mx-6 cursor-pointer">
            <img
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                alt="Company Logo"
                src={logo}
            />
        </div>
    );
};

const MarqueeRow = ({ children }) => {
    const marqueeVariants = {
        animate: {
            x: ["0%", "-50%"], // Move from 0% to -50% to cover half of the duplicated items
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <motion.div
            className="flex"
            variants={marqueeVariants}
            animate="animate"
            style={{ whiteSpace: "nowrap" }}
        >
            {children}
        </motion.div>
    );
};

const TrustedBySection = () => {
    const duplicatedLogos = createDuplicatedArray(companyLogos);

    return (
        <div className="relative max-w-5xl m-auto h-auto py-20 flex flex-col items-center justify-center gap-10 overflow-hidden">
            
            {/* <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-1 lg:mt-2 tracking-wide text-white">Trusted By Organizations</h2> */}
            <div className="w-full overflow-hidden">
                <MarqueeRow>
                    {duplicatedLogos.map((logo, index) => (
                        <LogoCard key={index} logo={logo} />
                    ))}
                </MarqueeRow>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
        </div>
    );
};

export default TrustedBySection;