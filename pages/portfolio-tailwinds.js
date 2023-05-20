import Image from "next/image";
import React from "react";
import portfolioImg from "../public/assets/projects/portfolio.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const PortfolioTailwinds = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={portfolioImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Portfolio</h2>
          <h3>NextJS / Tailwinds </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="py-2">Overview</h2>
          <p>
            The portfolio website is built using Next.js and utilizes the
            Tailwind CSS framework for responsive and visually appealing
            designs. It serves as a showcase for an individual's professional
            accomplishments, skills, and projects. The website highlights the
            developer's expertise, showcases their past work through interactive
            and visually engaging components, and provides a platform to share
            their resume, contact information, and links to social media
            profiles. With the combination of Next.js and Tailwind CSS, the
            portfolio website offers a seamless user experience, ensuring
            optimal performance and responsiveness across various devices and
            screen sizes. It presents a professional and visually appealing
            platform for individuals to display their skills and achievements to
            potential employers or clients.
          </p>
          <a
            href="https://github.com/khanhn11/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-900 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwinds
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioTailwinds;
