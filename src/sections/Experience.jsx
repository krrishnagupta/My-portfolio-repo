import 'boxicons/css/boxicons.min.css'
import priorityCert from "/Priority_tech_intership_certificate.pdf"
import pnpCert from "/pnp_certificate.pdf"
const Experience = () => {

  const experiences = [
    {
      id: 1,
      number: '01',
      company: 'P&P Infotech',
      position: 'Python Developer Intern',
      date: 'May-2023 to June-2023',
      link: pnpCert,
      description: 'Handled Python automation tasks, debugging, and troubleshooting while learning and improving internal workflows. Focused on understanding technical depth, writing clean logic, and solving issues systematically.',
    },
    {
      id: 2,
      number: '02',
      company: 'Priority Technologies',
      position: 'Web Developer Intern',
      date: 'March-2024 to August-2024',
      link: priorityCert,
      description: 'Developed features for the company’s CRM and AI chatbot systems, working on UI flow, component logic, and integration of AI-powered interactions. Focused on clean implementation and improving the overall product experience.',
    },

  ];

  return (
    <div className="min-h-screen bg-transparent py-16 px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div id='experience' name='experience' className="text-center mb-16">
        <h2 className="text-2xl tracking-wider font-semibold text-[#e99b63]">Work Experience</h2>
        <div className="w-20 h-[2px] bg-[#80461d] mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">

        {/* Vertical Line (Background) */}
        {/* Mobile: Centered. Desktop: Centered. */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#e99b63] top-0 z-0"></div>

        <div className="relative z-10 space-y-12 md:space-y-0">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={exp.id} className="relative group md:mb-12">

                {/* --- DESKTOP LAYOUT --- */}
                <div className="hidden md:flex items-center justify-center gap-6 w-full">

                  {/* LEFT COLUMN (Always text-right) */}
                  <div className="w-[45%] text-right pr-1">
                    {isEven ? (
                      // EVEN ROW LEFT: Description Box
                      <div className="bg-gray-950 p-6 rounded-lg shadow-md border-4 border-gray-800 transition-all duration-300 group-hover:border-[#e99b63] group-hover:shadow-xl">
                        <p className="text-gray-200 text-start text-sm lg:text-base">
                          {exp.description}
                        </p>
                      </div>
                    ) : (
                      // ODD ROW LEFT: Info Box
                      <div className="bg-transparent p-6 transition-colors duration-300">
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#e99b63] transition-colors duration-300">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg font-semibold text-[#80461d] mt-1 mb-2">
                          {exp.company}
                        </h4>
                        <div className="flex items-center justify-end gap-2 text-gray-400 text-sm font-medium">
                          <span>{exp.date}</span>
                          <i className='bx  bx-calendar-week'></i>
                        </div>
                        <a href={exp.link} target="_blank" className='flex items-center justify-end gap-1 text-gray-300 text-sm 
                          font-medium mt-2 hover:text-[#e99b63]'>
                          <i className='bx  bx-link'></i><span className='underline underline-offset-4'>Certificate Link</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* CENTER CIRCLE */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white border-4 border-[#80461d] flex items-center justify-center transition-all duration-300 group-hover:border-[#e99b63] group-hover:bg-[#80461d] group-hover:scale-110 shadow-sm z-20">
                      <span className="text-lg font-bold text-[#80461d] transition-colors duration-300 group-hover:text-white">
                        {exp.number}
                      </span>
                    </div>
                  </div>

                  {/* RIGHT COLUMN (Always text-left) */}
                  <div className="w-[45%] text-left pl-1">
                    {isEven ? (
                      // EVEN ROW RIGHT: Info Box
                      <div className="bg-transparent p-6 transition-colors duration-300">
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#e99b63] transition-colors duration-300">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg font-semibold text-[#80461d] mt-1 mb-2">
                          {exp.company}
                        </h4>
                        <div className="flex items-center justify-start gap-2 text-gray-400 text-sm font-medium">
                          <i className='bx  bx-calendar-week'></i>
                          <span>{exp.date}</span>
                        </div>
                        <a href={exp.link} target="_blank" className='flex items-center justify-start gap-1 text-gray-300 text-sm 
                          font-medium mt-2 hover:text-[#e99b63]'>
                          <span className='underline underline-offset-4'>Certificate Link</span><i className='bx  bx-link'></i>
                        </a>
                      </div>
                    ) : (
                      // ODD ROW RIGHT: Description Box
                      <div className="bg-gray-950 p-6 rounded-lg shadow-md border-4 border-gray-800 transition-all duration-300 group-hover:border-[#e99b63] group-hover:shadow-xl">
                        <p className="text-gray-200 leading-relaxed text-justify text-sm lg:text-base">
                          {exp.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>


                {/* --- MOBILE LAYOUT (Unchanged) --- */}
                <div className="md:hidden flex flex-col items-center w-full">
                  <div className="relative z-10 mb-6">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-[#80461d] flex items-center justify-center transition-all duration-300 group-hover:bg-[#80461d] group-hover:border-[#e99b63]  group-hover:scale-110 shadow-sm">
                      <span className="text-lg font-bold text-[#80461d] transition-colors duration-300 group-hover:text-white">
                        {exp.number}
                      </span>
                    </div>
                  </div>

                  <div className="w-full max-w-sm bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800 transition-all duration-300 group-hover:border- group-hover:shadow-xl text-center relative">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#e99b63] border-t border-l border-gray-100 rotate-45 group-hover:border-[#e99b63] transition-colors duration-300"></div>
                    <h4 className="text-lg font-semibold text-[#80461d] mb-1">
                      {exp.company}
                    </h4>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#e99b63] transition-colors duration-300">
                      {exp.position}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-gray-400 text-sm font-medium mb-4">
                      <i className='bx  bx-calendar-week'></i>
                      <span>{exp.date}</span>
                    </div>
                    <a href={exp.link} target="_blank" className="flex items-center justify-center gap-2 text-[#e99b63] text-sm font-medium mb-4">
                      <i className='bx  bx-link'></i>
                      <span className='underline underline-offset-4'>Certificate Link</span>
                    </a>
                    <hr className="border-gray-100 mb-4" />
                    <p className="text-gray-600 text-sm leading-relaxed text-left">
                      {exp.description}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;