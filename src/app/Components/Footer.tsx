


import { MdRecordVoiceOver } from "react-icons/md";
import { BiMobileVibration } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
export default function Footer (){
    return(
        <footer className=" border border-t-[#33353f] border-l-transparent border-r-transparent border-b-transparent text-white">
        <div className="container flex justify-between">
                               
            <div className=" flex gap-2 text-xl md:text-3xl text-white font-semibold left-0 py-9">
            <h1>Hello ...</h1><MdRecordVoiceOver className="text-white mt-1.5" />
            </div>
            <div className="flex text-justify justify-center ">
        <div className="text-justify justify-center mt-7 mx-0">
            
        <div className="flex  gap-2 text-sm lg:text-2xl ">
            <BiMobileVibration className="text-white mt-1" /><p className="text-[#adb7be]">+923343536883</p>            
        </div><br/>
        <div className="flex gap-2 text-sm lg:text-2xl">
            <FaWhatsapp className="text-white mt-1"/><p className="text-[#adb7be]">+923425912313</p>
        </div>
        </div>
        
        </div>
        </div>
        </footer>
    )
}