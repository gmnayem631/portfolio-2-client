import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
const socialLinks = [
  {
    href: "https://github.com/gmnayem631",
    icon: FaGithub,
    alt: "GitHub",
  },
  {
    href: "https://linkedin.com/in/gulam-mustafa-nayem",
    icon: FaLinkedinIn,
    alt: "LinkedIn",
  },
  {
    href: "https://wa.me/8801521759634",
    icon: FaWhatsapp,
    alt: "WhatsApp",
  },
];

const Contact = () => {
  console.log(socialLinks);

  return (
    <section id="contact" className="max-w-7xl mx-auto py-10">
      <div className="container grid lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col gap-3 my-auto">
          <h2 className="text-3xl font-semibold">Let's Connect</h2>
          <p className="max-w-2/3">
            Get in touch to bring your ideas to life with clean, responsive, and
            user-friendly web applications.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  alt={link.alt}
                  className="ring-inset ring-2 p-2 rounded-2xl hover:bg-zinc-50 active:bg-zinc-50/80"
                >
                  <Icon size={28} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <form
          action=""
          className="p-6 rounded-2xl flex flex-col gap-6 bg-gradient-to-r from-[#F5F7FA] via-[#E6ECFF] to-[#FDFBFF] text-text"
        >
          <div className="md:grid md:grid-cols-2 md:gap-4">
            {/* Name */}
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="mb-2 font-medium text-text">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="Your Full Name"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="mb-2 font-medium text-text">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="mb-2 font-medium text-text">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              required
              rows={5}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary text-white text-base cursor-pointer btn px-6 py-3 rounded-xl max-w-full shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
