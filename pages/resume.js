import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const resume = () => {
  return (
    <>
      <Head>
        <title>Khanh | Resume</title>
        <meta
          name="description"
          content="I’m a full stack web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center uppercase">Resume</h2>
        <div className="bg-[#000000] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Khanh Nguyen</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/khanh-nguyen-ba80a622b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/khanhn11"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Critical Thinking <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Critical Thinking</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Eager and aspiring full stack web developer with a strong foundation
          in problem-solving, critical thinking, communication, team building,
          and strong attention to detail. Passionate about tackling challenges,
          applying analytical thinking, and effectively conveying ideas to
          clients and collaborators. Enthusiastic about building collaborative
          environments, leveraging the strengths of the team, and delivering
          precise and high-quality work through meticulous attention to detail.
          Seeking opportunities to further develop these soft skills while
          expanding technical expertise to contribute to impactful web
          development projects.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center text-[18px] py-2 uppercase">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Languages & Databases</span>
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>JavaScript
            <span className="px-2">|</span>Java
            <span className="px-2">|</span>Oracle
            <span className="px-2">|</span>MongoDB
          </p>
          <p className="py-2">
            <span className="font-bold">Frameworks & Libriaries</span>
            <span className="px-2">|</span>React
            <span className="px-2">|</span>NextJS
            <span className="px-2">|</span>NodeJS
            <span className="px-2">|</span>Express
            <span className="px-2">|</span>Tailwinds
            <span className="px-2">|</span>JWT
            <span className="px-2">|</span>Spring Boot
          </p>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Full Stack Web Developer
            <span className="px-2">|</span>Object Oriented
            <span className="px-2">|</span>REST API
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NOSQL
            <span className="px-2">|</span>Git
            <span className="px-2">|</span>Adobe XD
            <span className="px-2">|</span>Figma
          </p>
        </div>

        {/* Education */}
        <h5 className="text-center uppercase text-[18px] py-4">Education</h5>
        <div className="py-6">
          <p className="">
            <span className="font-bold uppercase">
              Southern Alberta Institute of Technology (SAIT)
            </span>
            <span className="px-2">|</span>Calgary, AB
          </p>
          <p className="py-1 italic">
            Software Development - Information Technology (2021 - 2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>GPA: 3.5</li>
          </ul>
        </div>

        <h5 className="text-center uppercase text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="">
            <span className="font-bold uppercase">Capstone Project (SAIT)</span>
            <span className="px-2">|</span>Calgary, AB
          </p>
          <p className="py-1 italic">
            Full Stack Web Developer (2022 - April, 2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed Online Web Booking System allow customer to make a
              booking based on time slot and barber.
            </li>
            <li>Designed Database model and integrated with Backend.</li>
            <li>
              Built and handled secured backend REST API routes in NextJS.
              Applied JSON Web Token (JWT) for user authentication and
              authorization by verify request and control access to specific
              resources.
            </li>
            <li>
              Implemented and applied function to create booking, access staff
              schedule, requesting api routes by axios in the front end.
            </li>
            <li>
              Applied front end protected route for private access by using
              redux.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="">
            <span className="font-bold uppercase">Records Clerk Intern</span>
            <span className="px-2">|</span>Calgary, AB
          </p>
          <p className="py-1 italic">Calgary Massage Clinic (2023 - Current)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Inputting and updating client data into folders. Sorting,
              organizing, and filling paper document and electronic file.
              Creating and maintaining billing records, invoices, and
              statements.
            </li>
            <li>
              Direct Billing customer insurance using software application.
            </li>
            <li>Records and tracking data in Microsoft Excel.</li>
          </ul>
        </div>

        <div className="flex justify-center py-12">
          <Link href="">
            <div className="rounded-full shadow-lg shadow-gray-900 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="text-[#00ba7cc4]"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default resume;
