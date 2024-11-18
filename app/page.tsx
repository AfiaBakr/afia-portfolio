import Image from "next/image";
import Herosection from "./components/HeroSection";
import NavLink from "./components/NavLink";
import Navbar from "./components/Navbar";
import AboutSection from "./components/Aboutsection";
import Project from "./components/Projects";
import Email from "./components/Email";
import Footer from "./components/footer";
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
