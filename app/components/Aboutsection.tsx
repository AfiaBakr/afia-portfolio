"use client";



import { useTransition, useState, SetStateAction } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "educations",
        content: (
            <ul className="list-disc pl-2">
                <li>Student of GIAIC</li>
                <li>B-Tech (Hons) Civil</li>
                <li>Diploma in Architecture</li>
                <li>Matric Science</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>32 years in Govt Sector as Assistant Architect</li>
                <li>One year with GIAIC collaboration as a learner</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id:any) => {
        startTransition(() => setTab(id));
    };

    return (
        <section className=" border border-t-[#33353f] border-l-transparent border-r-transparent border-b-transparent text-white">
            <div className="text-white md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
                <img
                    src="./image/aboutsection.jpg"
                    alt="seeking"
                    width={500}
                    height={500}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a learner in the Governor Initiative Program, working toward becoming a full-stack web developer. I am passionate about building responsive and creative web applications. I have experience with HTML, CSS, TypeScript, JavaScript, Next.js, and Tailwind CSS. As a quick learner, I am always eager to expand my knowledge and skills. I am excited about collaborating with others to create innovative and impactful applications.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton 
                        selectTab={() => 
                        handleTabChange("skills")} 
                        active={tab === "skills"}>
                            {""}
                            Skills{""}
                        </TabButton>
                        <TabButton 
                        selectTab={() => 
                        handleTabChange("educations")} 
                        active={tab === "educations"}>
                            {""}
                            Education{""}
                        </TabButton>
                        <TabButton 
                        selectTab={() => 
                        handleTabChange("experience")} 
                        active={tab === "experience"}>
                            {""}
                            Experience{""}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        { TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
