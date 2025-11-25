import earthImg from "../assets/png/earth.gif";
import emailjs from "@emailjs/browser"
import { useRef } from "react";
function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_8kbd2vp", "template_ts9utbs", form.current, "qVTfKtdbiprGnLx0c").then(
      () => {
        alert("Message Sent Successfully ! ");
        form.current.reset();
      },
      (error) => {
        alert("Failed to sent message Please Try Again", error.text);
      }
    )
  }
  
  return (
    <div className=" w-full bg-transparent mt-auto pt-10 md:pt-24 pb-5 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl tracking-wider font-semibold text-[#e99b63]">Contact-me</h2>
        <div className="w-20 h-[2px] bg-[#80461d] mx-auto mt-2 rounded-full"></div>
      </div>

      <section id="contact" name="contact" className="max-w-6xl mx-auto px-2 py-5">
        <div className="grid grid-cols-1 lg:gap-32 md:grid-cols-2 overflow-hidden">
          {/* LEFT IMAGE (hidden on mobile) */}
          <div className="w-auto hidden md:block h-full">
            <img
              src={earthImg} // replace with your downloaded image
              alt="contact"
              className="w-full h-full object-contain"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="p-8 md:p-12 flex items-center justify-center bg-[#06060646] text-[#e99b63] rounded-3xl border-2 border-gray-600 shadow-lg shadow- shadow-[#9d775b]">

            <form ref={form} onSubmit={sendEmail} className="w-full max-w-md space-y-5">
              <h2 className="text-2xl md:text-3xl text-[#e99b63] font-bold mb-4 text-center">Contact Me</h2>

              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full bg-transparent border border-gray-600 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e99b63]"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your @email Id"
                  required
                  className="w-full bg-transparent border border-gray-600 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e99b63]"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  required
                  className="w-full bg-transparent border border-gray-600 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e99b63]"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Decription</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Please describe the postion"
                  required
                  className="w-full bg-transparent border border-gray-600 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e99b63]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full border border-gray-500 bg-[#471f02] hover:bg-black hover:border-[#e99b63] hover:text-[#e99b63] text-white py-2 rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;