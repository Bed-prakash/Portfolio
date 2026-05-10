function SocialButtons() {
  return (
    <div className="flex gap-4 mt-6">
      
      <a
        href="https://github.com/"
        target="_blank"
        className="w-full bg-slate-900 text-white text-lg font-semibold py-4 rounded-xl text-center shadow-lg hover:scale-[1.02] transition duration-300"
      >
        GitHub
      </a>

      <a
        href="https://linkedin.com/"
        target="_blank"
        className="w-full bg-blue-600 text-white text-lg font-semibold py-4 rounded-xl text-center shadow-lg hover:scale-[1.02] transition duration-300"
      >
        LinkedIn
      </a>

    </div>
  )
}

export default SocialButtons