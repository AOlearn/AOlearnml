import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from './Vector.png'

const navItems = [
    { label: "Learn", href: "#" },
    { label: "Community", href: "#" },
    { label: "Ecosystem", href: "#" },
    { label: "API", href: "#" },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-5 z-50 py-3 px-4 bg-white border border-border w-full max-w-5xl mx-auto rounded-lg shadow-md animate-fadeIn">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img className="h-[30px] w-auto mr-3" src={logo} alt="Logo" />
            <span className="text-xl font-semibold text-dark">AO | Learn</span>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="text-dark hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-primary hover:text-primary-light transition-colors duration-300">
              Sign In
            </button>
            <button className="btn-primary">
              Get Started
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-dark p-2 rounded-md hover:bg-gray-100"
            onClick={toggleNavbar}
          >
            {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileDrawerOpen && (
          <div className="md:hidden mt-4 pb-4 animate-moveUp">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="block py-2 text-dark hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col space-y-3">
              <button className="w-full py-2 text-primary hover:text-primary-light transition-colors duration-300">
                Sign In
              </button>
              <button className="btn-primary w-full">
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
