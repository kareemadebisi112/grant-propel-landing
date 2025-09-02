import LogoSvg from "../assets/logo/logo.svg";
import Button from "../components/Button";

const Header = () => {
  return (
    <header className="w-full font-poppins border-0 py-4 bg-dark-green text-white">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between md:justify-around">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={LogoSvg} alt="Logo" className="w-auto h-6" />
          <span className="font-semibold text-lg">GRANT PROPEL</span>
        </div>

        {/* Navigation */}
        <nav className="hidden border border-white/10 rounded-md md:p-5 p-2  md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-light-green">
            Home
          </a>
          <a href="#about" className="text-white hover:text-light-green">
            About Us
          </a>
          <a href="#features" className="text-white hover:text-light-green">
            Features
          </a>
          <a href="#testimonials" className="text-white hover:text-light-green">
            Testimonials
          </a>
          <a href="#pricing" className="text-white hover:text-light-green">
            Pricing
          </a>
        </nav>

        <Button className="bg-white/5 text-white">Get Started Free</Button>
      </div>
    </header>
  );
};

export default Header;
