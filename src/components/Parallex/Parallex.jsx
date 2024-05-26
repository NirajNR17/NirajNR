import React, { useRef } from 'react'
import { motion, useScroll, useTransform }from "framer-motion"

function Parallex({type}){

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["start start","end start"]
    })

    const tText = useTransform(scrollYProgress, [0,1], ["0%","500%"])
    const yBg = useTransform(scrollYProgress, [0,1], ["0%","50%"])

    return(
        <div className="parallax overflow-hidden w-full h-full relative flex items-center justify-center" ref={ref} style={{background:type === "services"?"linear-gradient(180deg, #111132, #0c0c1d)":"linear-gradient(180deg, #111132, #505064)",}}>
            <motion.h1 className='text-8xl z-50' style={{y:tText}}>{type==="services"?"What We Do?":"What We Did?"}</motion.h1>
            <motion.div className="mountains absolute w-full h-full bg-cover bg-bottom z-50"><img className='bg-cover w-full h-full' src="/mountains.png" alt="" /></motion.div>
            <motion.div style={{y:yBg, backgroundImage:`url(${type === "services"?"/planets.png":"/sun.png"})`}} className="planets z-40 absolute w-full h-full bg-cover bg-bottom"></motion.div>
            <motion.div style={{x:yBg}} className="stars absolute w-full h-full bg-cover bg-bottom"><img className='bg-cover w-full h-full' src="/stars.png" alt="" /></motion.div>
        </div>
    )
}

export default Parallex;