import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import SocialButtons from "./SocialButtons";
import TechTags from "./TechTags";
import { PROFILE } from "./common/Constant";

function Home() {
  const {
    name = "Bed Prakash",
    role = " Java Full Stack Developer ",
    designation = " Software Development Engineer (SDE-II) ",
    experience = " 2+ Years ",
    domain = " UPI Payment Systems ",
    industry = " Fintech & Banking Systems ",
    client = " Union Bank of India ",
    company = " Olive Crypto System Pvt. Ltd. ",
    frontend = " React JS | HTML5 | CSS3 | JavaScript | Tailwind CSS ",
    backend = " Java | Spring Boot | REST APIs | Oracle SQL | Microservices ",
    databases = " Oracle SQL | MySQL | PostgreSQL ",
    profileImage = "/Portfolio/public/assets/bed_img.png",
  } = PROFILE || {};
  return (
    <section className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-12 items-center px-2 py-2 mt-4">
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          {/* Welcome */}
          <p className="text-blue-600 font-semibold text-lg">
            Hello, Welcome 👋
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I am <br />
            <span className="text-blue-600">{name}</span>
          </h1>

          {/* Role */}
          <h2 className="text-xl md:text-2xl text-gray-700 font-semibold">
            {role}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base leading-8 text-justify">
            Passionate {role} with {experience} of experience in building
            scalable enterprise applications, secure banking systems, and
            responsive web applications using{" "}
            {backend?.replaceAll(" |", ",") + databases?.replaceAll(" |", ",")}{" "}
            and modern {frontend?.replaceAll(" |", ",")} frontend technologies.
          </p>

          {/* Current Role Section */}
          <div className="mt-7 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-100 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition duration-300">
            {/* Top */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

              <p className="text-blue-700 font-semibold tracking-[3px] uppercase text-xs">
                Currently Working
              </p>
            </div>

            {/* Role */}
            <h3 className="text-2xl md:text-2xl font-bold text-gray-900 mb-4">
              {designation}
            </h3>

            {/* Company */}
            <p className="text-gray-700 text-base leading-8 text-justify">
              Working at
              <span className="font-semibold text-blue-700">{company}</span>,
              contributing to secure
              <span className="font-semibold text-indigo-700">{domain}</span>
              for
              <span className="font-semibold text-purple-700">{client}</span>.
              Focused on transaction processing, {industry} workflows, API
              integrations, and enterprise {industry} using
              {backend.replaceAll(" |", ",")} and{" "}
              {frontend.replaceAll(" |", ",")} modern technologies.
            </p>

            {/* Tech Tags */}
            <TechTags />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex flex-col items-center-safe md:mt-10">
          <img
            src={profileImage}
            alt={name}
            className="md:mt-10 w-full max-w-[500px] sm:max-w-[410px] md:max-w-[450px] h-[500px] md:h-[460px] rounded-3xl shadow-2xl object-cover hover:scale-[1.02] transition duration-500"
          />

          {/* Social Buttons */}
          <div className="w-full pt-10">
            <SocialButtons />
          </div>
        </div>
      </div>
      <About/>
      <Projects/>
      <Contact/>
    </section>
    
  );
}

export default Home;
