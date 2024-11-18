'use client';
import react, {useState,useRef} from "react";
import ProjectCards from "./ProjectCards";
import Image from "next/image"; 
import {animate, motion, useInView} from "framer-motion";

const projectData =[
    {
        id: 1,
        title: "Weather Gatgeds",
        description: "A mini project for a fun by Student Ambassador Sir Asharib.",
        image: "/image/project/project1.jpg",        
        gitUrl: "git@github.com:AfiaBakr/New_Challenge_30_Days.git",
        previewUrl: "https://new-challenge-30-days.vercel.app/"
    },
    {
        id: 2,
        title: "Birth Day Wish Card",
        description: " This create for my Daughter but a part of project by Student Ambassador Sir Asharib.",
        image: "/image/project/project3.jpg",        
        gitUrl: "git@github.com:AfiaBakr/03_birthday_wish.git",
        previewUrl: "https://03-birthday-wish-kohl.vercel.app/"
    },
    {
        id: 3,
        title: "Web page of a product of PakWheel",
        description: "An assignment of GIAIC by Sir Jawwad Ali.",
        image: "/image/project/project2.jpg",    
        gitUrl: "git@github.com:AfiaBakr/pakwheel-cars-webpage.git",
        previewUrl: "https://pakwheel-cars-webpage.vercel.app/"
    }
]

const Project =()=>{
    const ref=useRef(null);
    const isInView =useInView(ref, {once: true});

    const cardVariants ={
        initial: {y:50, opacity:0},
        animate: {y:0, opacity:1}
    };

    return(
        <section id="project">
            <div>
        <h2 className="text-center text-white font-bold text-4xl my-8">My Projects</h2>
        
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            
            {projectData.map((project, index) => (
            <motion.li 
                key={index}
                variants={cardVariants} 
                initial="initial" 
                animate ={isInView? "animate":"initial"}
                transition={{duration: 0.3, delay:index * 0.4 }}> 
            <ProjectCards 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            />
            </motion.li>))};            
        </ul>
        </div>
        </section>
    )
};

export default Project;