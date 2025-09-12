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
  SiNodedotjs,
  SiVercel,
  SiGithub,
  SiNextdotjs,
  SiPython,
  SiWordpress,
  SiDaisyui,
  SiReactrouter,
  SiElementor,
} from "react-icons/si";

const techStackIcons = [
  {
    category: "Frontend",
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    category: "Frontend",
    name: "CSS3",
    icon: SiCss3,
    color: "#1572B6",
  },
  {
    category: "Frontend",
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    category: "Frontend",
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    category: "Frontend",
    name: "DaisyUI",
    icon: SiDaisyui,
    color: "#FFD61C",
  },
  {
    category: "Frontend",
    name: "React JS",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    category: "Frontend",
    name: "React Router",
    icon: SiReactrouter,
    color: "#CA4245",
  },
  {
    category: "Frontend",
    name: "Firebase Auth",
    icon: SiFirebase,
    color: "#FFCA28",
  },
  {
    category: "Backend",
    name: "Express JS",
    icon: SiExpress,
    color: "#000000",
  },
  {
    category: "Backend",
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    category: "Backend",
    name: "Node JS",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    category: "Tools & Platforms",
    name: "Vercel",
    icon: SiVercel,
    color: "#000000",
  },
  {
    category: "Tools & Platforms",
    name: "GitHub",
    icon: SiGithub,
    color: "#000000",
  },

  {
    category: "Familiar with",
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    category: "Familiar with",
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    category: "Familiar with",
    name: "WordPress",
    icon: SiWordpress,
    color: "#21759B",
  },
  {
    category: "Familiar with",
    name: "Elementor",
    icon: SiElementor,
    color: "#92003B",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="max-w-7xl mx-auto my-5 py-10 px-4">
      <div className="w-full h-full">
        {/* Gradient heading but lightened */}
        <h2 className="text-3xl font-bold mb-10">Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {techStackIcons.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r from-[#F5F7FA] via-[#E6ECFF] to-[#FDFBFF] text-gray-800"
              >
                <Icon style={{ color: tech.color, fontSize: "2.5rem" }} />
                <span className="font-semibold">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
