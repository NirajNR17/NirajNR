import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"Mollure",
        img:"Mollure.png",
        url:"https://mollure.nl/",
        desc:"This project was developed for a salon shop in the Netherlands to facilitate online booking and home services. The platform allows customers to book appointments for various salon services such as haircuts, styling, and beauty treatments. Additionally, it offers home service bookings where professionals can be scheduled to provide salon services at the customer's location.Tech Stack: Laravel, PHP, HTML, CSS, JavaScript."
    },
    {
        id:2,
        title:"StoneSmith",
        img:"stonesmith.png",
        url:"https://stonesmithindia.com/",
        desc:"StoneSmith is a business website designed to showcase a wide range of stones for house decoration. The site is built on WordPress and serves as a catalog for potential customers to view various types of stones, their properties, and their uses in home decoration. The website aims to attract homeowners, interior designers, and architects looking for high-quality decorative stones."
    },
    {
        id:3,
        title:"Python and Machine Learning Project",
        img:"ML.jpeg",
        url:"https://github.com/NirajNR17/HandMouseControl.github.io",
        desc:"This innovative project involves controlling the mouse pointer using hand gestures. It leverages machine learning techniques to interpret hand movements captured via a webcam, translating them into cursor movements on the screen. The project aims to provide an alternative input method for users, enhancing accessibility and user experience."
    },
    {
        id:4,
        title:"React Websites",
        img:"React.jpeg",
        desc:"This category includes a portfolio of dynamic websites developed using React. These websites range from personal portfolios to more complex applications, showcasing the versatility and power of React in creating responsive and interactive web applications.Portfolio Website: A personal website to showcase projects, skills, and experience. Features include a project gallery, resume download, and contact form. Dynamic Web Applications: Various projects demonstrating dynamic content loading, state management, and API integrations."
    },
    {
        id:5,
        title:"Blogging",
        img:"Blogging.jpeg",
        url:"https://learnerbits.com/blogs/",
        desc:"Learnerbits is a blog website where various articles on technology, programming, and development tips are posted. It serves as a learning resource for developers and tech enthusiasts, offering insightful content and tutorials to help readers stay updated with the latest trends and best practices in the tech industry."
    },
];

const Single = ({item}) => {
    const ref = useRef();
    const  {scrollYProgress} = useScroll({target:ref,});
    const y = useTransform(scrollYProgress, [0,1], [-100,100]);
    return (
        <section ref={ref}>
            <div className="container flex items-center justify-center w-full h-full">
                <div className="wrapper max-w-7xl h-full m-auto flex gap-12 items-center justify-center">
                    <div className="imgContainer flex h-1/2 ">
                        <img className='object-cover w-full h-full' src={item.img} alt="" />
                    </div>
                    <motion.div className='textContainer flex flex-col gap-7' >
                        <h2 className='text-7xl'>{item.title}</h2>
                        <p className='text-gray-500 text-xl'>{item.desc}</p>
                        <button className='bg-orange-500 rounded-3xl'><a href={item.url} target='blank'>See Demo</a></button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function Portfolio(){
    const ref = useRef()
    const  {scrollYProgress} = useScroll({target:ref,offset:["end end","start start"],});
    const scaleX = useSpring(scrollYProgress,{stiffness:100,damping:30,});
    return(
        <div className='portfolio relative' ref={ref}>
            <div className="progress sticky top-0 left-0 pt-8 text-center text-5xl text-orange-400">
                <h1>Featured Work</h1>
                <motion.div style={{scaleX}} className="progressBar h-2 bg-white"></motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Portfolio;