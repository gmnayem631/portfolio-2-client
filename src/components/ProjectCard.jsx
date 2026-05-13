import React from "react";
import { LuExternalLink } from "react-icons/lu";
import { SiGithub } from "react-icons/si";

const ProjectCard = ({ projects, index }) => {
  const { name, image, techStack, description, liveLink, githubLink } =
    projects;
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="group grid grid-cols-[220px_1fr] rounded-xl overflow-hidden border border-primary/10 bg-[#f5f2ea] hover:-translate-y-0.5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 relative">
      {/* Hover accent bar */}
      <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-l-xl" />

      {/* Image */}
      <div className="relative overflow-hidden bg-[#d8d3c8]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="text-bg italic text-sm"
            style={{ fontFamily: "'PT Serif', serif" }}
          >
            View Live ↗
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-5 flex flex-col gap-2">
        {/* Faint number */}
        <span
          className="absolute top-2 right-3 text-4xl font-bold text-primary/10 leading-none pointer-events-none select-none"
          style={{ fontFamily: "'PT Serif', serif" }}
        >
          {num}
        </span>

        <h3
          className="text-lg font-bold text-primary/90 leading-snug"
          style={{ fontFamily: "'PT Serif', serif" }}
        >
          {name}
        </h3>

        <p className="text-xs text-text/70 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="text-[0.65rem] font-semibold px-2.5 py-0.5 rounded-full border border-primary/25 text-primary bg-primary/5 uppercase tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto pt-2">
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-primary text-bg text-xs font-semibold tracking-wide hover:bg-primary/80 transition-colors"
          >
            <LuExternalLink size={13} />
            Live
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-primary text-primary text-xs font-semibold tracking-wide hover:bg-primary/8 transition-colors"
          >
            <SiGithub size={13} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
