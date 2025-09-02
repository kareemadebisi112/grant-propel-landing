import CurveSVG from "../assets/designs/curve1.svg";
import Avatar from "../components/Avatar";
import BoxesSvg from "../assets/designs/boxes.svg";
import Button from "../components/Button";
import HappyPeople from "../assets/designs/happy.png";

const HeroHelp = () => {
  return (
    <div className="w-full relative">
      <section className="relative w-full h-svh flex  bg-dark-green overflow-hidden">
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] opacity-70">
          <img
            src={BoxesSvg}
            alt="Boxes Pattern"
            className="w-[400px] h-[400px] text-light-green"
          />
        </div>

        <div
          className="absolute rotate-y-180 -left-10 w-[400px] h-[400px] opacity-70"
          style={{ top: "40%" }}
        >
          <img
            src={BoxesSvg}
            alt="Boxes Pattern"
            className="w-[400px] h-[400px] text-light-green"
          />
        </div>

        {/* Center circle with gradient and dashed border (responsive) */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[500px] h-[500px] lg:w-[600px] lg:h-[600px]">
          <div className="relative w-full h-full rounded-full flex items-center justify-center">
            <div className="absolute rounded-full h-full w-full border border-dashed border-light-green opacity-10"></div>
            <div className="absolute rounded-full h-11/12 w-11/12 border border-dashed border-light-green opacity-40"></div>

            <div
              className="rounded-full w-10/12 h-10/12"
              style={{
                background:
                  "linear-gradient(209.96deg, rgba(0, 206, 103, 0.2) 13.02%, rgba(0, 206, 103, 0) 34.75%, rgba(0, 206, 103, 0) 58.59%, rgba(0, 206, 103, 0.2) 86.61%)",
              }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="container font-poppins mx-auto px-4 pt-24 pb-20 relative z-10 flex flex-col items-center h-full">
          <div className="max-w-3xl absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Mission Deserves Momentum
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-10 max-w-lg mx-auto">
              Whether you're driving change in your community, your field, or
              your future, Grant Propel helps you discover funding that fits —
              without the maze, the guesswork, or the stress.
            </p>
            <Button>Start Your Free Grant Discovery Trial</Button>
          </div>
        </div>

        {/* Curve SVG Transition */}
        <div className="absolute -bottom-70 w-full">
          <img
            src={CurveSVG}
            alt="Curve Design"
            className="w-full h-full object-cover"
            style={{
              transform: "scale(1.1)",
              transformOrigin: "center",
            }}
          />
        </div>
      </section>

      {/* Curve SVG Transition */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <img
          src={CurveSVG}
          alt="Curve Design"
          className="w-full h-full object-cover"
          style={{
            transform: "scale(1.1)",
            transformOrigin: "center",
          }}
        />
      </div> */}

      {/* How We Help Section */}
      <section className="relative  bg-white">
        {/* Content */}
        <div className="mx-auto px-4 md:px-20">
          <div className="grid md:grid-cols-2 gap-12 relative items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <span className="text-light-green font-medium">HOW WE HELP</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-green">
                Searching Shouldn't Slow You Down
              </h2>
              <p className="text-text-green-fade text-lg">
                Finding the right grant shouldn't feel like chasing shadows.
                With so many deadlines, fine print, and scattered sources, it's
                easy to feel like the system's working against you — especially
                when you're already managing the responsibilities that move your
                mission forward.
              </p>
              <p className="text-text-green font-semibold">
                We're here to fix that.
              </p>
              <p className="text-text-green-fade text-lg">
                Grant Propel brings clarity, focus, and momentum to your search
                — so you spend less time looking and more time moving forward.
              </p>
            </div>

            {/* Right Column */}
            <div className="relative">
              <img src={HappyPeople} alt="Team Meeting" className="w-full" />
            </div>

            {/* Floadting avatars */}

            <div className="flex absolute bottom-[30%] max-w-fit right-1/4 shadow-2xl  bg-white rounded-md px-8 py-4 items-center mt-8">
              <div className="flex -space-x-3">
                <Avatar src="/images/avatar1.png" alt="Team member" />
                <Avatar src="/images/avatar2.png" alt="Team member" />
                <Avatar src="/images/avatar3.png" alt="Team member" />
                <Avatar src="/images/avatar4.png" alt="Team member" />
              </div>
              <span className="ml-4 text-sm max-w-50 text-dark-green font-bold">
                More than 4000 people already joined
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroHelp;
