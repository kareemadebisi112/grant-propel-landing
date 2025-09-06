import LandingLayout from "../layouts/LandingLayout";
import DiscoverSection from "../sections/DiscoverSection";
import Header from "../sections/Header";
import HeroHelp from "../sections/HeroHelp";
import PricingSection from "../sections/Pricing";
import PurposeContactFooter from "../sections/PurposeContactFooter";

const Landing = () => {
  return (
    <LandingLayout>
      <div className="gap-0 border-0">
        <Header />
        <HeroHelp />
        <DiscoverSection />
        <PricingSection />
        <PurposeContactFooter />
      </div>
    </LandingLayout>
  );
};

export default Landing;
