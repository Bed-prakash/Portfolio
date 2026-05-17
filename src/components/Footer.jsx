import { PROFILE } from "./common/constant";

function Footer() {
     const {
      name = "Bed Prakash",
      role = " Java Full Stack Developer ",
      } = PROFILE || {};
  return (
    <footer className="bg-black text-white h-14 mt-10 flex justify-center items-center">
      <p className="text-sm md:text-base text-gray-300">
        © {new Date().getFullYear()} {name.trim()} Portfolio | {role.trim()}
      </p>
    </footer>
  );
}

export default Footer;
