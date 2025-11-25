import myImage from "../assets/png/myImage.png"
import educationIcon from "../assets/png/educationIcon.png"
import 'boxicons/css/boxicons.min.css'


const About = () => {
  return (
    <section
      id="about"
      name="about"
      className="w-full py-20 z-100 flex flex-wrap flex-col lg:flex-row items-center justify-evenly gap-18 lg:gap-28">

      {/* LEFT SIDE — Image with slanted green border */}
      <div className="relative w-[300px] md:w-[350px] lg:w-[420px]">
        {/* Green angled border */}
        <div className="relative rounded-xl overflow-hidden ">

          <img
            src={myImage}
            alt="me"
            className="w-full h-full z-50 object-cover rounded-xl"
          />

          {/* Top-Right Border */}
          <div className=" absolute top-0 right-0 w-2/5 h-2/5 border-t-[10px] border-r-[10px] border-[#815230]"></div>

          {/* Bottom-Left Border */}
          <div className=" absolute bottom-0 left-0 w-2/5 h-2/5 border-b-[10px] border-l-[10px] border-[#815230]">
          </div>
        </div>
      </div>

      {/* RIGHT SIDE — Text + Skills Bars */}
      <div className="max-w-xl p-3">
        <p className="text-[#e99b63] font-semibold text-lg mb-2">About</p>
        <h2 className="text-4xl font-bold text-white mb-4">
          Why You Hire Me?
        </h2>

        <p className="text-gray-400 tracking-wide leading-relaxed mb-10">
          Hire me because I don’t just code interfaces — I build complete, practical solutions. I learn fast, take ownership without hand-holding, and I’ve already worked on real-world projects like chatbots, ML-powered financial tools, and full-stack apps. I bring consistency, speed, and the ability to figure things out quickly when others get stuck.
        </p>

        {/* SKILL BARS */}
        <div className="space-y-4">
          <div className="text-lg text-[#752427] uppercase font-bold tracking-wider p-1" >
            <div className="flex gap-1 items-center justify-center">
              <img src={educationIcon} alt="" className="w-[24px] h-[24px]" />Education
            </div>
            <div className="w-[100px] h-[1px] bg-[#e99b63] mx-auto mt-2"></div>
          </div>
          {/* Single Skill */}
          <div>

            <div className="flex justify-between mb-1 font-semibold text-stone-400">
              <span> <i className='bx  bxs-school'></i> 10<sup>th</sup> Standard</span>
              <span className="text-gray-200">70%</span>
            </div>
            <div className="w-full h-2 bg-gray-500 rounded">
              <div className="h-full bg-[#452829] rounded" style={{ width: "70%" }}></div>
            </div>
            <div className="flex flex-wrap text-sm items-center justify-between mx-2 text-md text-white font-base py-1 mt-2">
              <span>The Creative Public Hr. Sec. School - CBSC Board</span>
              <div className="relative my-2 md:my-0 w-[40%] md:w-[20%] h-7 rounded-lg bg-gradient-to-r from-[#656565] 
                to-[#e99b63] shadow-[0_0_15px_#ffffff65]">
                <div className="absolute text-sm inset-[3px] rounded-lg bg-black flex flex-wrap items-center justify-center gap-3">
                  <i className='bx  bx-calendar-week'></i>
                  Jun-2019
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1 font-semibold text-stone-400">
              <span> <i className='bx  bxs-school'></i> 12<sup>th</sup> Standard</span>
              <span className="text-gray-200">73%</span>
            </div>
            <div className="w-full h-2 bg-gray-500 rounded">
              <div className="h-full bg-[#452829] rounded" style={{ width: "73%" }}></div>
            </div>
            <div className="flex flex-wrap text-sm items-center justify-between mx-2 text-md text-white font-base py-1 mt-2">
              <span>The Creative Public Hr. Sec. School - CBSC Board</span>
              <div className="relative my-2 md:my-0 w-[40%] md:w-[20%] h-7 rounded-lg bg-gradient-to-r from-[#656565] to-[#e99b63]
                shadow-[0_0_15px_#ffffff65]">
                <div className="absolute text-sm inset-[3px] rounded-lg bg-black flex flex-wrap items-center justify-center gap-3">
                  <i className='bx  bx-calendar-week'></i>
                  Jun-2021
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1 text-stone-400">
              <span> <i className='bx  bxs-institution'></i> Graduation</span>
              <span className="text-gray-200">72%</span>
            </div>
            <div className="w-full h-2 bg-gray-500 rounded">
              <div className="h-full bg-[#452829] rounded" style={{ width: "72%" }}></div>
            </div>
            <div className="flex flex-wrap text-sm items-center justify-between mx-2 text-md text-white font-base py-1 mt-2">
              <span>Institute of Eng. & Sci. IPS ACADEMY Indore </span>
              <div className="relative my-2 md:my-0 w-[40%] md:w-[20%] h-7 rounded-lg bg-gradient-to-r from-[#656565] 
                to-[#e99b63] shadow-[0_0_15px_#ffffff65]">
                <div className="absolute text-sm inset-[3px] rounded-lg bg-black flex flex-wrap items-center justify-center gap-3">
                  <i className='bx  bx-calendar-week'></i>
                  Jun-2025
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default About
