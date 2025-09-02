import Button from "../components/Button";
import Avatar from "../components/Avatar";
import BorderRadiusCard from "../components/BorderRadiusCard";

const defaultImg = "/images/image1.jpg";

const DiscoverSection = () => (
  <section className="w-full bg-white py-16 px-4 md:px-8">
    <div className="p-8 md:p-12 relative">
      {/* WHAT WE OFFER */}

      <BorderRadiusCard>

      </BorderRadiusCard>
      <div className="text-center mb-12">
        <span className="text-light-green text-sm font-semibold tracking-wide uppercase">
          WHAT WE OFFER
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-dark-green mt-2 mb-4">
          A Smarter Way to Discover Funding
        </h2>
        <p className="text-text-green-fade text-lg max-w-2xl mx-auto">
          We don't just list grants. We:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center text-center">
          <div className="w-[75px] h-[75px] mb-4">
            <img
              src="/icons/icon1.svg"
              alt="Match Icon"
              className="w-full h-full"
            />
          </div>
          <h4 className="font-semibold text-dark-green text-xl mb-3">Match</h4>
          <p className="text-text-green-fade">
            Match you with curated opportunities based on your sector, size, and
            eligibility.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center text-center">
          <div className="w-[75px] h-[75px] mb-4">
            <img
              src="/icons/icon2.svg"
              alt="Remind Icon"
              className="w-full h-full"
            />
          </div>
          <h4 className="font-semibold text-dark-green text-xl mb-3">Remind</h4>
          <p className="text-text-green-fade">
            Send you reminders before deadlines hit so you never miss out.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center text-center">
          <div className="w-[75px] h-[75px] mb-4">
            <img
              src="/icons/icon3.svg"
              alt="Update Icon"
              className="w-full h-full"
            />
          </div>
          <h4 className="font-semibold text-dark-green text-xl mb-3">Update</h4>
          <p className="text-text-green-fade">
            Keep you updated with fresh leads, insights, and helpful guidance.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center text-center">
          <div className="w-[75px] h-[75px] mb-4">
            <img
              src="/icons/icon4.svg"
              alt="Organize Icon"
              className="w-full h-full"
            />
          </div>
          <h4 className="font-semibold text-dark-green text-xl mb-3">
            Organize
          </h4>
          <p className="text-text-green-fade">
            Let you save and organize your favorites with ease.
          </p>
        </div>
      </div>

      {/* WHO IT'S FOR */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <span className="text-light-green text-sm font-semibold tracking-wide uppercase">
            WHO IT'S FOR
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-dark-green mt-2 mb-4">
            Built for Builders
          </h3>
          <p className="text-text-green-fade text-lg max-w-2xl mx-auto mb-8">
            Whether you're growing a movement, launching a project, or funding
            your education — Grant Propel is made for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Students */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src={defaultImg}
              alt="Students"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-dark-green text-xl">Students</h4>
                <span className="bg-light-green text-white rounded-full p-2">
                  🎓
                </span>
              </div>
              <p className="text-text-green-fade">
                Find scholarships and fellowships that actually apply to you.
              </p>
            </div>
          </div>

          {/* Researchers */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src={defaultImg}
              alt="Researchers"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-dark-green text-xl">
                  Researchers
                </h4>
                <span className="bg-light-green text-white rounded-full p-2">
                  🔬
                </span>
              </div>
              <p className="text-text-green-fade">
                Fuel your breakthroughs without wasting hours digging.
              </p>
            </div>
          </div>

          {/* Nonprofits */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src={defaultImg}
              alt="Nonprofits"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-dark-green text-xl">
                  Nonprofits
                </h4>
                <span className="bg-light-green text-white rounded-full p-2">
                  🤝
                </span>
              </div>
              <p className="text-text-green-fade">
                Power your programs with funding that aligns with your mission.
              </p>
            </div>
          </div>

          {/* Small Businesses */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src={defaultImg}
              alt="Small Businesses"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-dark-green text-xl">
                  Small Businesses
                </h4>
                <span className="bg-light-green text-white rounded-full p-2">
                  💼
                </span>
              </div>
              <p className="text-text-green-fade">
                Discover grants to grow your business, your team, or your
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHY WE'RE DIFFERENT */}
      <div className="bg-dark-green rounded-3xl p-8 md:p-12 text-white">
        <div className="text-center mb-10">
          <span className="text-light-green text-sm font-semibold tracking-wide uppercase">
            WHY WE'RE DIFFERENT
          </span>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            More Than a Database. A Partner.
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Other tools hand you a search bar and wish you luck. We're
            different:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0B2B23] rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="bg-[#1A3F37] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🤲</span>
            </div>
            <h4 className="font-bold text-xl mb-4">Human-Centered</h4>
            <p className="text-gray-300">
              Clear language, helpful filters, and support that meets you where
              you are.
            </p>
          </div>

          <div className="bg-[#0B2B23] rounded-2xl p-8 flex flex-col items-center text-center border-2 border-dashed border-light-green relative">
            <div className="absolute -top-3 right-6 bg-light-green text-dark-green text-xs font-bold px-3 py-1 rounded-full">
              Featured
            </div>
            <div className="bg-[#1A3F37] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🔄</span>
            </div>
            <h4 className="font-bold text-xl mb-4">Always Evolving</h4>
            <p className="text-gray-300">
              We add new opportunities weekly — and we actually explain them.
            </p>
          </div>

          <div className="bg-[#0B2B23] rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="bg-[#1A3F37] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🌱</span>
            </div>
            <h4 className="font-bold text-xl mb-4">Values-Driven</h4>
            <p className="text-gray-300">
              We prioritize access, clarity, and inclusion at every step.
            </p>
          </div>
        </div>

 
      </div>
    </div>
  </section>
);

export default DiscoverSection;
