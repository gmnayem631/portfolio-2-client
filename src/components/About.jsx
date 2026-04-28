import Lottie from "lottie-react";
import developerAnimation from "../../public/yoga-developer.json";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-bg py-16 px-6">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        About Me
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Lottie Animation */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl shadow-lg p-6 border-2 border-primary/20"
          >
            <Lottie
              animationData={developerAnimation}
              loop={true}
              className="w-64 md:w-80 lg:w-[28rem]"
            />
          </motion.div>
        </div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-bg rounded-2xl shadow-xl p-8 border-l-4 border-primary flex flex-col gap-6"
        >
          <p className="text-lg leading-relaxed">
            I'm a <span className="font-semibold">Front-End Developer</span> who
            enjoys turning ideas into interfaces that actually feel good to use.
            I work mainly with <span className="font-semibold">React</span> and{" "}
            <span className="font-semibold">Tailwind CSS</span>, and I've been
            pushing into full-stack development with{" "}
            <span className="font-semibold">Express.js</span> and{" "}
            <span className="font-semibold">REST APIs.</span> I can build and
            connect both ends of an app.
          </p>

          <p className="text-lg leading-relaxed">
            I've been exploring <span className="font-semibold">Next.js</span>{" "}
            on the side and genuinely enjoy it; it's where I'm headed next.
            Right now React is my comfort zone, and I'm working on making
            Next.js the same.
          </p>

          <p className="text-lg leading-relaxed">
            Outside of coding, I'm a competitive chess player with a FIDE rapid
            rating of <span className="font-semibold">1623</span>, a game that
            keeps me sharp and honest about how much there still is to learn.
          </p>

          {/* Button */}
          <button className="cursor-pointer mt-4 bg-primary text-white px-6 py-3 rounded-xl transition-colors w-fit shadow-md font-medium">
            <a
              href="https://linkedin.com/in/gulam-mustafa-nayem"
              target="_blank"
            >
              Let’s Connect
            </a>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
