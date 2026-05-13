import bed from "../assets/bed_img.png";
import SocialButtons from "./SocialButtons";
import TechTags from "./TechTags";

function Home() {
  return (
    <section className="min-h-screen bg-gray-100 px-6 py-10">

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">

          {/* Welcome */}
          <p className="text-blue-600 font-semibold text-lg">
            Hello, Welcome 👋
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I am <br />

            <span className="text-blue-600">
              Bed Prakash
            </span>

          </h1>

          {/* Role */}
          <h2 className="text-xl md:text-2xl text-gray-700 font-semibold">
            Java Full Stack Developer
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base leading-8 text-justify">

            Passionate Java Full Stack Developer with 2+ years of experience in
            building scalable enterprise applications, secure banking systems,
            and responsive web applications using Java, Spring Boot, SQL,
            React JS, and modern frontend technologies.

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
              Software Development Engineer (SDE-II)
            </h3>

            {/* Company */}
            <p className="text-gray-700 text-base leading-8 text-justify">

              Working at

              <span className="font-semibold text-blue-700">
                {" "}Olive Crypto System Pvt. Ltd.
              </span>

              , contributing to secure

              <span className="font-semibold text-indigo-700">
                {" "}UPI payment systems
              </span>

              {" "}for

              <span className="font-semibold text-purple-700">
                {" "}Union Bank of India
              </span>

              . Focused on transaction processing, payment workflows,
              API integrations, and enterprise banking solutions using
              Java, Spring Boot, and modern technologies.

            </p>

            {/* Tech Tags */}
            <TechTags />

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">

          <img
            src={bed}
            alt="Bedprakash"
            className="
              w-[410px]
              sm:w-[410px]
              md:w-[450px]
              rounded-3xl
              shadow-2xl
              object-cover
              hover:scale-[1.02]
              transition
              duration-500
            "
          />

        </div>

      </div>

      {/* Full Width Social Buttons */}
      <div className="max-w-7xl mx-auto mt-10">
        <SocialButtons />
      </div>

    </section>
  );
}

export default Home;