import LandingLayout from "../layouts/LandingLayout";
import DiscoverSection from "../sections/DiscoverSection";
import Header from "../sections/Header";
import HeroHelp from "../sections/HeroHelp";

const Landing = () => {
  return (
    <LandingLayout>
      <div className="gap-0 border-0 bg-dark-green">
        <Header />
        <HeroHelp />
        <DiscoverSection />
      </div>
    </LandingLayout>
  );
};

export default Landing;
