import React from 'react';
import Accordion from '../../components/FAQAccordion/FAQAccordion';

const FAQSection = () => {
    return (
        <div className="flex items-center justify-center h-auto bg-black text-white">
            <div className="w-full max-w-6xl flex flex-col lg:flex-row px-4 py-20">
                <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 flex flex-col justify-center">
                    <h2 className="text-3xl sm:text-5xl lg:text-4xl mt-1 lg:mt-2 mb-6 tracking-wide text-white">Frequently Asked Questions</h2>
                    <p className="text-gray-400 text-sm leading-loose text-center lg:text-left">
                        Here you'll find answers to the most commonly asked questions about our services. If you have any other queries, feel free to reach out to our support team for assistance.
                    </p>
                </div>

                <div className="lg:w-1/2 flex justify-center">
                    <Accordion />
                </div>
            </div>
        </div>
    );
};

export default FAQSection;