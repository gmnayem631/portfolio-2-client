import projects from "../../public/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="max-w-7xl mx-auto py-12 mt-5 px-4">
      <div className="text-center mb-10">
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{ fontFamily: "'PT Serif', serif" }}
        >
          Projects
        </h2>
        <span className="block w-12 h-1 bg-accent mx-auto mt-2 rounded-full" />
      </div>
      <div className="flex flex-col gap-5">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} projects={project} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
