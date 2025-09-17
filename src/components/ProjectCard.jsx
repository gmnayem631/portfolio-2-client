import React from "react";
import { LuExternalLink } from "react-icons/lu";
import { SiGithub } from "react-icons/si";

const ProjectCard = ({ projects }) => {
  const { name, image, techStack, description, liveLink, githubLink } =
    projects;

  return (
    <div className="relative p-6 rounded-2xl bg-gradient-to-r from-[#F5F7FA] via-[#E6ECFF] to-[#FDFBFF] text-text ring-1 ring-inset ring-zinc-200 shadow-md hover:shadow-xl transition-all duration-300 h-auto md:h-full">
      {/* Project Image */}
      <figure className="rounded-lg overflow-hidden group relative">
        <img src={image} alt={name} className="w-full h-52 object-cover" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <h3 className="text-xl font-bold text-white">
            <a href={liveLink} target="_blank">
              {name}
            </a>
          </h3>
        </div>
      </figure>

      {/* Content */}
      <div className="mt-4 flex flex-col gap-3">
        {/* Description */}
        <p className="text-sm text-text line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-[#ede9fe] to-[#dbeafe] text-[#4d2b91] font-medium shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <a
            href={liveLink}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white font-medium shadow-md transition"
          >
            <LuExternalLink size={18} />
            Live
          </a>
          <a
            href={githubLink}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white font-medium shadow-md transition"
          >
            <SiGithub size={18} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
