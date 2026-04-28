import { BiSolidContact } from "react-icons/bi";
import logo from "../assets/logo.png";

const links = (
  <>
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#skills">Skills</a>
    </li>
    <li>
      <a href="#projects">Projects</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="bg-bg shadow-sm sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <a className="">
            <img src={logo} alt="" className="h-12 w-12 cursor-pointer" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">{links}</ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-30 mt-3 w-52 p-2"
            >
              {links}
            </ul>
          </div>
          <div className="flex justify-center md:justify-start">
            <button className="btn btn-primary hover:text-white">
              <BiSolidContact />
              <a
                href="http://linkedin.com/in/gulam-mustafa-nayem"
                target="_blank"
              >
                Connect
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
