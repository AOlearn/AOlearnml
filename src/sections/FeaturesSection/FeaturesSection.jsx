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
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Drag-and-Drop Interface",
    description: "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface."
  },
  {
    icon: <Fingerprint className="w-8 h-8 text-primary" />,
    title: "Multi-Platform Compatibility",
    description: "Build ML models that run seamlessly across multiple platforms, including mobile, desktop."
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "No-code editors",
    description: "Jumpstart your ML projects with a variety of built-in templates for different types of applications and environments."
  },
  {
    icon: <MonitorPlay className="w-8 h-8 text-primary" />,
    title: "Real-Time Preview",
    description: "Preview your ML application in real-time as you make changes, allowing for quick iterations and adjustments."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Collaboration Tools",
    description: "Work together with your team in real-time on ML models, enabling seamless collaboration and idea sharing."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    title: "Analytics Dashboard",
    description: "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      className="bg-dark rounded-xl overflow-hidden shadow-md transition-all duration-300 h-full"
      variants={itemVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="p-6 flex flex-col items-center text-center">
        <div className="bg-dark/80 rounded-full p-4 mb-4 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="grid-background"></div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-light/50 to-light/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-dark px-4 py-1.5 rounded-full mb-4"
          >
            <span className="text-sm font-medium text-primary uppercase">Feature</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-dark"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Why should try AO | <span className="text-primary">Learn</span>
          </motion.h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;