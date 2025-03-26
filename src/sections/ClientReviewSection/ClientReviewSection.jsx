import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// Sample review data - replace with real data
const reviews = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Data Scientist",
    company: "TechInnovate",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "AOLearnML has completely transformed how I build and deploy machine learning models. The intuitive interface makes complex tasks accessible even to beginners.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "AI Developer",
    company: "FutureTech",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "I've tried numerous ML platforms, but none compare to the ease and flexibility of AOLearnML. The real-time previews and collaboration features are game-changers.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Product Manager",
    company: "InnovateCorp",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    content: "As someone without a technical background, I was amazed at how quickly I could get started with AOLearnML. The no-code editor is powerful yet accessible.",
    rating: 4
  }
];

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

// Review card component with animations
const ReviewCard = ({ review, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative bg-white rounded-xl overflow-hidden box-shadow h-full"
    >
      {/* Top accent line with different colors based on index */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${
        index % 3 === 0 ? 'bg-blue-500' : 
        index % 3 === 1 ? 'bg-blue-400' : 
        'bg-blue-600'
      }`}></div>
      
      {/* Quote icon with glowing effect */}
      <div className="absolute top-6 right-6 opacity-10">
        <Quote className="w-12 h-12 text-blue-500" />
      </div>
      
      <div className="p-8 relative z-10">
        {/* Rating */}
        <div className="mb-4">
          <StarRating rating={review.rating} />
        </div>
        
        {/* Review content */}
        <p className="text-gray-700 mb-6 relative">
          "{review.content}"
        </p>
        
        {/* User info */}
        <div className="flex items-center">
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img 
                src={review.avatar} 
                alt={review.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              className="absolute -inset-1 rounded-full border border-blue-400/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="ml-4">
            <h4 className="font-semibold text-gray-900">{review.name}</h4>
            <p className="text-sm text-gray-500">{review.role}, {review.company}</p>
          </div>
        </div>
      </div>
      
      {/* Animated particle dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              top: `${20 + i * 30}%`,
              left: `${85 + i * 5}%`,
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
  );
};

// Background decoration component
const BackgroundDecoration = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="grid-background"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-blue-50/80"></div>
    
    {/* Animated background elements */}
    <motion.div 
      className="absolute top-20 left-10 w-72 h-72 bg-blue-300/10 rounded-full blur-2xl"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.3, 0.2],
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
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        delay: 1
      }}
    />
  </div>
);

const ClientReviewSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <BackgroundDecoration />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading with animation */}
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What Our Users Say
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-blue-500 mx-auto my-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Discover why developers and companies are choosing our platform to power their machine learning workflows
          </motion.p>
        </motion.div>
        
        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
        
        {/* Call to action button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="#" className="btn-primary inline-flex items-center">
            <span>Join our growing community</span>
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientReviewSection;
