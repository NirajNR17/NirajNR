import React from 'react'
import { motion } from "framer-motion"

const textVariants = {
    initial:{
        x: -500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        }
    },
    scrollButton:{
        opacity:0,
        y: 10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
};

const sliderVariants = {
    initial:{
        x: 0,
    },
    animate:{
        x: "-220%",
        transition:{
            repeat: Infinity,
            repeatType:"mirror",
            duration: 20,
        }
    },
};

function Hero() {
    return (
        <div className='hero relative'>
            <div className='wrapper m-auto h-full max-w-6xl'>
                <motion.div variants={textVariants} initial="initial" animate="animate" className='textContainer w-3/5 h-full flex flex-col justify-center gap-5'>
                    <motion.h2 variants={textVariants} className='text-3xl text-purple-800 tracking-wider'>NIRAJ RAUT</motion.h2>
                    <motion.h1 variants={textVariants} className='text-8xl'>Web Developer & UI Designer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants} className='p-3 mr-4 border-solid border border-white rounded cursor-pointer'>See Work</motion.button>
                        <motion.button variants={textVariants} className='p-3 mr-4 border-solid border border-white rounded cursor-pointer'>Hire</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} className='w-5' animate="scrollButton" src="" alt="" />
                </motion.div>
            </div>
            <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer absolute text-9xl bottom-0 text-gray-800">
                <p>NirajNR7<span className='ml-40'>NirajNR7</span><span className='ml-40'>NirajNR7</span></p>
            </motion.div>
            <div className='imageContainer'>
                <img className='h-full absolute top-0 right-0' src="/NIraj 2.png" />
            </div>
        </div>
    )
}

export default Hero;