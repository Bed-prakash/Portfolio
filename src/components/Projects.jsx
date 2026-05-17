  import { useState } from "react";

import { projects } from "./common/constant";

  function Projects() {
    const [openIndex, setOpenIndex] = useState(null);

  //   const projects = [
  //     {
  //       title: "UPI Payment System - Union Bank of India",
  //       image: upiFlow,
  //       company: "Olive Crypto Systems Pvt Ltd",
  //       tech: "Spring Boot, Microservices, Spring Security, JPA, ActiveMQ, Oracle",

  //       desc: "Developing and maintaining UPI payment flows for Union Bank of India including UPI Lite, Credit Card linking, Bill Payments, Delegate Payments, QR Payments and seamless NPCI transaction processing.",

  //       details: `
  // 🔹 Organization: Olive Crypto Systems Pvt Ltd
  // 🔹 Project Duration: Ongoing
  // 🔹 Role: Software Engineer
  // 🔹 Team Size: Enterprise Team

  // 🔹 Modules:
  // • UPI Lite
  // • Credit Card Linking
  // • QR Payments
  // • Delegate Payments
  // • Auto Topup
  // • Balance Enquiry
  // • Bill Payments
  // • Mandate APIs

  // 🔹 Responsibilities:
  // • Developing new UPI features
  // • Bug fixing and production support
  // • API integration with NPCI
  // • Secure transaction handling
  // • Performance optimization
  // • Microservice development

  // 🔹 Technologies & Tools:
  // • Spring Boot
  // • Spring Security
  // • Spring JPA
  // • Microservices
  // • ActiveMQ
  // • Java Stream APIs
  // • JDK 21
  // • Gradle 9
  // • Oracle SQL
  // • Azure DevOps
  // • Jenkins
  // • IntelliJ & Eclipse
  // • Postman
  // • JUnit
  // • Linux Server Deployment

  // 🔹 Environment:
  // UPI ecosystem handling seamless digital payment flows for Union Bank of India.
  // `,
  //     },

  //     {
  //       title: "Employee Tracking Portal",
  //       image: empPortal,
  //       company: "Olive Crypto Systems Pvt Ltd",
  //       tech: "React JS, Spring Boot, Spring Security, Microservices, Oracle SQL",

  //       desc: "Built an employee activity and task tracking portal where employees and management can monitor task progress, approvals and performance analytics through dashboards.",

  //       details: `
  // 🔹 Organization: Olive Crypto Systems Pvt Ltd
  // 🔹 Project Duration: Ongoing
  // 🔹 Role: Full Stack Developer
  // 🔹 Team Size: 4 Members

  // 🔹 Modules:
  // • Daily Activity Tracking
  // • Task Management
  // • Approval Workflow
  // • Employee Dashboard
  // • PDF Report Download
  // • Analytics Dashboard

  // 🔹 Features:
  // • Track ongoing and pending tasks
  // • Employee work logging
  // • Manager approval system
  // • Dashboard visualization
  // • PDF export for reports
  // • Task status monitoring

  // 🔹 Technologies & Tools:
  // • React JS
  // • Spring Boot
  // • Spring Security
  // • Spring JPA
  // • Microservices
  // • ActiveMQ
  // • JDK 21
  // • Gradle
  // • Oracle SQL
  // • Azure DevOps
  // • Jenkins
  // • VS Code
  // • IntelliJ
  // • Postman
  // • JUnit

  // 🔹 Environment:
  // Web-based employee management and tracking system with analytics dashboard.
  // `,
  //     },

  //     {
  //       title: "Flipzone Shopping App",
  //       image: f1,
  //       company: "Personal Project",
  //       tech: "HTML, CSS, JavaScript, JSON",
  //       link: "https://bed-prakash.github.io/Flipzone/",

  //       desc: "Developed a responsive e-commerce platform with product listing, authentication, shopping cart and order management features.",

  //       details: `
  // 🔹 Project Type: Personal Project
  // 🔹 Developed Before Joining Olive Crypto Systems Pvt Ltd

  // 🔹 Project Duration: 4 Months
  // 🔹 Role: Frontend Developer
  // 🔹 Team Size: 3 Members

  // 🔹 Modules:
  // • Login & Signup
  // • Product Dashboard
  // • Cart Management
  // • Order Summary
  // • Product Filtering

  // 🔹 Achievements:
  // • Improved UI responsiveness by 40%
  // • Optimized product loading performance
  // • Implemented reusable components

  // 🔹 Environment:
  // VS Code, GitHub, JSON Server
  // `,
  //     },

  //     {
  //       title: "Bank Operation System",
  //       image: b1,
  //       company: "Academic Project",
  //       tech: "Java, Servlet, SQL, Maven",

  //       desc: "Built a banking management system supporting transactions, balance enquiry and customer account operations.",

  //       details: `
  // 🔹 Project Type: Academic Project
  // 🔹 Developed Before Joining Olive Crypto Systems Pvt Ltd

  // 🔹 Project Duration: 6 Months
  // 🔹 Role: Backend Developer
  // 🔹 Team Size: 5 Members

  // 🔹 Modules:
  // • Credit & Debit
  // • Fund Transfer
  // • Balance Enquiry
  // • Transaction History
  // • User Authentication

  // 🔹 Achievements:
  // • Reduced SQL query execution time
  // • Implemented secure transaction flow
  // • Improved backend stability

  // 🔹 Environment:
  // Java, SQL, Maven, Apache Tomcat
  // `,
  //     },

  //     {
  //       title: "School Management System",
  //       image: s1,
  //       company: "Academic Project",
  //       tech: "Java, JSP, Servlet, SQL",

  //       desc: "Designed a school portal with admin and student modules for managing marks, profiles and records.",

  //       details: `
  // 🔹 Project Type: Academic Project
  // 🔹 Developed Before Joining Olive Crypto Systems Pvt Ltd

  // 🔹 Project Duration: 5 Months
  // 🔹 Role: Full Stack Developer
  // 🔹 Team Size: 4 Members

  // 🔹 Modules:
  // • Student Login
  // • Admin Dashboard
  // • Marks Management
  // • Student Records
  // • Profile Update

  // 🔹 Achievements:
  // • Automated marks generation
  // • Improved data management efficiency
  // • Created responsive admin panel

  // 🔹 Environment:
  // JSP, Servlet, SQL, HTML, CSS
  // `,
  //     },

  //     {
  //       title: "Hospital Management System",
  //       image: h1,
  //       company: "Personal Project",
  //       tech: "HTML, CSS, JavaScript",
  //       link: "https://bed-prakash.github.io/My-Hospital/",

  //       desc: "Created an appointment booking system with doctor management and patient scheduling features.",

  //       details: `
  // 🔹 Project Type: Personal Project
  // 🔹 Developed Before Joining Olive Crypto Systems Pvt Ltd

  // 🔹 Project Duration: 3 Months
  // 🔹 Role: Frontend Developer
  // 🔹 Team Size: 2 Members

  // 🔹 Modules:
  // • Doctor Listing
  // • Appointment Booking
  // • Contact Management
  // • Patient Details
  // • Responsive UI

  // 🔹 Achievements:
  // • Enhanced mobile responsiveness
  // • Improved appointment workflow
  // • Optimized UI performance

  // 🔹 Environment:
  // HTML, CSS, JavaScript
  // `,
  //     },
  //   ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-4 py-4">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="w-14 h-[2px] bg-blue-400"></div>
              <p className="text-blue-600 font-bold tracking-[4px] uppercase">
                My Work
              </p>
              <div className="w-14 h-[2px] bg-blue-400"></div>
            </div>

            <h1 className="text-3xl md:text-6xl font-extrabold text-gray-900 mb-5">
              Featured Projects
            </h1>

            <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-7">
              A collection of projects showcasing my experience in Full Stack
              Development, Java Backend Systems and responsive frontend
              applications.
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-16 h-[3px] bg-blue-800 rounded-full"></div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
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
                <div className="p-6">
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                    {project.title}
                  </h2>

                  <p className="text-indigo-600 font-bold text-sm mb-2">
                    {project.company}
                  </p>

                  <p className="text-blue-600 font-bold text-sm mb-3">
                    {project.tech}
                  </p>

                  <p className="text-gray-600 text-[15px] leading-7 mb-5">
                    {project.desc}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3 flex-wrap">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 min-w-[140px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-xl text-sm font-bold hover:scale-105 transition duration-300 text-center shadow-md"
                      >
                        Live Project
                      </a>
                    )}

                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="flex-1 min-w-[140px] border border-blue-200 bg-blue-50 px-5 py-3 rounded-xl text-sm font-bold hover:bg-blue-100 transition duration-300 flex items-center justify-center gap-2"
                    >
                      {openIndex === index ? "Less Details ▲" : "More Details ▼"}
                    </button>
                  </div>

                  {/* Details Box */}
                  {openIndex === index && (
                    <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 shadow-md overflow-hidden">
                      {/* Header */}
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3">
                        <h3 className="text-white text-lg font-extrabold tracking-wide">
                          📌 Project Details
                        </h3>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="text-gray-700 leading-7 text-[15px]">
                          {project.details
                            .split("\n")
                            .filter((line) => line.trim() !== "")
                            .map((line, i) => (
                              <p
                                key={i}
                                className={
                                  line.includes("🔹")
                                    ? "font-bold text-gray-900 mt-3"
                                    : "font-normal"
                                }
                              >
                                {line}
                              </p>
                            ))}
                        </div>
                      </div>
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
