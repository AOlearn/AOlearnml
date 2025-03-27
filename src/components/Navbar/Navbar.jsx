import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from './Vector.png'

const navItems = [
    { label: "Learn", href: "https://docs.aolearn.tech" },
    { label: "Community", href: "https://docs.aolearn.tech" },
    { label: "Ecosystem", href: "#" },
    { label: "API", href: "#" },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-5 z-50 bg-white border border-blue-200 w-full max-w-5xl mx-auto shadow-md animate-fadeIn">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
      
      <div className="container mx-auto px-0">
        <div className="flex justify-between items-center py-3 px-6">
          <div className="flex items-center">
            <div className="bg-blue-50 p-2 mr-3 border-r-2 border-b-2 border-blue-200">
              <img className="h-[26px] w-auto" src={logo} alt="Logo" />
            </div>
            <span className="text-xl font-semibold text-dark border-b-2 border-blue-100 pb-1">
              AO | <span className="text-blue-600">Learn</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex">
            {navItems.map((item, index) => (
              <li key={index} className="group">
                <a 
                  href={item.href} 
                  className="block px-4 py-2 text-dark hover:text-blue-600 border-b-2 border-transparent hover:border-blue-500 transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center">
            <button className="px-4 py-2 text-blue-600 hover:text-blue-800 border-l border-blue-100 transition-colors duration-300">
              Sign In
            </button>
            <button className="ml-2 px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
              Get Started
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-dark p-2"
            onClick={toggleNavbar}
          >
            {mobileDrawerOpen ? 
              <X size={24} className="text-blue-600" /> : 
              <Menu size={24} className="text-blue-600" />
            }
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileDrawerOpen && (
          <div className="md:hidden animate-moveUp border-t border-blue-100">
            <ul className="flex flex-col">
              {navItems.map((item, index) => (
                <li key={index} className="border-b border-blue-50">
                  <a 
                    href={item.href} 
                    className="block py-3 px-6 text-dark hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-2 p-4 bg-blue-50 border-t border-blue-100">
              <button className="py-2 text-blue-600 hover:text-blue-800 bg-white border border-blue-200 transition-colors duration-300">
                Sign In
              </button>
              <button className="py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
