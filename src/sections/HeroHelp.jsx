import CurveSVG from "../assets/designs/curve1.svg";
import Avatar from "../components/Avatar";
import BoxesSvg from "../assets/designs/boxes.svg";
import Button from "../components/Button";
import HappyPeople from "../assets/designs/happy.png";
import Eclipse from "../components/Eclipse";
import TitleText from "../components/TitleText";
import LargeTitleText from "../components/LargeTitleText";
import RegularText from "../components/RegularText";
import { motion } from "motion/react";

const HeroHelp = () => {
  return (
    <div className="w-full relative">
      <section className="relative w-full h-[1160px] flex bg-dark-green overflow-hidden" id="home">
        <motion.div
          className="absolute -top-20 right-0 w-[400px] h-[400px] opacity-70"
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 0.7, rotate: 0 }}
          transition={{ duration: 0, delay: 0 }}
        >
          <motion.img
            src={BoxesSvg}
            alt="Boxes Pattern"
            className="w-[400px] h-[400px] text-light-green"
            transition={{
              duration: 0,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </motion.div>

        <motion.div
          className="absolute rotate-y-180 -left-10 w-[400px] h-[400px] opacity-70"
          style={{ top: "40%" }}
          initial={{ opacity: 0, rotate: 10 }}
          animate={{ opacity: 0.7, rotate: 0 }}
          transition={{ duration: 0, delay: 0 }}
        >
          <motion.img
            src={BoxesSvg}
            alt="Boxes Pattern"
            className="w-[400px] h-[400px] text-light-green"
            transition={{
              duration: 12,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Center circle with gradient and dashed border (responsive) */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px]"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="relative w-full h-full rounded-full flex items-center justify-center">
            <motion.div
              className="absolute rounded-full h-full w-full border border-dashed border-light-green opacity-10"
              style={{
                borderStyle: "dashed",
                borderWidth: "2px",
                borderColor: "#00CE67",
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 60,
                ease: "linear",
                repeat: Infinity,
              }}
            ></motion.div>
            <motion.div
              className="absolute rounded-full h-11/12 w-11/12 border border-dashed border-light-green opacity-40"
              style={{
                borderStyle: "dashed",
                borderWidth: "2px",
                borderColor: "#00CE67",
              }}
              animate={{ rotate: -360 }}
              transition={{
                duration: 70,
                ease: "linear",
                repeat: Infinity,
              }}
            ></motion.div>

            <Eclipse />
          </div>
        </motion.div>

        {/* Content */}
        <div className="container font-poppins mx-auto px-4 pt-24 pb-20 relative z-10 flex flex-col items-center h-full">
          <motion.div
            className="max-w-3xl absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              Your Mission Deserves Momentum
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl mb-10 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.2 }}
            >
              Whether you're driving change in your community, your field, or
              your future, Grant Propel helps you discover funding that fits —
              without the maze, the guesswork, or the stress.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button>Start Your Free Grant Discovery Trial</Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Curve SVG Transition - Fixed at bottom half of hero */}
        <motion.div
          className="absolute bottom-0 w-full xl:h-[70%] "
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <img
            src={CurveSVG}
            alt="Curve Design"
            className="w-full h-auto"
            style={{
              transform: "scale(1)",
              transformOrigin: "top center",
            }}
          />
        </motion.div>
      </section>

      {/* How We Help Section */}
      <section className="relative -mt-[100px] lg:-mt-[150px] xl:-mt-[100px] bg-transparent">
        {/* Content */}
        <div className="mx-auto px-4 md:px-20">
          <div className="grid md:grid-cols-2 gap-12 relative items-center">
            {/* Left Column */}
            <motion.div
              className="flex flex-col space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0 }}
              >
                <TitleText>HOW WE HELP</TitleText>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0 }}
              >
                <LargeTitleText>
                  Searching Shouldn't Slow You Down
                </LargeTitleText>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0 }}
              >
                <RegularText>
                  Finding the right grant shouldn't feel like chasing shadows.
                  With so many deadlines, fine print, and scattered sources,
                  it's easy to feel like the system's working against you —
                  especially when you're already managing the responsibilities
                  that move your mission forward.
                </RegularText>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0 }}
              >
                <RegularText className="text-text-green italic font-semibold">
                  We're here to fix that.
                </RegularText>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0 }}
              >
                <RegularText>
                  Grant Propel brings clarity, focus, and momentum to your
                  search — so you spend less time looking and more time moving
                  forward.
                </RegularText>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0 }}
            >
              <motion.img
                src={HappyPeople}
                alt="Team Meeting"
                className="w-full"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0 }}
              />
            </motion.div>

            {/* Floating avatars */}
            <motion.div
              className="flex absolute bottom-[30%] max-w-fit right-1/4 shadow-2xl bg-white rounded-md px-8 py-4 items-center mt-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0 }}
              whileHover={{
                y: -3,
                boxShadow: "0 15px 30px -8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((num, index) => (
                  <motion.div
                    key={num}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0, duration: 0 }}
                    whileHover={{ y: -2, zIndex: 10 }}
                  >
                    <Avatar
                      src={`/images/avatar${num}.png`}
                      alt={`Team member ${num}`}
                    />
                  </motion.div>
                ))}
              </div>
              <motion.span
                className="ml-4 text-sm max-w-50 text-dark-green font-bold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0 }}
              >
                More than 4000 people already joined
              </motion.span>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroHelp;
