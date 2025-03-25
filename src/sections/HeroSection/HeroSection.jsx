import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

// Variants for animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3, ease: 'easeInOut' },
    },
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { 
            duration: 0.5, 
            ease: 'easeOut',
            delay: 0.6
        } 
    },
    hover: { 
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(255, 142, 60, 0.3)",
        transition: { duration: 0.3 }
    }
};

const HeroSection = () => {
    return (
        <div className="relative overflow-hidden">
            <motion.div
                className="container mx-auto px-4 pt-24 pb-16 max-w-6xl"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.div 
                        className="inline-block mb-6 bg-primary/10 px-5 py-2 rounded-full"
                        variants={textVariants}
                    >
                        <span className="flex items-center justify-center text-sm text-primary font-medium">
                            Introducing AO Learn <FaChevronRight size={12} className="ml-1" />
                        </span>
                    </motion.div>
                    
                    <motion.h1
                        variants={textVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                    >
                        Build Train <span className="text-primary">Elevate</span>
                    </motion.h1>
                    
                    <motion.p
                        variants={textVariants}
                        className="max-w-2xl mx-auto text-lg text-dark/70 mb-10"
                    >
                        A dynamic ecosystem for effortless model building, training and deployment.
                    </motion.p>
                    
                    <motion.div 
                        variants={textVariants}
                        className="flex flex-col sm:flex-row gap-4 mb-16"
                    >
                        <motion.button
                            className="btn-primary"
                            variants={buttonVariants}
                            whileHover="hover"
                        >
                            <span className="flex items-center justify-center">
                                Get Started <FaChevronRight size={12} className="ml-2" />
                            </span>
                        </motion.button>
                        
                        <motion.button
                            className="btn-secondary"
                            variants={buttonVariants}
                            whileHover="hover"
                        >
                            <span className="flex items-center justify-center">
                                Documentation <FaChevronRight size={12} className="ml-2" />
                            </span>
                        </motion.button>
                    </motion.div>
                    
                    <motion.div 
                        className="w-full max-w-4xl mx-auto card p-1 mb-8"
                        variants={textVariants}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <div className="bg-white rounded-lg overflow-hidden">
                            <iframe 
                                src="https://ide.betteridea.dev/aolearn?app-name=aolearn-Landing&code=AOlearn=require(%22aolearn%22)%0A%20--%20Example%20data%0A%20local%20X%20=%20{%0A%20{1,%202},%0A%20{2,%203},%0A%20{3,%204},%0A%20{4,%205}%0A%20}%0A%20local%20y%20=%20{2,%203,%204,%205}%0A%20%0A%20--%20Linear%20Regression%0A%20local%20theta%20=%20AOlearn.linear_regression.fit_linear(X,%20y,%200.01,%201000)%0A%20print({%22Linear%20Regression%20Coefficients:%22,%20table.unpack(theta)})%0A%20local%20prediction%20=%20AOlearn.linear_regression.predict_linear(theta,%20{5,%206})%0A%20print({%22Linear%20Regression%20Prediction%20for%20{5,%206}:%22,%20prediction})%0A&nowallet=true" 
                                className="w-full h-[450px]" 
                                frameBorder="0"
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;