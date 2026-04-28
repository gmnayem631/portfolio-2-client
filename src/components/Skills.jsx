import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiGithub,
  SiNextdotjs,
  SiDaisyui,
  SiReactrouter,
} from "react-icons/si";

const techStackIcons = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "DaisyUI", icon: SiDaisyui, color: "#FFD61C" },
  { name: "React Router", icon: SiReactrouter, color: "#CA4245" },
  { name: "Firebase Auth", icon: SiFirebase, color: "#FFCA28" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "JWT", icon: SiJsonwebtokens, color: "#000000" },
  { name: "GitHub", icon: SiGithub, color: "#000000" },
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto my-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Tech Stack
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {techStackIcons.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div
              key={idx}
              className="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl
                         bg-white border border-white/10
                         hover:border-white/20 hover:-translate-y-1
                         transition-all duration-300 ease-out overflow-hidden"
            >
              {/* accent bar */}
              <span
                className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-300 ease-out rounded-full"
                style={{ backgroundColor: tech.color }}
              />

              <Icon
                className="transition-transform duration-300 group-hover:scale-110"
                style={{ color: tech.color, fontSize: "2rem" }}
              />

              <span className="text-lg font-medium text-center leading-tight opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
