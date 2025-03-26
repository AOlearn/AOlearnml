import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// FAQ Data
const faqData = [
  {
    question: "What is AO Learn?",
    answer: "AO Learn is a comprehensive platform designed to help developers master machine learning and AI concepts through interactive tutorials, practical examples, and a supportive community environment."
  },
  {
    question: "Do I need prior coding experience?",
    answer: "While some basic programming knowledge is helpful, our platform is designed for various skill levels. Complete beginners can start with our introductory courses, while experienced developers can dive into more advanced topics."
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, AO Learn is available across multiple platforms including web, iOS, and Android, allowing you to continue your learning journey wherever you go."
  },
  {
    question: "How frequently is content updated?",
    answer: "We update our content regularly to ensure it reflects the latest developments in AI and machine learning. Our team of experts constantly reviews and refreshes course materials."
  },
  {
    question: "Can I collaborate with others on projects?",
    answer: "Absolutely! AO Learn provides robust collaboration tools that allow you to work with others on projects, share insights, and build together in real-time."
  }
];

// Background decoration component
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
    <svg className="absolute bottom-20 left-20 opacity-5" width="120" height="120" viewBox="0 0 120 120">
      <motion.path 
        d="M20,60 A40,40 0 1,1 100,60 A40,40 0 1,1 20,60 Z" 
        fill="none" 
        stroke="#3b82f6" 
        strokeWidth="2"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  </div>
);

// Enhanced FAQ accordion item
const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div 
      className="mb-4 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div 
        className={`
          bg-white rounded-xl overflow-hidden shadow-md border border-blue-100
          transition-all duration-300
          ${isOpen ? 'shadow-lg' : ''}
        `}
      >
        {/* Question header */}
        <motion.button
          className="w-full px-6 py-4 text-left flex justify-between items-center"
          onClick={onClick}
          whileHover={{ backgroundColor: 'rgba(239, 246, 255, 0.6)' }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-blue-600"
          >
            <ChevronDown />
          </motion.div>
        </motion.button>
        
        {/* Answer content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 py-4 border-t border-blue-100 bg-blue-50/50">
                <p className="text-gray-600">{answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Highlight accent when open */}
      {isOpen && (
        <motion.div 
          className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-lg"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <BackgroundDecoration />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Decorative elements */}
        <div className="absolute -right-4 top-20 w-20 h-20 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#3B82F6" d="M44.7,-76.3C58.9,-69.9,71.8,-59.3,79.6,-45.5C87.4,-31.7,90.2,-14.6,88.8,1.9C87.5,18.5,82,36.3,71.9,50.3C61.7,64.3,46.9,74.5,31,79.1C15.1,83.7,-1.9,82.7,-18.8,78.8C-35.8,74.9,-52.7,68.1,-65.7,56.3C-78.6,44.5,-87.5,27.6,-90.5,9.4C-93.4,-8.8,-90.3,-28.3,-80.4,-43.2C-70.6,-58.1,-54,-68.5,-38.1,-73.8C-22.2,-79.1,-7,-79.2,7.4,-79.9C21.9,-80.6,43.7,-82,44.7,-76.3Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full mb-4 border border-blue-200"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-sm font-medium text-blue-800 uppercase">Support</span>
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Frequently Asked <span className="text-blue-600">Questions</span>
            
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
            Find answers to common questions about our platform and services
          </motion.p>
        </div>
        
        {/* Two-column layout on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column with illustration */}
          <motion.div 
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-full max-w-md">
              {/* Decorative background shape */}
              <div className="absolute inset-0 bg-blue-100/50 rounded-3xl transform rotate-3"></div>
              
              {/* Main illustration container */}
              <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-sm border border-blue-100">
                <div className="flex flex-col space-y-6">
                  {/* Decorative elements that look like FAQ items */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="bg-white rounded-lg p-4 shadow-sm"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + (i * 0.2) }}
                    >
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-3">
                          <span className="text-blue-600 text-xs font-bold">Q</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full w-2/3"></div>
                      </div>
                      <div className="pl-11">
                        <div className="h-2 bg-gray-100 rounded-full w-full mb-2"></div>
                        <div className="h-2 bg-gray-100 rounded-full w-5/6"></div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Animated dots */}
                  <div className="flex justify-center space-x-1 pt-2">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-blue-400"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right column with actual FAQ items */}
          <div>
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
                index={index}
              />
            ))}
            
            {/* Help prompt at the end */}
            <motion.div
              className="mt-6 bg-blue-50 rounded-xl p-5 border border-blue-100 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">Still have questions?</h4>
                  <p className="text-sm text-gray-600">If you couldn't find the answer to your question, feel free to contact our support team.</p>
                  <a href="#contact" className="inline-flex items-center mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
                    Contact support
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;