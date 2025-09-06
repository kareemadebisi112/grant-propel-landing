import LandingLayout from "../layouts/LandingLayout";
import DiscoverSection from "../sections/DiscoverSection";
import Header from "../sections/Header";
import HeroHelp from "../sections/HeroHelp";
import PricingSection from "../sections/Pricing";
import PurposeContactFooter from "../sections/PurposeContactFooter";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <LandingLayout>
      <motion.div
        className="gap-0 border-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <HeroHelp />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        ></motion.div>
        <DiscoverSection />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <PricingSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <PurposeContactFooter />
        </motion.div>
      </motion.div>
    </LandingLayout>
  );
};

export default Landing;
