import React, { useState } from 'react'
import Links from './Links/Links';
import { animate, motion } from "framer-motion"
import Togglebutton from './Togglebutton/Togglebutton';

const variants = {
    open:{
        clipPath: "circle(1200px at 50px 50px)",
        transition:{
            type: "spring",
            stiffness: 20,
        }
    },
    closed:{
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            dalay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

function Sidenav(){
    const [open, setOpen] = useState(false);

    return(
        <motion.div className="sidenav flex flex-col items-center justify-center text-white bg-black"
        animate={open ? "open":"closed"}>
            <motion.div className='bg z-50 fixed top-0 left-0 w-1/4 bottom-0 bg-white' variants={variants}>
                <Links />
            </motion.div>
            <Togglebutton setOpen={setOpen} />
        </motion.div>
    )
}

export default Sidenav;