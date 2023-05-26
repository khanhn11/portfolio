import Image from "next/image";
import React from "react";
import projectImg from "../public/assets/projects/project.webp"
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const springboot = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={projectImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Spring Security</h2>
          <h3>Spring Boot / JSON Web Token / PostgreSQL</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="py-2">Overview</h2>
          <p>
            The project is developed using Spring Boot and utilizes Spring
            Security for access control. It is integrated with PostgreSQL as the
            database for data storage. The system incorporates JSON Web Token
            (JWT) for secure authentication and authorization processes. This
            combination of technologies provides a robust and secure framework
            for building a web application with reliable user management and
            protection of sensitive data.
          </p>
          <a
            href="https://github.com/khanhn11/jwt-security/tree/master/api"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-900 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Java
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Spring Boot
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Spring Security
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JSON Web Token
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

export default springboot;
