import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#00ba7cc4]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 ">
            As a recently graduated software developer of Information Technology
            from Southern Alberta Institute of Technology, I have acquired a
            strong foundation in programming principles, software development
            methodologies, and industry-standard technologies.
          </p>
          <p className="py-2">
            With a passion for building innovative and efficient software
            solutions, I am equipped with the skills to analyze complex
            problems, design robust applications, and write clean and
            maintainable code.
          </p>
          <p className="py-2">
            As a dedicated and lifelong learner, I am eager to apply my
            knowledge and contribute to the success of software development
            projects in a professional setting.
          </p>
          <p className="py-2 underline cursor-pointer">
            <Link href="#projects">Check out some of my latest projects.</Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-900 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/../public/assets/about.jpg"
            width="675"
            height="150"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
