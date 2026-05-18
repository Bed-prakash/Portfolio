import { FaGithub, FaLinkedin, FaFileAlt, FaDownload } from "react-icons/fa";
import { PROFILE } from "./common/Constant";

function SocialButtons() {
  // const {
  //   linkedin = "https://linkedin.com/in/bedprakash-choudhary/",
  //   github = "https://github.com/Bed-prakash",
  //   resume = "/Portfolio/resume/Bedprakash_Resume.pdf",
  //   resumeFileName = "Bedprakash_Resume.pdf",
  // } = PROFILE || {};
  
  return (
    <div className="grid grid-cols-1 gap-5 w-full">
      {/* GitHub */}
      <a
        href={PROFILE.github}
        target="_blank"
        rel="noreferrer"
        className="
          w-full
          bg-slate-900
          text-white
          text-lg
          font-semibold
          py-4
          rounded-2xl
          text-center
          shadow-lg
          hover:scale-[1.02]
          transition
          duration-300
          flex
          items-center
          justify-center
          gap-3
        "
      >
        <FaGithub className="text-2xl" />
        GitHub
      </a>

      {/* LinkedIn */}
      <a
        href={PROFILE.linkedin}
        target="_blank"
        rel="noreferrer"
        className="
          w-full
          bg-blue-600
          text-white
          text-lg
          font-semibold
          py-4
          rounded-2xl
          text-center
          shadow-lg
          hover:scale-[1.02]
          transition
          duration-300
          flex
          items-center
          justify-center
          gap-3
        "
      >
        <FaLinkedin className="text-2xl" />
        LinkedIn
      </a>

      {/* View Resume */}
      <button
        onClick={() => window.open(PROFILE.resume, "_blank")}
        className="
          w-full
          bg-gradient-to-r
          from-blue-600
          to-indigo-700
          text-white
          text-lg
          font-semibold
          py-4
          rounded-2xl
          text-center
          shadow-lg
          hover:scale-[1.02]
          transition
          duration-300
          flex
          items-center
          justify-center
          gap-3
        "
      >
        <FaFileAlt className="text-xl" />
        View Resume
      </button>

      {/* Download Resume */}
      <button
        onClick={() => {
          const link = document.createElement("a");
          link.href = PROFILE.resume;
          link.download = resumeFileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        className="
          w-full
          border-2
          border-blue-600
          text-blue-600
          text-lg
          font-semibold
          py-4
          rounded-2xl
          text-center
          shadow-lg
          hover:bg-blue-600
          hover:text-white
          transition
          duration-300
          flex
          items-center
          justify-center
          gap-3
        "
      >
        <FaDownload className="text-xl" />
        Download Resume
      </button>
    </div>
  );
}

export default SocialButtons;
