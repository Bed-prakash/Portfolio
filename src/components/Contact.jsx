function Contact() {
  return (
    <section className="bg-gray-100 flex items-center justify-center ">
      {/* Main Container */}
      <div className="w-full max-w-6xl shadow-2xl rounded-3xl p-8 md:p-14 mt-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Contact Me
          </h1>

          <p className="text-gray-600 text-lg md:text-xl">
            Feel free to connect with me for opportunities and collaborations.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Email */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📧</span>

              <h2 className="text-2xl font-semibold">Email</h2>
            </div>

            <p className="text-lg text-gray-300">bedprakash61299@gmail.com</p>
          </div>

          {/* Location */}
          <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📍</span>

              <h2 className="text-2xl font-semibold">Location</h2>
            </div>

            <p className="text-lg text-blue-100">Hyderabad, Telangana</p>
          </div>

          {/* Phone */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📱</span>

              <h2 className="text-2xl font-semibold text-black">Phone</h2>
            </div>

            <p className="text-lg text-gray-600">+91 7999816206</p>
          </div>

          {/* Experience */}
          <div className="bg-indigo-600 text-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">💼</span>

              <h2 className="text-2xl font-semibold">Experience</h2>
            </div>

            <p className="text-lg text-indigo-100">
              2+ Years Java Full Stack Development
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            className="flex items-center justify-center bg-black text-white text-lg font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 w-40"
          >
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            className="flex items-center justify-center bg-blue-600 text-white text-lg font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 w-40"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
