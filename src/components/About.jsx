import { FaBriefcase, FaBuilding, FaCode, FaGraduationCap, FaPenNib, FaUserTie } from "react-icons/fa";
import { experiencePoints, PROFILE } from "./common/Constant";
// import { BiBriefcaseAlt } from "react-i  
import { GraduationCap, Briefcase, Code2 } from "lucide-react";
function About() {
  const {
    role = " Java Full Stack Developer ",
    designation = " Software Development Engineer (SDE-II) ",
    univercity = " Chhattisgarh Swami Vivekananda Technical University (CSVTU) ",
    experience = " 2+ Years ",
    domain = "Unified Payments Interface (UPI) ",
    industry = " Fintech & Banking Systems ",
    client = " Union Bank of India (UBI)",
    company = " Olive Crypto System Pvt. Ltd. ",
    frontend = " React JS | HTML5 | CSS3 | JavaScript | Tailwind CSS ",
    backend = " Java | Spring Boot | Spring MVC | REST APIs | Microservices ",
    databases = " Oracle SQL | MySQL | PostgreSQL ",
    tools = " Git | Postman | Swagger | VS Code | IntelliJ IDEA | Eclipse IDE | Maven | Gradle ",
    devops = " Azure DevOps | Jenkins | Bitbucket | Jira ",
    communication = " Outlook | Microsoft Teams | Zoho | Keka ",
    fromDateToPresent = " May 2024 - Present ",
    degree = " Bachelor of Technology (B.Tech) ",
    streamWithCgpa = " Electrical Engineering: 8.73 / 10 ",
  } = PROFILE || {};
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-1 py-1 mt-4">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-600 px-8 md:px-16 py-16 text-white">
          <p className="uppercase tracking-[6px] text-sm font-semibold text-blue-100 mb-5">
            About Me
          </p>

          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-6">
            {role}
          </h1>

          <p className="max-w-4xl text-base md:text-xl leading-8 text-blue-100">
            Passionate Full Stack Developer with {PROFILE.experience} of experience building
            scalable enterprise applications, secure {industry} and
            responsive web applications using {role}.
          </p>
        </div>

        {/* Body Section */}
        <div className="p-8 md:p-16">
          {/* Summary + Skills */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Professional Summary */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl shadow-lg border border-blue-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-2xl shadow-md">
                  <FaPenNib className="text-white w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Professional Summary
                </h2>
              </div>

              <div className="space-y-5 text-gray-700 text-base leading-8">
                <p><span>• </span>
                  Results-driven Full Stack Software Engineer experienced in
                  enterprise-level application development and {industry.trim()}.
                </p>

                <p><span>• </span>
                  Strong backend expertise in {backend.replaceAll(" |",",")} architecture.
                </p>

                <p><span>• </span>
                  Experienced in frontend technologies including {frontend.replaceAll(" |",",")}.
                </p>

                <p><span>• </span>
                  Passionate about clean architecture, API optimization,
                  scalable systems and user-friendly UI development.
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-3xl shadow-lg border border-pink-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-2xl shadow-md">
                  <FaUserTie className="text-white w-7 h-7" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Technical Skills
                </h2>
              </div>

              <div className="space-y-7">
                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    Backend
                  </h3>

                  <p className="text-gray-700 text-base leading-7">
                    {backend.replaceAll(" |",",")}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-pink-600 mb-2">
                    Frontend
                  </h3>

                  <p className="text-gray-700 text-base leading-7">
                    {frontend.replaceAll(" |",",")}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-indigo-700 mb-2">
                    Database
                  </h3>

                  <p className="text-gray-700 text-base leading-7">
                    {databases.replaceAll(" |",",")}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-purple-700 mb-2">
                    Tools & DevOps
                  </h3>

                  <p className="text-gray-700 text-base leading-7">
                      {devops.replaceAll(" |",",")}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-emerald-700 mb-2">
                    Tools, Editors & DevOps
                  </h3>

                  <p className="text-gray-700 text-base leading-7">
                      {tools.replaceAll(" |",",") +", "+devops.replaceAll(" |",",")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-20">
            <div className="flex items-center gap-5 mb-10">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl shadow-md">
                <FaBriefcase className="text-white w-7 h-7" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 whitespace-nowrap">
                Experience
              </h2>

              <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 md:p-10 rounded-3xl shadow-lg border border-blue-100 hover:shadow-2xl transition duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-8">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-xl shadow-md">
                      <FaBuilding className="text-white w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {company}
                    </h3>
                  </div>

                  <p className="text-blue-700 text-lg font-semibold mt-2">
                    {designation}
                  </p>
            
                  <p className="text-gray-700 text-base mt-3 flex items-center gap-2">
                    <span className="text-lg">🏦</span>
                    {domain+" - "+client}
                  </p>
                </div>

                <div className="bg-blue-600 text-white px-6 py-3 rounded-full text-base font-medium shadow-md">
                  {fromDateToPresent}
                </div>
              </div>

              <div className="space-y-4 text-gray-700 text-base leading-7 text-justify">
                {experiencePoints?.map((point, index) => (
                  <p key={index}>
                    ✔ {point}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mt-20">
            <div className="flex items-center gap-5 mb-10">
              <div className="bg-gradient-to-r from-pink-500 to-indigo-600 p-3 rounded-2xl shadow-md">
                <GraduationCap className="text-white w-7 h-7" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 whitespace-nowrap">
                Education
              </h2>

              <div className="h-1 w-full bg-gradient-to-r from-pink-500 to-indigo-600 rounded-full"></div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-100 p-8 md:p-10 rounded-3xl shadow-lg border border-indigo-100 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Bachelor of Technology
              </h3>

              <p className="text-lg text-gray-700 leading-7">
                {univercity}
              </p>

              <p className="text-base text-indigo-700 font-semibold mt-3">
                {streamWithCgpa}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
