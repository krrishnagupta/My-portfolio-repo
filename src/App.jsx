import ParticalBackground from "./components/ParticalBackground";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Project from "./sections/Project";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    })
  })

  return (
    <>
      <main>
        {/* particale background  */}
        <ParticalBackground />

        {/* Gradinet image  */}
        <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="gradient image"></img>

        <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_90px_20px_#e99b63]
        -rotate-[30deg] -z-10 "></div>

        {/* header section  */}
        <Header /> 

        {/* home/hero section  */}
        <Hero />

        {/* About section  */}
        <About />

        {/* Skills section  */}
        <Skills />

        {/* Experience section  */}
        <Experience />

        {/* Projects section  */}
        <Project />

        {/* contact section  */}
        <Contact />

        {/* Footer section  */}
        <Footer />
      </main>
    </>
  )
}

export default App;