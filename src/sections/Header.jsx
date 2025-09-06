import { useState } from "react";
import LogoSvg from "../assets/logo/logo.svg";
import Button from "../components/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react";

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
    <motion.header
      className="w-full font-poppins border-0 py-4 bg-dark-green text-white relative z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <img src={LogoSvg} alt="Logo" className="w-auto h-6" />
          <span className="font-semibold text-lg">GRANT PROPEL</span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden border border-white/10 rounded-md md:p-5 md:flex items-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {navigationItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-white hover:text-light-green"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.1, color: "#00CE67" }}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.nav>

        {/* Desktop Button */}
        <motion.div
          className="hidden md:block"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <Button className="bg-white/5 text-white">Get Started Free</Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div
          className="md:hidden flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <motion.button
            onClick={toggleMenu}
            className="p-2 text-white focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <IoMdClose size={24} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden bg-dark-green absolute w-full left-0 shadow-lg`}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ top: "100%", overflow: "hidden" }}
      >
        <nav className="flex flex-col space-y-4 p-5 border-t border-white/10">
          {navigationItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-white hover:text-light-green py-2"
              onClick={toggleMenu}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: isMenuOpen ? 0 : -20, opacity: isMenuOpen ? 1 : 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.div
            className="pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: isMenuOpen ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <Button
              className="bg-white/5 text-white w-full"
              onClick={toggleMenu}
            >
              Get Started Free
            </Button>
          </motion.div>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;
