import 'boxicons/css/boxicons.min.css'
import Spline from '@splinetool/react-spline'
import { useState, useEffect } from "react";


const Hero = () => {

  //{ Type writer function }
  const words = ["Front-End Developer", "Software Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);      // current word index
  const [subIndex, setSubIndex] = useState(0); // current letter index
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    // typing speed
    const speed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!deleting) {
        // typing forward
        if (subIndex < currentWord.length) {
          setSubIndex(subIndex + 1);
        } else {
          // pause before deleting
          setTimeout(() => setDeleting(true), 800);
        }
      } else {
        // deleting backward
        if (subIndex > 0) {
          setSubIndex(subIndex - 1);
        } else {
          // move to next word
          setDeleting(false);
          setIndex((index + 1) % words.length);
        }
      }

      setText(currentWord.substring(0, subIndex));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <main className="flex flex-col mb-1 md:mb-0 lg:my-8 lg:flex-row items-center justify-between lg:mt-18 min-h-[calc(90vh-6rem)]">

      <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="max-w-xl mt-[90%] 
        md:mt-[60%] lg:mt-5 ml-[5%] z-10">

        {/* hire me button  */}
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63]
          shadow-[0_0_15px_#ffffff65] rounded-full">
          <a href="mailto:krrishnakumargupta@gmail.com" className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-3">
            <i className='bx bxs-diamond'></i>
            Hire-me
          </a>
        </div>

        {/* intro section  */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide my-3'>
          Hi,<br />
          <span className='text-3xl sm:text-4xl lg:text-5xl font-light' >Iam Krishna Kumar Gupta </span>
        </h1>
        <p className='text-base sm:text-lg tracking-wider max-w-[25rem] lg:max-w-[30rem] text-gray-400 my-3'>
          <span className='font-semibold text-[#e99b63] text-2xl my-5 py-4'>
            {text}
            <span className="border-r-2 border-[#e99b63] ml-1 animate-pulse"></span>
          </span> <br />
          <span className='lg:my-12 py-5'>
            Turning requirements into well-engineered, high-quality web applications.
          </span>
        </p>

        {/* social media links  */}
        <div className='flex gap-4 mt-10'>
          <a className='border border-[#2a2a2a] py-1 sm:py-3 px-4 sm:px-5 rounded-full text-sm sm:text-md font-semibold transition-all duration-300 hover:bg-[#0077b5] focus:border-[#0077b5] focus:bg-black focus:text-[#0077b5]' href="https://www.linkedin.com/in/krishna-kumar-gupta-239a0a257" target="_blank">
            LinkdIn - <i className='bx bxl-linkedin text-sm' ></i>
          </a>

          <a className='border border-[#2a2a2a] py-1 sm:py-3 px-4 sm:px-5 rounded-full text-sm sm:text-md font-semibold transition-all duration-300 hover:bg-[#bcbcbc] hover:text-black focus:border-[#fff]' 
          href="https://github.com/krrishnagupta" target="_blank">
            Github - <i className='bx bxl-github text-md'></i>
          </a>
        </div>
      </div>

      {/* 3D robot part  */}

      <Spline className='absolute lg:top-[-10%] top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full'
        scene="https://prod.spline.design/ncxNvE8W2eLPMM9L/scene.splinecode" />

    </main>
  )
}

export default Hero
