import React from "react";


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky  top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">MyBrand</div>

        {/* Links */}
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="text-gray-600 hover:text-black transition">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-black transition">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-black transition">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-black transition">
            Contact
          </a>
        </div>

        {/* Button */}
        <div className="hidden md:block">
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
            Login
          </button>
        </div>

        {/* Mobile Menu Icon (not functional in this example) */}
        <div className="md:hidden">
          <button>
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
