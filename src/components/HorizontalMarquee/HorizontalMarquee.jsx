import React from "react";
import { motion } from "framer-motion";

const reviews = [
    {
        name: "John",
        username: "@john",
        message: "Amazing service! Highly recommended.",
        img: "https://images.unsplash.com/photo-1616434116710-c45ce99c1a77?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Jane",
        username: "@Jane",
        message: "Amazing experience, will come back for sure!",
        img: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "David",
        username: "@David",
        message: "Really satisfied with the support I received.",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Emma",
        username: "@Emma",
        message: "Top-notch quality and fast delivery!",
        img: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Max",
        username: "@Max",
        message: "Amazing work, will come back for sure!",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60"
    }
];

// Function to duplicate items for seamless loop
const createDuplicatedArray = (array) => {
    return [...array, ...array];
};

const ReviewCard = ({ img, name, username, message }) => {
    return (
        <div className="flex-shrink-0 w-auto cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition duration-300 p-4 mr-4">
            <div className="flex flex-row items-center gap-4">
                <img className="rounded-full object-cover h-10 w-10" alt={name} src={img} />
                <div className="flex flex-col w-full">
                    <figcaption className="text-sm font-medium text-white">{name}</figcaption>
                    <p className="text-xs font-medium text-gray-500">{username}</p>
                </div>
            </div>
            <p className="mt-2 text-xs text-gray-300">{message}</p>
        </div>
    );
};

const MarqueeRow = ({ children }) => {
    const marqueeVariants = {
        animate: {
            x: ["0%", "-50%"], // Move from 0% to -50% to cover half of the duplicated items
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <motion.div
            className="flex"
            variants={marqueeVariants}
            animate="animate"
            style={{ whiteSpace: "nowrap" }}
        >
            {children}
        </motion.div>
    );
};

const HorizontalMarquee = () => {
    const duplicatedReviews = createDuplicatedArray(reviews);

    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black rounded-lg">
            <div className="w-full overflow-hidden">
                <div className="flex w-full">
                    <MarqueeRow>
                        {duplicatedReviews.map((review, index) => (
                            <ReviewCard key={index} {...review} />
                        ))}
                    </MarqueeRow>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
        </div>
    );
};

export default HorizontalMarquee;