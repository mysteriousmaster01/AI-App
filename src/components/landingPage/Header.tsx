import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Replacing useHistory with useNavigate
import { Menu, X } from "lucide-react"; // Optional: Install lucide-react for menu icon

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null); // No default active state for Home
  const location = useLocation();
  const navigate = useNavigate(); // Replacing useHistory with useNavigate

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Add Property", path: "/add-property" },
    { label: "View Properties", path: "/view-properties" },
  ];

  const handleNavClick = (item: string, path: string) => {
    if (item === "Home") {
      navigate("/"); // Navigate to Home using navigate
      setActiveNav("Home"); // Manually set Home as active
      window.location.reload(); // Reload the page when Home is clicked
    } else {
      setActiveNav(item);
      navigate(path); // Navigate to the other page
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    // Hide the scrollbar when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Re-enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure it is reset on unmount
    };
  }, [mobileMenuOpen]);

  return (
    <header className="w-full bg-transparent absolute top-0 left-0 right-0 z-50 shadow-none">
      <div className="flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2.5 text-2xl md:text-3xl text-white">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb0d165cdc3bec1dbc9a9f07b21fd25f08809764?placeholderIfAbsent=true&apiKey=6bc27b9e3f79437799c1e595bae0d18e"
            alt="RealEstate Hub Logo"
            className="object-contain w-8 md:w-9 aspect-square"
          />
          <h1 className="font-medium">RealEstate Hub</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center text-lg leading-loose text-white">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => handleNavClick(item.label, item.path)}
              className={`flex flex-col px-3 pt-4 whitespace-nowrap rounded-md cursor-pointer transition-colors duration-200 hover:bg-gray-50 ${
                activeNav === item.label ? "font-bold text-indigo-500" : ""
              }`}
            >
              <span>{item.label}</span>
              <div
                className={`flex shrink-0 mt-3 h-1 rounded-sm ${
                  activeNav === item.label ? "bg-indigo-500" : "bg-transparent"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="p-2 rounded-md lg:hidden z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={toggleMobileMenu}
        >
          <div
            className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-2.5 text-2xl text-black">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb0d165cdc3bec1dbc9a9f07b21fd25f08809764?placeholderIfAbsent=true&apiKey=6bc27b9e3f79437799c1e595bae0d18e"
                    alt="RealEstate Hub Logo"
                    className="object-contain w-8 aspect-square"
                  />
                  <h1 className="font-medium">RealEstate Hub</h1>
                </div>
              </div>

              <nav className="flex flex-col flex-grow p-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => handleNavClick(item.label, item.path)}
                    className={`py-4 border-b border-gray-100 cursor-pointer ${
                      activeNav === item.label ? "font-bold text-indigo-500" : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
