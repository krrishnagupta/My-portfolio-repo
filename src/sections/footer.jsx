import 'boxicons/css/boxicons.min.css'
import { useEffect, useState } from "react";

 


function Footer () {
  const [showButton, setShowButton] = useState(true);

  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setShowButton(false); // hide after clicking
  };

  // Hide button automatically if user is already near top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 150) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="w-full z-10 bg-gray-950 text-gray-300 mt-20 pt-12 pb-6 px-6">

      {/* Slogan */}
      <p className="text-center text-2xl md:text-3xl font-thin text-white mb-6 tracking-wider">
        Think clearly. Build simply. Improve constantly.
      </p>

      {/* Thank You */}
      <h3 className="text-center text-xl md:text-2xl font-bold text-white">
        Thank you for visiting 🤩
      </h3>

      <p className="text-center text-gray-400 mt-2 max-w-xl mx-auto">
        I appreciate your time — if you want to connect or collaborate, my inbox is open.
      </p>

      {/* Top Arrow Button (above hr) */}
      {showButton && (
        <div className="flex justify-end mt-2">
          <button
            onClick={scrollToHero}
            className="bg-white text-gray-900 text-3xl border-4 border-[#e99b63] font-semibold w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-gray-200 transition">
            <i className='bx  bx-arrow-to-top'></i> 
          </button>
        </div>
      )}

      {/* Divider */}
      <hr className="border-gray-700 mt-10 mb-6" />

      {/* Branding + Social Icons */}
      <div className="w-full mx-3 px-3 flex items-center justify-between flex-col-reverse md:flex-row gap-4">
        
        {/* Branding */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Krishna Kumar Gupta
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-xl">
          <a href="https://github.com/krrishnagupta" target="_blank" className="hover:text-white transition">
             <i className='bx bxl-github text-md'></i>
          </a>
          <a href="https://www.linkedin.com/in/krishna-kumar-gupta-239a0a257" target="_blank" className="hover:text-white transition">
            <i className='bx bxl-linkedin text-md' ></i>
          </a>
          <a href="mailto:krrishnakumargupta@gmail.com" className="hover:text-white transition">
            <i className='bx  bx-envelope-open'></i> 
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;



