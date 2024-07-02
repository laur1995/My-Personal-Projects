import React, { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = ({ onSignInClick, onSignUpClick }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleMobileSignInClick = () => {
    toggleNavbar(); // Close the mobile drawer
    onSignInClick();
  };

  const handleMobileSignUpClick = () => {
    toggleNavbar(); // Close the mobile drawer
    onSignUpClick();
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setActiveDropdown(null);
    setMobileDrawerOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">Lao's world</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12" ref={dropdownRef}>
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <button
                  className="flex items-center"
                  onClick={() => toggleDropdown(index)}
                >
                  {item.label}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {activeDropdown === index && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-neutral-800 ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-700"
                          role="menuitem"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(dropdownItem.href);
                          }}
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-4 items-center">
            <button
              onClick={onSignInClick}
              className="py-2 px-4 border border-orange-500 rounded-md text-orange-500 transition-all duration-300 ease-in-out hover:bg-orange-500 hover:text-white"
            >
              Sign In
            </button>
            <button
              onClick={onSignUpClick}
              className="py-2 px-4 bg-orange-500 text-white rounded-md transition-all duration-300 ease-in-out hover:bg-white hover:text-orange-500"
            >
              Create an account
            </button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <button
                    className="flex items-center"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.label}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  {activeDropdown === index && (
                    <div className="mt-2">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block py-2 text-sm text-neutral-300 hover:text-white"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(dropdownItem.href);
                          }}
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-4 mt-6">
              <button
                onClick={handleMobileSignInClick}
                className="py-2 px-4 border border-orange-500 rounded-md text-orange-500 transition-all duration-300 ease-in-out hover:bg-orange-500 hover:text-white"
              >
                Sign In
              </button>
              <button
                onClick={handleMobileSignUpClick}
                className="py-2 px-4 bg-orange-500 text-white rounded-md transition-all duration-300 ease-in-out hover:bg-white hover:text-orange-500"
              >
                Create an account
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
