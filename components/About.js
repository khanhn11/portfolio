import Image from "next/image";

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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            molestias laborum eaque voluptatum odit architecto eos eligendi
            expedita animi rerum repellendus amet quos fuga accusamus facilis
            quidem debitis, est numquam.
          </p>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            laborum sequi libero cumque possimus ab, ullam dicta cupiditate quo
            veritatis nihil repellat velit repellendus nesciunt enim
            exercitationem autem blanditiis quos!
          </p>
          <p className="py-2 underline cursor-pointer">
            Check out some of my latest projects.
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
