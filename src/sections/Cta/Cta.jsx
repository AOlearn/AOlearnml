import React from 'react'
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

function Cta() {
  return (
    <motion.div
    className="relative overflow-hidden min-w-full min-h-screen flex justify-center items-center p-0 md:p-10"
    initial="hidden"
    animate="visible"
    // variants={containerVariants}
    style={{ maxWidth: '65rem', margin: 'auto' }}
>
    {/* Abstract Shapes */}
    <div className="absolute rounded-[30%_70%_70%_30%/30%_61%_39%_70%] blur-[10px] z-[-2] animate-abstractShapeAnimation bg-gradient-to-r from-orange-700 to-orange-400 w-[25%] h-[25%] top-[30%] left-[1%]" />
    {/* <div className="absolute rounded-[30%_70%_70%_30%/30%_61%_39%_70%] blur-[10px] z-[-2] animate-abstractShapeAnimation bg-gradient-to-r from-[#0270ac] to-[#6ff9b9] w-[25%] h-[25%] top-[70%] left-[40%]" /> */}
    <div className="absolute rounded-[30%_70%_70%_30%/30%_61%_39%_70%] blur-[10px] z-[-2] animate-abstractShapeAnimation bg-gradient-to-r from-orange-700 to-orange-400 w-[25%] h-[25%] top-[30%] left-[70%]" />

    {/* Dark Blur */}
    <div className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-[130px] z-[-1]" />


    <motion.div className="w-full flex mt-[100px] flex-col items-center justify-center gap-20">
        <div className="flex justify-center items-center flex-col gap-4">
            <a href="https://thecodingco.in">
                <button className="relative px-5 bg-zinc-800 border-zinc-700 py-3 rounded-full text-xs shadow-2xl overflow-hidden">
                    <span className='flex items-center justify-center gap-4 text-white'>
                        Introducing AO Learn <FaChevronRight />
                    </span>
                </button>
            </a>
            <motion.h1
                // variants={textVariants}
                className="maxz-w-2xl bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Build Design Elevate
            </motion.h1>
            <motion.h2
                // variants={textVariants}
                className="max-w-xl mx-auto text-base md:text-xl text-neutral-700 dark:text-neutral-400 text-center font-light">
                A dynamic ecosystem for effortless model building, training and deployment.
            </motion.h2>
        </div>

        <button className="relative px-8 bg-transparent py-4 rounded-full font-medium text-xs md:text-sm shadow-2xl overflow-hidden shimmer-border">
            <span className='flex items-center justify-center gap-3 text-white'>
                Get Started <FaChevronRight />
            </span>
        </button>
        
        <div className="flex mt-2 justify-center h-max w-max bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100" >
 
</div>
    </motion.div>
    {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div> */}
</motion.div>
  )
}

export default Cta
