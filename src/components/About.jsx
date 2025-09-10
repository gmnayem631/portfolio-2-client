import Lottie from "lottie-react";
import developerAnimation from "../../public/yoga-developer.json";

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Image */}
        <div className="flex justify-center">
          <Lottie animationData={developerAnimation} loop={true}></Lottie>
        </div>

        {/* Right - Text */}
        <div className="flex flex-col gap-5">
          <p className="text-lg text-text">
            I’m Gulam Mustafa Nayem, a Front-End Developer passionate about
            crafting clean, modern, and responsive web applications. With React
            and Tailwind, I deliver intuitive interfaces and seamless user
            experiences.
          </p>

          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-accent">🚀</span> Strong in React & Tailwind
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent">🔧</span> Experience with Firebase &
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent">🎨</span> Focus on responsive,
              user-centered design
            </li>
          </ul>

          <button className="bg-primary text-white px-6 py-2 rounded-2xl hover:bg-accent transition-colors w-fit">
            Let’s Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
