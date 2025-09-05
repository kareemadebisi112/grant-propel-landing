import Button from "../components/Button";
import Avatar from "../components/Avatar";
import BorderRadiusCard from "../components/BorderRadiusCard";
import TitleText from "../components/TitleText";
import LargeTitleText from "../components/LargeTitleText";
import RegularText from "../components/RegularText";
import MediumText from "../components/MediumText";

const defaultImg = "/images/image1.jpg";

const offer = [
  {
    image: "/icons/icon1.svg",
    description:
      "Match you with curated opportunities based on your sector, size, and eligibility.",
  },
  {
    image: "/icons/icon2.svg",
    description:
      "Send you reminders before deadlines hit so you never miss out.",
  },
  {
    image: "/icons/icon3.svg",
    description:
      "Keep you updated with fresh leads, insights, and helpful guidance.",
  },
  {
    image: "/icons/icon4.svg",
    description: "Let you save and organize your favorites with ease.",
  },
];

const whyDifferentCards = [
  {
    icon: "/icons/icon9.svg",
    iconAlt: "human-icon",
    title: "Human-Centered",
    description:
      "Clear language, helpful filters, and support that meets you where you are.",
  },
  {
    icon: "/icons/icon10.svg",
    iconAlt: "always-evolving-icon",
    title: "Always Evolving",
    description:
      "We add new opportunities weekly — and we actually explain them.",
    cardClass:
      "p-5 border-3 border-dashed border-white/5 rounded-2xl flex flex-col items-center",
  },
  {
    icon: "/icons/icon11.svg",
    iconAlt: "values-driven-icon",
    title: "Values-Driven",
    description: "We prioritize access, clarity, and inclusion at every step.",
  },
];

const DiscoverSection = () => (
  <section className="w-full bg-white py-16">
    <div className="p-4 md:p-8 relative">
      {/* WHAT WE OFFER */}

      <BorderRadiusCard
        className="bg-light-gray border px-10 py-20"
        style={{
          borderStyle: "dashed",
          borderWidth: "2px",
          borderColor: "#003A2F",
        }}
      >
        <div className="flex flex-col">
          <div className=" flex flex-col space-y-4 items-center text-center">
            <TitleText>WHAT WE OFFER</TitleText>

            <LargeTitleText>A Smarter Way to Discover Funding</LargeTitleText>

            <RegularText>We don't just list grants. We:</RegularText>
          </div>

          <div className="grid grid-cols-1 md:mt-10 md:grid-cols-2 gap-3 lg:gap-0 lg:grid-cols-4 mb-16">
            {offer.map((item, index) => {
              let borderClass = "p-6 flex flex-col items-start text-start";
              // 1 column: border-bottom except last
              if (index !== offer.length - 1) {
                borderClass += " border-b border-border-gray";
              }
              // 2 columns: only first two get md:border-b
              if (index < offer.length - 2) {
                borderClass += " md:border-b md:border-border-gray";
              } else {
                borderClass += " md:border-b-0";
              }
              // Remove bottom border for all items at lg breakpoint
              borderClass += " lg:border-b-0";
              // 4 columns: border-right except last one
              if (index !== offer.length - 1) {
                borderClass += " lg:border-r lg:border-border-gray";
              }
              return (
                <div key={index} className={borderClass}>
                  <div className="w-[75px] h-[75px] mb-4">
                    <img
                      src={item.image}
                      alt={`Icon ${index + 1}`}
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-dark-green text-xl font-medium font-poppins">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </BorderRadiusCard>

      {/* WHO IT'S FOR */}
      <div className="py-20 px-4 md:px-10 lg:px-20">
        <div className="flex">
          <div className="text-start flex space-y-4 flex-col mb-10">
            <TitleText>WHO IT'S FOR</TitleText>
            <LargeTitleText>Built for Builders</LargeTitleText>
            <RegularText className="max-w-xl">
              Whether you're growing a movement, launching a project, or funding
              your education — Grant Propel is made for you.
            </RegularText>
          </div>
        </div>

        <div className="grid grid-cols-1 space-y-10 mt-4 md:grid-cols-2 gap-8">
          {[
            {
              image: "/images/image1.jpg",
              icon: "/icons/icon5.svg",
              title: "Students",
              description:
                "Find scholarships and fellowships that actually apply to you.",
              iconAlt: "Students",
            },
            {
              image: "/images/image2.jpg",
              icon: "/icons/icon6.svg",
              title: "Researchers",
              description:
                "Fuel your breakthroughs without wasting hours digging.",
              iconAlt: "Researchers",
            },
            {
              image: "/images/image3.jpg",
              icon: "/icons/icon7.svg",
              title: "Nonprofits",
              description:
                "Power your programs with funding that aligns with your mission.",
              iconAlt: "Nonprofits",
            },
            {
              image: "/images/image4.jpg",
              icon: "/icons/icon8.svg",
              title: "Small Businesses",
              description:
                "Discover grants to grow your business, your team, or your impact.",
              iconAlt: "Small Businesses",
            },
          ].map((card, idx) => (
            <div key={card.title} className="h-fit overflow-hidden relative">
              <div className="relative aspect-[592/287]">
                <svg
                  viewBox="0 0 592 287"
                  className="w-full h-full"
                  style={{ display: "block" }}
                >
                  <defs>
                    <clipPath
                      id={`curve-clip-${idx}`}
                      clipPathUnits="userSpaceOnUse"
                    >
                      <path d="M572 0C583.046 0 592 8.95431 592 20V181.06C592 192.105 583.046 201.06 572 201.06H530C518.954 201.06 510 210.014 510 221.06V267C510 278.046 501.046 287 490 287H20C8.95431 287 0 278.046 0 267V20C1.03081e-06 8.95431 8.95431 3.09264e-06 20 0H572Z" />
                    </clipPath>
                  </defs>
                  <image
                    href={card.image}
                    width="592"
                    height="287"
                    clipPath={`url(#curve-clip-${idx})`}
                    preserveAspectRatio="none"
                  />
                </svg>

                <img
                  src={card.icon}
                  alt={card.iconAlt}
                  className="lg:w-16 lg:h-16 w-10 h-10 absolute right-0 bottom-0 z-40 object-cover"
                />
              </div>
              <div className="mt-4 flex flex-col">
                <MediumText>{card.title}</MediumText>
                <RegularText className="max-w-[397px]">
                  {card.description}
                </RegularText>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY WE'RE DIFFERENT */}
      <BorderRadiusCard className=" bg-mid-green px-2 md:px-5 lg:px-10 py-20 ">
        <div className="text-center flex space-y-4 flex-col mb-10">
          <TitleText>WHY WE'RE DIFFERENT</TitleText>

          <LargeTitleText className="text-white">
            More Than a Database. A Partner.
          </LargeTitleText>

          <RegularText className="text-white">
            Other tools hand you a search bar and wish you luck. We're
            different:
          </RegularText>
        </div>

        <div className="grid px-2 md:px-5 lg:px-10  grid-cols-1 lg:grid-cols-3 gap-6">
          {whyDifferentCards.map((item, idx) => (
            <div
              key={idx}
              className={
                idx === 1
                  ? "p-5 border-3 border-dashed border-white/5 rounded-2xl flex flex-col items-center"
                  : "p-5 rounded-2xl flex flex-col items-center"
              }
            >
              <div className="bg-white/5 min-h-[300px] w-full rounded-2xl p-8 flex flex-col items-start text-start">
                <img
                  src={item.icon}
                  alt={item.iconAlt}
                  className="w-16 h-16 object-cover"
                />
                <MediumText className="text-[22px] mt-7 text-white">
                  {item.title}
                </MediumText>
                <RegularText className="mt-2 text-white">
                  {item.description}
                </RegularText>
              </div>
            </div>
          ))}
        </div>
      </BorderRadiusCard>
    </div>
  </section>
);

export default DiscoverSection;
