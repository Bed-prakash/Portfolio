import { techHashTags } from "./common/Constant";


function TechTags() {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {techHashTags.map((tag, index) => (
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