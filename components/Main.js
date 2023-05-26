import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking widest">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4">
            Hi, I'm <span className="text-[#00ba7cc4]">Khanh</span>
          </h1>
          <h1 className="py-4">Full Stack Web Developer</h1>
          <p className="py-4 max-w-[70%] m-auto">
            Highly motivated and detail-oriented Junior Software Developer
            seeking an opportunity to contribute to a dynamic and collaborative
            software development team. With a solid foundation in information
            technolog and a passion for coding, my objective is to further
            enhance my skills and knowledge while actively participating in the
            design, development, and deployment of innovative software
            solutions. I am eager to work alongside experienced professionals,
            learn new technologies, and contribute to the success of projects by
            leveraging my strong problem-solving abilities and dedication to
            producing high-quality code.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/khanh-nguyen-ba80a622b/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://github.com/khanhn11"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="#contact">
                <AiOutlineMail />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="/">
                <BsPersonLinesFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
