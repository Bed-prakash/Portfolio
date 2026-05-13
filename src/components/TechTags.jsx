const tags = [
  {
    name: "#FinTech",
    link: "https://en.wikipedia.org/wiki/Financial_technology",
    style: "bg-blue-100 text-blue-700",
  },
  {
    name: "#UPI",
    link: "https://en.wikipedia.org/wiki/Unified_Payments_Interface",
    style: "bg-indigo-100 text-indigo-700",
  },
  {
    name: "#UnionBankOfIndia",
    link: "https://en.wikipedia.org/wiki/Union_Bank_of_India",
    style: "bg-purple-100 text-purple-700",
  },
  {
    name: "#JavaDeveloper",
    link: "https://en.wikipedia.org/wiki/Java_(programming_language)",
    style: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "#SpringBoot",
    link: "https://en.wikipedia.org/wiki/Spring_Boot",
    style: "bg-pink-100 text-pink-700",
  },
  {
    name: "#ReactJS",
    link: "https://en.wikipedia.org/wiki/React_(software)",
    style: "bg-orange-100 text-orange-700",
  },
  {
    name: "#Microservices",
    link: "https://en.wikipedia.org/wiki/Microservices",
    style: "bg-cyan-100 text-cyan-700",
  },
  {
    name: "#BankingProject",
    link: "https://en.wikipedia.org/wiki/Bank",
    style: "bg-gray-200 text-gray-800",
  },
];

function TechTags() {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {tags.map((tag, index) => (
        <a
          key={index}
          href={tag.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:scale-105 transition duration-300 ${tag.style}`}
        >
          {tag.name}
        </a>
      ))}
    </div>
  );
}

export default TechTags;