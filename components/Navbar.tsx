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
        <img className="mx-2 w-10" src="/kevinRushLogo.png" alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedinIn />
        <FaFacebook />
        <FaTwitter />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
