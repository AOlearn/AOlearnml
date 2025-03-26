import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronRight, FaCode, FaRocket } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
// Simpler animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const HeroSection = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden py-16">
      {/* Simple background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>

      {/* Simple grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
                        linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
                    `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Blue accent circles */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 -right-32 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <motion.div
        className="container relative mx-auto px-4 max-w-6xl z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto -mt-14 mb-32 px-4">
          <Navbar />
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            className="inline-block mb-6 bg-blue-100 px-5 py-2 rounded-full"
            variants={itemVariants}
          >
            <span className="flex items-center justify-center text-sm text-blue-600 font-medium">
              Introducing AO Learn <FaChevronRight size={12} className="ml-1" />
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Build Train <span className="text-blue-600">Elevate</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg text-dark/70 mb-10"
          >
            A dynamic ecosystem for effortless model building, training and
            deployment.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <motion.button
              className="btn-primary group"
              whileHover={{ scale: 1.03 }}
            >
              <span className="flex items-center justify-center">
                Get Started
                <FaRocket
                  size={12}
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                />
              </span>
            </motion.button>

            <motion.button
              className="btn-secondary group"
              whileHover={{ scale: 1.03 }}
            >
              <span className="flex items-center justify-center">
                Documentation
                <FaCode
                  size={12}
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                />
              </span>
            </motion.button>
          </motion.div>

          <motion.div
            className="w-full max-w-4xl mx-auto mb-12"
            variants={itemVariants}
          >
            <div className="bg-white rounded-xl overflow-hidden border border-blue-100 shadow-lg">
              {/* Header bar */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-2 px-4 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-white text-sm font-medium">
                  AO Learn IDE
                </div>
              </div>

              {/* Loading spinner */}
              {!iframeLoaded && (
                <div className="h-[450px] flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              )}

              <div className={!iframeLoaded ? "hidden" : "block"}>
                <iframe
                  src="https://ide.betteridea.dev/aolearn?app-name=aolearn-Landing&code=AOlearn=require(%22aolearn%22)%0A%20--%20Example%20data%0A%20local%20X%20=%20{%0A%20{1,%202},%0A%20{2,%203},%0A%20{3,%204},%0A%20{4,%205}%0A%20}%0A%20local%20y%20=%20{2,%203,%204,%205}%0A%20%0A%20--%20Linear%20Regression%0A%20local%20theta%20=%20AOlearn.linear_regression.fit_linear(X,%20y,%200.01,%201000)%0A%20print({%22Linear%20Regression%20Coefficients:%22,%20table.unpack(theta)})%0A%20local%20prediction%20=%20AOlearn.linear_regression.predict_linear(theta,%20{5,%206})%0A%20print({%22Linear%20Regression%20Prediction%20for%20{5,%206}:%22,%20prediction})%0A&nowallet=true"
                  className="w-full h-[450px]"
                  frameBorder="0"
                  onLoad={() => setIframeLoaded(true)}
                />
              </div>
            </div>
          </motion.div>

          {/* Feature tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              "AI-powered",
              "Multi-platform",
              "Easy to use",
              "Real-time feedback",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-100"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm text-blue-800">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
