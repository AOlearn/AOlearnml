import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AccordionItem = ({ title, content, isExpanded, onClick }) => {
    return (
        <div className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-md shadow-lg mb-2 border border-zinc-800 transition duration-300">
            <motion.div
                onClick={onClick}
                className="flex justify-between items-center p-5 cursor-pointer"
            >
                <h3 className="text-sm font-medium">{title}</h3>
                <motion.span
                    className="text-gray-400"
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-3 h-3"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </motion.span>
            </motion.div>

            <motion.div
                initial={false}
                animate={{ height: isExpanded ? 'auto' : '0' }}
                transition={{
                    duration: 0.3,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
                className="overflow-hidden"
            >
                <div className="px-5 py-4 text-gray-400 text-sm leading-loose">{content}</div>
            </motion.div>
        </div>
    );
};

const Accordion = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleItemClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const accordionItems = [
        {
            title: 'How to setup AO Learn?',
            content: 'While spawning a process use  qG-uo90351vUF7WPmUcObFtk7NU1isZYdPS0r2yQdKY as module id to spawn a process and just write aolearn=require("aolearn").',
        },
        {
            title: 'How do i load my data',
            content: 'we are using a fixed data standard which is used in the codecell demo ',
        },
        {
            title: 'what can you do with aolearn',
            content: 'applications utilizing aolearn can range from a wide variety from search engines to recomendation sytems to defi ai agents',
        },
    ];

    return (
        <div className="w-full max-w-xl mx-auto p-5">
            {accordionItems.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isExpanded={expandedIndex === index}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
