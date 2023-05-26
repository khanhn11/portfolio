import barbershopImg from "../public/assets/projects/barbershop.png";
import projectImg from "../public/assets/projects/project.webp"
import portfolioImg from "../public/assets/projects/portfolio.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#00ba7cc4]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Barber Shop"
            backgroundImg={barbershopImg}
            projectUrl="/barbershop"
            technolog="Next JS"
          />
          <ProjectItem
            title="Portfolio"
            backgroundImg={portfolioImg}
            projectUrl="/portfolio-tailwinds"
            technolog="Tailwinds"
          />
          <ProjectItem
            title="Spring Security with JWT"
            backgroundImg={projectImg}
            projectUrl="/springboot"
            technolog="Spring Boot"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
