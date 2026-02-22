import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">

      {/* LEFT SIDE */}
      <div className="navbar-start">

        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>Projects</a></li>
          </ul>
        </div>

        {/* Logo */}
        <a className="btn btn-ghost text-xl font-bold">
          FYP<span className="text-orange-500">Solutions</span>
        </a>

      </div>

      {/* CENTER - Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">

          <li>
            <Link href="/" className="hover:text-orange-500 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="about" className="hover:text-orange-500 transition">
              About
            </Link>
          </li>

          <li>
            <Link href="/services" className="hover:text-orange-500 transition">
              Services
            </Link>
          </li>

          <li>
            <Link
              href="/projects"
              className="hover:text-orange-500 transition"
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end">
        <Link href="/contact" className="btn bg-orange-500 border-none hover:bg-orange-600 px-4 text-white">
          Contact Us
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
