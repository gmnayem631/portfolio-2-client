import React from "react";
import { LuExternalLink } from "react-icons/lu";
import { SiGithub } from "react-icons/si";

const ProjectCard = ({ projects, index }) => {
  const { name, image, techStack, description, liveLink, githubLink } =
    projects;

  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="group relative flex flex-col md:flex-row overflow-hidden rounded-2xl border border-primary/10 bg-[#f5f2ea] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
      {/* Accent line */}
      <span className="absolute left-0 top-0 h-full w-1 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Image */}
      <div className="relative md:w-[340px] lg:w-[380px] overflow-hidden bg-[#d8d3c8] shrink-0">
        <img
          src={image}
          alt={name}
          className="h-[220px] md:h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-primary/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-white hover:text-primary"
          >
            View Live ↗
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col p-6 md:p-7">
        {/* Background Number */}
        <span className="pointer-events-none absolute right-5 top-3 select-none text-6xl font-bold leading-none text-primary/5">
          {num}
        </span>

        {/* Title */}
        <h3 className="relative z-10 text-2xl font-bold text-primary/90">
          {name}
        </h3>

        {/* Description */}
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text/75">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90"
          >
            <LuExternalLink size={15} />
            Live Demo
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary/5"
          >
            <SiGithub size={15} />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
