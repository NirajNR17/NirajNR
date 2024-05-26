import React from 'react';
import { animate, motion } from "framer-motion"
import Sidenav from '../Sidebar/Sidenav';

function Navbar() {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidenav />
            <div className="wrapper flex justify-between items-center m-auto w-3/4 h-24">
                <motion.span initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }}
                transition={{duration:0.5}} 
                className='logo'>
                    NirajNR
                </motion.span>
                <div className='social flex'>
                    <p className='ml-3'><a href="https://www.instagram.com/niraj.nr7/"><img className='h-7 flex' src="./instagram.svg" alt="insta" /></a></p>
                    <p className='ml-3'><a href="https://wa.me/01222XXX333"><img className='h-7 flex' src="./whatsapp.svg" alt="wp" /></a></p>
                    {/* Link and social favicons inpor favicons */}
                </div>
            </div>
        </div>
    )
}

export default Navbar;