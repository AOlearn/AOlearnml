import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Fingerprint, Code, MonitorPlay, Users, BarChart3 } from 'lucide-react';

// const features = [
//     {
//         title: "Scalability",
//         description: "Easily adapt to your growing business needs with flexible plans.",
//         icon: "📈",
//         colSpan: "lg:col-span-2",
//         rowSpan: "row-span-1"
//     },
//     {
//         title: "Security",
//         description: "Top-notch security features to keep your data safe.",
//         icon: "🔒",
//         colSpan: "col-span-1",
//         rowSpan: "row-span-1"
//     },
//     {
//         title: "Support",
//         description: "24/7 customer support to assist you anytime.",
//         icon: "🤝",
//         colSpan: "col-span-1",
//         rowSpan: "row-span-1"
//     },
//     {
//         title: "Integrations",
//         description: "Seamless integrations with tools you already use. Connect with popular platforms like Slack, Google Workspace, and Microsoft Teams effortlessly, enhancing your productivity by integrating our solution into your existing workflows without interruption.",
//         icon: "🔗",
//         colSpan: "lg:col-span-3",
//         rowSpan: "row-span-1"
//     },
//     {
//         title: "Analytics",
//         description: "Gain insights into your operations with powerful analytics tools.",
//         icon: "📊",
//         colSpan: "col-span-1",
//         rowSpan: "row-span-1"
//     },
// ];

const features = [
  {
    icon: <Code className="w-6 h-6 text-blue-200" />,
    title: "Drag-and-Drop Interface",
    description: "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface."
  },
  {
    icon: <Fingerprint className="w-6 h-6 text-blue-200" />,
    title: "Multi-Platform Compatibility",
    description: "Build ML models that run seamlessly across multiple platforms, including mobile, desktop."
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-200" />,
    title: "No-code editors",
    description: "Jumpstart your ML projects with a variety of built-in templates for different types of applications and environments."
  },
  {
    icon: <MonitorPlay className="w-6 h-6 text-blue-200" />,
    title: "Real-Time Preview",
    description: "Preview your ML application in real-time as you make changes, allowing for quick iterations and adjustments."
  },
  {
    icon: <Users className="w-6 h-6 text-blue-200" />,
    title: "Collaboration Tools",
    description: "Work together with your team in real-time on ML models, enabling seamless collaboration and idea sharing."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-200" />,
    title: "Analytics Dashboard",
    description: "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard."
  }
];

// Enhanced background component
const BackgroundDecoration = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="grid-background"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/90"></div>
    
    {/* Animated background elements */}
    <motion.div 
      className="absolute top-20 left-10 w-72 h-72 bg-blue-300/10 rounded-full blur-2xl"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    />
    <motion.div 
      className="absolute bottom-40 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-2xl"
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        delay: 1
      }}
    />
    
    {/* Decorative elements */}
    <svg className="absolute top-40 right-1/4 opacity-5" width="120" height="120" viewBox="0 0 120 120">
      <motion.path 
        d="M20,60 A40,40 0 1,1 100,60 A40,40 0 1,1 20,60 Z" 
        fill="none" 
        stroke="#3b82f6" 
        strokeWidth="2"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
    </svg>
    
    <div className="absolute bottom-20 left-1/4 w-24 h-24 opacity-5 pointer-events-none">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#3B82F6" d="M44.7,-76.3C58.9,-69.9,71.8,-59.3,79.6,-45.5C87.4,-31.7,90.2,-14.6,88.8,1.9C87.5,18.5,82,36.3,71.9,50.3C61.7,64.3,46.9,74.5,31,79.1C15.1,83.7,-1.9,82.7,-18.8,78.8C-35.8,74.9,-52.7,68.1,-65.7,56.3C-78.6,44.5,-87.5,27.6,-90.5,9.4C-93.4,-8.8,-90.3,-28.3,-80.4,-43.2C-70.6,-58.1,-54,-68.5,-38.1,-73.8C-22.2,-79.1,-7,-79.2,7.4,-79.9C21.9,-80.6,43.7,-82,44.7,-76.3Z" transform="translate(100 100)" />
      </svg>
    </div>
  </div>
);

// Premium feature card
const FeatureCard = ({ feature, index }) => {
  // Create variations based on index
  const isEven = index % 2 === 0;
  const position = index % 3; // 0, 1, or 2
  
  return (
    <div className="relative group perspective h-full">
      {/* Main card with 3D effect */}
      <motion.div 
        className="h-full relative bg-gradient-to-br from-blue-900 to-blue-950 rounded-xl overflow-hidden shadow-xl transition-all duration-500"
        whileHover={{ 
          rotateY: 5,
          rotateX: -5,
          scale: 1.02,
          boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3), 0 10px 20px -10px rgba(59, 130, 246, 0.2)"
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-xl p-[1px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        {/* Top accent line */}
        <div className={`absolute top-0 left-0 right-0 h-1 ${
          position === 0 ? 'bg-blue-500' : 
          position === 1 ? 'bg-blue-400' : 
          'bg-blue-600'
        }`}></div>
        
        {/* Card content */}
        <div className="p-6 relative z-10">
          {/* Icon with animated background */}
          <div className="relative mb-5">
            <motion.div 
              className="absolute inset-0 bg-blue-600/20 rounded-lg blur-md"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.5
              }}
            />
            
            {/* Rotating accent ring */}
            <motion.div 
              className="absolute -inset-1 border border-blue-400/30 rounded-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Icon container */}
            <div className={`
              relative z-10 
              w-12 h-12 
              rounded-lg 
              flex items-center justify-center 
              ${position === 0 ? 'bg-blue-800/80' : position === 1 ? 'bg-gradient-to-br from-blue-700 to-blue-900' : 'bg-blue-700/50'}
              border border-blue-500/30
            `}>
              {feature.icon}
            </div>
          </div>
          
          {/* Title with animated underline on hover */}
          <div className="relative">
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors duration-300">
              {feature.title}
            </h3>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-1/3 transition-all duration-300"></div>
          </div>
          
          {/* Description */}
          <p className="text-blue-100/60 text-sm group-hover:text-blue-100/80 transition-colors duration-300">
            {feature.description}
          </p>
          
          {/* Learn more text that appears on hover */}
          <div className="mt-4 flex items-center opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <span className="text-xs text-blue-300 font-medium">Learn more</span>
            <svg className="w-4 h-4 ml-1 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
        </div>
        
        {/* Animated particle dots */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                top: `${10 + i * 30}%`,
                left: `${80 + i * 5}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Card shadow/reflection effect */}
      <div className="absolute bottom-0 left-1/2 w-4/5 h-8 bg-blue-500/10 blur-xl rounded-full transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <BackgroundDecoration />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Decorative elements */}
        <div className="absolute -left-4 top-20 w-20 h-20 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#3B82F6" d="M44.7,-76.3C58.9,-69.9,71.8,-59.3,79.6,-45.5C87.4,-31.7,90.2,-14.6,88.8,1.9C87.5,18.5,82,36.3,71.9,50.3C61.7,64.3,46.9,74.5,31,79.1C15.1,83.7,-1.9,82.7,-18.8,78.8C-35.8,74.9,-52.7,68.1,-65.7,56.3C-78.6,44.5,-87.5,27.6,-90.5,9.4C-93.4,-8.8,-90.3,-28.3,-80.4,-43.2C-70.6,-58.1,-54,-68.5,-38.1,-73.8C-22.2,-79.1,-7,-79.2,7.4,-79.9C21.9,-80.6,43.7,-82,44.7,-76.3Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        {/* Enhanced section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full mb-4 border border-blue-200"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-sm font-medium text-blue-800 uppercase">Key Features</span>
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Why you should try AO | <span className="text-blue-600">Learn</span>
            
            {/* Animated underline */}
            <motion.div 
              className="absolute -bottom-2 left-1/2 h-1 bg-blue-600"
              initial={{ width: 0, x: "-50%" }}
              animate={{ width: "120px", x: "-60px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.h2>
          
          <motion.p
            className="max-w-2xl mx-auto text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Discover powerful tools to enhance your development workflow and productivity
          </motion.p>
        </div>

        {/* Improved layout with enhanced animations */}
        <div className="relative">
          {/* Interactive grid with staggered animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`
                  ${index % 3 === 1 ? 'lg:translate-y-6' : ''} 
                  ${index % 3 === 2 ? 'lg:translate-y-3' : ''}
                `}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 50
                }}
              >
                <FeatureCard feature={feature} index={index} />
              </motion.div>
            ))}
          </div>
          
          {/* Connecting elements with animation */}
          <div className="absolute inset-0 -z-10 hidden lg:block pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M200 300 C 350 100, 650 500, 800 300" 
                stroke="rgba(59, 130, 246, 0.08)" 
                strokeWidth="1.5" 
                strokeDasharray="5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.path 
                d="M150 400 C 300 600, 700 200, 850 400" 
                stroke="rgba(59, 130, 246, 0.08)" 
                strokeWidth="1.5" 
                strokeDasharray="5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;