import Image from "next/image";
import React from "react";
import barbershopImg from "../public/assets/projects/barbershop.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const barbershop = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={barbershopImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Barber Shop</h2>
          <h3>NextJS / BootStrap / MongoDB</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="py-2">Overview</h2>
          <p>
          The barber shop booking system is a web application developed using Next.js, MongoDB, and JSON Web Token (JWT) for authentication. It employs Next.js API routes for handling backend functionality and incorporates a responsive design, ensuring optimal user experience across various devices. The system enables staff members to make appointments by selecting available time slots and choosing their preferred barber. With these features, the app streamlines the booking process and enhances convenience for both staff and customers in the barber shop.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://next-barbershop.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
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
                <RiRadioButtonFill className="pr-1" /> BootStrap
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JSON Web Token
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Mongoose
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  )
}

export default barbershop