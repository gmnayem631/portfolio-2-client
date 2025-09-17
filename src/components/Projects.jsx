import projects from "../../public/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="max-w-7xl mx-auto py-10 mt-5">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Projects</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-4">
        {projects.map((projects, idx) => {
          return <ProjectCard key={idx} projects={projects} className="" />;
        })}
      </div>
    </div>
  );
};

export default Projects;
