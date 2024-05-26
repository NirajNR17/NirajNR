import React from 'react'
import { motion } from "framer-motion"

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        }
    }
}
const itemVariants = {
    open:{
        y:0,
        opacity:1,
    },
    closed:{
        y:50,
        opacity:0,
    },
};

function Links(){
    const items = ["Home","Services","Portfolio","Contact","About"];

    return(
        <>
        <motion.div variants={variants}
        className='absolute text-4xl text-black  w-full h-full flex flex-col items-center justify-center'>
            {items.map((item) => (
                <motion.a className='mb-3' href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale: 0.95}}>
                    {item}
                </motion.a>
            ))}
        </motion.div>
        </>
    )
}

export default Links;