

import react from "react";
import Herosection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import AboutSection from "./Components/AboutSection";
import Project from "./Components/Projects";
import Email from "./Components/EmailSection";
import Footer from "./Components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <title>Afia's Portfolio</title>
      <Navbar/>
            <div className="container mt-24 mx-auto px-12 py-4">
            <Herosection/>
            <AboutSection/>
            <Project/>
            <Email/>
            <Footer/>
            </div>
        </main>
  );
}
