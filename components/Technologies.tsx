import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiZod } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiPostman } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";

const Technologies = () => {
  return (
    <div className=" border-b border-neutral-800pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-[#58C4DC]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNextdotjs className="text-7xl text-white" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-7xl text-[#2F74C0]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-[#38BDF8]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoVercel className="text-7xl text-black" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGitAlt className="text-7xl text-[#D64B34]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGithub className="text-7xl text-white" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiZod className="text-7xl text-[#3168B6]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <GrGraphQl className="text-7xl text-[#DE33A6]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostman className="text-7xl text-[#F76834]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNpm className="text-7xl text-[#CD0001]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaShopify className="text-7xl text-[#91B944]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiShadcnui className="text-7xl text-black" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
