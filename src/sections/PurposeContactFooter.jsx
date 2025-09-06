import React from "react";
import TitleText from "../components/TitleText";
import LargeTitleText from "../components/LargeTitleText";
import RegularText from "../components/RegularText";
import Button from "../components/Button";
import curve3 from "../assets/designs/curve3.svg";
import boxes from "../assets/designs/boxes.svg";
import fullLogo from "../assets/logo/full_logo.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const PurposeContactFooter = () => {
  return (
    <motion.div
      className="relative bg-white z-10 w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {/* Only keep the boxes background */}
      <motion.div
        className="absolute top-0 pointer-events-none right-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <motion.img
          src={boxes}
          alt="Boxes Pattern"
          className="w-[300px] absolute right-0 lg:right-[100px] top-3/6 h-[300px] text-light-green"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />
      </motion.div>

      {/* Purpose Section */}
      <motion.div
        className="relative z-10 pt-28 px-4 md:px-16 lg:px-36 mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="flex justify-center text-center space-y-2 items-center flex-col"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            <TitleText>OUR PURPOSE</TitleText>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <LargeTitleText className="max-w-[748px]">
              Doors Shouldn't Be Closed to People Doing the Work
            </LargeTitleText>
          </motion.div>
        </motion.div>

        {/* Reduce the bottom margin */}
        <motion.div
          className="text-center max-w-[709px] mt-5 mb-48 flex flex-col space-y-2 mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.25 }}
        >
          <RegularText>
            Grant Propel was created to change who gets seen, supported, and
            funded. We're here for the people building something real — and
            we're building tools to get them the momentum they deserve.
          </RegularText>
          <RegularText className="">
            Whether you're just getting started or taking your work to the next
            level, we're in your corner.
          </RegularText>
        </motion.div>
      </motion.div>

      {/* Contact Section with integrated curve */}
      <motion.div
        className="relative z-[-1] mt-[-300px] lg:mt-[-470px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        {/* Curve as part of contact section */}
        <div className="relative h-fit">
          <motion.img
            src={curve3}
            alt="Curve Background"
            className="w-full -mb-[50px] lg:mb-0 h-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />

          {/* Contact content positioned over the curve */}
          <motion.div
            className="lg:absolute -mt-[100px] lg:mt-0 bg-dark-green lg:bg-transparent min-h-fit left-0 top-[40%] sm:top-[45%] md:top-[50%] lg:top-[55%] w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="px-4 md:px-16 lg:px-36 mx-auto">
              <motion.div
                className="mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.25 }}
              >
                <TitleText className="text-light-green">CONTACT</TitleText>
              </motion.div>
              <motion.div
                className="mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <LargeTitleText className="text-white text-3xl md:text-4xl">
                  Let's Get You Funded
                </LargeTitleText>
              </motion.div>
              <motion.div
                className="mb-8 max-w-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.35 }}
              >
                <RegularText className="text-white">
                  Start your free trial and get matched with real opportunities
                  that move your work forward. No stress. No confusion. Just
                  momentum.
                </RegularText>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Button>Start Your Free Trial</Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="relative z-10 bg-dark-green pt-20 lg:pt-0 border-gray-800 py-10 px-4 md:px-16 lg:px-36"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="max-w-7xl px-6 py-6 rounded-2xl bg-white/5 flex align-middle items-center w-full mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex w-full flex-col lg:flex-row justify-between align-middle items-center">
            <motion.div
              className="mb-6 lg:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <img src={fullLogo} alt="Grant Propel Logo" className="h-8" />
            </motion.div>
            <motion.div
              className="flex sm:flex-row flex-col gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <motion.a
                whileHover={{ scale: 1.02, color: "#00A389" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                href="#"
                className="text-white hover:text-light-green transition duration-200"
              >
                Home
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02, color: "#00A389" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                href="#"
                className="text-white hover:text-light-green transition duration-200"
              >
                About Us
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02, color: "#00A389" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                href="#"
                className="text-white hover:text-light-green transition duration-200"
              >
                Features
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02, color: "#00A389" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                href="#"
                className="text-white hover:text-light-green transition duration-200"
              >
                Testimonials
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02, color: "#00A389" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                href="#"
                className="text-white hover:text-light-green transition duration-200"
              >
                Pricing
              </motion.a>
            </motion.div>
            <motion.div
              className="flex gap-4 mt-6 lg:mt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#00A389",
                  color: "#fff",
                  borderColor: "#00A389",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                href="#"
                className="text-white border border-white/10 p-3 rounded-full hover:text-light-green transition duration-200"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#00A389",
                  color: "#fff",
                  borderColor: "#00A389",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                href="#"
                className="text-white border border-white/10 p-3 rounded-full hover:text-light-green transition duration-200"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#00A389",
                  color: "#fff",
                  borderColor: "#00A389",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                href="#"
                className="text-white border border-white/10 p-3 rounded-full hover:text-light-green transition duration-200"
              >
                <FaLinkedinIn />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="flex mt-10 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <RegularText className="text-center text-[16px] text-sm text-white w-full">
            All Rights Reserved by Grant Propel. © {new Date().getFullYear()}
          </RegularText>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PurposeContactFooter;
