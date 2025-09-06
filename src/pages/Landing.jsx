import LandingLayout from "../layouts/LandingLayout";
import DiscoverSection from "../sections/DiscoverSection";
import Header from "../sections/Header";
import HeroHelp from "../sections/HeroHelp";
import PricingSection from "../sections/Pricing";
import PurposeContactFooter from "../sections/PurposeContactFooter";
import { motion } from "motion/react";

const Landing = () => {
  return (
    <LandingLayout>
      <motion.div
        className="gap-0 border-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <HeroHelp />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        ></motion.div>
        <DiscoverSection />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <PricingSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <PurposeContactFooter />
        </motion.div>
      </motion.div>
    </LandingLayout>
  );
};

export default Landing;
