"use client";

import Link from "next/link"
import Image from "next/image"
import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { useEffect } from 'react';
import { motion } from "framer-motion"




export default function Herosection (){
    return(
        <section id="about" className="lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div 
          initial={{opacity:0, scale:0}} 
          animate={{opacity: 1, scale:1}} 
          transition={{duration:0.5}} 
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold ">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-400 via-purple-500 to-blue-600">
                Hello, I'm {""}</span>
              <br/>
              <TypeAnimation sequence={[
        // Same substring at the start will only be typed out once, initially
        'Afia',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Designer',
        1000,
        'Mobile Designer',
        1000,
        'UI/UX Designer',
        1000
      ]}     
      wrapper="span"
      speed={50}
      repeat={Infinity}/>
              </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I am a learner in the Governor Initiative Program, working toward becoming a full-stack web developer.   
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-sky-400 via-purple-500 to-blue-600 hover:bg-slate-200 text-white">Hire Me</button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-sky-400 via-purple-500 to-blue-600 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <Link href="https://hackathon-01-milestone-1-2.vercel.app/" target="_blank" >Download CV</Link></span></button>
          </div>
          </motion.div>
          <motion.div initial={{opacity:0, scale:0}} 
          animate={{opacity: 1, scale:1}} 
          transition={{duration:0.5}} className="col-span-4 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[rgb(54,54,54)] w-[250px] h-[250px] lg:w-[400] lg:h-[400] relative ">
            <img src="image/afia.png"
            alt="Afia"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={310}
            height={310}
            title="Afia"
            />

          </div>
          </motion.div>
          </div>
        </section>
    )
}