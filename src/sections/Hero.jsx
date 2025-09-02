import BoxesSvg from "../assets/designs/boxes.svg";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center bg-dark-green overflow-hidden">
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[500px] h-[500px] lg:w-[600px] lg:h-[600px]">
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
      <div className="container font-poppins mx-auto px-4 pt-24 pb-20 relative z-10 flex flex-col items-center justify-center h-full">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your Mission Deserves Momentum
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-10 max-w-lg mx-auto">
            Whether you're driving change in your community, your field, or your
            future, Grant Propel helps you discover funding that fits — without
            the maze, the guesswork, or the stress.
          </p>
          <Button>Start Your Free Grant Discovery Trial</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
