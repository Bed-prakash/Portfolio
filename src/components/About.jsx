function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-4 md:px-10 py-12">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-600 px-8 md:px-16 py-16 text-white">
          <p className="uppercase tracking-[6px] text-sm font-semibold text-blue-100 mb-5">
            About Me
          </p>

          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-6">
            Full Stack <br />
            Java Developer
          </h1>

          <p className="max-w-4xl text-base md:text-xl leading-8 text-blue-100">
            Passionate Full Stack Developer with 2+ years of experience building
            scalable enterprise applications, secure banking systems and
            responsive web applications using Java, Spring Boot and React JS.
          </p>
        </div>

        {/* Body Section */}
        <div className="p-8 md:p-16">
          {/* Summary + Skills */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Professional Summary */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl shadow-lg border border-blue-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Professional Summary
              </h2>

              <div className="space-y-5 text-gray-700 text-base leading-8">
                <p>
                  Results-driven Full Stack Software Engineer experienced in
                  enterprise-level application development and banking
                  solutions.
                </p>

                <p>
                  Strong backend expertise in Java, Spring Boot, REST APIs,
                  Hibernate and Microservices architecture.
                </p>

                <p>
                  Experienced in frontend technologies including React JS,
                  JavaScript, HTML, CSS and Tailwind CSS.
                </p>

                <p>
                  Passionate about clean architecture, API optimization,
                  scalable systems and user-friendly UI development.
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-3xl shadow-lg border border-pink-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Technical Skills
              </h2>

              <div className="space-y-7">
                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    Backend
                  </h3>

                  <p className="text-gray-700 text-base leading-7">
                    Java, Spring Boot, REST APIs, Hibernate, Spring MVC,
                    Microservices
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-pink-600 mb-2">
                    Frontend
                  </h3>

                  <p className="text-gray-700 text-base leading-7">
                    React JS, HTML, CSS, JavaScript, Tailwind CSS
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-indigo-700 mb-2">
                    Database
                  </h3>

                  <p className="text-gray-700 text-base leading-7">
                    Oracle SQL, MySQL, PostgreSQL
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-purple-700 mb-2">
                    Tools & DevOps
                  </h3>

                  <p className="text-gray-700 text-base leading-7">
                    Git, GitHub, Jenkins, Jira, Maven, Gradle
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-emerald-700 mb-2">
                    Tools, Editors & DevOps
                  </h3>

                  <p className="text-gray-700 text-base leading-7">
                    Git, GitHub, Jenkins, Jira, Maven, Gradle, Eclipse, IntelliJ
                    IDEA, VS Code, Postman
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-20">
            <div className="flex items-center gap-5 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 whitespace-nowrap">
                Experience
              </h2>

              <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 md:p-10 rounded-3xl shadow-lg border border-blue-100 hover:shadow-2xl transition duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Olive Crypto System Pvt. Ltd.
                  </h3>

                  <p className="text-blue-700 text-lg font-semibold mt-2">
                    Software Developer Engineer (SDE-II)
                  </p>
                </div>

                <div className="bg-blue-600 text-white px-6 py-3 rounded-full text-base font-medium shadow-md">
                  May 2024 - Present
                </div>
              </div>

              <div className="space-y-4 text-gray-700 text-base leading-7">
                <p>
                  ✔ Developed and implemented UPI payment features including payment
                  flow, transaction management, UPI Lite, and Delegate Payment
                  functionalities using Spring Boot and Java.
                </p>

                <p>
                  ✔ Collaborated on new implementations such as Delegate Payment and
                  OC-181 features for Unified Payment Interface (UPI) enhancements.
                </p>

                <p>
                  ✔ Developed optimized applications using Spring Boot, JPA,
                  JavaScript, and Microservices, improving application performance
                  and reducing page load times by 30%.
                </p>

                <p>
                  ✔ Achieved 90% code coverage using Mockito for robust unit testing
                  and improved application reliability.
                </p>

                <p>
                  ✔ Contributed to user growth and incremental revenue by optimizing
                  product features, enhancing user acquisition strategies, and
                  supporting annual team goals.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mt-20">
            <div className="flex items-center gap-5 mb-10">
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
                Chhattisgarh Swami Vivekananda Technical University (CSVTU)
              </p>

              <p className="text-base text-indigo-700 font-semibold mt-3">
                Electrical Engineering • CGPA: 8.73 / 10
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
