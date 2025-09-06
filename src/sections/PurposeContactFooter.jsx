import React from "react";
import TitleText from "../components/TitleText";
import LargeTitleText from "../components/LargeTitleText";
import RegularText from "../components/RegularText";
import Button from "../components/Button";
import curve3 from "../assets/designs/curve3.svg";
import boxes from "../assets/designs/boxes.svg";
import fullLogo from "../assets/logo/full_logo.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const PurposeContactFooter = () => {
  return (
    <div className="relative bg-white z-10 w-full overflow-hidden">
      {/* Only keep the boxes background, remove the absolute curve */}
      <div className="absolute top-0 right-0 w-full h-full">
        <img
          src={boxes}
          alt="Boxes Pattern"
          className="w-[300px] absolute right-0 lg:right-[100px] top-3/6  h-[300px] text-light-green"
        />
      </div>

      {/* Purpose Section */}
      <div className="relative z-10 pt-28 px-4 md:px-16 lg:px-36 mx-auto">
        <div className="flex justify-center text-center space-y-2 items-center flex-col">
          <TitleText>OUR PURPOSE</TitleText>
          <LargeTitleText className="max-w-[748px]">
            Doors Shouldn't Be Closed to People Doing the Work
          </LargeTitleText>
        </div>

        {/* Reduce the bottom margin */}
        <div className="text-center max-w-[709px] mt-5 mb-48 flex flex-col space-y-2 mx-auto">
          <RegularText>
            Grant Propel was created to change who gets seen, supported, and
            funded. We're here for the people building something real — and
            we're building tools to get them the momentum they deserve.
          </RegularText>
          <RegularText className="">
            Whether you're just getting started or taking your work to the next
            level, we're in your corner.
          </RegularText>
        </div>
      </div>

      {/* Contact Section with integrated curve */}
      <div className="relative z-[-1] mt-[-300px] lg:mt-[-470px]">
        {/* Curve as part of contact section */}
        <div className="relative h-fit">
          <img
            src={curve3}
            alt="Curve Background"
            className="w-full -mb-[50px] lg:mb-0 h-auto"
          />

          {/* Contact content positioned over the curve */}
          <div className="lg:absolute -mt-[100px] lg:mt-0 bg-dark-green lg:bg-transparent min-h-fit left-0 top-[40%] sm:top-[45%] md:top-[50%] lg:top-[55%] w-full">
            <div className="px-4 md:px-16 lg:px-36 mx-auto">
              <div className="mb-4">
                <TitleText className="text-light-green">CONTACT</TitleText>
              </div>
              <div className="mb-6">
                <LargeTitleText className="text-white text-3xl md:text-4xl">
                  Let's Get You Funded
                </LargeTitleText>
              </div>
              <div className="mb-8 max-w-2xl">
                <RegularText className="text-white">
                  Start your free trial and get matched with real opportunities
                  that move your work forward. No stress. No confusion. Just
                  momentum.
                </RegularText>
              </div>
              <Button className="bg-light-green text-dark-green px-8 py-3 rounded hover:bg-opacity-90 transition duration-300">
                Start Your Free Trial
              </Button>
            </div>
          </div>
        </div>

        {/* Extra padding div to ensure proper spacing */}
        {/* <div className="bg-dark-green h-32 lg:h-40"></div> */}
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-dark-green pt-20 lg:pt-0 border-gray-800 py-10 px-4 md:px-16 lg:px-36">
        <div className="max-w-7xl px-6 py-6 rounded-2xl bg-white/5 flex align-middle items-center w-full mx-auto">
          <div className="flex w-full flex-col lg:flex-row justify-between align-middle items-center">
            <div className="mb-6 lg:mb-0">
              <img src={fullLogo} alt="Grant Propel Logo" className="h-8" />
            </div>
            <div className="flex sm:flex-row flex-col gap-8">
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
            <div className="flex gap-4 mt-6 lg:mt-0">
              <a
                href="#"
                className="text-white border border-white/10 p-3 rounded-full hover:text-light-green transition duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white border border-white/10 p-3 rounded-full hover:text-light-green transition duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-white border border-white/10 p-3 rounded-full hover:text-light-green transition duration-200"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="flex mt-10 justify-center">
          <RegularText className="text-center text-[16px] text-sm text-white w-full">
            All Rights Reserved by Grant Propel. © 2025
          </RegularText>
        </div>
      </div>
    </div>
  );
};

export default PurposeContactFooter;
