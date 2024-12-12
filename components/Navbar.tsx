import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20 h-20" src="/BibekLogo.png" alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer ">
        <a
          href="https://www.linkedin.com/in/bibek-bhandari-233910268/"
          target="_blank"
        >
          <FaLinkedinIn className="hover:text-red-700" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100047717505359"
          target="_blank"
        >
          <FaFacebook className="hover:text-purple-700" />{" "}
        </a>
        <a href="https://github.com/bbek4210" target="_blank">
          <FaGithub className="hover:text-yellow-700" />
        </a>
        <a href="https://www.instagram.com/bibek_bhandari_10/" target="_blank">
          <FaInstagram className="hover:text-blue-700" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
