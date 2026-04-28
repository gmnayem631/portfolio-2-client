import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      icon: <FaGithub />,
      href: "https://github.com/gmnayem631",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/gmnayem631",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-zinc-200 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-primary">
              Gulam Mustafa Nayem
            </h2>
            <p className="text-sm text-base-content/60 mt-1">
              Frontend Developer
            </p>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-base-content/70">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-xl text-base-content/70">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="hover:text-primary transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-base-300 mt-8 pt-5 text-center text-xs text-base-content/50">
          © {currentYear} GM Nayem. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
