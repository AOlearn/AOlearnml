import React from 'react';
import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

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
      icon: <BotMessageSquare />,
      text: "Drag-and-Drop Interface",
      description:
        "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
    },
    {
      icon: <Fingerprint />,
      text: "Multi-Platform Compatibility",
      description:
        "Build ML models that run seamlessly across multiple platforms, including mobile, desktop.",
    },
    {
      icon: <ShieldHalf />,
      text: "No-code editors",
      description:
        "Jumpstart your ML projects with a variety of built-in templates for different types of applications and environments.",
    },
    {
      icon: <BatteryCharging />,
      text: "Real-Time Preview",
      description:
        "Preview your ML application in real-time as you make changes, allowing for quick iterations and adjustments.",
    },
    {
      icon: <PlugZap />,
      text: "Collaboration Tools",
      description:
        "Work together with your team in real-time on ML models, enabling seamless collaboration and idea sharing.",
    },
    {
      icon: <GlobeLock />,
      text: "Analytics Dashboard",
      description:
        "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
    },
  ];



const FeaturesSection = () => {
    return (
        <div className="flex flex-col items-center justify-center h-auto py-20 text-white">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6 md:mb-10">Features</h2> */}
            {/* <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-1 lg:mt-2 tracking-wide">Features</h2> */}
            <span className="relative px-5  bg-zinc-800 border border-zinc-700 text-md shadow-2xl overflow-hidden mt-20 text-orange-500 rounded-full h-max text-20px font-medium py-auto uppercase">
          Feature
        </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-1 lg:mt-2 tracking-wide">
            Why should try AO | Learn
        </h2>


<div className="flex flex-wrap mx-[100px] mt-10 lg:mt-10">
  {features.map((feature, index) => (
    <div 
      key={index} 
      className="w-full sm:w-1/2 lg:w-1/3 p-4"
    >
      
      <div className="flex flex-col   shadow-lg rounded-lg p-6 shimmer-border bg-gradient-to-b from-zinc-800 to-black transition duration-300">
        <div className="flex items-center justify-center h-12 w-12 p-2 bg-neutral-900 text-orange-700 rounded-full mx-auto mb-4">
          {feature.icon}
        </div>
        <h5 className="text-center text-xl  mb-2">
          {feature.text}
        </h5>
        <p className="text-center text-md text-neutral-500">
          {feature.description}
        </p>
      </div>
    </div>
  ))}
</div>


        </div>


    );
};

export default FeaturesSection;