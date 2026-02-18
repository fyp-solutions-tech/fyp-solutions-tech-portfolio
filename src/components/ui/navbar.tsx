import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-neutral/95 backdrop-blur-md border-b border-base-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="navbar h-20">
          <div className="flex-1">
            <h1 className="text-2xl font-bold tracking-wide">
              FYP<span className="text-orange-500">Solutions</span>
            </h1>
          </div>

          <div className="hidden lg:flex gap-10 text-gray-300 font-medium">
            <Link href="/services" className="hover:text-orange-500 transition">
              Services
            </Link>
            <Link href="/about" className="hover:text-orange-500 transition">
              About
            </Link>
            <Link href="/projects" className="hover:text-orange-500 transition">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-orange-500 transition">
              Contact
            </Link>
          </div>

          <div className="flex-none ml-6">
            <button className="btn bg-orange-500 border-none hover:bg-orange-600 px-6">
              Hire Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
