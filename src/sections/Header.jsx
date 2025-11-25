import 'boxicons/css/boxicons.min.css'
import { Link } from "react-scroll";

const Header = () => {

  // toggle funtion for hamburger menu fro mobile devices 
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden')
    }
    else {
      mobileMenu.classList.add('hidden')
    }
  }

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 className="text-3xl md:text-4xl lg-5xl font-light m-0">
        Krishna
      </h1>

      {/* Navigation bar */}
      <nav className="hidden lg:flex items-center gap-10">
        <Link to="about" smooth={true} offset={-80} duration={500} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" className="text-base tracking-wider cursor-pointer transition-colors hover:text-gray-300 z-50">
          About
        </Link>

        <Link to="skills" smooth={true} offset={-80} duration={500} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1200" className="text-base tracking-wider cursor-pointer transition-colors hover:text-gray-300 z-50">
          Skills
        </Link>
        <Link to="experience" smooth={true} offset={-80} duration={500} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1400" className="text-base tracking-wider cursor-pointer transition-colors hover:text-gray-300 z-50">
          Experience
        </Link>
        <Link to="projects" smooth={true} offset={-80} duration={500} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1600" className="text-base tracking-wider cursor-pointer transition-colors hover:text-gray-300 z-50">
          Projects
        </Link>
        <Link to="contact" smooth={true} offset={-80} duration={500} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1800" className="text-base tracking-wider cursor-pointer transition-colors hover:text-gray-300 z-50">
          Contact-me
        </Link>

      </nav>

      {/* mobile menu button  */}
      <button onClick={toggleMobileMenu} className='lg:hidden md:text-4xl text-3xl z-50 p-2'>
        <i className='bx bx-menu'></i>
      </button>

      {/* menu bar for mobile devices  */}
      <div id='mobileMenu' className='hidden fixed top-16 md:left-80 sm:left-60 bottom-0 right-0 p-5 z-50 bg-black bg-opacity-70 backdrop-blur-md'>

        <button onClick={toggleMobileMenu} className="self-end text-3xl mb-4">
          <i className='bx bx-x'></i>
        </button>

        <nav className="flex flex-col items-center gap-6">

          <Link to="about" smooth={true} offset={-80} duration={500} className="text-base tracking-wider cursor-pointer transition-colors hover:text-gray-300 z-50">
            About
          </Link>
          <Link to="skills" smooth={true} offset={-80} duration={500} className="text-base tracking-wider cursor-pointer transition-colors hover:text-gray-300 z-50">
            Skills
          </Link>
          <Link to="experience" smooth={true} offset={-80} duration={500} className="text-base tracking-wider cursor-pointer transition-colors hover:text-gray-300 z-50">
            Experience
          </Link>
          <Link to="projects" smooth={true} offset={-80} duration={500} className="text-base tracking-wider cursor-pointer transition-colors hover:text-gray-300 z-50">
            Projects
          </Link>
          <Link to="contact" smooth={true} offset={-80} duration={500} className="text-base tracking-wider cursor-pointer transition-colors hover:text-gray-300 z-50">
            Contact me
          </Link>
        </nav>
      </div>
    </header>


  )
}

export default Header
