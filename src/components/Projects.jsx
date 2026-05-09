import { useState } from "react";

import f1 from "../assets/f1.jpg";
import b1 from "../assets/b1.jpg";
import s1 from "../assets/s1.jpg";
import h1 from "../assets/h1.jpg";

function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const projects = [
    {
      title: "Flipzone Shopping App",
      image: f1,
      tech: "HTML, CSS, JavaScript, JSON",
      link: "https://bed-prakash.github.io/Flipzone/",
      desc: "Developed a responsive e-commerce platform with product listing, authentication, shopping cart and order management features.",

      details: `
Project Duration: 4 Months

Role: Frontend Developer

Team Size: 3 Members

Modules:
• Login & Signup
• Product Dashboard
• Cart Management
• Order Summary
• Product Filtering

Achievements:
• Improved UI responsiveness by 40%
• Optimized product loading performance
• Implemented reusable components

Environment:
VS Code, GitHub, JSON Server
`,
    },

    {
      title: "Bank Operation System",
      image: b1,
      tech: "Java, Servlet, SQL, Maven",
      desc: "Built a banking management system supporting transactions, balance enquiry and customer account operations.",

      details: `
Project Duration: 6 Months

Role: Backend Developer

Team Size: 5 Members

Modules:
• Credit & Debit
• Fund Transfer
• Balance Enquiry
• Transaction History
• User Authentication

Achievements:
• Reduced SQL query execution time
• Implemented secure transaction flow
• Improved backend stability

Environment:
Java, SQL, Maven, Apache Tomcat
`,
    },

    {
      title: "School Management System",
      image: s1,
      tech: "Java, JSP, Servlet, SQL",
      desc: "Designed a school portal with admin and student modules for managing marks, profiles and records.",

      details: `
Project Duration: 5 Months

Role: Full Stack Developer

Team Size: 4 Members

Modules:
• Student Login
• Admin Dashboard
• Marks Management
• Student Records
• Profile Update

Achievements:
• Automated marks generation
• Improved data management efficiency
• Created responsive admin panel

Environment:
JSP, Servlet, SQL, HTML, CSS
`,
    },

    {
      title: "Hospital Management System",
      image: h1,
      tech: "HTML, CSS, JavaScript",
      link: "https://bed-prakash.github.io/My-Hospital/",
      desc: "Created an appointment booking system with doctor management and patient scheduling features.",

      details: `
Project Duration: 3 Months

Role: Frontend Developer

Team Size: 2 Members

Modules:
• Doctor Listing
• Appointment Booking
• Contact Management
• Patient Details
• Responsive UI

Achievements:
• Enhanced mobile responsiveness
• Improved appointment workflow
• Optimized UI performance

Environment:
HTML, CSS, JavaScript
`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-4 md:px-10 py-12">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold tracking-[4px] uppercase mb-4">
            My Work
          </p>

          <h1 className="text-3xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Featured Projects
          </h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-8">
            A collection of projects showcasing my experience in Full Stack
            Development, Java Backend Systems and responsive frontend
            applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                 className="w-full aspect-video object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h2>

                <p className="text-blue-600 font-semibold text-sm mb-4">
                  {project.tech}
                </p>

                <p className="text-gray-600 text-base leading-8 mb-6">
                  {project.desc}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap mb-5">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition duration-300"
                    >
                      Live Project
                    </a>
                  )}

                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="border border-gray-300 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-100 transition duration-300 flex items-center gap-2"
                  >
                    {openIndex === index ? "Less Details ▲" : "More Details ▼"}
                  </button>
                </div>

                {/* Details Box */}
                {openIndex === index && (
                  <div className="bg-gray-100 border border-gray-200 rounded-2xl p-5 mt-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      Project Details
                    </h3>

                    <p className="text-gray-600 whitespace-pre-line leading-7 text-sm">
                      {project.details}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
