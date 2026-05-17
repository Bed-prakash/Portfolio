import { useRef } from "react";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaGlobe,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaUser,
  FaTag,
  FaComment,
  FaEye,
  FaDownload,
} from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactToast from "./common/ContactToast";
import { PROFILE } from "./common/constant";

function Contact() {

  const {
  email = "bedprakash61299@gmail.com",
  mobile = "+91-7999816206",
  location = "Hyderabad, Telangana, India",
  collage = "RSR Rungta College of Engineering and Technology",
  collageCity = "  Bhilai, Chhattisgarh ",
  collageWebside = "https://www.rungtacolleges.com/",
  univercity = " Chhattisgarh Swami Vivekananda Technical University ",
  experience = "2+ Years",
  availability = "Full Time",
  role = " Java Full Stack Developer ",
  linkedin = "https://linkedin.com/in",
  github = "https://github.com",
  resume = "/Portfolio/resume/Bedprakash_Resume.pdf",
  resumeFileName = "Bedprakash_Resume.pdf",
  companyLocation = "https://maps.google.com/?q=Olive+Crypto+Systems+Hyderabad",
} = PROFILE || {};
  
  const form = useRef();

  // Toast Only
  const sendEmail = (e) => {
    e.preventDefault();
    toast.error(
      "Messaging service is currently unavailable. Please contact me via email or mobile number.",
    );
  };

  // Reusable Card
  const InfoCard = ({
    icon,
    title,
    value,
    subText,
    borderColor,
    iconBg,
    titleColor,
  }) => {
    return (
      <div
        className={`
          bg-white
          border
          ${borderColor}
          rounded-3xl
          shadow-lg
          p-8
          hover:-translate-y-2
          hover:shadow-2xl
          transition
          duration-300
        `}
      >
        <div className="flex items-center gap-5">
          <div
            className={`
              w-16
              h-16
              rounded-full
              ${iconBg}
              flex
              items-center
              justify-center
              text-white
              text-3xl
              shadow-lg
            `}
          >
            {icon}
          </div>

          <div>
            <h2
              className={`
                text-2xl
                font-extrabold
                ${titleColor}
                mb-2
              `}
            >
              {title}
            </h2>
            <p className="text-gray-800 text-lg font-semibold">{value}</p>
            <p className="text-gray-500 text-sm mt-1">{subText}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] px-4 md:px-4 py-4 overflow-hidden relative">
      {/* Toast */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
      />

      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-[120px] opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-14 h-[2px] bg-blue-200"></div>

            <p className="text-blue-600 font-bold tracking-[3px] uppercase">
              GET IN TOUCH
            </p>

            <div className="w-14 h-[2px] bg-blue-200"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-5">
            Contact Me
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-9">
            Feel free to reach out to me for opportunities, collaborations or
            just to say hello!
          </p>

          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-7"></div>
        </div>

        {/* First Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <a href="mailto:bedprakash61299@gmail.com">
            <InfoCard
              icon={<FaEnvelope />}
              title="Email"
              value={email}
              subText="I'll respond as soon as possible"
              borderColor="border-blue-100"
              iconBg="bg-gradient-to-br from-blue-500 to-blue-700"
              titleColor="text-blue-600"
            />
          </a>

          <a href={`tel:${mobile}`}>
            <InfoCard
              icon={<FaPhoneAlt />}
              title="Phone"
              value={mobile}
              subText="Mon - Sat, 9:00 AM - 7:00 PM"
              borderColor="border-green-100"
              iconBg="bg-gradient-to-br from-green-400 to-green-600"
              titleColor="text-green-600"
            />
          </a>
          <a
            href={companyLocation}
            target="_blank"
            rel="noreferrer"
          >
            <InfoCard
              icon={<FaMapMarkerAlt />}
              title="Location"
              value={location}
              subText="Available for remote work"
              borderColor="border-purple-100"
              iconBg="bg-gradient-to-br from-purple-500 to-violet-700"
              titleColor="text-purple-600"
            />
          </a>
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <InfoCard
            icon={<FaBriefcase />}
            title="Experience"
            value={experience}
            subText={role}
            borderColor="border-orange-100"
            iconBg="bg-gradient-to-br from-orange-400 to-orange-600"
            titleColor="text-orange-500"
          />

          <a
            href={collageWebside}
            target="_blank"
            rel="noreferrer"
          >
            <InfoCard
              icon={<FaGraduationCap />}
              title="Education"
              value={collage}
              subText={collageCity}
              borderColor="border-pink-100"
              iconBg="bg-gradient-to-br from-pink-400 to-pink-600"
              titleColor="text-pink-500"
            />
          </a>
          <div onClick={ContactToast()} className="cursor-pointer">
            <InfoCard
              icon={<FaGlobe />}
              title="Availability"
              value="Full Time"
              subText="Open to new opportunities"
              borderColor="border-cyan-100"
              iconBg="bg-gradient-to-br from-cyan-400 to-cyan-600"
              titleColor="text-cyan-500"
            />
          </div>
        </div>

        {/* Main Section */}
        <div className="bg-white rounded-[35px] shadow-2xl overflow-hidden grid md:grid-cols-2 border border-gray-100">
          {/* Left Side */}
          <div className="p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 opacity-70"></div>

            <div className="relative z-10">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-5xl text-blue-600 mb-8 shadow-lg">
                <FaPaperPlane />
              </div>

              <h2 className="text-5xl font-extrabold text-[#0f1f56] mb-5">
                Let's Connect!
              </h2>

              <p className="text-gray-600 text-lg leading-9 mb-10">
                Have a question or want to work together? Fill out the form and
                I’ll connect with you soon.
              </p>

              {/* Social */}
              <div className="flex gap-5">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-2xl hover:-translate-y-1 transition duration-300 shadow-md"
                >
                  <FaGithub />
                </a>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-[#0077b5] text-2xl hover:-translate-y-1 transition duration-300 shadow-md"
                >
                  <FaLinkedin />
                </a>
                {/* View Resume */}
                <button
                  onClick={() =>
                    window.open(
                      resume,
                      "_blank",
                    )
                  }
                  className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-center text-2xl hover:-translate-y-1 transition duration-300 shadow-md"
                >
                  <FaEye />
                </button>

                {/* Download Resume */}
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = resume;
                    link.download = resumeFileName;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="w-14 h-14 rounded-xl border-2 border-blue-600 text-blue-600 flex items-center justify-center text-2xl hover:bg-blue-600 hover:text-white transition duration-300 shadow-md"
                >
                  <FaDownload />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-10 md:p-12">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="relative">
                  <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="w-full border border-gray-300 rounded-xl pl-14 pr-5 py-4 outline-none focus:border-blue-500"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="w-full border border-gray-300 rounded-xl pl-14 pr-5 py-4 outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <FaTag className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full border border-gray-300 rounded-xl pl-14 pr-5 py-4 outline-none focus:border-blue-500"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <FaComment className="absolute left-5 top-6 text-gray-400" />

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full border border-gray-300 rounded-xl pl-14 pr-5 py-4 outline-none focus:border-blue-500 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl text-lg font-bold hover:scale-[1.01] transition duration-300 shadow-lg flex items-center justify-center gap-3"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
