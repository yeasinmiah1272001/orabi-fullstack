import { FaGithub } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const SocialLinks = () => {
  return (
    <div className="flex gap-3">
      <div className="mt-2 border border-white w-10 rounded-full p-2 bg-transparent hover:bg-black duration-300">
        <FaGithub size={25} />
      </div>
      <div className="mt-2 border border-white w-10 rounded-full p-2 bg-transparent hover:bg-black duration-300">
        <FaFacebook size={25} />
      </div>
      <div className="mt-2 border border-white w-10 rounded-full p-2 bg-transparent hover:bg-black duration-300">
        <FaLinkedinIn size={25} />
      </div>
      <div className="mt-2 border border-white w-10 rounded-full p-2 bg-transparent hover:bg-black duration-300">
        <CiYoutube size={25} />
      </div>
      <div className="mt-2 border border-white w-10 rounded-full p-2 bg-transparent hover:bg-black duration-300">
        <CiMail size={25} />
      </div>
    </div>
  );
};

export default SocialLinks;
