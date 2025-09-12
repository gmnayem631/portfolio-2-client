import projects from "../../public/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 mt-5">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-10 grid grid-cols-3 gap-3">
        {projects.map((projects, idx) => {
          return <ProjectCard key={idx} projects={projects} className="" />;
        })}
      </div>
    </div>
  );
};

export default Projects;
