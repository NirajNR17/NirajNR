import React from 'react'
import { motion } from "framer-motion"

const variants = {
    initial:{
        x:-500,
        y: 100,
        opacity: 0,
    },
    animate:{
        x:0,
        opacity: 1,
        y: 0,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

function Services() {
    return (
        <motion.div className='services h-full flex flex-col justify-between' variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer flex self-end items-center gap-5 mt-20" variants={variants}>
                <p className='text-gray-500 text-right'>I focus on helping your brand grow <br /> And move forward</p><hr className='w-72 border-t-gray-500 border-t-2' />
            </motion.div>
            <motion.div className="titleContainer flex justify-end m-auto flex-col" variants={variants}>
                <div className="title flex items-center gap-12">
                    <img className='w-80 h-24 rounded-full object-cover' src="people.webp" alt="" />
                    <h1 className='text-5xl font-light'><b>Unique</b> Ideas</h1>
                </div>
                <div className="title flex items-center gap-12">
                    <h1 className='text-5xl font-light'><b>For Your</b> Business.</h1>
                    <button className='w-52 h-20 rounded-full cursor-pointer text-xl text-black bg-orange-400'>What We Do?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer flex max-w-6xl m-auto" variants={variants}>
                <motion.div className="box p-10 border-2 flex border-solid border-gray-500 flex-col justify-between" whileHover={{background:"lightgray",color:"black"}}>
                    <h2 className='mb-2 text-lg font-medium'>Wordpress Developer</h2>
                    <p>Create a beautiful and interactive website for individuals and Businesses. SEO optimized, fast loading time and user friendly websites.</p>
                    <button className='bg-orange-400 mt-2 text-black rounded-md'>Go</button>
                </motion.div>
                <motion.div className="box p-10 border-2 flex border-solid border-gray-500 flex-col justify-between" whileHover={{background:"lightgray",color:"black"}}>
                    <h2 className='mb-2 text-lg font-medium'>Web Developer</h2>
                    <p>Create website for clients from scratch using my coding and designing skills. Pleasent and smooth design websites with complete client satisfaction.</p>
                    <button className='bg-orange-400 mt-2 text-black rounded-md'>Go</button>
                </motion.div>
                <motion.div className="box p-10 border-2 flex border-solid border-gray-500 flex-col justify-between" whileHover={{background:"lightgray",color:"black"}}>
                    <h2 className='mb-2 text-lg font-medium'>Blogging</h2>
                    <p>Unique and SEO optimized blogs on different topics for your website for receiving more traffic to your website.</p>
                    <button className='bg-orange-400 mt-2 text-black rounded-md'>Go</button>
                </motion.div>
                <motion.div className="box p-10 border-2 flex border-solid border-gray-500 flex-col justify-between" whileHover={{background:"lightgray",color:"black"}}>
                    <h2 className='mb-2 text-lg font-medium'>Branding</h2>
                    <p>Create logo, slogans and designs for your business with me.</p>
                    <button className='bg-orange-400 mt-2 text-black rounded-md'>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services;