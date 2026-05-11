import { FaGithub, FaLinkedin, FaFileAlt, FaDownload } from "react-icons/fa";

function SocialButtons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full">
      {/* GitHub */}
      <a
        href="https://github.com/Bed-prakash"
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
        href="https://www.linkedin.com/in/bedprakash-choudhary/"
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
        onClick={() =>
          window.open("/Portfolio/resume/Bedprakash_Resume.pdf", "_blank")
        }
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
          link.href = "/Portfolio/resume/Bedprakash_Resume.pdf";
          link.download = "Bedprakash_Resume.pdf";
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
