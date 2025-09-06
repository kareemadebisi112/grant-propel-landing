import { useState } from "react";
import LogoSvg from "../assets/logo/logo.svg";
import Button from "../components/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation array to avoid repetition
  const navigationItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#pricing", label: "Pricing" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full font-poppins border-0 py-4 bg-dark-green text-white relative z-50">
      <div className="mx-auto max-w-8xl px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={LogoSvg} alt="Logo" className="w-auto h-6" />
          <span className="font-semibold text-lg">GRANT PROPEL</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden border border-white/10 rounded-md md:p-5 md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white hover:text-light-green"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button className="bg-white/5 text-white">Get Started Free</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 text-white focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <IoMdClose size={24} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out bg-dark-green absolute w-full left-0 shadow-lg ${
          isMenuOpen ? "top-full opacity-100" : "-top-[480px] opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 p-5 border-t border-white/10">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white hover:text-light-green py-2"
              onClick={toggleMenu}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <Button
              className="bg-white/5 text-white w-full"
              onClick={toggleMenu}
            >
              Get Started Free
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
