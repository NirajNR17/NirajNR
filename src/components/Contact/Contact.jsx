import React, { useState, useRef } from 'react'
import { animate, motion } from "framer-motion"
import emailjs from '@emailjs/browser'


const variants = {
    initial:{
        y:500,
        opacity:0,
    },
    animate: {
        y:0,
        opacity:1,
        transition: {
            duration:0.5,
            staggerChildren: 0.1,
        },
    },
};

function Contact(){
    
    const form = useRef();
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_qtupfys', 'template_j0xrwgl', form.current, {
            publicKey: 'X2WADeCWPrwhXw-5F',
          })
          .then(
            (result) => {
                setSuccess(true)
            },
            (error) => {
                setError(true)
            },
          );
      };

    return(
        <motion.div className='container h-full m-auto flex items-center gap-14' variants={variants} initial="initial" whileInView="animate">
            <motion.div className='textContainer flex flex-col gap-10 ' variants={variants} >
                <motion.h1 className='text-7xl' variants={variants}>Let's work together</motion.h1>
                <motion.div className='item' variants={variants}>
                    <h2 className='text-xl font-medium'>Mail</h2>
                    <span>niraj.raut.23.06@gmail.com</span>
                </motion.div>
                <motion.div className='item' variants={variants}>
                    <h2 className='text-xl font-medium'>Address</h2>
                    <span>Kathora road, Amravati</span>
                </motion.div>
                <motion.div className='item' variants={variants}>
                    <h2 className='text-xl font-medium'>Phone</h2>
                    <span>+91 8550920802</span>
                </motion.div>
            </motion.div>
            <div className='formContainer flex-1'>
                <motion.form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
                    <input className='p-2 bg-transparent rounded-md text-white border-white border-2' type="text" required placeholder='Name' name="name" />
                    <input className='p-2 bg-transparent rounded-md text-white border-white border-2' type="text" required placeholder='E-mail' name="email"/>
                    <textarea className='p-2 bg-transparent rounded-md text-white border-white border-2' rows={8} placeholder='Message' name="message"/>
                    <button type='submit' className='p-2 bg-orange-400 text-black'>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact;