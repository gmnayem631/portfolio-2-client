import { Typewriter } from "react-simple-typewriter";
import heroImg from "../assets/nayem.png";
import { BiSolidContact } from "react-icons/bi";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      id="home"
      className="max-w-7xl mx-auto py-10 mt-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12"
    >
      {/* Left content */}
      <div className="flex flex-col gap-5 justify-center text-center md:text-left">
        <h2 className="font-semibold text-3xl lg:text-5xl leading-tight">
          Hi, I'm Gulam Mustafa Nayem
        </h2>
        <p className="text-lg md:text-2xl">
          <Typewriter
            words={[
              " A Front-End Developer.",
              " Crafting Modern Web Experiences.",
              " Fond of Learning New Tech.",
            ]}
            loop={0}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
            cursorBlinking={true}
          />
          |
        </p>
        <p className="text-gray-600 md:text-lg mt-2 max-w-2xl">
          I build clean, responsive web applications using React and Tailwind,
          delivering seamless user experiences.
        </p>
        <div className="flex gap-5 text-3xl justify-center md:justify-start">
          <a
            href="http://linkedin.com/in/gulam-mustafa-nayem"
            target="_blank"
            className="ring-inset ring-2 p-2 rounded-2xl hover:bg-zinc-50"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="http://github.com/gmnayem631"
            target="_blank"
            className="ring-inset ring-2 p-2 rounded-2xl hover:bg-zinc-50"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/8801521759634"
            target="_blank"
            className="ring-inset ring-2 p-2 rounded-2xl hover:bg-zinc-50"
          >
            <FaWhatsapp />
          </a>
        </div>
        <div className="mt-4 flex justify-center md:justify-start">
          <button className="btn btn-primary btn-outline hover:text-white">
            <BiSolidContact />
            <a href="#contact">Get in Touch</a>
          </button>
        </div>
      </div>
      {/* Right content */}
      <div className="flex-1 flex justify-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl">
        <img
          src={heroImg}
          alt="Hero"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl h-auto object-contain rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;
