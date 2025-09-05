import React from "react";
import TitleText from "../components/TitleText";
import LargeTitleText from "../components/LargeTitleText";
import RegularText from "../components/RegularText";
import Button from "../components/Button";
import curve3 from "../assets/designs/curve3.svg";
import boxes from "../assets/designs/boxes.svg";
import fullLogo from "../assets/logo/full_logo.svg";

const PurposeContactFooter = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden">
      {/* Background SVG elements */}
      <div className="absolute top-0 left-0 w-full">
        <img src={curve3} alt="Curve Background" className="w-full h-auto" />
      </div>
      <div className="absolute top-0 right-0 w-full h-full">
        <img
          src={boxes}
          alt="Boxes Pattern"
          className="absolute right-0 top-1/4 w-1/4 h-auto opacity-30"
        />
      </div>

      {/* Purpose Section */}
      <div className="relative z-10 pt-28 mb-32 pb-16 px-4 md:px-16 lg:px-36  mx-auto">
        <div className="flex justify-center text-center space-y-2 items-center flex-col">
          <TitleText>OUR PURPOSE</TitleText>
          <LargeTitleText className="max-w-[748px]">
            Doors Shouldn't Be Closed to People Doing the Work
          </LargeTitleText>
        </div>

        <div className="text-center max-w-[709px] mt-5 flex flex-col space-y-3  mx-auto">
          <RegularText>
            Grant Propel was created to change who gets seen, supported, and
            funded. We're here for the people building something real — and
            we're building tools to get them the momentum they deserve.
          </RegularText>
          <RegularText className="mt-4">
            Whether you're just getting started or taking your work to the next
            level, we're in your corner.
          </RegularText>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 bg-dark-green py-16 px-4 md:px-16 lg:px-36">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <TitleText className="text-light-green">CONTACT</TitleText>
          </div>
          <div className="mb-6">
            <LargeTitleText className="text-white text-3xl md:text-4xl">
              Let's Get You Funded
            </LargeTitleText>
          </div>
          <div className="mb-8 max-w-2xl">
            <RegularText className="text-text-green-fade">
              Start your free trial and get matched with real opportunities that
              move your work forward. No stress. No confusion. Just momentum.
            </RegularText>
          </div>
          <Button className="bg-light-green text-dark-green px-8 py-3 rounded hover:bg-opacity-90 transition duration-300">
            Start Your Free Trial
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-dark-green border-t border-gray-800 py-10 px-4 md:px-16 lg:px-36">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <img src={fullLogo} alt="Grant Propel Logo" className="h-8" />
            </div>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-white hover:text-light-green transition duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-light-green transition duration-200"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-white hover:text-light-green transition duration-200"
              >
                Features
              </a>
              <a
                href="#"
                className="text-white hover:text-light-green transition duration-200"
              >
                Testimonials
              </a>
              <a
                href="#"
                className="text-white hover:text-light-green transition duration-200"
              >
                Pricing
              </a>
            </div>
            <div className="flex gap-4 mt-6 md:mt-0">
              <a
                href="#"
                className="text-white hover:text-light-green transition duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-light-green transition duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-light-green transition duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500">
            All Rights Reserved by Grant Propel. © 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurposeContactFooter;
