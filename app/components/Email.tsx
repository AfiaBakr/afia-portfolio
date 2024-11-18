"use client";
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";




const Email =() => {
    const[emailSubmitted, setEmailSubmitted] = useState(false);
    const handleSubmit =async(e:any) =>{
        e.provintDefault();
        const data ={
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value
        }
        const JSONdata=JSON.stringify(data);
        const endPoint="/api/send";
        //from request for sending data to the serwer.
        const options ={
            //the method is POST because we are sending data.
        methods:'POST',
        headers:{'content-type' : 'application/json',},
        body: 'JSONdata',
        }
        const response =await fetch(endPoint,options);
        const resData = await response.json();
       
        if (response.status ===200) {
            console.log("Message Sent");
            setEmailSubmitted(true);
        }

    }
    return(
        <section id="contact" className=" grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative border border-t-[#33353f] border-l-transparent border-r-transparent border-b-transparent text-white">
        
        <div className="z-10">
        <h5 className="text-2xl font-bold text-white my-8" >Let me connect</h5>
        <p className=" text-[#adb7be] mb-4 max-w-md">
        {""}
        I am looking for the new opportunities, my inbox is always open, whether you have a question or want to say Hi, I will try my best to get bact to you!
        </p>
        <div className="social flex flex-row gap-6 py-8">
            <Link href="https://github.com/AfiaBakr" target="_blank">
            <img src={"./icons8-github-logo-48.png"}
            alt="Github Icon"/></Link>
            <Link href="https://www.linkedin.com/in/afia-bakr-a2866aa8/" target="_blank">
            <img src="./icons8-linkedin-48.png"
            alt="Linked Icon"/></Link>
        </div>
        </div>
        <div>
            <form className="flex flex-col " onSubmit={handleSubmit}>
                <div className="mb-6">
                <label htmlFor="email" className="text-white block  text-sm font-medium">
                Your Email</label>
                <input 
                name="email"
                type="email" 
                id="email" 
                required 
                className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 mb-2 text-sm rounded-lg block w-full p-2.5"
                placeholder="abcdefg@gmail.com"/>
                </div>
                <div className="mb-6">
                <label htmlFor="subject" className="text-white block  text-sm font-medium">
                Subject</label>
                <input 
                name="subject"
                type="text" 
                id="subject" 
                required 
                className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 mb-2 text-sm rounded-lg block w-full p-2.5"
                placeholder="Hello!"/>
                </div>
                <div className="mb-6">
                <label htmlFor="message" className="text-white block text-sm font-medium">
                Message</label>
                <textarea 
                name ="message" 
                id="message" 
                required 
                className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 mb-2 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let talk about...."/>
                </div>
                <button  type="submit" 
                className="bg-blue-400 hover:bg-blue-600 font-sans rounded-lg block w-full py-2.5 px-2 "
                ><Link href="afiabakr8602@gmail.com">Send Message</Link>
                </button>
                {
                    //if the mail was submitted successfully, show a success message.
                    emailSubmitted && (
                        <p className="text-green-500 text-sm mt-2">
                            Email sent successfully!
                        </p>
                    )
                }
            </form>
        </div>
        </section>
    )
};
export default Email;