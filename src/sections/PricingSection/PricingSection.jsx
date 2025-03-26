import React from 'react';
import { motion } from 'framer-motion';
import collab1 from './betteridea.dev_.png';

// Background decoration component
const BackgroundDecoration = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="grid-background"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/90"></div>
    
    {/* Animated accent elements */}
    <motion.div 
      className="absolute top-20 left-20 w-80 h-80 bg-blue-300/10 rounded-full blur-2xl"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    />
    <motion.div 
      className="absolute bottom-40 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-2xl"
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        delay: 1
      }}
    />
    
    {/* Decorative svg shapes */}
    <svg className="absolute top-40 right-1/4 opacity-10" width="100" height="100" viewBox="0 0 100 100">
      <motion.path 
        d="M10,50 A40,40 0 1,1 90,50 A40,40 0 1,1 10,50 Z" 
        fill="none" 
        stroke="#3b82f6" 
        strokeWidth="1"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  </div>
);

// Enhanced CollaborationCard component
const CollaborationCard = ({ image, title, description, link, index }) => {
  return (
    <div className="relative group perspective">
      {/* Card Container with 3D effect */}
      <motion.div 
        className="relative bg-white rounded-xl overflow-hidden shadow-xl transition-all duration-500"
        whileHover={{ 
          rotateY: 5,
          rotateX: -5,
          scale: 1.02,
          boxShadow: "0 30px 60px -10px rgba(59, 130, 246, 0.3), 0 10px 20px -10px rgba(59, 130, 246, 0.2)"
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-xl p-[1px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        {/* Card inner content */}
        <div className="relative z-10 rounded-xl overflow-hidden">
          {/* Image section with overlay gradient */}
          <div className="relative h-48 overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <img
                className="w-full h-full object-cover"
                src={image}
                alt={title}
              />
            </motion.div>
            
            {/* Blue overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent"></div>
            
            {/* Logo badge */}
            <div className="absolute -bottom-6 left-6">
              <div className="bg-white p-2 rounded-lg shadow-lg">
                <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
                  {title.charAt(0)}
                </div>
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className="bg-white p-6 pt-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {title}
              </h3>
              
              {/* Animated icon */}
              <motion.div 
                className="text-blue-500 p-1"
                animate={{ 
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.5
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </div>
            
            <p className="text-gray-600 mb-6 text-sm">
              {description}
            </p>
            
            {/* Feature tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Integration</span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">API</span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Development</span>
            </div>
            
            {/* Action button with animation */}
            <motion.a 
              href={link}
              className="inline-flex items-center text-blue-600 font-medium group"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Try it now
              <span className="ml-1 group-hover:ml-2 transition-all duration-300">→</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
      
      {/* Card shadow/reflection effect */}
      <div className="absolute bottom-0 left-1/2 w-4/5 h-10 bg-blue-500/10 blur-xl rounded-full transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
    </div>
  );
};

const PricingSection = () => {
  // Sample collaboration data
  const collaborations = [
    {
      image: collab1,
      title: "BetterIDEa Codecell",
      description: "We collaborated with BetterIDEa to develop the AO Learn Lua Codecell, a specialized feature that integrates Lua scripting seamlessly into the AO Learn framework.",
      link: "https://ide.betteridea.dev/aolearn"
    },
    // Add placeholder for future collaborations
    {
      image: "https://via.placeholder.com/600x300/1e3a8a/ffffff?text=Coming+Soon",
      title: "Future Collaboration",
      description: "We're constantly working on new partnerships to expand our ecosystem. Stay tuned for exciting announcements coming soon.",
      link: "#"
    },
    // Add another placeholder
    {
      image: "https://via.placeholder.com/600x300/1e3a8a/ffffff?text=Your+Company+Here",
      title: "Partner With Us",
      description: "Interested in collaborating? We're open to partnerships that enhance the learning experience for developers.",
      link: "#contact"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <BackgroundDecoration />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Floating decorative elements */}
        <div className="absolute left-0 top-20 w-20 h-20 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#3B82F6" d="M44.7,-76.3C58.9,-69.9,71.8,-59.3,79.6,-45.5C87.4,-31.7,90.2,-14.6,88.8,1.9C87.5,18.5,82,36.3,71.9,50.3C61.7,64.3,46.9,74.5,31,79.1C15.1,83.7,-1.9,82.7,-18.8,78.8C-35.8,74.9,-52.7,68.1,-65.7,56.3C-78.6,44.5,-87.5,27.6,-90.5,9.4C-93.4,-8.8,-90.3,-28.3,-80.4,-43.2C-70.6,-58.1,-54,-68.5,-38.1,-73.8C-22.2,-79.1,-7,-79.2,7.4,-79.9C21.9,-80.6,43.7,-82,44.7,-76.3Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="absolute right-10 bottom-40 w-32 h-32 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#3B82F6" d="M44.4,-76.1C59.2,-69.5,74,-60.3,83.1,-46.7C92.3,-33.1,95.8,-15.1,93.7,1.7C91.6,18.5,83.9,34.9,73.1,49.1C62.3,63.2,48.5,75,32.9,79.2C17.3,83.4,-0.2,80,-16.9,75.1C-33.5,70.3,-49.3,64,-61.3,52.7C-73.3,41.3,-81.5,24.9,-84.9,7.2C-88.3,-10.5,-87,-29.5,-78.1,-43.6C-69.2,-57.7,-52.8,-66.8,-37.2,-73.4C-21.6,-80,-10.8,-83.9,1.5,-86.7C13.9,-89.4,27.8,-91,44.4,-76.1Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full mb-4 border border-blue-200"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-sm font-medium text-blue-800 uppercase">Partners & Collaborations</span>
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Strategic <span className="text-blue-600">Partnerships</span>
          </motion.h2>
          
          <motion.p
            className="max-w-2xl mx-auto text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Working together with industry leaders to create powerful tools that enhance the developer experience
          </motion.p>
          
          {/* Decorative line */}
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mt-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>
        </div>

        {/* Collaboration cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {collaborations.map((collab, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <CollaborationCard {...collab} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;