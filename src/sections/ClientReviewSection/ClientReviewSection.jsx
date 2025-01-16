import React from "react";
import HorizontalMarquee from "../../components/HorizontalMarquee/HorizontalMarquee";

const ClientReviewSection = () => {
    return (
        <div className="flex items-center justify-center h-auto w-full bg-black text-white">
            <div className="w-full max-w-5xl flex flex-col justify-center items-center px-4 py-20 gap-10 md:gap-20">
                <div className="mb-8 lg:mb-0 flex flex-col justify-center">
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 tracking-wide">What Our Users Say!!</h2>
                    
                    <p className="text-gray-400 text-sm md:text-base leading-loose text-center">
                        We value our clients' feedback and strive to provide the best service possible. Here's what they have to say about us.
                    </p>
                </div>
                <div className="flex justify-center w-full">
                    <HorizontalMarquee />
                </div>
            </div>
        </div>
    );
};

export default ClientReviewSection;